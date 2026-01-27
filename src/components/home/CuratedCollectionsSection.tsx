
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Plane, Users, Sun, Music, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

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
        description: "Theme parks, water parks, zoo, cruises",
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
        description: "Dinner cruises, live shows, rooftop lounges, concerts",
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

const CollectionCard = ({ item, featured = false }: { item: typeof curatedCollections[0], featured?: boolean }) => (
    <Link
        to={item.link}
        className={cn(
            "group relative block overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500",
            featured ? "col-span-1 md:col-span-2 lg:col-span-2 row-span-2 h-[400px] md:h-[500px]" : "h-[240px] md:h-full min-h-[240px]"
        )}
    >
        {/* Background Image */}
        <div className="absolute inset-0">
            <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

            {/* Color Overlay on Hover */}
            <div className={cn("absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-40 transition-opacity duration-500 mixed-blend-overlay", item.color)} />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                    <div className={cn("p-2 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        featured ? "opacity-100" : "")}>
                        <item.icon className="w-5 h-5" />
                    </div>
                </div>

                <h3 className={cn("font-serif text-white font-bold leading-tight drop-shadow-lg group-hover:text-white/90 transition-colors",
                    featured ? "text-3xl md:text-4xl mb-3" : "text-xl md:text-2xl mb-1")}>
                    {item.title}
                </h3>

                <p className={cn("text-white/80 font-light tracking-wide transition-all duration-300",
                    featured ? "text-lg mb-6 line-clamp-3 opacity-90" : "text-sm h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 mb-2")}>
                    {item.description}
                </p>

                <div className={cn("flex items-center gap-2 text-white/90 text-sm font-medium uppercase tracking-wider",
                    featured ? "opacity-100" : "opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75")}>
                    <span>Explore Collection</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
            </div>
        </div>
    </Link>
);

export const CuratedCollectionsSection = () => {
    return (
        <section className="relative py-20 bg-neutral-50 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-neutral-50 to-neutral-50 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-14">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-flyout-gold font-medium text-sm md:text-base tracking-[0.2em] uppercase mb-3">
                            Explore by Experience
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-serif text-neutral-900 leading-tight">
                            Curated for Every Kind of Traveler
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="hidden md:block"
                    >
                        <p className="text-neutral-500 text-right max-w-sm ml-auto text-sm">
                            Browse our hand-picked collections designed to match your travel style and intent.
                        </p>
                    </motion.div>
                </div>

                {/* Benton Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:auto-rows-[250px]">
                    {/* Featured Item - Luxury Escapes (Spans 2 cols, 2 rows) */}
                    <motion.div
                        className="md:col-span-2 md:row-span-2"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <CollectionCard item={curatedCollections[0]} featured={true} />
                    </motion.div>

                    {/* Family Favorites */}
                    <motion.div
                        className="md:col-span-1 md:row-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <CollectionCard item={curatedCollections[1]} />
                    </motion.div>

                    {/* Desert & Nature */}
                    <motion.div
                        className="md:col-span-1 md:row-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <CollectionCard item={curatedCollections[2]} />
                    </motion.div>

                    {/* Nightlife - Spans 1 col, 1 row (Next to bottom of featured) */}
                    <motion.div
                        className="md:col-span-1 md:row-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <CollectionCard item={curatedCollections[3]} />
                    </motion.div>

                    {/* Relax & Indulge */}
                    <motion.div
                        className="md:col-span-1 md:row-span-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <CollectionCard item={curatedCollections[4]} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CuratedCollectionsSection;
