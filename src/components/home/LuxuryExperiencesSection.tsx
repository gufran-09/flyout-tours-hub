import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Star, Crown, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

// ---------------- DATA ----------------

const luxuryExperiences = [
    {
        id: 1,
        title: "Royal Desert Safari",
        subtitle: "with Butler Service",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200",
        price: "AED 1,500",
        tag: "Signature",
        link: "/safari/royal-desert-safari",
    },
    {
        id: 2,
        title: "Burj Khalifa VIP",
        subtitle: "Private Sky Lounge Experience",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200",
        price: "AED 2,800",
        tag: "Exclusive",
        link: "/dubai/burj-khalifa-vip",
    },
    {
        id: 3,
        title: "Sunset Yacht Party",
        subtitle: "with Live DJ",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200",
        price: "AED 350",
        tag: "Trending",
        link: "/yacht/sunset-party",
    },
    {
        id: 4,
        title: "Helicopter Tour",
        subtitle: "+ Atlantis Lunch",
        image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1200",
        price: "AED 1,200",
        tag: "Best Seller",
        link: "/sky-adventures/helicopter",
    },
    {
        id: 5,
        title: "VIP Ferrari World",
        subtitle: "+ Yas Marina Drive",
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200",
        price: "AED 950",
        tag: "Thrilling",
        link: "/parks/ferrari-world-vip",
    },
    {
        id: 6,
        title: "Private Limousine",
        subtitle: "City Tour Experience",
        image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=1200",
        price: "AED 600",
        tag: "Luxury",
        link: "/transfers/limousine",
    },
];

// ---------------- CARD ----------------

const LuxuryCard = ({ item }: { item: typeof luxuryExperiences[0] }) => (
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

            {/* Tag */}
            <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-white/95 backdrop-blur-sm shadow rounded-full 
        text-[11px] font-semibold uppercase tracking-wider text-flyout-gold border border-flyout-gold/30">
                    {item.tag}
                </span>
            </div>

            {/* Luxury badge */}
            <div className="absolute bottom-3 left-3">
                <span className="px-2.5 py-1 bg-black/70 backdrop-blur-md rounded-full 
        text-[10px] font-medium text-white flex items-center gap-1">
                    <Crown className="w-3 h-3 text-flyout-gold" />
                    Premium Experience
                </span>
            </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-5">
            <div className="flex items-center gap-2 mb-2 text-flyout-gold">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-medium text-neutral-800">
                    Luxury Collection
                </span>
            </div>

            <h3 className="font-serif text-xl text-neutral-900 mb-1 leading-snug group-hover:text-primary transition-colors">
                {item.title}
            </h3>

            <p className="text-sm text-neutral-500 mb-4">{item.subtitle}</p>

            <div className="flex items-center gap-2 text-xs text-neutral-500 mb-4">
                <div className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Private access
                </div>
                <span>•</span>
                <span>Curated host</span>
            </div>

            {/* Footer */}
            <div className="mt-auto flex items-center justify-between pt-4 border-t border-neutral-100">
                <div className="flex flex-col">
                    <span className="text-xs text-neutral-400">From</span>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                    <span className="text-[11px] text-neutral-400">per experience</span>
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

// ---------------- SECTION ----------------

export const LuxuryExperiencesSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-neutral-50 via-white to-white pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="mb-16 max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-flyout-gold font-medium text-sm tracking-[0.25em] uppercase mb-3 text-left"
                    >
                        The Luxury Collection
                    </motion.h2>

                    <motion.h3
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif text-neutral-900 mb-6 text-left"
                    >
                        Signature Experiences
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-neutral-600 text-lg font-light leading-relaxed text-left"
                    >
                        Indulge in aspirational journeys crafted for discerning travelers.
                        From private yachts to royal desert retreats.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {luxuryExperiences.map((experience, index) => (
                        <motion.div
                            key={experience.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <LuxuryCard item={experience} />
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link to="/luxury">
                        <button className="group inline-flex h-12 items-center justify-center rounded-md border border-neutral-200 px-8 font-medium text-neutral-900 transition hover:bg-neutral-50 hover:border-neutral-300">
                            <span className="mr-2">Explore All Luxury Experiences</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LuxuryExperiencesSection;
