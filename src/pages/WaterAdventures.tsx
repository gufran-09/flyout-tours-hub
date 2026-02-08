import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { PRODUCTS } from "@/data/catalog";
import { Tour } from "@/components/home/ExperienceSection";

export default function WaterAdventures() {
    // Filter for water sports/adventures
    const tours: Tour[] = PRODUCTS
        .filter(p => p.category === 'water-sports' || p.category === 'water-adventures' || p.id === 'atlantis-waterpark')
        .map(p => ({
            id: p.id,
            name: p.title,
            location: p.location,
            category: "Water Sports",
            price: p.durationOptions[0]?.price || 0,
            originalPrice: p.durationOptions[0]?.originalPrice,
            rating: p.rating,
            reviewCount: p.reviewCount,
            duration: p.durationOptions[0]?.label || "Flexible",
            image: p.images[0] || "",
            badge: p.badges[0],
            link: `/experiences/${p.destination}/${p.category}/${p.slug}`
        }));

    return (
        <CategoryLayout
            title="Dubai Water Adventures"
            subtitle="Dive into the deep blue with world-class water experiences"
            tours={tours}
        />
    );
}
