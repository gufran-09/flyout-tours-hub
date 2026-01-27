
import React from "react";
import { motion } from "framer-motion";
import { Star, Flame, Users, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

// Data for Most Booked Experiences
const mostBookedItems = [
    {
        id: 1,
        title: "Desert Safari with BBQ Dinner",
        location: "Dubai Desert Conservation Reserve",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=800", // Desert Landscape
        price: "AED 150",
        rating: 4.9,
        reviews: "12.5k",
        booked: "50k+",
        tag: "Best Seller",
        duration: "6 Hours",
        link: "/safari/evening-safari"
    },
    {
        id: 2,
        title: "Atlantis Aquaventure Waterpark",
        location: "Palm Jumeirah",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=800", // Waterpark/Pool
        price: "AED 345",
        rating: 4.8,
        reviews: "8.2k",
        booked: "35k+",
        tag: "Trending",
        duration: "Full Day",
        link: "/dubai/water-parks/atlantis"
    },
    {
        id: 3,
        title: "Marina Dinner Cruise",
        location: "Dubai Marina",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=800", // Marina Boat - Reused but popular
        price: "AED 200",
        rating: 4.7,
        reviews: "5.4k",
        booked: "20k+",
        tag: "Must Try",
        duration: "2 Hours",
        link: "/dubai/dinner-cruise/marina"
    },
    {
        id: 4,
        title: "Burj Khalifa Observation Deck",
        location: "Downtown Dubai",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=800", // Burj
        price: "AED 179",
        rating: 4.9,
        reviews: "25k+",
        booked: "100k+",
        tag: "Iconic",
        duration: "1.5 Hours",
        link: "/dubai/attractions/burj-khalifa"
    },
    {
        id: 5,
        title: "Jet Ski Tour",
        location: "Jumeirah Beach",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=800", // Jet Ski
        price: "AED 350",
        rating: 4.8,
        reviews: "3.1k",
        booked: "10k+",
        tag: "Thrilling",
        duration: "1 Hour",
        link: "/dubai/water-sports/jet-ski"
    },
    {
        id: 6,
        title: "Ferrari World Abu Dhabi",
        location: "Yas Island, Abu Dhabi",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&w=800", // Theme Park/Coaster
        price: "AED 345",
        rating: 4.9,
        reviews: "9.8k",
        booked: "45k+",
        tag: "Popular",
        duration: "Full Day",
        link: "/abu-dhabi/ferrari-world"
    }
];

const MostBookedCard = ({ item }: { item: typeof mostBookedItems[0] }) => (
    <Link to={item.link} className="group relative flex flex-col h-full bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/10 hover:shadow-[0_20px_40px_-15px_rgba(184,142,47,0.2)] hover:border-flyout-gold/50 transition-all duration-300 hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
            <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Tag Badge */}
            <div className="absolute top-3 left-3 flex gap-2">
                <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm shadow-sm rounded-md text-xs font-bold text-gray-900 flex items-center gap-1 uppercase tracking-wider">
                    {item.tag === "Best Seller" && <Flame className="w-3 h-3 text-orange-500 fill-orange-500" />}
                    {item.tag}
                </span>
            </div>
            {/* Booked Badge */}
            <div className="absolute bottom-3 left-3">
                <span className="px-2 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-medium text-white flex items-center gap-1">
                    <Users className="w-3 h-3 text-flyout-gold" />
                    {item.booked} booked
                </span>
            </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-5">
            <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="text-sm font-bold text-white">{item.rating}</span>
                    <span className="text-xs text-white/50">({item.reviews})</span>
                </div>
            </div>

            <h3 className="font-semibold text-lg text-white mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                {item.title}
            </h3>

            <p className="text-sm text-white/60 mb-4 line-clamp-1">
                {item.location}
            </p>

            <div className="flex items-center gap-3 text-xs text-white/50 mb-4">
                <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {item.duration}
                </div>
            </div>

            <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex flex-col">
                    <span className="text-xs text-white/50">From</span>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-flyout-gold group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </div>
    </Link>
);

export const MostBookedSection = () => {
    return (
        <section className="py-24 bg-neutral-900 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/30 via-neutral-900 to-neutral-900 pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none opacity-50" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-flyout-gold font-medium text-sm md:text-base tracking-[0.2em] uppercase mb-2">
                            Social Proof
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-serif text-white tracking-tight leading-tight">
                            Most Booked on Flyout
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="hidden md:flex items-center gap-2 mt-4 md:mt-0"
                    >
                        <span className="text-sm text-white/60">
                            Join 500,000+ happy travelers
                        </span>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Carousel
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 py-4">
                            {mostBookedItems.map((item) => (
                                <CarouselItem key={item.id} className="pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                                    <MostBookedCard item={item} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-end gap-2 mt-8 mr-1">
                            <CarouselPrevious className="static translate-y-0 h-10 w-10 border-white/10 bg-white/5 hover:bg-white/10 text-white disabled:opacity-30" />
                            <CarouselNext className="static translate-y-0 h-10 w-10 border-white/10 bg-white/5 hover:bg-white/10 text-white disabled:opacity-30" />
                        </div>
                    </Carousel>
                </motion.div>
            </div>
        </section>
    );
};

export default MostBookedSection;
