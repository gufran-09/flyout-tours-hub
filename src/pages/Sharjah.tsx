import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { sharjahExperiences } from "@/data/tours";

export default function Sharjah() {
    return (
        <CategoryLayout
            title="Sharjah Experiences"
            subtitle="Explore the cultural capital of the UAE with these curated experiences"
            tours={sharjahExperiences}
            backgroundImage="https://images.unsplash.com/photo-1596899223071-7c3a27777090?w=1200&q=80"
        />
    );
}
