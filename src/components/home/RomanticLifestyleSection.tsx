import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

// Data
const romanticExperiences = [
    {
        id: 1,
        title: "Marina Dinner Cruise",
        subtitle: "Romantic Dining on the Water",
        image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800",
        price: "AED 350",
        tag: "Romantic",
        link: "/dinner-cruise/marina-sunset"
    },
    {
        id: 2,
        title: "Rooftop Fine-Dining",
        subtitle: "Sky-High Gourmet Experience",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800",
        price: "AED 800",
        tag: "Lifestyle",
        link: "/restaurants/rooftop-dining"
    },
    {
        id: 3,
        title: "Proposal on a Private Yacht",
        subtitle: "Unforgettable Moments at Sea",
        image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800",
        price: "AED 3,500",
        tag: "Exclusive",
        link: "/yacht/proposal-package"
    },
    {
        id: 4,
        title: "Hot Air Balloon",
        subtitle: "+ Champagne Breakfast",
        image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=800",
        price: "AED 1,100",
        tag: "Bucket List",
        link: "/sky-adventures/hot-air-balloon"
    },

];


// ✅ Romantic card aligned to Luxury / MostBooked system
const RomanticCard = ({ item }: { item: typeof romanticExperiences[0] }) => (
    <Link
        to={item.link}
        className="group relative flex flex-col h-full bg-white rounded-xl overflow-hidden 
    shadow-lg border border-neutral-100 hover:shadow-xl hover:border-rose-300/50 
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
                <span className="px-3 py-1 bg-white/95 backdrop-blur-sm shadow-sm rounded-full 
        text-[11px] font-semibold uppercase tracking-wider text-rose-500 border border-rose-200">
                    {item.tag}
                </span>
            </div>

            {/* Mood badge */}
            <div className="absolute bottom-3 left-3">
                <span className="px-2.5 py-1 bg-black/70 backdrop-blur-md rounded-full 
        text-[10px] font-medium text-white tracking-wide flex items-center gap-1">
                    <Heart className="w-3 h-3 text-rose-300 fill-rose-300" />
                    Curated Moments
                </span>
            </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-5">
            <div className="flex items-center gap-2 mb-2 text-rose-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium text-neutral-800">
                    Romance Collection
                </span>
            </div>

            <h3 className="font-serif text-xl text-neutral-900 mb-1 leading-snug group-hover:text-rose-600 transition-colors">
                {item.title}
            </h3>

            <p className="text-sm text-neutral-500 mb-3">
                {item.subtitle}
            </p>

            <div className="flex items-center gap-3 text-xs text-neutral-500 mb-4">
                <span className="px-2 py-1 rounded-md bg-neutral-100">Couples</span>
                <span className="px-2 py-1 rounded-md bg-neutral-100">Premium</span>
            </div>

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-100">
                <div className="flex flex-col">
                    <span className="text-xs text-neutral-400">From</span>
                    <span className="text-lg font-bold text-rose-600">
                        {item.price}
                    </span>
                    <span className="text-[11px] text-neutral-400">
                        per experience
                    </span>
                </div>

                <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center 
        text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                </div>
            </div>
        </div>
    </Link>
);

export const RomanticLifestyleSection = () => {
    const [api, setApi] = useState<CarouselApi>();

    return (
        <section className="relative pt-0 pb-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <SectionHeader
                    title="Celebrate Life’s Moments"
                    label="Lifestyle & Romance"
                    description="Hand-picked experiences designed for romance, proposals, celebrations and unforgettable memories."
                    onPrev={() => api?.scrollPrev()}
                    onNext={() => api?.scrollNext()}
                    viewMoreLink="/lifestyle"
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
                        {romanticExperiences.map((item, index) => (
                            <CarouselItem key={item.id} className="pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <RomanticCard item={item} />
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

            </div>
        </section>
    );
};

export default RomanticLifestyleSection;
