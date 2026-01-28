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
        image: "https://images.unsplash.com/photo-1585131201641-2e3a295bf7dd?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://plus.unsplash.com/premium_photo-1766749948167-ae63aa5c5294?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1635449677939-8e4e77ecf36a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        image: "https://images.unsplash.com/photo-1768463852120-9360d0e39912?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md shadow-sm rounded-full 
        text-[10px] font-medium uppercase tracking-widest text-flyout-gold ring-1 ring-white/50">
                    {item.category}
                </span>
            </div>

            {/* Date Badge */}
            <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full 
        text-[10px] font-light text-neutral-900 tracking-[0.2em] flex items-center gap-1.5 border border-white/40">
                    <Calendar className="w-3 h-3 text-flyout-gold" />
                    {item.date}
                </span>
            </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6">
            <div className="flex items-center gap-2 mb-3 text-flyout-gold/90">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span className="text-xs font-medium tracking-wide text-neutral-500 uppercase">
                    Live in City
                </span>
            </div>

            <h3 className="font-serif text-2xl text-neutral-900 mb-2 leading-tight group-hover:text-flyout-gold transition-colors duration-300 line-clamp-2">
                {item.title}
            </h3>

            <div className="flex items-center gap-1.5 text-sm text-neutral-500 mb-5 font-light">
                <MapPin className="w-3.5 h-3.5 text-flyout-gold/70" />
                <span className="line-clamp-1">{item.location}</span>
            </div>

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between pt-5 border-t border-neutral-100/60">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 mb-0.5">Tickets from</span>
                    <span className="text-lg font-medium font-serif text-flyout-blue">{item.price}</span>
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

export const EventsEntertainmentSection = () => {
    const [api, setApi] = useState<CarouselApi>();

    return (
        <section className="relative pt-20 md:pt-28 pb-24 bg-white overflow-hidden">
            <div className="absolute inset-0 bg-white pointer-events-none" />

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
