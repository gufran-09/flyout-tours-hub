
import { getAllFiles, createChunks } from './server/utils/codeChunker';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '.');

console.log('Analyzing root:', root);
try {
    const files = getAllFiles(root, [], root);
    console.log('Found files:', files.length);
    const chunks = createChunks(files);
    console.log('Created chunks:', chunks.length);
} catch (error) {
    console.error('Error:', error);
}
