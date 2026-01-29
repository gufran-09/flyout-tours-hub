import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight, Star, Flame, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CurrencySymbol } from "@/components/ui/CurrencySymbol";

// Data
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
                    <span className="text-lg font-medium font-serif text-neutral-900 flex items-center gap-1">
                        <CurrencySymbol className="w-4 h-4" /> {item.price.replace("AED", "").trim()}
                    </span>
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

const PopularPage = () => {
    return (
        <div className="min-h-screen bg-neutral-50 flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4">Most Booked Experiences</h1>
                        <p className="text-neutral-500 text-lg font-light max-w-2xl">
                            Discover the most popular and highly-rated experiences chosen by travelers.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {mostBookedItems.map((item) => (
                            <MostBookedCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PopularPage;
