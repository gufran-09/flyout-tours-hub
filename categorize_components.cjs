const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
const outputDir = path.join(__dirname, 'docs');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const categories = {
    layout: {
        title: "1. Layout Components",
        description: "These components dictate the overarching structural skeleton of pages. They often hold navigation menus, footers, sidebars, and main content wrappers. They rarely contain distinct business logic on their own, but rather orchestrate how other components are placed spatially.",
        items: []
    },
    pageSpecific: {
        title: "2. Page-specific Components",
        description: "These are large, specialized component chunks built specifically for a single page or view (like the landing page Index). They combine various smaller shared components into meaningful sections (like Hero sections, specifically curated carousel grids).",
        items: []
    },
    sharedUi: {
        title: "3. Shared UI Components",
        description: "These are the generic, reusable primitive building blocks of the application. Buttons, Inputs, Dialogs, generic Cards, and Form elements. They are entirely presentation-focused, lack domain logic, and can be used on any page.",
        items: []
    },
    businessLogic: {
        title: "4. Business Logic Components",
        description: "These are components deeply intertwined with the app's core domains (like pricing, booking validation, specialized interactions). Rather than just rendering UI, they hold complex calculations, state transformations, or specific data-fetching requirements closely tied to the application's unique value.",
        items: []
    },
    search: {
        title: "5. Search Components",
        description: "Dedicated entirely to the user's search intent. These capture input queries, provide auto-suggestions, rendering local/global search results interfaces, and bridging the gap between user intent and destination routing.",
        items: []
    },
    auth: {
        title: "6. Auth Components",
        description: "Responsible exclusively for handling authentication flows: Login forms, Registration fields, Social OAuth buttons, OTP verification prompts, and enforcing secure boundaries across the app.",
        items: []
    }
};

function explore(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            explore(fullPath);
        } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
            categorizeComponent(fullPath, file);
        }
    }
}

function categorizeComponent(fullPath, file) {
    const parentDir = path.basename(path.dirname(fullPath));
    const name = file.replace(/\.tsx?$/, '').replace(/\.jsx?$/, '');
    const content = fs.readFileSync(fullPath, 'utf-8');

    // Auth
    if (parentDir === 'auth' || name.toLowerCase().includes('login') || name.toLowerCase().includes('signup') || name.toLowerCase().includes('auth')) {
        categories.auth.items.push(name);
        return;
    }

    // Search
    if (parentDir === 'search' || name.toLowerCase().includes('search')) {
        categories.search.items.push(name);
        return;
    }

    // Layout
    if (parentDir === 'layout' || name.toLowerCase().includes('layout') || name === 'Navbar' || name === 'Footer' || name === 'MegaMenu') {
        categories.layout.items.push(name);
        return;
    }

    // Page-specific (like 'home', 'dubai' folders that are components)
    if (['home', 'dubai'].includes(parentDir) || name.includes('Section') || name.includes('Showcase') || name === 'CategoriesCarousel') {
        categories.pageSpecific.items.push(`${name} (used mostly in ${parentDir})`);
        return;
    }

    // Shared UI / Business logic differentiation
    // Generally, 'ui' folder is purely shared UI.
    if (parentDir === 'ui') {
        // Exception: PremiumCard and a few others are highly domain specific. Let's do a simple heuristic
        if (name === 'PremiumCard' || name === 'CurrencySymbol' || name === 'PriceDisplay') {
            categories.businessLogic.items.push(`${name} (Domain logic mixed)`);
        } else {
            categories.sharedUi.items.push(name);
        }
        return;
    }

    // If it's a context provider or generic wrapper in root components, usually logic or generic UI
    if (content.includes('useCart') || content.includes('stripe') || content.includes('booking')) {
        categories.businessLogic.items.push(name);
    } else {
        categories.sharedUi.items.push(name);
    }
}

explore(componentsDir);

let markdown = '# Application Components Categorization\n\n';

for (const key in categories) {
    markdown += `## ${categories[key].title}\n\n`;
    markdown += `**Role Explained**: ${categories[key].description}\n\n`;

    if (categories[key].items.length > 0) {
        // Sort for neatness
        categories[key].items.sort().forEach(item => {
            markdown += `- ${item}\n`;
        });
    } else {
        markdown += `- *No components found matching this category*\n`;
    }
    markdown += '\n---\n\n';
}

const outputPath = path.join(outputDir, 'components_analysis.md');
fs.writeFileSync(outputPath, markdown);
console.log(`Components categorization successfully generated at ${outputPath}`);
