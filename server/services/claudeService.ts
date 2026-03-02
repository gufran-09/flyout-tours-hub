
import Anthropic from '@anthropic-ai/sdk';
import { getAllFiles, createChunks, Chunk } from '../utils/codeChunker';
import { PROMPTS, SYSTEM_PROMPT, AnalysisType } from './claudePrompts';
import path from 'path';

export async function analyzeCodebase(type: AnalysisType, rootDir: string): Promise<string> {
    // Initialize client here to ensure env vars are loaded
    const anthropic = new Anthropic({
        apiKey: process.env.ANTHROPIC_API_KEY,
    });

    try {
        const files = getAllFiles(rootDir, [], rootDir);
        const chunks = createChunks(files);

        let combinedAnalysis = "";
        let chunkIndex = 1;
        const totalChunks = chunks.length;

        console.log(`Starting analysis: ${type}. Found ${files.length} files. Created ${totalChunks} chunks.`);

        for (const chunk of chunks) {
            console.log(`Processing chunk ${chunkIndex}/${totalChunks}...`);

            const fileContext = chunk.files.map(f => `### File: ${f.path}\n\`\`\`\n${f.content}\n\`\`\``).join('\n\n');

            // Construct prompt with previous context
            const promptFunction = PROMPTS[type] || PROMPTS['full-audit'];
            const userPrompt = promptFunction(combinedAnalysis ? `Previous analysis summary:\n${combinedAnalysis}` : "No previous context.");

            const message = await anthropic.messages.create({
                model: 'claude-3-sonnet-20240229',
                max_tokens: 4000, // Reasonable limit for output
                system: SYSTEM_PROMPT,
                messages: [
                    {
                        role: 'user',
                        content: `
              ${userPrompt}

              Current Code Chunk (${chunkIndex}/${totalChunks}):
              ${fileContext}
            `
                    }
                ],
            });

            // Safely access the text content
            const responseText = message.content.find(c => c.type === 'text')?.text || "";

            // Append or Refine? For now, we append with a separator, or we could ask Claude to "update" the summary.
            // A simple append strategy for a report:
            combinedAnalysis += `\n\n## Analysis Part ${chunkIndex}\n${responseText}`;

            chunkIndex++;
        }

        return combinedAnalysis;

    } catch (error) {
        console.error('Error during codebase analysis:', error);
        throw error;
    }
}
