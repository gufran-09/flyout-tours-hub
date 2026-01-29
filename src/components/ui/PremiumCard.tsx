import React from "react";
import { motion } from "framer-motion";
import { MapPin, Star, ArrowUpRight, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { CurrencySymbol } from "./CurrencySymbol";

export interface PremiumCardProps {
    id: string | number;
    title: string;
    image: string;
    location: string;
    price: number | string;
    originalPrice?: number | string;
    category?: string;
    rating?: number;
    badge?: string;
    subtitle?: string;
    className?: string;
    link?: string;
}

export const PremiumCard = ({
    id,
    title,
    image,
    location,
    price,
    originalPrice,
    category,
    rating,
    badge,
    subtitle,
    className,
    link = "#",
}: PremiumCardProps) => {
    // Format price if it's a number
    const formattedPrice = typeof price === "number" ? price.toLocaleString() : price;
    const formattedOriginalPrice =
        typeof originalPrice === "number" ? originalPrice.toLocaleString() : originalPrice;

    return (
        <Link to={link} className={cn("block group relative h-full", className)}>
            <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                // Fixed height card container: 480px total
                className="relative h-[480px] w-full overflow-hidden rounded-[20px] bg-white shadow-luxury hover:shadow-luxury-hover border border-neutral-100/80 transition-shadow duration-500 flex flex-col"
            >
                {/* --- Image Section (Fixed Height) --- */}
                <div className="relative h-[280px] w-full shrink-0 overflow-hidden">
                    <motion.img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay for Text Contrast on Image Bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-80" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                        {badge && (
                            <span className="px-3 py-1 bg-white/95 backdrop-blur-md shadow-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-[#0A1F44] border border-white/20">
                                {badge}
                            </span>
                        )}
                    </div>

                    {/* Category Label (Glassmorphism) */}
                    {category && (
                        <div className="absolute top-4 right-4">
                            <span className="px-3 py-1 bg-[#0A1F44]/80 backdrop-blur-md shadow-sm rounded-full text-[10px] font-medium uppercase tracking-widest text-flyout-gold border border-white/10 flex items-center gap-1.5">
                                <Crown className="w-3 h-3 text-flyout-gold" />
                                {category}
                            </span>
                        </div>
                    )}
                </div>

                {/* --- Content Section (Grid Layout) --- */}
                {/* 
                    Grid definition: 
                    Row 1: Location (approx 20px)
                    Row 2: Title (approx 56px - 2 lines leading strict)
                    Row 3: Subtitle (approx 16px - 1 line)
                    Row 4: Rating (approx 20px)
                    Row 5: Spacer (1fr)
                    Row 6: Footer (approx 40px)
                */}
                <div className="p-5 grid grid-rows-[20px_56px_20px_24px_1fr_auto] h-[200px] gap-y-1">

                    {/* Row 1: Location Pin */}
                    <div className="flex items-center gap-1.5 text-neutral-400 overflow-hidden">
                        <MapPin className="w-3.5 h-3.5 text-flyout-gold shrink-0" />
                        <span className="text-xs font-medium uppercase tracking-wide truncate">
                            {location || "Dubai, United Arab Emirates"}
                        </span>
                    </div>

                    {/* Row 2: Title (Strict 2 lines) */}
                    <div className="flex items-center">
                        <h3 className="font-display text-[22px] text-[#0A1F44] leading-tight group-hover:text-flyout-gold transition-colors duration-300 line-clamp-2 w-full">
                            {title}
                        </h3>
                    </div>

                    {/* Row 3: Subtitle (Strict 1 line reserved) */}
                    <div className="flex items-center">
                        {subtitle ? (
                            <p className="text-xs text-neutral-500 font-medium line-clamp-1 w-full">
                                {subtitle}
                            </p>
                        ) : (
                            // Reserved space placeholder
                            <div className="h-2" />
                        )}
                    </div>

                    {/* Row 4: Rating (Strict height reserved) */}
                    <div className="flex items-center">
                        {rating ? (
                            <div className="flex items-center gap-1">
                                <Star className="w-3.5 h-3.5 fill-flyout-gold text-flyout-gold" />
                                <span className="text-sm font-semibold text-neutral-900">{rating}</span>
                                <span className="text-xs text-neutral-400 font-medium ml-1">Premium Experience</span>
                            </div>
                        ) : (
                            // Reserved space placeholder if needed, or just leave empty but takes space
                            <div className="h-3 md:h-4" />
                        )}
                    </div>

                    {/* Row 5: Spacer */}
                    <div className="min-h-0" />

                    {/* Row 6: Footer: Price & CTA (Fixed bottom alignment via grid) */}
                    <div className="flex items-end justify-between pt-2 border-t border-neutral-100">
                        <div className="flex flex-col justify-end">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-0.5 leading-none">
                                Starting from
                            </span>
                            <div className="flex items-center gap-2 h-7">
                                <p className="text-xl font-bold text-[#0A1F44] font-display flex items-center">
                                    <img src="/currency-symbol.png" alt="AED" className="h-4 w-auto mr-1" />
                                    {formattedPrice}
                                </p>
                                {formattedOriginalPrice && (
                                    <span className="text-xs text-neutral-400 line-through decoration-neutral-300 flex items-center">
                                        <img src="/currency-symbol.png" alt="AED" className="h-2.5 w-auto mr-0.5 opacity-60 grayscale" />
                                        {formattedOriginalPrice}
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-[#0A1F44] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl hover:bg-[#0A1F44]/90 transition-all flex items-center gap-2 group/btn h-9"
                        >
                            Explore
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};
