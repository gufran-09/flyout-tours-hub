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
        image: "https://images.unsplash.com/photo-1695878868496-fcbd6ef47f57?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "AED 1,500",
        tag: "Signature",
        link: "/safari/royal-desert-safari",
    },
    {
        id: 2,
        title: "Burj Khalifa VIP",
        subtitle: "Private Sky Lounge Experience",
        image: "https://images.unsplash.com/photo-1635857161777-2383f2e4a82d?q=80&w=677&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "AED 2,800",
        tag: "Exclusive",
        link: "/dubai/burj-khalifa-vip",
    },
    {
        id: 3,
        title: "Sunset Yacht Party",
        subtitle: "with Live DJ",
        image: "https://images.unsplash.com/photo-1628029338883-61644ec68475?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "AED 350",
        tag: "Trending",
        link: "/yacht/sunset-party",
    },
    {
        id: 4,
        title: "Helicopter Tour",
        subtitle: "+ Atlantis Lunch",
        image: "https://images.unsplash.com/photo-1713843956211-1e5569ab4d48?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    shadow-luxury border border-flyout-gold/20 hover:shadow-luxury-hover hover:border-flyout-gold/30 
    transition-all duration-500 ease-out hover:-translate-y-1"
    >
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
            <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Tag */}
            <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md shadow-sm rounded-full 
        text-[10px] font-medium uppercase tracking-widest text-flyout-gold ring-1 ring-white/50">
                    {item.tag}
                </span>
            </div>

            {/* Luxury badge */}
            <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full 
        text-[10px] font-light text-neutral-900 tracking-[0.2em] flex items-center gap-1.5 border border-white/40">
                    <Crown className="w-3 h-3 text-flyout-gold" />
                    PREMIUM
                </span>
            </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6">
            <div className="flex items-center gap-2 mb-3 text-flyout-gold/90">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
                    Luxury Collection
                </span>
            </div>

            <h3 className="font-serif text-2xl text-neutral-900 mb-1 leading-tight group-hover:text-flyout-gold transition-colors duration-300">
                {item.title}
            </h3>

            <p className="text-sm text-neutral-500 mb-5 font-light">{item.subtitle}</p>

            <div className="flex items-center gap-3 text-xs text-neutral-400 mb-5 font-light tracking-wide">
                <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-flyout-gold/70" />
                    Private access
                </div>
                <span className="w-1 h-1 rounded-full bg-neutral-300" />
                <span>Curated host</span>
            </div>

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between pt-5 border-t border-neutral-100/60">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 mb-0.5">From</span>
                    <span className="text-lg font-medium font-serif text-flyout-blue">{item.price}</span>
                </div>

                <div
                    className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center 
          text-neutral-400 group-hover:border-flyout-gold group-hover:text-flyout-gold transition-all duration-500"
                >
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
