import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PriceDisplay } from "@/components/ui/PriceDisplay";
import { CurrencySymbol } from "@/components/ui/CurrencySymbol";

// Data
const romanticExperiences = [
    {
        id: 1,
        title: "Marina  Dinner Cruise",
        subtitle: "Romantic Dining on the Water",
        image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800",
        price: "AED 350",
        tag: "Romantic",
        link: "/dinner-cruise/marina-sunset",
        originalPrice: 420
    },
    {
        id: 2,
        title: "Rooftop Fine-Dining",
        subtitle: "Sky-High Gourmet Experience",
        image: "https://images.unsplash.com/photo-1695606453510-dc0cf8377836?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "AED 800",
        tag: "Lifestyle",
        link: "/restaurants/rooftop-dining",
        originalPrice: 950
    },
    {
        id: 3,
        title: "Proposal on a Private Yacht",
        subtitle: "Unforgettable Moments at Sea",
        image: "https://images.unsplash.com/photo-1764148775844-52fd5216e77b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "AED 3,500",
        tag: "Exclusive",
        link: "/yacht/proposal-package",
        originalPrice: 4200
    },
    {
        id: 4,
        title: "Hot Air Balloon",
        subtitle: "+ Champagne Breakfast",
        image: "https://images.unsplash.com/photo-1507608443039-bfde4fbcd142?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "AED 1,100",
        tag: "Bucket List",
        link: "/sky-adventures/hot-air-balloon",
        originalPrice: 1350
    },

];

const RomanticCard = ({ item }: { item: typeof romanticExperiences[0] }) => (
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
        text-[10px] font-medium uppercase tracking-widest text-rose-500 ring-1 ring-rose-200/60">
                    {item.tag}
                </span>
            </div>

            {/* Mood badge */}
            <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full 
        text-[10px] font-light text-neutral-900 tracking-[0.2em] flex items-center gap-1.5 border border-white/40">
                    <Heart className="w-3 h-3 text-rose-500 fill-rose-500/20" />
                    ROMANTIC
                </span>
            </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6">
            <div className="flex items-center gap-2 mb-3 text-rose-500/90">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
                    Couple's Choice
                </span>
            </div>

            <h3 className="font-serif text-2xl text-neutral-900 mb-1 leading-tight group-hover:text-flyout-gold transition-colors duration-300">
                {item.title}
            </h3>

            <p className="text-sm text-neutral-500 mb-5 font-light">{item.subtitle}</p>

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between pt-5 border-t border-neutral-100/60">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 mb-0.5">Experience from</span>
                    <PriceDisplay price={item.price} originalPrice={item.originalPrice} />
                </div>

                <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center 
        text-neutral-400 group-hover:border-flyout-gold group-hover:text-flyout-gold transition-all duration-500">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
            </div>
        </div>
    </Link>
);

const LifestylePage = () => {
    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4">Lifestyle & Romance</h1>
                        <p className="text-neutral-500 text-lg font-light max-w-2xl">
                            Hand-picked experiences designed for romance, proposals, celebrations and unforgettable memories.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {romanticExperiences.map((item) => (
                            <RomanticCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LifestylePage;
