import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { dubaiSupercars } from "@/data/tours";

export default function Supercars() {
    return (
        <CategoryLayout
            title="Supercar Rentals"
            subtitle="Drive your dream car in the city of dreams"
            tours={dubaiSupercars}
            backgroundImage="https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&q=80"
        />
    );
}
