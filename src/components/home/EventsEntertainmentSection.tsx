
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Ticket, ArrowRight, Music, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// Data for Events
const events = [
    {
        id: 1,
        title: "Coldplay: Music of the Spheres",
        date: "JAN 11",
        location: "Zayed Sports City Stadium, Abu Dhabi",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800", // Concert Crowd
        category: "Concert",
        price: "From AED 395",
        tag: "Sold Out Soon",
        link: "/events/coldplay-abu-dhabi"
    },
    {
        id: 2,
        title: "Global Village Season 28",
        date: "NOW OPEN",
        location: "Global Village, Dubai",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800", // Festival/Lights
        category: "Festival",
        price: "AED 30",
        tag: "Family Favorite",
        link: "/attractions/global-village"
    },
    {
        id: 3,
        title: "La Perle by Dragone",
        date: "DAILY SHOWS",
        location: "Al Habtoor City, Dubai",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800", // Artistic Show
        category: "Live Show",
        price: "From AED 259",
        tag: "Must See",
        link: "/shows/la-perle"
    },
    {
        id: 4,
        title: "Dubai Shopping Festival",
        date: "DEC 08 - JAN 14",
        location: "Citywide, Dubai",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800", // Shopping/City
        category: "Festival",
        price: "Free Entry",
        tag: "Seasonal",
        link: "/events/dsf"
    }
];

const EventCard = ({ item, featured = false }: { item: typeof events[0], featured?: boolean }) => (
    <Link
        to={item.link}
        className={cn(
            "group relative block overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200 hover:border-flyout-gold/50 transition-all duration-300 shadow-sm hover:shadow-md",
            featured ? "col-span-1 md:col-span-2 row-span-2 min-h-[400px]" : "col-span-1 min-h-[200px]"
        )}
    >
        {/* Background Image */}
        <div className="absolute inset-0">
            <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between">
            {/* Top Badge */}
            <div className="flex justify-between items-start">
                <span className={cn(
                    "px-3 py-1 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider border",
                    featured ? "bg-flyout-gold/90 text-black border-flyout-gold" : "bg-black/30 text-white border-white/20"
                )}>
                    {item.category}
                </span>

                {/* Date Badge */}
                <div className="flex flex-col items-center bg-black/30 backdrop-blur-md border border-white/10 rounded-lg p-2 text-center min-w-[60px]">
                    <span className="text-[10px] text-white/70 uppercase font-medium leading-none mb-1">
                        {item.date.includes(" ") ? item.date.split(" ")[0] : "EVENT"}
                    </span>
                    <span className="text-lg font-bold text-white leading-none">
                        {item.date.includes(" ") ? item.date.split(" ").slice(1).join(" ") : item.date}
                    </span>
                </div>
            </div>

            {/* Bottom Info */}
            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className={cn("font-bold text-white mb-2 leading-tight group-hover:text-flyout-gold transition-colors", featured ? "text-3xl md:text-4xl" : "text-xl")}>
                    {item.title}
                </h3>

                <div className="flex items-center gap-4 text-sm text-white/70 mb-4">
                    <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-flyout-gold" />
                        {item.location}
                    </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex flex-col">
                        <span className="text-xs text-white/50">{featured ? "Tickets starting from" : "Price"}</span>
                        <span className="text-lg font-bold text-flyout-gold">{item.price}</span>
                    </div>
                    <span className={cn(
                        "flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all",
                        featured ? "bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full" : ""
                    )}>
                        Get Tickets <ArrowRight className="w-4 h-4" />
                    </span>
                </div>
            </div>
        </div>
    </Link>
);

export const EventsEntertainmentSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/50 via-white to-white pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="flex items-center gap-2 text-flyout-gold font-medium text-sm md:text-base tracking-[0.2em] uppercase mb-2">
                            <Sparkles className="w-4 h-4" /> Live in UAE
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-serif text-neutral-900 tracking-tight leading-tight">
                            Events & Entertainment
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="hidden md:block mt-4 md:mt-0"
                    >
                        <Link to="/events" className="group flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors text-sm">
                            View Full Calendar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Featured Event (First Item) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 lg:col-span-2"
                    >
                        <EventCard item={events[0]} featured={true} />
                    </motion.div>

                    {/* Side Events Column */}
                    <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-1">
                        {events.slice(1).map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                                viewport={{ once: true }}
                                className="flex-1"
                            >
                                <EventCard item={event} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link to="/events" className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors text-sm">
                        View Full Calendar <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default EventsEntertainmentSection;
