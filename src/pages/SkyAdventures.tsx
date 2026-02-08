import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { dubaiSkyAdventures } from "@/data/tours";

export default function SkyAdventures() {
    return (
        <CategoryLayout
            title="Sky Adventures"
            subtitle="Experience breathtaking views from the sky"
            tours={dubaiSkyAdventures}
            backgroundImage="https://images.unsplash.com/photo-1506456227282-cb1ff0df2ba6?w=1200&q=80"
        />
    );
}
