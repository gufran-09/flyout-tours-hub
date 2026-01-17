import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Star, Clock, ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

export interface Tour {
  id: string;
  name: string;
  location: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  duration: string;
  image: string;
  badge?: string;
}

interface TourCardProps {
  tour: Tour;
  index?: number;
}

export function TourCard({ tour, index = 0 }: TourCardProps) {
  const { addToCart } = useCart();
  const discount = tour.originalPrice
    ? Math.round(((tour.originalPrice - tour.price) / tour.originalPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(tour);
    toast.success(`${tour.name} added to cart`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="tour-card overflow-hidden group">
        {/* Image Container */}
        <Link to={`/tour/${tour.id}`} className="block">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={tour.image}
              alt={tour.name}
              className="tour-card-image w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-card opacity-60" />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex gap-2">
              {tour.badge && (
                <span className="badge-offer">{tour.badge}</span>
              )}
              {discount > 0 && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-destructive text-destructive-foreground">
                  {discount}% OFF
                </span>
              )}
            </div>

            {/* Category Badge */}
            <div className="absolute top-3 right-3">
              <span className="badge-category bg-background/90 backdrop-blur-sm">
                {tour.category}
              </span>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-3 left-3 right-3">
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <MapPin className="h-4 w-4" />
                <span>{tour.location}</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Content */}
        <div className="p-4">
          <Link to={`/tour/${tour.id}`}>
            <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {tour.name}
            </h3>
          </Link>

          <div className="flex items-center gap-4 mb-3">
            {/* Rating */}
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-gold text-gold" />
              <span className="font-medium text-sm">{tour.rating}</span>
              <span className="text-muted-foreground text-sm">
                ({tour.reviewCount})
              </span>
            </div>

            {/* Duration */}
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <Clock className="h-4 w-4" />
              <span>{tour.duration}</span>
            </div>
          </div>

          {/* Price & Actions */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm text-muted-foreground">From</span>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-primary">
                  AED {tour.price}
                </span>
                {tour.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    AED {tour.originalPrice}
                  </span>
                )}
              </div>
            </div>
            <Button
              size="sm"
              onClick={handleAddToCart}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <ShoppingCart className="mr-1 h-4 w-4" />
              Add
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface ExperienceSectionProps {
  title: string;
  subtitle?: string;
  tours: Tour[];
  viewMoreLink: string;
  className?: string;
}

export function ExperienceSection({
  title,
  subtitle,
  tours,
  viewMoreLink,
  className,
}: ExperienceSectionProps) {
  return (
    <section className={cn("py-16", className)}>
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h2>
            {subtitle && (
              <p className="text-muted-foreground">{subtitle}</p>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to={viewMoreLink}>
              <Button
                variant="outline"
                className="mt-4 sm:mt-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.slice(0, 4).map((tour, index) => (
            <TourCard key={tour.id} tour={tour} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
