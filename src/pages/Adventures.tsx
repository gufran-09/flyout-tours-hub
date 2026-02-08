import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { dubaiAdventures } from "@/data/tours";

export default function Adventures() {
    return (
        <CategoryLayout
            title="Thrill & Adventures"
            subtitle="Unleash your adventurous spirit"
            tours={dubaiAdventures}
            backgroundImage="https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=1200&q=80"
        />
    );
}
