import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Plane, Users, Sun, Music, Coffee, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

// Data for Curated Collections
const curatedCollections = [
    {
        id: 1,
        title: "Luxury Escapes",
        icon: Plane,
        description: "Yacht, helicopter, 5-star dining, private tours",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=800",
        color: "from-amber-600 to-yellow-500",
        link: "/luxury"
    },
    {
        id: 2,
        title: "Family Favorites",
        icon: Users,
        description: "Theme parks, water parks, zoo, cruises and more ",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=800",
        color: "from-blue-600 to-cyan-500",
        link: "/dubai/theme-parks"
    },
    {
        id: 3,
        title: "Desert & Nature",
        icon: Sun,
        description: "Safari, balloon, camping, photography tours",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=800",
        color: "from-orange-600 to-amber-500",
        link: "/safari"
    },
    {
        id: 4,
        title: "Nightlife & Entertainment",
        icon: Music,
        description: "Dinner cruises, live shows, concerts",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=800",
        color: "from-violet-600 to-purple-500",
        link: "/concerts"
    },
    {
        id: 5,
        title: "Relax & Indulge",
        icon: Coffee,
        description: "Hotels, spa experiences, beach clubs, resorts",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=800",
        color: "from-emerald-600 to-teal-500",
        link: "/staycations"
    }
];

// Standardized Card - Matching Luxury Section
const CollectionCard = ({ item }: { item: typeof curatedCollections[0] }) => (
    <Link
        to={item.link}
        className="group relative flex flex-col h-full bg-white rounded-xl overflow-hidden 
    shadow-luxury border border-neutral-100/60 hover:shadow-luxury-hover hover:border-flyout-gold/30 
    transition-all duration-500 ease-out hover:-translate-y-1"
    >
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
            <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Icon Badge */}
            <div className="absolute top-4 left-4">
                <span className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-center text-flyout-gold ring-1 ring-white/50">
                    <item.icon className="w-4 h-4" />
                </span>
            </div>

            {/* Tag Badge */}
            <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full 
        text-[10px] font-light tracking-[0.2em] text-neutral-800 uppercase border border-white/40">
                    Collection
                </span>
            </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6">
            <div className="flex items-center gap-2 mb-3 text-flyout-gold/90">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
                    Curated For You
                </span>
            </div>

            <h3 className="font-serif text-2xl text-neutral-900 mb-2 leading-tight group-hover:text-flyout-gold transition-colors duration-300">
                {item.title}
            </h3>

            <p className="text-sm text-neutral-500 mb-6 line-clamp-2 font-light leading-relaxed">
                {item.description}
            </p>

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between pt-5 border-t border-neutral-100/60">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 mb-0.5">View</span>
                    <span className="text-sm font-medium text-flyout-gold">Collection</span>
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

export const CuratedCollectionsSection = () => {
    const [api, setApi] = useState<CarouselApi>();

    return (
        <section className="relative pt-0 pb-24 bg-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-neutral-50 to-neutral-50 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionHeader
                    title="Curated for Every Traveler"
                    label="Explore by Experience"
                    description="Browse our hand-picked collections designed to match your travel style and intent."
                    onPrev={() => api?.scrollPrev()}
                    onNext={() => api?.scrollNext()}
                    viewMoreLink="/collections"
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
                        {curatedCollections.map((item, index) => (
                            <CarouselItem key={item.id} className="pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <CollectionCard item={item} />
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export default CuratedCollectionsSection;
