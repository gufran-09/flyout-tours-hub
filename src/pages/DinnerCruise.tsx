import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { dubaiDinnerCruise } from "@/data/tours";

export default function DinnerCruise() {
    return (
        <CategoryLayout
            title="Dubai Dinner Cruise"
            subtitle="Romantic dining experiences on the beautiful Dubai waters"
            tours={dubaiDinnerCruise}
        />
    );
}
