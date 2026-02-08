import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { dubaiRestaurants } from "@/data/tours";

export default function Restaurants() {
    return (
        <CategoryLayout
            title="Restaurants & Dining"
            subtitle="Exquisite culinary experiences"
            tours={dubaiRestaurants}
            backgroundImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
        />
    );
}
