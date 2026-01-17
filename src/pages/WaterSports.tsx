import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { dubaiWaterSports } from "@/data/tours";

export default function WaterSports() {
    return (
        <CategoryLayout
            title="Dubai Water Sports"
            subtitle="Adrenaline-pumping water adventures for thrill seekers"
            tours={dubaiWaterSports}
        />
    );
}
