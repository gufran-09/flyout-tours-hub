
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Star, ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

export interface TourCardProps {
    id: string;
    title: string;
    image: string;
    price: number;
    originalPrice?: number;
    rating?: number;
    reviews?: number;
    duration?: string;
    badge?: string;
    className?: string;
    location?: string;
}

export function AdvancedTourCard({
    id,
    title,
    image,
    price,
    originalPrice,
    rating,
    reviews,
    duration,
    badge,
    className,
    location,
}: TourCardProps) {
    const { addToCart } = useCart();

    const discount = originalPrice
        ? Math.round(((originalPrice - price) / originalPrice) * 100)
        : 0;

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart({
            id,
            name: title,
            price,
            originalPrice,
            image,
            location: location || "Dubai", // Default or passed prop
            rating: rating || 0,
            reviewCount: reviews || 0,
            duration: duration || "",
            category: "Tour", // Default
        });
        toast.success(`${title} added to cart`);
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn("group relative h-[420px] w-full overflow-visible rounded-3xl", className)}
        >
            <Link to={`/tour/${id}`} className="block h-full w-full">
                {/* Background Image */}
                <div className="absolute inset-0 h-full w-full">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-70" />
                </div>

                {/* Badges */}
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    {badge && (
                        <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black shadow-sm">
                            {badge}
                        </span>
                    )}
                    {discount > 0 && (
                        <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
                            {discount}% OFF
                        </span>
                    )}
                </div>

                {/* Content - Glassmorphism Card */}
                <div className="absolute bottom-4 left-4 right-4">
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 group-hover:bg-white/20 hover:border-white/20 shadow-lg">
                        {/* Rating & Location */}
                        <div className="mb-2 flex items-center justify-between text-xs text-white/90">
                            <div className="flex items-center gap-1">
                                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                                <span className="font-medium">{rating}</span>
                                <span className="text-white/60">({reviews})</span>
                            </div>
                            {duration && (
                                <div className="flex items-center gap-1">
                                    <Clock className="h-3.5 w-3.5" />
                                    <span>{duration}</span>
                                </div>
                            )}
                        </div>

                        {/* Title */}
                        <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-tight text-white group-hover:text-yellow-400 transition-colors">
                            {title}
                        </h3>

                        {/* Price & Action */}
                        <div className="flex items-end justify-between">
                            <div>
                                <span className="text-xs text-white/60">Starting from</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-xl font-bold text-white">
                                        AED {price}
                                    </span>
                                    {originalPrice && (
                                        <span className="text-sm text-white/50 line-through">
                                            AED {originalPrice}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <Button
                                size="icon"
                                onClick={handleAddToCart}
                                className="h-10 w-10 rounded-full bg-white text-black hover:bg-yellow-400 hover:text-black transition-colors shadow-md"
                            >
                                <ShoppingCart className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
