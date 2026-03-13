import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { PRODUCTS } from "@/data/catalog";

export default function Attractions() {
    // Dynamically pull products with category 'attraction' or 'attractions' (or typos like 'atttraction') from catalog.ts
    const catalogAttractions = PRODUCTS
        .filter(p => {
            const cat = (p.category || "").toLowerCase();
            return cat === 'attraction' || cat === 'attractions' || cat === 'atttraction';
        })
        .map(p => ({
            id: p.id,
            name: p.title,
            location: p.location,
            category: "Attractions",
            price: p.durationOptions?.[0]?.price || 0,
            originalPrice: p.durationOptions?.[0]?.originalPrice,
            rating: p.rating,
            reviewCount: p.reviewCount,
            duration: p.durationOptions?.[0]?.label || "Flexible",
            image: p.images?.[0] || "",
            badge: p.badges?.[0] || undefined,
            link: p.slug ? `/experiences/${p.destination}/${p.category}/${p.slug}` : undefined
        }));

    // Merge existing static attractions with the new dynamic ones from catalog
    const allAttractions = [...catalogAttractions];

    return (
        <CategoryLayout
            title="Dubai Attractions"
            subtitle="Discover iconic landmarks and must-see destinations in Dubai"
            tours={allAttractions}
        />
    );
}
