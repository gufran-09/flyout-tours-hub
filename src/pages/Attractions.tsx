import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { dubaiAttractions } from "@/data/tours";

export default function Attractions() {
    return (
        <CategoryLayout
            title="Dubai Attractions"
            subtitle="Discover iconic landmarks and must-see destinations in Dubai"
            tours={dubaiAttractions}
        />
    );
}
