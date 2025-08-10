
'use server';
/**
 * @fileOverview A flow for converting speech to text.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';

const sttInputSchema = z.object({
  audioDataUri: z.string().describe(
    "A recording of speech, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'. The audio should be in a format like 'audio/webm'."
  ),
});
export type SttInput = z.infer<typeof sttInputSchema>;

const sttOutputSchema = z.object({
  transcription: z.string().optional(),
});
export type SttOutput = z.infer<typeof sttOutputSchema>;

const sttFlowPrompt = ai.definePrompt(
  {
    name: 'sttFlowPrompt',
    input: { schema: sttInputSchema },
    prompt: `
      {{media url=audioDataUri}}

      Please transcribe the audio provided.
    `,
  }
);


const sttFlow = ai.defineFlow(
  {
    name: 'sttFlow',
    inputSchema: sttInputSchema,
    outputSchema: sttOutputSchema,
  },
  async (input) => {
    const llmResponse = await sttFlowPrompt(input);
    return {
      transcription: llmResponse.text,
    };
  }
);

export async function stt(input: SttInput): Promise<SttOutput> {
  return sttFlow(input);
}
