import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { dubaiCarRental } from "@/data/tours";

export default function CarRental() {
    return (
        <CategoryLayout
            title="Car Rental"
            subtitle="Explore the city at your own pace"
            tours={dubaiCarRental}
            backgroundImage="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&q=80"
        />
    );
}
