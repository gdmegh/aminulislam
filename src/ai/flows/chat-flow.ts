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

const bertAnalyzeTextTool = ai.defineTool(
  {
      name: 'bertAnalyzeText',
      description: 'Analyzes user text to determine their intent using a BERT-based NLP model. Use this to understand what the user wants (e.g., get a quote, analyze an image, general question).',
      inputSchema: z.object({ text: z.string() }),
      outputSchema: z.object({
          intent: z.enum(['GetQuote', 'AnalyzeImage', 'GeneralInquiry', 'BuildProject', 'UpgradeSystem', 'Unknown']),
          confidence: z.number(),
      }),
  },
  async ({ text }) => {
      // This is a MOCK implementation.
      // In a real application, this would call a Firebase Cloud Function
      // which then calls the BERT API on Google Cloud Run.
      console.log(`Analyzing text with BERT (mock): "${text}"`);
      const lowerText = text.toLowerCase();
      if (lowerText.includes('quote') || lowerText.includes('price') || lowerText.includes('cost')) {
          return { intent: 'GetQuote', confidence: 0.95 };
      }
      if (lowerText.includes('image') || lowerText.includes('photo') || lowerText.includes('picture')) {
          return { intent: 'AnalyzeImage', confidence: 0.98 };
      }
      if (lowerText.includes('project') || lowerText.includes('build') || lowerText.includes('develop')) {
        return { intent: 'BuildProject', confidence: 0.92 };
      }
       if (lowerText.includes('upgrade') || lowerText.includes('update') || lowerText.includes('existing')) {
        return { intent: 'UpgradeSystem', confidence: 0.93 };
      }
      return { intent: 'GeneralInquiry', confidence: 0.8 };
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
    model: 'googleai/gemini-1.5-flash-latest',
    input: { schema: ChatInputSchema },
    output: { schema: ChatOutputSchema },
    tools: [createProposalTool, bertAnalyzeTextTool],
    prompt: `You are a highly skilled business development representative and AI assistant for a top-tier software development agency. Your name is AI Megh.
    Your primary goal is to understand a potential client's software needs and guide them towards a formal proposal. You also serve as a helpful resource for general questions. You are professional, efficient, and technically knowledgeable.

    If this is the first message from the user (history is empty), you MUST start the conversation with the exact phrase: "Greetings! I'm AI Megh, your guide to building exceptional software. How can I help you today? You can ask me to build a project, get a quote, analyze an image, or just ask a general question."

    For every user message, you MUST first use the 'bertAnalyzeText' tool to understand the user's intent.
    
    - Based on the intent from the 'bertAnalyzeText' tool:
    - If the intent is 'BuildProject', 'UpgradeSystem', or 'GetQuote', begin a structured conversation to gather requirements. Ask clear, one-by-one questions to understand the project's goals, scope, and key features. Once you have gathered sufficient details (project name, description, and at least 3-4 key features with their descriptions), use the 'createSoftwareProposal' tool to generate a formal proposal.
    - If the intent is 'AnalyzeImage', prompt them to upload an image if one isn't already provided. If an image is provided in the input, analyze it and describe what you see.
    - If the intent is 'GeneralInquiry' or 'Unknown', engage in a helpful, conversational manner. Answer their questions to the best of your ability.
    
    Always provide a few relevant 'options' as tappable cards to steer the conversation effectively.
    
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
      const output = llmResponse.output();

      if (!output) {
        // If there's no direct output, check for tool calls
        for (const toolResponse of llmResponse.toolResponses) {
          if (toolResponse.toolName === 'createSoftwareProposal') {
            return { proposal: toolResponse.output as ProposalDetails };
          }
        }
        
        // If no output and no recognized tool call, throw error
        throw new Error("No output or actionable tool call from LLM.");
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
