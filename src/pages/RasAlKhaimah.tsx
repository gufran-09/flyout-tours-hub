import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { rasAlKhaimahExperiences } from "@/data/tours";

export default function RasAlKhaimah() {
    return (
        <CategoryLayout
            title="Ras Al Khaimah Experiences"
            subtitle="Adventure and nature await in the breathtaking landscapes of Ras Al Khaimah"
            tours={rasAlKhaimahExperiences}
            backgroundImage="https://images.unsplash.com/photo-1548680678-b11874246835?w=1200&q=80"
        />
    );
}
