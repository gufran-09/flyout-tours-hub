import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { dubaiHotels } from "@/data/tours";

export default function Hotel() {
    return (
        <CategoryLayout
            title="Hotels & Resorts"
            subtitle="Luxurious accommodations for your stay"
            tours={dubaiHotels}
            backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
        />
    );
}
