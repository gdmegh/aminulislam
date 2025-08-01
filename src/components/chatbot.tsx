"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { X, CornerDownLeft, Loader2, Maximize, Minimize } from 'lucide-react';
import { useChatbot } from '@/hooks/use-chatbot';
import { chat, type ChatInput } from '@/ai/flows/chat-flow';

interface Message {
  text: string;
  sender: 'user' | 'bot';
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

  const chatbotRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setMessages([{ text: "Hello! I'm GDMegh, Aminul's AI assistant. How can I help you today?", sender: 'bot' }]);
    }
  }, [isOpen]);
  
  useEffect(() => {
    const scrollable = (scrollAreaRef.current?.childNodes[0] as HTMLDivElement);
    if (scrollable) {
      scrollable.scrollTo(0, scrollable.scrollHeight);
    }
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const newMessages: Message[] = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    const userInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const response = await chat({ message: userInput });
      setMessages([...newMessages, { text: response.message, sender: 'bot' }]);
    } catch (error) {
      console.error("Error chatting with AI:", error);
      setMessages([...newMessages, { text: "Sorry, I'm having trouble connecting. Please try again later.", sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

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
          <h3 className="font-bold text-foreground">GDMegh</h3>
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
            <div key={index} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.sender === 'bot' && <Image src="/images/profile2.png" alt="Bot" width={24} height={24} className="rounded-full" />}
              <div className={`rounded-lg px-3 py-2 max-w-[80%] text-sm ${msg.sender === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex items-end gap-2 justify-start">
              <Image src="/images/profile2.png" alt="Bot" width={24} height={24} className="rounded-full" />
              <div className="rounded-lg px-3 py-2 bg-muted">
                <Loader2 className="w-5 h-5 animate-spin" />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <div className="p-3 border-t border-border">
        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" size="icon" disabled={isLoading}>
            <CornerDownLeft className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
