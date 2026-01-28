import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Star, Flame, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

// Data for Most Booked Experiences
const mostBookedItems = [
    {
        id: 1,
        title: "Desert Safari with BBQ Dinner",
        location: "Dubai Desert Conservation Reserve",
        image: "https://images.unsplash.com/photo-1695878868496-fcbd6ef47f57?q=80&w=687&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1604375318488-4bf6119edb15?q=80&w=1176&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1768367475215-22e0d8ebdadb?q=80&w=1632&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1590082487384-fc2290e36718?q=80&w=657&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1688219040240-df6398321243?q=80&w=1149&auto=format&fit=crop",
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
        image: "https://images.unsplash.com/photo-1723815264488-a906461c770f?q=80&w=687&auto=format&fit=crop",
        price: "AED 345",
        rating: 4.9,
        reviews: "9.8k",
        booked: "45k+",
        tag: "Popular",
        duration: "Full Day",
        link: "/abu-dhabi/ferrari-world"
    }
];

// Standardized Card Component (Matching LuxuryExperiencesSection)
const MostBookedCard = ({ item }: { item: typeof mostBookedItems[0] }) => (
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

            {/* Tag Badge */}
            <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-md shadow-sm rounded-full 
        text-[10px] font-medium uppercase tracking-widest text-flyout-gold ring-1 ring-white/50 flex items-center gap-1.5">
                    {item.tag === "Best Seller" && <Flame className="w-3 h-3 text-orange-500/80" />}
                    {item.tag}
                </span>
            </div>

            {/* Booked Count Badge */}
            <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-white/80 backdrop-blur-md rounded-full 
        text-[10px] font-light text-neutral-900 tracking-[0.2em] flex items-center gap-1.5 border border-white/40">
                    <Users className="w-3 h-3 text-flyout-gold" />
                    {item.booked} BOOKED
                </span>
            </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-6">
            <div className="flex items-center gap-2 mb-3 text-flyout-gold/90">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="text-sm font-bold text-neutral-900">{item.rating}</span>
                <span className="text-xs text-neutral-400 font-light">({item.reviews})</span>
            </div>

            <h3 className="font-serif text-2xl text-neutral-900 mb-2 leading-tight group-hover:text-flyout-gold transition-colors duration-300 line-clamp-2">
                {item.title}
            </h3>

            <p className="text-sm text-neutral-500 mb-5 line-clamp-1 font-light">{item.location}</p>

            <div className="flex items-center gap-3 text-xs text-neutral-400 mb-5 font-light tracking-wide">
                <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-flyout-gold/70" />
                    {item.duration}
                </div>
                <span className="w-1 h-1 rounded-full bg-neutral-300" />
                <span>Best Price Guarantee</span>
            </div>

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between pt-5 border-t border-neutral-100/60">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 mb-0.5">From</span>
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

export const MostBookedSection = () => {
    const [api, setApi] = useState<CarouselApi>();

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-50 via-white to-white pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionHeader
                    title="Most Booked on Flyout"
                    label="Social Proof"
                    description="Join 500,000+ happy travelers and explore our most popular experiences."
                    onPrev={() => api?.scrollPrev()}
                    onNext={() => api?.scrollNext()}
                    viewMoreLink="/popular"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Carousel
                        setApi={setApi}
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
                    </Carousel>
                </motion.div>
            </div>
        </section>
    );
};

export default MostBookedSection;
