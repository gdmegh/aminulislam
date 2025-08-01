'use server';
/**
 * @fileoverview A chatbot flow for the portfolio.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';

const chatInputSchema = z.object({
  message: z.string(),
  attachmentDataUri: z.string().optional().describe(
    "A file attached by the user, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
  ),
});
export type ChatInput = z.infer<typeof chatInputSchema>;

const chatOutputSchema = z.object({
  message: z.string(),
});
export type ChatOutput = z.infer<typeof chatOutputSchema>;

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: chatInputSchema,
    outputSchema: chatOutputSchema,
  },
  async (input) => {
    try {
        const prompt: any[] = [{
            text: `You are GDMegh, a helpful AI assistant for Aminul Islam's portfolio website. 
                 Your persona should be professional, friendly, and knowledgeable about Aminul's work.
                 Here is the user's message: ${input.message}`
        }];

        if (input.attachmentDataUri) {
            prompt.push({ media: { url: input.attachmentDataUri } });
        }

      const llmResponse = await ai.generate({
        prompt: prompt,
      });

      return {
        message: llmResponse.text,
      };
    } catch (error: any) {
        console.error("Error in chatFlow:", error);
        // Return a specific error message to the user interface for debugging.
        return {
            message: `I'm sorry, an error occurred. Please check the server logs. [Vercel] Error: ${error.message || 'Unknown error'}`
        }
    }
  }
);

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}
