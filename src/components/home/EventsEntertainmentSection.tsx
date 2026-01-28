import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

// Data for Events
const events = [
    {
        id: "hero",
        title: "Coldplay: Music of the Spheres",
        date: "JAN 11",
        location: "Zayed Sports City",
        image: "https://images.unsplash.com/photo-1470229722913-7ea9959faed7?q=80&w=2000",
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
        image: "https://images.unsplash.com/photo-1582657233895-0f37a3ec7179?q=80&w=800",
        category: "Festival",
        price: "AED 30",
        tag: "Cultural",
        link: "/attractions/global-village"
    },
    {
        id: 3,
        title: "La Perle by Dragone",
        date: "DAILY",
        location: "Al Habtoor City",
        image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800",
        category: "Live Show",
        price: "From AED 259",
        tag: "Theatrical",
        link: "/shows/la-perle"
    },
    {
        id: 4,
        title: "Dubai Opera Gala",
        date: "FEB 14",
        location: "Dubai Opera",
        image: "https://images.unsplash.com/photo-1503095392213-2e6d338dbbf0?q=80&w=800",
        category: "Classical",
        price: "From AED 550",
        tag: "Classy",
        link: "/events/dubai-opera"
    },
    {
        id: 5,
        title: "Formula 1 Grand Prix",
        date: "NOV 26",
        location: "Yas Marina Circuit",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800",
        category: "Sports",
        price: "From AED 1,200",
        tag: "Major Event",
        link: "/events/f1-abudhabi"
    }
];

// Standardized Card - Matching Luxury Section
const EventCard = ({ item }: { item: typeof events[0] }) => (
    <Link
        to={item.link}
        className="group relative flex flex-col h-full bg-white rounded-xl overflow-hidden 
    shadow-lg border border-neutral-100 hover:shadow-xl hover:border-flyout-gold/40 
    transition-all duration-300 hover:-translate-y-1"
    >
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
            <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Category Badge */}
            <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-white/95 backdrop-blur-sm shadow rounded-full 
        text-[11px] font-semibold uppercase tracking-wider text-flyout-gold border border-flyout-gold/30">
                    {item.category}
                </span>
            </div>

            {/* Date Badge */}
            <div className="absolute bottom-3 left-3">
                <span className="px-2.5 py-1 bg-black/70 backdrop-blur-md rounded-full 
        text-[10px] font-medium text-white flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-flyout-gold" />
                    {item.date}
                </span>
            </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-5">
            <div className="flex items-center gap-2 mb-2 text-flyout-gold">
                <Sparkles className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium text-neutral-800">
                    Live in City
                </span>
            </div>

            <h3 className="font-serif text-xl text-neutral-900 mb-1 leading-snug group-hover:text-primary transition-colors line-clamp-1">
                {item.title}
            </h3>

            <p className="text-sm text-neutral-500 mb-4 line-clamp-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {item.location}
            </p>

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-100">
                <div className="flex flex-col">
                    <span className="text-xs text-neutral-400">Tickets from</span>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                </div>

                <div
                    className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center 
          text-primary group-hover:bg-flyout-gold group-hover:text-white transition-all duration-300"
                >
                    <ArrowUpRight className="w-4 h-4" />
                </div>
            </div>
        </div>
    </Link>
);

export const EventsEntertainmentSection = () => {
    const [api, setApi] = useState<CarouselApi>();

    return (
        <section className="relative pt-0 pb-24 bg-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-neutral-50 to-neutral-50 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionHeader
                    title="Events & Entertainment"
                    label="Live in UAE"
                    description="Experience the pulse of the Emirates with world-class concerts, festivals, and theatrical masterpieces."
                    onPrev={() => api?.scrollPrev()}
                    onNext={() => api?.scrollNext()}
                    viewMoreLink="/events"
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
                        {events.map((event, index) => (
                            <CarouselItem key={event.id} className="pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <EventCard item={event} />
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export default EventsEntertainmentSection;
