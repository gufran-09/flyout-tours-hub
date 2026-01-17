import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { dubaiWaterParks } from "@/data/tours";

export default function WaterParks() {
    return (
        <CategoryLayout
            title="Dubai Water Parks"
            subtitle="Beat the heat with exciting water slides and splash attractions"
            tours={dubaiWaterParks}
        />
    );
}
