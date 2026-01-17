import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { dubaiThemeParks } from "@/data/tours";

export default function ThemeParks() {
    return (
        <CategoryLayout
            title="Dubai Theme Parks"
            subtitle="Experience world-class theme parks with thrilling rides and entertainment"
            tours={dubaiThemeParks}
        />
    );
}
