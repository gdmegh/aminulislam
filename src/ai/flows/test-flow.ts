'use server';
/**
 * @fileOverview A simple test flow to verify Genkit is running.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';

const testInputSchema = z.object({
  name: z.string(),
});
export type TestInput = z.infer<typeof testInputSchema>;

const testOutputSchema = z.object({
  greeting: z.string(),
});
export type TestOutput = z.infer<typeof testOutputSchema>;

const testFlow = ai.defineFlow(
  {
    name: 'testFlow',
    inputSchema: testInputSchema,
    outputSchema: testOutputSchema,
  },
  async (input) => {
    return {
      greeting: `Hello, ${input.name}! The test flow is working.`,
    };
  }
);

export async function test(input: TestInput): Promise<TestOutput> {
  return testFlow(input);
}
