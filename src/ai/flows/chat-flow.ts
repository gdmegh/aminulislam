'use server';
/**
 * @fileoverview A chatbot flow for the portfolio.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';

// We define the schemas at the top level so we can export their types
// without violating the "use server" directive which only allows async function exports.
const chatInputSchema = z.object({
  message: z.string(),
});

const chatOutputSchema = z.object({
  message: z.string(),
});

// Exporting the types for use in client components.
export type ChatInput = z.infer<typeof chatInputSchema>;
export type ChatOutput = z.infer<typeof chatOutputSchema>;

// This is the main exported server action.
export async function chat(input: ChatInput): Promise<ChatOutput> {
  // We define the flow inside the function that is called by the client.
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
  
  // We invoke the flow and return the result.
  return chatFlow(input);
}
