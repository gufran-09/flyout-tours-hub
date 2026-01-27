import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { SectionTitle } from "@/components/home/SectionTitle";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { ComboDealsSection } from "@/components/home/ComboDealsSection";

import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import UaeShowcaseSection from "@/components/home/UaeShowcaseSection";
import CategoriesCarousel from "@/components/home/CategoriesCarousel";
import LuxuryExperiencesSection from "@/components/home/LuxuryExperiencesSection";
import RomanticLifestyleSection from "@/components/home/RomanticLifestyleSection";
import CuratedCollectionsSection from "@/components/home/CuratedCollectionsSection";
import MostBookedSection from "@/components/home/MostBookedSection";
import EventsEntertainmentSection from "@/components/home/EventsEntertainmentSection";
import TravelEssentialsSection from "@/components/home/TravelEssentialsSection";

import {
  dubaiThemeParks,
  dubaiWaterParks,
  dubaiAttractions,
  dubaiWaterSports,
  dubaiDinnerCruise,
  dubaiYacht,
  abuDhabiExperiences,
  staycations,
} from "@/data/tours";

const Index = () => {
  return (
    <Layout>
      <HeroSection />

      <SectionTitle />
      <UaeShowcaseSection />
      <CategoriesCarousel />
      <LuxuryExperiencesSection />
      <RomanticLifestyleSection />
      <CuratedCollectionsSection />
      <MostBookedSection />
      <EventsEntertainmentSection />
      <TravelEssentialsSection />

      <ExperienceSection
        title="Dubai Theme Parks"
        subtitle="Thrilling adventures for the whole family"
        tours={dubaiThemeParks}
        viewMoreLink="/dubai/theme-parks"
      />

      <ExperienceSection
        title="Dubai Water Parks"
        subtitle="Beat the heat with splashing fun"
        tours={dubaiWaterParks}
        viewMoreLink="/dubai/water-parks"
        className="bg-secondary/20"
      />

      <ExperienceSection
        title="Dubai Attractions"
        subtitle="Iconic landmarks and must-see destinations"
        tours={dubaiAttractions}
        viewMoreLink="/dubai/attractions"
      />

      <ExperienceSection
        title="Dubai Water Sports"
        subtitle="Adrenaline-pumping water adventures"
        tours={dubaiWaterSports}
        viewMoreLink="/dubai/water-sports"
        className="bg-secondary/20"
      />

      <ComboDealsSection />

      <ExperienceSection
        title="Dubai Dinner Cruise"
        subtitle="Romantic dining on the waters"
        tours={dubaiDinnerCruise}
        viewMoreLink="/dubai/dinner-cruise"
      />

      <ExperienceSection
        title="Dubai Yacht Tours"
        subtitle="Luxury sailing experiences"
        tours={dubaiYacht}
        viewMoreLink="/dubai/yacht"
        className="bg-secondary/20"
      />

      <ExperienceSection
        title="Abu Dhabi Experiences"
        subtitle="Explore the capital's finest"
        tours={abuDhabiExperiences}
        viewMoreLink="/abu-dhabi"
      />

      <ExperienceSection
        title="Staycations"
        subtitle="Luxurious getaways and resort experiences"
        tours={staycations}
        viewMoreLink="/staycations"
        className="bg-secondary/20"
      />

      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
