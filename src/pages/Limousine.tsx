import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { Tour } from "@/components/home/ExperienceSection";

// Limousine data was locally defined in CategoryPage, moving it here or we should define it in tours.ts.
// For now, defining it here to match previous behavior, but ideally it should be in tours.ts.
const dubaiLimousine: Tour[] = [
    { id: "lm-1", name: "Luxury Limousine City Tour", location: "Dubai", category: "Limousine", price: 599, originalPrice: 750, rating: 4.9, reviewCount: 340, duration: "4 Hours", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80", badge: "Luxury" },
    { id: "lm-2", name: "Airport Transfer Limousine", location: "Dubai", category: "Limousine", price: 299, rating: 4.8, reviewCount: 890, duration: "1 Hour", image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&q=80" },
    { id: "lm-3", name: "Wedding Limousine Package", location: "Dubai", category: "Limousine", price: 999, rating: 5.0, reviewCount: 120, duration: "6 Hours", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80", badge: "Premium" },
    { id: "lm-4", name: "Night Out Limousine", location: "Dubai", category: "Limousine", price: 449, originalPrice: 550, rating: 4.7, reviewCount: 230, duration: "5 Hours", image: "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?w=600&q=80" },
];

export default function Limousine() {
    return (
        <CategoryLayout
            title="Dubai Limousine"
            subtitle="Travel in style with luxury limousine services"
            tours={dubaiLimousine}
        />
    );
}
