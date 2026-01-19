import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { allDubaiExperiences } from "@/data/tours";

export default function Dubai() {
    return (
        <CategoryLayout
            title="Dubai Experiences"
            subtitle="Discover everything Dubai has to offer, from world-class theme parks to luxury cruises"
            tours={allDubaiExperiences}
            backgroundImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80"
        />
    );
}
