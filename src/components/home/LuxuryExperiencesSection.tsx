import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Star, Crown, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

// ---------------- DATA ----------------

const luxuryExperiences = [
    {
        id: 1,
        title: "Royal Desert Safari",
        subtitle: "with Butler Service",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200",
        price: "AED 1,500",
        tag: "Signature",
        link: "/safari/royal-desert-safari",
    },
    {
        id: 2,
        title: "Burj Khalifa VIP",
        subtitle: "Private Sky Lounge Experience",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200",
        price: "AED 2,800",
        tag: "Exclusive",
        link: "/dubai/burj-khalifa-vip",
    },
    {
        id: 3,
        title: "Sunset Yacht Party",
        subtitle: "with Live DJ",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200",
        price: "AED 350",
        tag: "Trending",
        link: "/yacht/sunset-party",
    },
    {
        id: 4,
        title: "Helicopter Tour",
        subtitle: "+ Atlantis Lunch",
        image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1200",
        price: "AED 1,200",
        tag: "Best Seller",
        link: "/sky-adventures/helicopter",
    },
    {
        id: 5,
        title: "VIP Ferrari World",
        subtitle: "+ Yas Marina Drive",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200",
        price: "AED 950",
        tag: "Thrilling",
        link: "/parks/ferrari-world-vip",
    },
    {
        id: 6,
        title: "Private Limousine",
        subtitle: "City Tour Experience",
        image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=1200",
        price: "AED 600",
        tag: "Luxury",
        link: "/transfers/limousine",
    },
];

// ---------------- CARD ----------------

const LuxuryCard = ({ item }: { item: typeof luxuryExperiences[0] }) => (
    <Link
        to={item.link}
        className="group relative flex flex-col h-full bg-white rounded-xl overflow-hidden 
    shadow-lg border border-neutral-100 hover:shadow-xl hover:border-flyout-gold/40 
    transition-all duration-300 hover:-translate-y-1"
    >
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
            <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Tag */}
            <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-white/95 backdrop-blur-sm shadow rounded-full 
        text-[11px] font-semibold uppercase tracking-wider text-flyout-gold border border-flyout-gold/30">
                    {item.tag}
                </span>
            </div>

            {/* Luxury badge */}
            <div className="absolute bottom-3 left-3">
                <span className="px-2.5 py-1 bg-black/70 backdrop-blur-md rounded-full 
        text-[10px] font-medium text-white flex items-center gap-1">
                    <Crown className="w-3 h-3 text-flyout-gold" />
                    Premium Experience
                </span>
            </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-5">
            <div className="flex items-center gap-2 mb-2 text-flyout-gold">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium text-neutral-800">
                    Luxury Collection
                </span>
            </div>

            <h3 className="font-serif text-xl text-neutral-900 mb-1 leading-snug group-hover:text-primary transition-colors">
                {item.title}
            </h3>

            <p className="text-sm text-neutral-500 mb-4">{item.subtitle}</p>

            <div className="flex items-center gap-2 text-xs text-neutral-500 mb-4">
                <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Private access
                </div>
                <span>•</span>
                <span>Curated host</span>
            </div>

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-100">
                <div className="flex flex-col">
                    <span className="text-xs text-neutral-400">From</span>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                    <span className="text-[11px] text-neutral-400">per experience</span>
                </div>

                <div
                    className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center 
          text-primary group-hover:bg-flyout-gold group-hover:text-white transition-all duration-300"
                >
                    <ArrowUpRight className="w-4 h-4" />
                </div>
            </div>
        </div>
    </Link>
);

// ---------------- SECTION ----------------

export const LuxuryExperiencesSection = () => {
    const [api, setApi] = useState<CarouselApi>();

    return (
        <section className="relative pt-0 pb-24 bg-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-neutral-50 via-white to-white pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <SectionHeader
                        title="Signature Experiences"
                        label="The Luxury Collection"
                        description="Indulge in aspirational journeys crafted for discerning travelers. From private yachts to royal desert retreats."
                        onPrev={() => api?.scrollPrev()}
                        onNext={() => api?.scrollNext()}
                        viewMoreLink="/luxury"
                    />

                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {luxuryExperiences.map((experience, index) => (
                                <CarouselItem key={experience.id} className="pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        <LuxuryCard item={experience} />
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default LuxuryExperiencesSection;
