import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { dubaiWaterAdventures } from "@/data/tours";

export default function WaterAdventures() {
    return (
        <CategoryLayout
            title="Dubai Water Adventures"
            subtitle="Dive into the deep blue with world-class water experiences"
            tours={dubaiWaterAdventures}
        />
    );
}
