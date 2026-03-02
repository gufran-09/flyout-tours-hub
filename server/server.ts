import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Anthropic from '@anthropic-ai/sdk';
import path from 'path';
import { analyzeCodebase } from './services/claudeService';
import { AnalysisType } from './services/claudePrompts';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Anthropic client
const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

// Routes
app.post('/api/claude', async (req: Request, res: Response) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        const message = await anthropic.messages.create({
            model: 'claude-3-sonnet-20240229',
            max_tokens: 500,
            messages: [{ role: 'user', content: prompt }],
        });

        res.json(message);
    } catch (error: any) {
        console.error('Error calling Claude API:', error);
        res.status(500).json({
            error: 'Failed to generate response',
            details: error.message
        });
    }
});

import { fileURLToPath } from 'url';

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.post('/api/claude/analyze', async (req: Request, res: Response) => {
    try {
        const { type } = req.body;

        // Validate type
        const validTypes: AnalysisType[] = ['full-audit', 'security', 'performance', 'refactor'];
        if (!validTypes.includes(type)) {
            return res.status(400).json({ error: 'Invalid analysis type' });
        }

        // Assume project root is the parent directory of 'server'
        const projectRoot = path.resolve(__dirname, '..');

        // Log for debugging
        console.log(`Request received for ${type} analysis on ${projectRoot}`);

        // This might take a while, so ideally we'd use streaming or a job queue.
        // For this simple implementation, we'll await it (beware of timeouts).
        // Set a high timeout for this request if possible, or just let it run.
        req.setTimeout(300000); // 5 minutes

        const analysis = await analyzeCodebase(type as AnalysisType, projectRoot);

        res.json({ analysis });

    } catch (error: any) {
        console.error('Analysis failed:', error);
        res.status(500).json({
            error: 'Analysis failed',
            details: error.message
        });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
