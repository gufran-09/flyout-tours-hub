import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { dubaiLimousine } from "@/data/tours";

export default function Limousine() {
    return (
        <CategoryLayout
            title="Dubai Limousine"
            subtitle="Travel in style with luxury limousine services"
            tours={dubaiLimousine}
        />
    );
}
