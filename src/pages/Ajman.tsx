import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { ajmanExperiences } from "@/data/tours";

export default function Ajman() {
    return (
        <CategoryLayout
            title="Ajman Experiences"
            subtitle="Discover the hidden gems and peaceful beaches of Ajman"
            tours={ajmanExperiences}
            backgroundImage="https://images.unsplash.com/photo-1596899223071-7c3a27777090?w=1200&q=80"
        />
    );
}
