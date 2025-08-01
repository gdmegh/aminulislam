'use server';
/**
 * @fileoverview A chatbot flow for the portfolio.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';

// Define schemas at the top level.
const chatInputSchema = z.object({
  message: z.string(),
});
export type ChatInput = z.infer<typeof chatInputSchema>;

const chatOutputSchema = z.object({
  message: z.string(),
});
export type ChatOutput = z.infer<typeof chatOutputSchema>;

// Define the flow at the top level.
const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: chatInputSchema,
    outputSchema: chatOutputSchema,
  },
  async (input) => {
    const llmResponse = await ai.generate({
      prompt: `You are GDMegh, a helpful AI assistant for Aminul Islam's portfolio website. 
               Your persona should be professional, friendly, and knowledgeable about Aminul's work.
               Here is the user's message: ${input.message}`,
    });

    return {
      message: llmResponse.text,
    };
  }
);

// The exported server action simply invokes the defined flow.
export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}
