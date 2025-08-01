
'use server';
/**
 * @fileoverview A chatbot flow for the portfolio.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';

export async function chat(
  input: z.infer<typeof chatInputSchema>
): Promise<z.infer<typeof chatOutputSchema>> {

  const chatInputSchema = z.object({
    message: z.string(),
  });

  const chatOutputSchema = z.object({
    message: z.string(),
  });

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

// We define the schemas again outside the function scope 
// so we can export their types without violating 'use server'.
const chatInputSchema = z.object({
  message: z.string(),
});

const chatOutputSchema = z.object({
  message: z.string(),
});
