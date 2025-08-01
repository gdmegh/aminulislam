
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
    "A file attached by the user, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'.")
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  message: z.string().optional(),
  proposal: ProposalDetailsSchema.optional(),
  options: z.array(z.string()).optional().describe("A list of suggested replies or actions for the user to take next, presented as clickable cards."),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

const chatFlowPrompt = ai.definePrompt(
  {
    name: 'chatFlowPrompt',
    input: { schema: ChatInputSchema },
    output: { schema: ChatOutputSchema },
    tools: [createProposalTool],
    prompt: `You are Aminul Islam, a senior product designer. Your persona is direct, efficient, and helpful.
    Your goal is to quickly understand the user's needs by guiding them through a conversational survey.
    You MUST ask targeted, one-by-one questions to gather the necessary information to create a project proposal.

    If this is the first message from the user, you MUST start the conversation with the exact phrase: "I am Aminul Islam, your product designer. To get started, please select one of the following options:" and provide the following options as tappable cards: "Discuss a new project idea", "Refine an existing project", "Get a proposal for a past discussion".

    Based on their response, acknowledge their choice and then begin asking for the project name, description, and key features.
    Once you have gathered enough information, use the 'createProposal' tool to generate a formal proposal.

    Keep your questions focused and avoid long paragraphs. Always provide a few relevant 'options' as tappable cards for the user to guide the conversation.

    Here is the user's message: {{{message}}}
    {{#if attachmentDataUri}}
    Here is an attachment from the user:
    {{media url=attachmentDataUri}}
    {{/if}}
    `,
  }
)


const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    try {
      const llmResponse = await chatFlowPrompt(input);

      const toolCalls = llmResponse.toolCalls;

      if (toolCalls && toolCalls.length > 0) {
        const proposal = toolCalls[0].output as ProposalDetails;
        return {
          proposal: proposal,
        };
      }

      return {
        message: llmResponse.text,
        options: llmResponse.output?.options,
      };

    } catch (error: any) {
      console.error("Error in chat flow:", error);
      return { message: `Sorry, an error occurred. Please check the server logs. Error: ${error.message}` };
    }
  }
);


export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}
