'use server';
/**
 * @fileOverview A flow for converting text to speech.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';
import wav from 'wav';

const ttsInputSchema = z.object({
  text: z.string(),
});
export type TtsInput = z.infer<typeof ttsInputSchema>;

const ttsOutputSchema = z.object({
  audioDataUri: z.string().optional(),
});
export type TtsOutput = z.infer<typeof ttsOutputSchema>;

async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    let bufs: any[] = [];
    writer.on('error', reject);
    writer.on('data', function (d) {
      bufs.push(d);
    });
    writer.on('end', function () {
      resolve(Buffer.concat(bufs).toString('base64'));
    });

    writer.write(pcmData);
    writer.end();
  });
}

const ttsFlow = ai.defineFlow(
  {
    name: 'ttsFlow',
    inputSchema: ttsInputSchema,
    outputSchema: ttsOutputSchema,
  },
  async (input) => {
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.5-flash-preview-tts',
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Algenib' },
          },
        },
      },
      prompt: input.text,
    });
    
    if (!media) {
      throw new Error('No media returned from TTS model');
    }
    
    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );
      
    const wavBase64 = await toWav(audioBuffer);

    return {
      audioDataUri: 'data:audio/wav;base64,' + wavBase64,
    };
  }
);

export async function tts(input: TtsInput): Promise<TtsOutput> {
  return ttsFlow(input);
}
