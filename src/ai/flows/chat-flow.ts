
'use server';
/**
 * @fileoverview A chatbot flow for generating software development proposals.
 */
import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { googleAI } from '@genkit-ai/googleai';


// Define Zod schemas for the tool
const ProposalDetailsSchema = z.object({
  projectName: z.string().describe("A catchy and descriptive name for the software project."),
  description: z.string().describe("A detailed summary of the software project and the problem it solves."),
  features: z.array(z.object({
    name: z.string().describe("The name of the software feature."),
    description: z.string().describe("A brief technical description of what this feature does and its requirements.")
  })).describe("A list of key features for the proposed software."),
  timeline: z.string().describe("An estimated timeline for project completion (e.g., '3-4 months')."),
  manMonths: z.number().describe("The estimated effort in man-months for development."),
  price: z.number().describe("The estimated total price for the project. This can be a starting point for negotiation."),
  negotiable: z.boolean().describe("Indicates if the price is negotiable.")
});

export type ProposalDetails = z.infer<typeof ProposalDetailsSchema>;

const createProposalTool = ai.defineTool(
  {
    name: 'createSoftwareProposal',
    description: 'Creates a formal software project proposal once enough technical and business requirements have been gathered from the user. Use this tool when the user is ready to proceed.',
    inputSchema: ProposalDetailsSchema,
    outputSchema: ProposalDetailsSchema,
  },
  async (input) => {
    // In a real-world scenario, this would save the proposal to a CRM or database.
    console.log("Software Proposal created:", input);
    return input;
  }
);


// Define Zod schemas for the main chat flow input and output
const HistoryMessageSchema = z.object({
    role: z.enum(['user', 'model']),
    content: z.array(z.object({
        text: z.string().optional(),
    })),
});

const ChatInputSchema = z.object({
  message: z.string(),
  history: z.array(HistoryMessageSchema).optional(),
  attachmentDataUri: z.string().optional().describe(
    "A file attached by the user (e.g., requirements document, wireframe), as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'.")
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  message: z.string().optional(),
  proposal: ProposalDetailsSchema.optional().nullable(),
  options: z.array(z.string()).optional().describe("A list of suggested replies or actions for the user to take next, presented as clickable cards."),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

const chatFlowPrompt = ai.definePrompt(
  {
    name: 'chatFlowPrompt',
    input: { schema: ChatInputSchema },
    output: { schema: ChatOutputSchema },
    tools: [createProposalTool],
    prompt: `You are a highly skilled business development representative and AI assistant for a top-tier software development agency. Your name is AI Megh.
    Your primary goal is to understand a potential client's software needs and guide them towards a formal proposal. You also serve as a helpful resource for general questions. You are professional, efficient, and technically knowledgeable.

    If this is the first message from the user (history is empty), you MUST start the conversation with the exact phrase: "Greetings! from AI Megh, your guide to building exceptional software. To begin, please select an option:" and provide the following options as tappable cards: "Build a new software project", "Upgrade an existing system", "Get a quote for my idea", "Analyze an image", "General Q&A".

    - If the user's message clearly indicates interest in one of the first three options, begin a structured conversation to gather requirements. Ask clear, one-by-one questions to understand the project's goals, scope, and key features. Once you have gathered sufficient details (project name, description, and at least 3-4 key features with their descriptions), use the 'createSoftwareProposal' tool to generate a formal proposal.
    - If the user selects "Analyze an image", prompt them to upload an image. If an image is provided in the input, analyze it and describe what you see.
    - If the user selects "General Q&A" or asks a question that does not fit the other categories, engage in a helpful, conversational manner. Answer their questions to the best of your ability.
    
    Always provide a few relevant 'options' as tappable cards to steer the conversation effectively. If the user's input is unclear, provide the main options again to guide them.
    
    The user's latest message is: {{{message}}}
    {{#if attachmentDataUri}}
    The user has attached a file for context. Use it to inform your questions and proposal. If they asked to analyze it, provide a description.
    Attachment: {{media url=attachmentDataUri}}
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
      const llmResponse = await chatFlowPrompt(input, { history: input.history });
      const output = llmResponse.output;

      if (!output) {
        throw new Error("No output from LLM.");
      }

      const toolCalls = llmResponse.toolCalls;

      if (toolCalls && toolCalls.length > 0) {
        const proposal = toolCalls[0].output as ProposalDetails;
        return {
          proposal: proposal,
        };
      }

      return {
        message: output.message,
        options: output.options,
        proposal: output.proposal,
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
