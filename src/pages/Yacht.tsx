import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { dubaiYacht } from "@/data/tours";

export default function Yacht() {
    return (
        <CategoryLayout
            title="Dubai Yacht Tours"
            subtitle="Luxury sailing and yacht charter experiences"
            tours={dubaiYacht}
        />
    );
}
