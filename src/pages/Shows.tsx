import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { dubaiShows } from "@/data/tours";

export default function Shows() {
    return (
        <CategoryLayout
            title="Live Concerts & Shows"
            subtitle="World-class entertainment and performances"
            tours={dubaiShows}
            backgroundImage="https://images.unsplash.com/photo-1503317171993-9601f2169699?w=1200&q=80"
        />
    );
}
