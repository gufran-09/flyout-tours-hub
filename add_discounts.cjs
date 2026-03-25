const fs = require('fs');

const file = 'src/data/catalog.ts';
let content = fs.readFileSync(file, 'utf8');

// We want to find objects that have "category": "attraction"
// and modify their durationOptions to add a discount.
// We'll just do a global regex replace for now, picking a few specific ones or just any that have discountPercent: 0.

let updatedCount = 0;

content = content.replace(
    /("category":\s*"attraction"[\s\S]*?"price":\s*)(\d+)(,\s*"originalPrice":\s*)(\d+)(,\s*"discountPercent":\s*)0/g,
    (match, prefix, priceStr, origPrefix, origPriceStr, discPrefix) => {
        if (updatedCount >= 5) return match; // Only update 5 products
        updatedCount++;

        const price = parseInt(priceStr, 10);
        // Let's create a 20% discount
        const newOriginal = Math.round(price / 0.8);
        const discount = Math.round((1 - price / newOriginal) * 100);

        return `${prefix}${price},\n                "originalPrice": ${newOriginal},\n                "discountPercent": ${discount}`;
    }
);

fs.writeFileSync(file, content);
console.log(`Updated ${updatedCount} attractions with discounts.`);
