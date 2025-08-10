
"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { X, CornerDownLeft, Loader2, Maximize, Minimize, Paperclip, Volume2, FileImage, Mic, MicOff } from 'lucide-react';
import { useChatbot } from '@/hooks/use-chatbot';
import { chat, type ChatInput, type ChatOutput, type ProposalDetails } from '@/ai/flows/chat-flow';
import { tts, type TtsInput } from '@/ai/flows/tts-flow';
import { stt } from '@/ai/flows/stt-flow';
import { useToast } from '@/hooks/use-toast';
import ProposalCard from './proposal-card';

interface Message {
  text?: string;
  proposal?: ProposalDetails;
  options?: string[];
  sender: 'user' | 'bot';
  audioUrl?: string;
  isSpeaking?: boolean;
  attachmentPreview?: { dataUri: string; name: string; type: string };
}

const Chatbot: React.FC = () => {
  const { isOpen, closeChatbot } = useChatbot();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isMaximized, setIsMaximized] = useState(false);
  const [attachment, setAttachment] = useState<{ dataUri: string; name: string; type: string } | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const chatbotRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const sendInitialMessage = async () => {
        setIsLoading(true);
        try {
          const response = await chat({ message: "Hello", history: [] });
          const botMessage: Message = {
            sender: 'bot',
            text: response.message,
            proposal: response.proposal,
            options: response.options
          };
          setMessages([botMessage]);
        } catch (error) {
          console.error("Error fetching initial message:", error);
          setMessages([{ text: "Sorry, I'm having trouble connecting. Please try again later.", sender: 'bot' }]);
        } finally {
          setIsLoading(false);
        }
      }
      sendInitialMessage();
    }
  }, [isOpen, messages.length]);
  
  useEffect(() => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTo({ top: viewport.scrollHeight, behavior: 'smooth' });
        }
    }
  }, [messages, isLoading]);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        const dataUri = loadEvent.target?.result as string;
        setAttachment({ dataUri, name: file.name, type: file.type });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendMessage = async (e: React.FormEvent | null, predefinedMessage?: string) => {
    e?.preventDefault();
    const messageToSend = predefinedMessage || input;
    if ((!messageToSend.trim() && !attachment) || isLoading) return;

    const userMessage: Message = { 
      text: messageToSend, 
      sender: 'user',
      attachmentPreview: attachment ? { ...attachment } : undefined
    };
    const newMessages: Message[] = [...messages, userMessage];
    setMessages(newMessages.map(m => ({ ...m, options: undefined }))); 

    const history = newMessages.filter(m => m.text).map(msg => ({
        role: msg.sender === 'user' ? 'user' as const : 'model' as const,
        content: [{ text: msg.text || '' }]
    }));

    const chatInputPayload: ChatInput = { 
        message: messageToSend,
        history: history,
     };

    if (attachment) {
        chatInputPayload.attachmentDataUri = attachment.dataUri;
    }

    setInput('');
    setAttachment(null);
    setIsLoading(true);

    try {
      const response = await chat(chatInputPayload);
      const botMessage: Message = {
        sender: 'bot',
        text: response.message,
        proposal: response.proposal,
        options: response.options
      };
      setMessages([...newMessages, botMessage]);
    } catch (error) {
      console.error("Error chatting with AI:", error);
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      setMessages([...newMessages, { text: `Sorry, an error occurred: ${errorMessage}`, sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handlePlayAudio = async (index: number) => {
    const message = messages[index];
    if (!message.text) return;

    if (message.isSpeaking && audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setMessages(currentMessages => currentMessages.map((m, i) => i === index ? { ...m, isSpeaking: false } : m));
        return;
    }

    // Stop any other audio that might be playing
    if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setMessages(currentMessages => currentMessages.map(m => ({ ...m, isSpeaking: false })));
    }


    if (message.audioUrl) {
      playAudio(message.audioUrl, index);
    } else {
      setIsLoading(true);
      try {
        const audioResponse = await tts({ text: message.text });
        if(audioResponse.audioDataUri) {
          setMessages(currentMessages => currentMessages.map((m, i) => i === index ? { ...m, audioUrl: audioResponse.audioDataUri } : m));
          playAudio(audioResponse.audioDataUri, index);
        }
      } catch (error) {
        console.error("Error with TTS:", error);
         toast({
            variant: "destructive",
            title: "Text-to-Speech Error",
            description: "Could not generate audio for this message.",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const playAudio = (url: string, index: number) => {
    if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.play().catch(e => console.error("Error playing audio:", e));
        setMessages(currentMessages => currentMessages.map((m, i) => ({ ...m, isSpeaking: i === index })));
        audioRef.current.onended = () => {
            setMessages(currentMessages => currentMessages.map((m, i) => i === index ? { ...m, isSpeaking: false } : m));
        };
    }
  }


  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMaximized || !(e.target as HTMLElement).classList.contains('cursor-grab')) return;
    setIsDragging(true);
    if (chatbotRef.current) {
        const rect = chatbotRef.current.getBoundingClientRect();
        setDragStart({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && !isMaximized) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMicToggle = async () => {
    if (isRecording) {
      mediaRecorderRef.current?.stop();
      setIsRecording(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream, { mimeType: 'audio/webm' });
        audioChunksRef.current = [];

        mediaRecorderRef.current.ondataavailable = (event) => {
          audioChunksRef.current.push(event.data);
        };

        mediaRecorderRef.current.onstop = async () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
          const reader = new FileReader();
          reader.readAsDataURL(audioBlob);
          reader.onloadend = async () => {
            const base64Audio = reader.result as string;
            setIsLoading(true);
            try {
              const { transcription } = await stt({ audioDataUri: base64Audio });
              if (transcription) {
                await handleSendMessage(null, transcription);
              } else {
                toast({
                  variant: "destructive",
                  title: "Transcription Failed",
                  description: "Could not understand the audio. Please try again.",
                });
              }
            } catch (err) {
               console.error("Error with speech-to-text:", err);
               toast({
                  variant: "destructive",
                  title: "Transcription Error",
                  description: "An error occurred during transcription.",
                });
            } finally {
              setIsLoading(false);
            }
          };
          stream.getTracks().forEach(track => track.stop());
        };

        mediaRecorderRef.current.start();
        setIsRecording(true);
      } catch (err) {
        console.error("Error accessing microphone:", err);
        toast({
          variant: "destructive",
          title: "Microphone Access Denied",
          description: "Please enable microphone permissions in your browser settings.",
        });
      }
    }
  };
  
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);


  if (!isOpen) return null;

  return (
    <div
      ref={chatbotRef}
      className={`fixed bg-card border border-border rounded-lg shadow-2xl flex flex-col transition-all duration-300 ease-in-out z-50 ${isMaximized ? 'w-full h-full top-0 left-0 bottom-0 right-0 rounded-none' : 'w-[400px] h-[600px] bottom-5 right-5'}`}
      style={!isMaximized ? { transform: `translate(${position.x}px, ${position.y}px)` } : {}}
    >
      <div
        className="flex items-center justify-between p-3 border-b border-border bg-muted/40 cursor-grab"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2">
          <Image src="/images/profile2.png" alt="GDMegh" width={32} height={32} className="rounded-full" />
          <h3 className="font-bold text-foreground">AI Megh</h3>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsMaximized(!isMaximized)}>
            {isMaximized ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={closeChatbot}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div key={index}>
              <div className={`group flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                 {msg.sender === 'user' && msg.text && (
                  <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => handlePlayAudio(index)} disabled={isLoading || msg.isSpeaking}>
                    <Volume2 className={`w-4 h-4 ${msg.isSpeaking ? 'text-primary animate-pulse' : ''}`} />
                  </Button>
                )}
                {msg.sender === 'bot' && <Image src="/images/profile2.png" alt="Bot" width={24} height={24} className="rounded-full self-start" />}
                <div className={`rounded-lg px-3 py-2 max-w-[85%] text-sm ${msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  
                   {msg.attachmentPreview && (
                    <div className="mb-2">
                      {msg.attachmentPreview.type.startsWith('image/') ? (
                         <Image 
                          src={msg.attachmentPreview.dataUri} 
                          alt={msg.attachmentPreview.name} 
                          width={200} 
                          height={200}
                          className="rounded-md object-cover"
                        />
                      ) : (
                        <div className="flex items-center gap-2 p-2 rounded-md bg-background/50 text-sm">
                            <FileImage className="w-6 h-6 flex-shrink-0" />
                            <span className="truncate flex-1">{msg.attachmentPreview.name}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {msg.text && <p>{msg.text}</p>}
                  {msg.proposal && <ProposalCard proposal={msg.proposal} />}
                </div>
                {msg.sender === 'bot' && msg.text && (
                  <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => handlePlayAudio(index)} disabled={isLoading || msg.isSpeaking}>
                    <Volume2 className={`w-4 h-4 ${msg.isSpeaking ? 'text-primary animate-pulse' : ''}`} />
                  </Button>
                )}
              </div>
              {msg.sender === 'bot' && msg.options && msg.options.length > 0 && (
                <div className="flex flex-col items-start gap-2 mt-2 ml-8">
                  {msg.options.map((option, i) => (
                    <button 
                      key={i} 
                      className="w-full text-left p-3 rounded-lg bg-muted hover:bg-primary/10 border border-border hover:border-primary transition-all duration-200"
                      onClick={() => handleSendMessage(null, option)}
                    >
                      <span className="font-medium text-sm">{option}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-end gap-2 justify-start">
              <Image src="/images/profile2.png" alt="Bot" width={24} height={24} className="rounded-full" />
              <div className="rounded-lg px-3 py-2 bg-muted">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Just a moment...</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <div className="p-3 border-t border-border">
         {attachment && (
            <div className="mb-2 flex items-center gap-2 p-2 rounded-md bg-muted text-sm">
                {attachment.type.startsWith('image/') ? (
                    <Image src={attachment.dataUri} alt={attachment.name} width={24} height={24} className="rounded-sm"/>
                ) : (
                    <FileImage className="w-6 h-6 flex-shrink-0" />
                )}
                <span className="truncate flex-1">{attachment.name}</span>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setAttachment(null)}>
                    <X className="w-4 h-4" />
                </Button>
            </div>
        )}
        <form onSubmit={(e) => handleSendMessage(e)} className="flex items-center gap-2">
           <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your project idea..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="button" variant="ghost" size="icon" onClick={() => fileInputRef.current?.click()}>
              <Paperclip className="w-4 h-4" />
              <span className="sr-only">Attach file</span>
          </Button>
          <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
          <Button type="button" variant={isRecording ? 'destructive' : 'ghost'} size="icon" onClick={handleMicToggle}>
              {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              <span className="sr-only">{isRecording ? 'Stop recording' : 'Start recording'}</span>
          </Button>
          <Button type="submit" size="icon" disabled={isLoading || (!input.trim() && !attachment)}>
            <CornerDownLeft className="w-4 h-4" />
          </Button>
        </form>
      </div>
      <audio ref={audioRef} className="hidden" />
    </div>
  );
};

export default Chatbot;
