import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { dubaiHolidayPackages } from "@/data/tours";

export default function HolidayPackages() {
    return (
        <CategoryLayout
            title="Holiday Packages"
            subtitle="All-inclusive holiday packages for a worry-free vacation"
            tours={dubaiHolidayPackages}
            backgroundImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80"
        />
    );
}
