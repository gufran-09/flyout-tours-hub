import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { PRODUCTS } from "@/data/catalog";

export default function SkyAdventures() {
    // Dynamically pull products with category 'sky adventure' from catalog.ts
    const catalogSkyAdventures = PRODUCTS
        .filter(p => {
            const cat = (p.category || "").toLowerCase();
            return cat === 'sky adventure' || cat === 'sky-adventure' || cat === 'sky adventures';
        })
        .map(p => ({
            id: p.id,
            name: p.title,
            location: p.location,
            category: "Sky Adventures",
            price: p.durationOptions?.[0]?.price || 0,
            originalPrice: p.durationOptions?.[0]?.originalPrice,
            rating: p.rating,
            reviewCount: p.reviewCount,
            duration: p.durationOptions?.[0]?.label || "Flexible",
            image: p.images?.[0] || "",
            badge: p.badges?.[0] || undefined,
            link: p.slug ? `/experiences/${p.destination}/${p.category.toLowerCase().replace(/\s+/g, '-')}/${p.slug}` : undefined
        }));

    return (
        <CategoryLayout
            title="Sky Adventures"
            subtitle="Experience breathtaking views from the sky"
            tours={catalogSkyAdventures}
            backgroundImage="https://images.unsplash.com/photo-1506456227282-cb1ff0df2ba6?w=1200&q=80"
        />
    );
}
