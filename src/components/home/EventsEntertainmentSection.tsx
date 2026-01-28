import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// Data for Events
const events = [
    {
        id: "hero",
        title: "Coldplay: Music of the Spheres",
        date: "JAN 11",
        location: "Zayed Sports City",
        image: "https://images.unsplash.com/photo-1470229722913-7ea9959faed7?q=80&w=2000", // Cinematic Concert
        category: "Live Concert",
        price: "From AED 395",
        tag: "Selling Fast",
        link: "/events/coldplay-abu-dhabi"
    },
    {
        id: 2,
        title: "Global Village Season 28",
        date: "NOW OPEN",
        location: "Global Village, Dubai",
        image: "https://images.unsplash.com/photo-1582657233895-0f37a3ec7179?q=80&w=800", // Cultural/Light
        category: "Festival",
        price: "AED 30",
        link: "/attractions/global-village"
    },
    {
        id: 3,
        title: "La Perle by Dragone",
        date: "DAILY",
        location: "Al Habtoor City",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800", // Theatrical
        category: "Live Show",
        price: "From AED 259",
        link: "/shows/la-perle"
    },
    {
        id: 4,
        title: "Dubai Opera Gala",
        date: "FEB 14",
        location: "Dubai Opera",
        image: "https://images.unsplash.com/photo-1503095392213-2e6d338dbbf0?q=80&w=800", // Opera/Classy
        category: "Classical",
        price: "From AED 550",
        link: "/events/dubai-opera"
    }
];

export const EventsEntertainmentSection = () => {
    return (
        <section className="py-24 bg-[#FAFAF8] relative overflow-hidden">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-flyout-gold/5 rounded-full blur-[120px] pointer-events-none opacity-60" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#051025]/5 rounded-full blur-[100px] pointer-events-none opacity-40" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* LEFT COLUMN: Header + Featured Event (Span 7) */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="flex items-center gap-2 text-flyout-gold font-medium text-sm tracking-[0.2em] uppercase mb-4">
                                <Sparkles className="w-4 h-4" /> Live in UAE
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-display font-medium text-slate-900 leading-tight mb-4">
                                Events & Entertainment
                            </h3>
                            <p className="text-slate-600 font-light max-w-lg text-lg leading-relaxed">
                                Experience the pulse of the Emirates with world-class concerts, festivals, and theatrical masterpieces.
                            </p>
                        </motion.div>

                        {/* Featured Event Card */}
                        <Link to={events[0].link} className="flex-1 group relative block overflow-hidden rounded-3xl shadow-xl shadow-black/5 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500">
                            {/* Image */}
                            <div className="absolute inset-0 overflow-hidden">
                                <motion.img
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    src={events[0].image}
                                    alt={events[0].title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Overlay Gradient - Lighter/Cleaner */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#051025]/90 via-[#051025]/20 to-transparent" />

                            {/* Content Panel */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-flyout-gold text-[#051025] text-xs font-bold uppercase rounded-full tracking-wide">
                                        {events[0].category}
                                    </span>
                                    {events[0].tag && (
                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium uppercase rounded-full border border-white/20">
                                            {events[0].tag}
                                        </span>
                                    )}
                                </div>

                                <h4 className="text-3xl md:text-4xl font-display text-white mb-3 leading-tight drop-shadow-md">
                                    {events[0].title}
                                </h4>

                                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-slate-200 text-sm mb-6">
                                    <span className="flex items-center gap-2 font-medium text-white">
                                        <Calendar className="w-4 h-4 text-flyout-gold" /> {events[0].date}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-flyout-gold" /> {events[0].location}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between pt-5 border-t border-white/10">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-slate-300 uppercase tracking-wider mb-1">Starting from</span>
                                        <span className="text-xl font-bold text-flyout-gold">{events[0].price}</span>
                                    </div>
                                    <span className="w-10 h-10 rounded-full bg-white text-[#051025] flex items-center justify-center group-hover:bg-flyout-gold transition-colors shadow-lg">
                                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* RIGHT COLUMN: Stacked Cards (Span 5) */}
                    <div className="lg:col-span-5 flex flex-col justify-between h-full gap-6">
                        {/* List Container */}
                        <div className="flex flex-col gap-4">
                            {events.slice(1).map((event) => (
                                <Link
                                    key={event.id}
                                    to={event.link}
                                    className="group relative flex overflow-hidden rounded-2xl bg-white hover:bg-white shadow-sm hover:shadow-lg transition-all duration-300 min-h-[130px] border border-slate-100"
                                >
                                    {/* Image (Left Side) */}
                                    <div className="w-[120px] sm:w-[140px] relative overflow-hidden shrink-0">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content (Right Side) */}
                                    <div className="flex-1 p-5 flex flex-col justify-center">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-flyout-gold transition-colors">
                                                {event.category}
                                            </span>
                                            <span className="text-[10px] sm:text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full font-medium">
                                                {event.date}
                                            </span>
                                        </div>

                                        <h5 className="text-lg font-display font-semibold text-slate-900 mb-1 group-hover:text-blue-900 transition-colors line-clamp-2 leading-snug">
                                            {event.title}
                                        </h5>

                                        <div className="flex items-center justify-between mt-3">
                                            <p className="text-xs text-slate-500 flex items-center gap-1 line-clamp-1">
                                                <MapPin className="w-3 h-3 text-slate-400" /> {event.location}
                                            </p>
                                            <span className="text-sm font-bold text-slate-900">{event.price}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* View All Actions */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center justify-between mt-auto pt-6 border-t border-slate-200"
                        >
                            <p className="text-slate-500 text-sm hidden sm:block">
                                Don't miss out on upcoming experiences
                            </p>
                            <Link to="/events" className="group flex items-center gap-2 text-slate-900 font-medium hover:text-flyout-gold transition-colors">
                                View Full Calendar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EventsEntertainmentSection;
