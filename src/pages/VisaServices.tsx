import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { dubaiVisaServices } from "@/data/tours";

export default function VisaServices() {
    return (
        <CategoryLayout
            title="Visa Services"
            subtitle="Hassle-free visa processing for your UAE journey"
            tours={dubaiVisaServices}
            backgroundImage="https://images.unsplash.com/photo-1569949381615-56456fe80f2d?w=1200&q=80"
        />
    );
}
