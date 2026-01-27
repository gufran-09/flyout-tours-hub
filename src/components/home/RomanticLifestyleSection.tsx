
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Heart, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

// Data for Romantic & Lifestyle Experiences
const romanticExperiences = [
    {
        id: 1,
        title: "Marina Sunset Dinner Cruise",
        subtitle: "Romantic Dining on the Water",
        image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800", // Sunset Boat
        price: "AED 350",
        tag: "Romantic",
        link: "/dinner-cruise/marina-sunset"
    },
    {
        id: 2,
        title: "Rooftop Fine-Dining",
        subtitle: "Sky-High Gourmet Experience",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800", // Rooftop dining
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
        image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=800", // Hot Air Balloon
        price: "AED 1,100",
        tag: "Bucket List",
        link: "/sky-adventures/hot-air-balloon"
    },
    {
        id: 5,
        title: "Couple’s Spa & Sky Dining",
        subtitle: "Ultimate Relaxation Package",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800", // Spa/Massage
        price: "AED 1,800",
        tag: "Wellness",
        link: "/staycations/spa-dining"
    }
];

const RomanticCard = ({ item }: { item: typeof romanticExperiences[0] }) => (
    <Link to={item.link} className="group relative block w-full h-[350px] md:h-[450px] overflow-hidden rounded-2xl cursor-pointer">
        {/* Background Image */}
        <div className="absolute inset-0">
            <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            />
        </div>

        {/* Gradient Overlay - Softer, Warmer for Romantic feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-rose-950/90 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
            {/* Top Tag and Icon */}
            <div className="flex justify-between items-start">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white tracking-wider uppercase">
                    {item.tag}
                </span>
                <div className="w-10 h-10 rounded-full bg-rose-500/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Heart className="text-rose-200 w-5 h-5" />
                </div>
            </div>

            {/* Bottom Info */}
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="text-3xl font-serif text-white font-medium mb-2 drop-shadow-lg leading-tight">
                    {item.title}
                </h3>
                <p className="text-rose-100/90 text-sm font-light tracking-wide mb-4">
                    {item.subtitle}
                </p>

                <div className="flex items-center justify-between border-t border-white/20 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div className="flex items-center gap-2 text-rose-300">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-white font-medium text-sm">Curated</span>
                    </div>
                    <span className="text-white font-medium">{item.price}</span>
                </div>
            </div>
        </div>
    </Link>
);

export const RomanticLifestyleSection = () => {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Background Elements - Warmer tones for this section */}
            <div className="absolute top-0 right-0 w-[50%] h-[500px] bg-rose-100/50 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/50 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-rose-500 font-serif text-lg md:text-xl tracking-[0.2em] uppercase mb-3">
                            Lifestyle & Romance
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-6 leading-tight">
                            Celebrate Life’s Moments
                        </h3>
                        <p className="text-neutral-600 text-lg font-light leading-relaxed">
                            Create unforgettable memories with our handpicked selection of romantic getaways and premium lifestyle experiences.
                        </p>
                    </motion.div>
                </div>

                {/* Grid Layout - 5 Items, maybe a bento grid or specific layout? 
            Let's stick to a clean responsive grid for consistency but maybe feature the first one larger if needed.
            For now, standard grid to match Luxury section but maybe different aspect ratios?
            Let's keep it uniform for mobile responsiveness excellence.
        */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* First item full height/width if we wanted a featured one, but grid-cols-2/3 wraps naturally.
                With 5 items, the last row will have 2 items centered if we don't adjust.
                Let's make the first item span 2 rows or columns? 
                Actually 5 items in a 3-col grid leaves 2 empty slots or wraps unbalanced.
                Let's try: 
                Row 1: 2 large items
                Row 2: 3 smaller items
            */}

                    {/* Item 1 - Wide */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <RomanticCard item={{ ...romanticExperiences[0], image: "https://images.unsplash.com/photo-1549216480-16ac564d6215?q=80&w=1200" }} />
                        {/* Used higher res image request for larger card */}
                    </motion.div>

                    {/* Item 2 */}
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <RomanticCard item={romanticExperiences[1]} />
                    </motion.div>

                    {/* Item 3 */}
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <RomanticCard item={romanticExperiences[2]} />
                    </motion.div>

                    {/* Item 4 */}
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <RomanticCard item={romanticExperiences[3]} />
                    </motion.div>

                    {/* Item 5 */}
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <RomanticCard item={romanticExperiences[4]} />
                    </motion.div>

                </div>

                {/* View All Button */}
                <div className="mt-16 text-center">
                    <Link to="/lifestyle">
                        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-transparent border border-rose-200 px-8 font-medium text-rose-700 transition-all duration-300 hover:bg-rose-50 hover:text-rose-900 hover:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200">
                            <span className="mr-2">Explore Romantic Collection</span>
                            <Heart className="w-4 h-4 transition-transform group-hover:scale-110" />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-rose-100/50 to-transparent skew-x-12 -translate-x-full transition-transform duration-1000 group-hover:animate-shimmer" />
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default RomanticLifestyleSection;
