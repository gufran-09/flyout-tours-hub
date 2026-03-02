
import fs from 'fs';
import path from 'path';

export interface FileData {
    path: string;
    content: string;
}

export interface Chunk {
    files: FileData[];
    tokenEstimate: number;
}

const MAX_TOKENS_PER_CHUNK = 100000; // Conservative limit for input context
const CHARS_PER_TOKEN = 4;

const EXCLUDED_DIRS = [
    'node_modules',
    'dist',
    'build',
    'coverage',
    '.git',
    '.idea',
    '.vscode',
    'logs',
];

const EXCLUDED_FILES = [
    'package-lock.json',
    'yarn.lock',
    'pnpm-lock.yaml',
    'bun.lockb',
    '.env',
    '.DS_Store',
];

const EXTENSIONS_TO_READ = [
    '.ts', '.tsx', '.js', '.jsx', '.json', '.bg', '.md', '.css', '.html', '.sql'
];

function isBinary(filePath: string): boolean {
    const ext = path.extname(filePath).toLowerCase();
    return ['.png', '.jpg', '.jpeg', '.gif', '.ico', '.pdf', '.zip'].includes(ext);
}

export function getAllFiles(dir: string, fileList: FileData[] = [], rootDir: string = dir): FileData[] {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            if (!EXCLUDED_DIRS.includes(file)) {
                getAllFiles(filePath, fileList, rootDir);
            }
        } else {
            if (!EXCLUDED_FILES.includes(file) && !isBinary(file) && EXTENSIONS_TO_READ.includes(path.extname(file))) {
                // Check if file is too large (e.g. > 1MB), skip if so to avoid clogging
                if (stat.size < 1024 * 1024) {
                    try {
                        const content = fs.readFileSync(filePath, 'utf-8');
                        const relativePath = path.relative(rootDir, filePath);
                        fileList.push({ path: relativePath, content });
                    } catch (err) {
                        console.error(`Error reading file ${file}:`, err);
                    }
                }
            }
        }
    });

    return fileList;
}

export function createChunks(files: FileData[]): Chunk[] {
    const chunks: Chunk[] = [];
    let currentChunk: Chunk = { files: [], tokenEstimate: 0 };

    for (const file of files) {
        const estimatedTokens = Math.ceil(file.content.length / CHARS_PER_TOKEN);

        if (currentChunk.tokenEstimate + estimatedTokens > MAX_TOKENS_PER_CHUNK) {
            if (currentChunk.files.length > 0) {
                chunks.push(currentChunk);
                currentChunk = { files: [], tokenEstimate: 0 };
            }

            // If a single file is larger than the limit, we'd ideally split it.
            // For now, we'll force it into its own chunk (or next empty one) 
            // but warn it might be truncated by the LLM context if drastically huge.
            // A robust solution would split large files by lines.
            if (estimatedTokens > MAX_TOKENS_PER_CHUNK) {
                // TODO: Implement file splitting. For now, add it as a standalone chunk.
                chunks.push({ files: [file], tokenEstimate: estimatedTokens });
                continue;
            }
        }

        currentChunk.files.push(file);
        currentChunk.tokenEstimate += estimatedTokens;
    }

    if (currentChunk.files.length > 0) {
        chunks.push(currentChunk);
    }

    return chunks;
}
