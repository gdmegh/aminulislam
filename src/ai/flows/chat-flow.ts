'use server';
/**
 * @fileoverview A chatbot flow for the portfolio.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';


// Define Zod schemas for the tool
const ProposalDetailsSchema = z.object({
  projectName: z.string().describe("A catchy and descriptive name for the project."),
  description: z.string().describe("A detailed summary of the project and the solution being proposed."),
  features: z.array(z.object({
    name: z.string().describe("The name of the feature."),
    description: z.string().describe("A brief description of what this feature does.")
  })).describe("A list of key features for the proposed solution."),
  timeline: z.string().describe("An estimated timeline for project completion (e.g., '6-8 weeks')."),
  manMonths: z.number().describe("The estimated effort in man-months."),
  price: z.number().describe("The estimated total price for the project. This can be a starting point for negotiation."),
  negotiable: z.boolean().describe("Indicates if the price is negotiable.")
});

export type ProposalDetails = z.infer<typeof ProposalDetailsSchema>;

const createProposalTool = ai.defineTool(
  {
    name: 'createProposal',
    description: 'Creates a formal project proposal when enough details about the user\'s idea have been gathered. Use this when the user shows interest in moving forward with their project idea.',
    inputSchema: ProposalDetailsSchema,
    outputSchema: ProposalDetailsSchema,
  },
  async (input) => {
    // In a real-world scenario, this could save the proposal to a database.
    // For now, it just structures and returns the data.
    console.log("Proposal created:", input);
    return input;
  }
);


// Define Zod schemas for the main chat flow input and output
const ChatInputSchema = z.object({
  message: z.string(),
  attachmentDataUri: z.string().optional().describe(
    "A file attached by the user, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
  ),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  message: z.string().optional(),
  proposal: ProposalDetailsSchema.optional(),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;


const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
    // Add the tool to the flow's context
    tools: [createProposalTool],
  },
  async (input) => {
    try {
        const prompt: any[] = [{
            text: `You are GDMegh, a highly skilled AI solutions architect and salesman for Aminul Islam's portfolio website. 
                 Your persona is professional, persuasive, and empathetic. Your primary goal is to understand the user's project idea or business problem and guide them towards a concrete solution that Aminul can build.

                 Engage the user in a conversation to gather details. Ask clarifying questions about their goals, target audience, and desired features. 
                 Once you have a clear understanding and the user seems ready, use the 'createProposal' tool to generate a formal proposal. 
                 Present the proposal clearly. After presenting the proposal, your goal is to drive them to the next step, which is payment or formal acceptance.

                 Here is the user's message: ${input.message}`
        }];

        if (input.attachmentDataUri) {
            prompt.push({ media: { url: input.attachmentDataUri } });
        }

      const llmResponse = await ai.generate({
        prompt: prompt,
      });

      const toolCalls = llmResponse.toolCalls();

      if (toolCalls.length > 0) {
        const proposalCall = toolCalls.find(call => call.toolName === 'createProposal');
        if(proposalCall) {
          const proposalArgs = proposalCall.args as ProposalDetails;
          return { proposal: proposalArgs };
        }
      }

      return {
        message: llmResponse.text,
      };

    } catch (error: any) {
        console.error("Error in chatFlow:", error);
        return {
            message: `I'm sorry, an error occurred. Please check the server logs. Error: ${error.message || 'Unknown error'}`
        }
    }
  }
);

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}
