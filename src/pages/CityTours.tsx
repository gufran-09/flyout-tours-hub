import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { dubaiCityTours } from "@/data/tours";

export default function CityTours() {
    return (
        <CategoryLayout
            title="City Tours"
            subtitle="Explore the iconic landmarks and hidden gems of the UAE"
            tours={dubaiCityTours}
            backgroundImage="https://images.unsplash.com/photo-1518684079851-82d7160a696f?w=1200&q=80"
        />
    );
}
