
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

// Data for Luxury Experiences
const luxuryExperiences = [
    {
        id: 1,
        title: "Royal Desert Safari",
        subtitle: "with Butler Service",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800", // Desert
        price: "AED 1,500",
        tag: "Signature",
        link: "/safari/royal-desert-safari"
    },
    {
        id: 2,
        title: "Burj Khalifa VIP",
        subtitle: "Private Sky Lounge Experience",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800", // Burj
        price: "AED 2,800",
        tag: "Exclusive",
        link: "/dubai/burj-khalifa-vip"
    },
    {
        id: 3,
        title: "Sunset Yacht Party",
        subtitle: "with Live DJ",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800", // Yacht party vibe
        price: "AED 350",
        tag: "Trending",
        link: "/yacht/sunset-party"
    },
    {
        id: 4,
        title: "Helicopter Tour",
        subtitle: "+ Atlantis Lunch",
        image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=800", // Helicopter
        price: "AED 1,200",
        tag: "Best Seller",
        link: "/sky-adventures/helicopter"
    },
    {
        id: 5,
        title: "VIP Ferrari World",
        subtitle: "+ Yas Marina Drive",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800", // Ferrari
        price: "AED 950",
        tag: "Thrilling",
        link: "/parks/ferrari-world-vip"
    },
    {
        id: 6,
        title: "Private Limousine",
        subtitle: "City Tour Experience",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800", // Limo interior
        price: "AED 600",
        tag: "Luxury",
        link: "/transfers/limousine"
    },
    {
        id: 7,
        title: "Private Yacht Dinner",
        subtitle: "Gourmet Dining at Sea",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800", // Luxury Resort/Yacht feel
        price: "AED 2,500",
        tag: "Romantic",
        link: "/dinner-cruise/private-yacht"
    },
    {
        id: 8,
        title: "Desert Safari VIP Camp",
        subtitle: "Ultimate Dune Basher",
        image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=800", // Desert
        price: "AED 450",
        tag: "Premium",
        link: "/safari/vip-camp"
    },
    {
        id: 9,
        title: "Helicopter City Tour",
        subtitle: "Panoramic Skyline Views",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800", // Dubai Skyline aerial
        price: "AED 850",
        tag: "Popular",
        link: "/sky-adventures/city-tour"
    },
];

const ExperienceCard = ({ item }: { item: typeof luxuryExperiences[0] }) => (
    <Link to={item.link} className="group relative block w-full h-[320px] md:h-[400px] overflow-hidden rounded-2xl cursor-pointer">
        {/* Background Image */}
        <div className="absolute inset-0">
            <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
            {/* Top Tag */}
            <div className="flex justify-between items-start">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white tracking-wider uppercase">
                    {item.tag}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="text-white w-5 h-5" />
                </div>
            </div>

            {/* Bottom Info */}
            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-serif text-white font-medium mb-1 drop-shadow-lg leading-tight">
                    {item.title}
                </h3>
                <p className="text-white/80 text-sm font-light tracking-wide mb-3">
                    {item.subtitle}
                </p>
                <div className="flex items-center gap-2 text-flyout-gold">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-white font-medium text-sm">Targeting Excellence</span>
                </div>
            </div>
        </div>
    </Link>
);

export const LuxuryExperiencesSection = () => {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-purple-100/40 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-100/40 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-flyout-gold font-serif text-lg md:text-xl tracking-[0.2em] uppercase mb-3">
                            The Luxury Collection
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-6 leading-tight">
                            Signature Experiences
                        </h3>
                        <p className="text-neutral-600 text-lg font-light leading-relaxed">
                            Indulge in emotional, high-ticket, aspirational journeys designed for the discerning traveler.
                            From private yachts to royal desert retreats.
                        </p>
                    </motion.div>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {luxuryExperiences.map((experience, index) => (
                        <motion.div
                            key={experience.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <ExperienceCard item={experience} />
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-16 text-center">
                    <Link to="/luxury">
                        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-transparent border border-neutral-200 px-8 font-medium text-neutral-900 transition-all duration-300 hover:bg-neutral-50 hover:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:ring-offset-2 focus:ring-offset-white">
                            <span className="mr-2">Explore All Collections</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-neutral-100/50 to-transparent skew-x-12 -translate-x-full transition-transform duration-1000 group-hover:animate-shimmer" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LuxuryExperiencesSection;
