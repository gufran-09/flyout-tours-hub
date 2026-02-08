import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { dubaiTransfers } from "@/data/tours";

export default function Transfers() {
    return (
        <CategoryLayout
            title="Airport Transfers"
            subtitle="Seamless and comfortable transfers for your arrival and departure"
            tours={dubaiTransfers}
            backgroundImage="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80"
        />
    );
}
