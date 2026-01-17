import { CategoryLayout } from "@/components/layout/CategoryLayout";
import { abuDhabiExperiences } from "@/data/tours";

export default function AbuDhabi() {
    return (
        <CategoryLayout
            title="Abu Dhabi Experiences"
            subtitle="Explore the capital's finest attractions and cultural landmarks"
            tours={abuDhabiExperiences}
        />
    );
}
