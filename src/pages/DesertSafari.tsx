import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { dubaiDesertSafari } from "@/data/tours";

export default function DesertSafari() {
    return (
        <CategoryLayout
            title="Desert Safari"
            subtitle="Deep dive into the Arabian dunes with thrilling desert experiences"
            tours={dubaiDesertSafari}
            backgroundImage="https://images.unsplash.com/photo-1545638573-04aa6067fa76?w=1200&q=80"
        />
    );
}
