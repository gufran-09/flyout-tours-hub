const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const outputDir = path.join(__dirname, 'docs');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

let markdown = '# Application Pages Analysis\n\n';
markdown += 'This document lists every page in the `src/pages` directory, detailing its purpose, used components, data dependencies, and consumed contexts.\n\n';

files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    const name = file.replace('.tsx', '');

    // 1. Purpose
    let description = `Renders the ${name} page.`;
    if (content.includes('CategoryLayout')) {
        description = `Category listing page for ${name} experiences, utilizing CategoryLayout for standardized presentation and filtering.`;
    } else if (content.includes('ProductDetails')) {
        description = `Dynamic product detail page for individual experiences.`;
    } else if (name === 'Index') {
        description = `The main landing/home page of the application.`;
    } else if (name === 'Auth' || name === 'SignIn' || name === 'SignUp') {
        description = `Authentication related page for user login/registration.`;
    }

    // 2. Components
    const components = new Set();
    const importRegex = /import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"]/g;
    const defaultImportRegex = /import\s+([A-Za-z0-9_]+)\s+from\s+['"]([^'"]+)['"]/g;

    let match;
    while ((match = importRegex.exec(content)) !== null) {
        if (match[2].includes('components')) {
            const comps = match[1].split(',').map(c => c.trim().split(' ')[0].trim()).filter(Boolean);
            comps.forEach(c => components.add(c));
        }
    }
    while ((match = defaultImportRegex.exec(content)) !== null) {
        if (match[2].includes('components')) {
            components.add(match[1]);
        }
    }

    // 3. Data/APIs
    const dataDeps = new Set();
    if (content.includes('@/data/tours')) dataDeps.add('tours.ts (Mock data)');
    if (content.includes('@/data/catalog')) dataDeps.add('catalog.ts (Product Catalog data)');
    if (content.includes('supabase')) dataDeps.add('Supabase SDK');
    if (content.includes('fetch(') || content.includes('axios')) dataDeps.add('External/Edge API Fetching');

    // 4. Contexts
    const contexts = new Set();
    if (content.includes('useAuth')) contexts.add('AuthContext');
    if (content.includes('useCart')) contexts.add('CartContext');
    if (content.includes('useWishlist')) contexts.add('WishlistContext');

    markdown += `## ${name}\n`;
    markdown += `- **Purpose**: ${description}\n`;
    markdown += `- **Components Used**: ${components.size > 0 ? Array.from(components).join(', ') : 'None'}\n`;
    markdown += `- **Data/APIs**: ${dataDeps.size > 0 ? Array.from(dataDeps).join(', ') : 'None'}\n`;
    markdown += `- **Contexts Consumed**: ${contexts.size > 0 ? Array.from(contexts).join(', ') : 'None'}\n\n`;
});

const outputPath = path.join(outputDir, 'pages_analysis.md');
fs.writeFileSync(outputPath, markdown);
console.log(`Analysis successfully generated at ${outputPath}`);
