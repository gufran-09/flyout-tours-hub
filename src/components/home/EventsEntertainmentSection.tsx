import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Sparkles, Music, Ticket } from "lucide-react";
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
        <section className="py-24 bg-[#051025] relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-flyout-gold/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="flex items-center gap-2 text-flyout-gold font-medium text-sm tracking-[0.2em] uppercase mb-3">
                            <Sparkles className="w-4 h-4" /> Live in UAE
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-display font-medium text-white leading-tight">
                            Events & Entertainment
                        </h3>
                        <p className="text-slate-400 mt-3 font-light max-w-lg">
                            Concerts, festivals, shows and iconic experiences across the Emirates.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="hidden md:block mt-6 md:mt-0"
                    >
                        <Link to="/events" className="group flex items-center gap-3 text-slate-300 hover:text-white transition-colors text-sm border-b border-white/10 pb-1 hover:border-flyout-gold">
                            View Full Calendar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Hero + Rail Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:h-[600px]">

                    {/* HERO CARD (Left - 7 cols) */}
                    <Link to={events[0].link} className="lg:col-span-7 relative group block overflow-hidden rounded-3xl h-[400px] lg:h-full">
                        {/* Image */}
                        <motion.img
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            src={events[0].image}
                            alt={events[0].title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#051025] via-black/30 to-transparent opacity-90" />

                        {/* Floating Glass Content Panel */}
                        <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:max-w-xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-colors"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-flyout-gold text-[#051025] text-xs font-bold uppercase rounded-full">
                                        {events[0].category}
                                    </span>
                                    {events[0].tag && (
                                        <span className="px-3 py-1 bg-white/10 text-white text-xs font-medium uppercase rounded-full border border-white/10">
                                            {events[0].tag}
                                        </span>
                                    )}
                                </div>

                                <h4 className="text-3xl md:text-4xl font-display text-white mb-2 leading-tight">
                                    {events[0].title}
                                </h4>

                                <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-slate-300 text-sm mb-6">
                                    <span className="flex items-center gap-1.5 font-medium text-white">
                                        <Calendar className="w-4 h-4 text-flyout-gold" /> {events[0].date}
                                    </span>
                                    <span className="hidden w-1 h-1 bg-white/30 rounded-full md:block" />
                                    <span className="flex items-center gap-1.5">
                                        <MapPin className="w-4 h-4 text-flyout-gold" /> {events[0].location}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-slate-400 uppercase tracking-wider">Starting from</span>
                                        <span className="text-xl font-bold text-flyout-gold">{events[0].price}</span>
                                    </div>
                                    <span className="flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                                        Explore Experience <ArrowRight className="w-5 h-5" />
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </Link>

                    {/* RAIL (Right - 5 cols) */}
                    <div className="lg:col-span-5 flex flex-col gap-4 h-full">
                        {events.slice(1).map((event, idx) => (
                            <Link
                                key={event.id}
                                to={event.link}
                                className="group relative flex-1 overflow-hidden rounded-2xl border border-white/5 bg-white/5 hover:border-flyout-gold/30 hover:bg-white/10 transition-all duration-300 min-h-[140px] flex items-center"
                            >
                                {/* Image (Left Side) - 35% width */}
                                <div className="w-[35%] h-full relative overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                </div>

                                {/* Content (Right Side) */}
                                <div className="flex-1 p-5 lg:p-6 flex flex-col justify-center">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-[10px] sm:text-xs font-bold text-flyout-gold uppercase tracking-wider">
                                            {event.category}
                                        </span>
                                        <span className="text-[10px] sm:text-xs text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                                            {event.date}
                                        </span>
                                    </div>

                                    <h5 className="text-lg font-medium text-white mb-1 group-hover:text-flyout-gold transition-colors line-clamp-1">
                                        {event.title}
                                    </h5>

                                    <p className="text-xs text-slate-400 mb-3 flex items-center gap-1 line-clamp-1">
                                        <MapPin className="w-3 h-3" /> {event.location}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-sm font-semibold text-white">{event.price}</span>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-flyout-gold group-hover:text-black transition-colors">
                                            <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}

                        {/* Mobile 'View All' Link */}
                        <div className="block md:hidden text-center mt-4">
                            <Link to="/events" className="text-sm text-slate-400 hover:text-white underline decoration-flyout-gold/50 underline-offset-4">
                                View Full Event Calendar
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsEntertainmentSection;
