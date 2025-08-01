
'use server';
/**
 * @fileoverview A chatbot flow for the portfolio.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';

const chatInputSchema = z.object({
  message: z.string(),
});

const chatOutputSchema = z.object({
  message: z.string(),
});

export async function chat(
  input: z.infer<typeof chatInputSchema>
): Promise<z.infer<typeof chatOutputSchema>> {
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
  
  return chatFlow(input);
}
