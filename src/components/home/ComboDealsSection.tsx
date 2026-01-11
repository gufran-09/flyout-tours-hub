import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Percent, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const comboDeals = [
  {
    id: "combo-1",
    title: "Dubai Ultimate Experience",
    description: "Desert Safari + Burj Khalifa + Dubai Frame - 3 Day Package",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    originalPrice: 899,
    discountedPrice: 649,
    discount: 28,
    validUntil: "Limited Time",
  },
  {
    id: "combo-2",
    title: "Water Adventure Bundle",
    description: "Jet Ski + Flyboarding + Parasailing - Full Day Package",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    originalPrice: 750,
    discountedPrice: 550,
    discount: 27,
    validUntil: "This Week Only",
  },
  {
    id: "combo-3",
    title: "Luxury Dubai Tour",
    description: "Yacht Tour + Helicopter Ride + Limousine City Tour",
    image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=800&q=80",
    originalPrice: 2499,
    discountedPrice: 1899,
    discount: 24,
    validUntil: "Special Offer",
  },
];

export function ComboDealsSection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-primary font-medium mb-2">
              <Percent className="h-5 w-5" />
              Special Offers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              Combo Deals & Packages
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Save more with our exclusive combo packages. Bundle your favorite 
              experiences for the best value.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/deals">
              <Button
                variant="outline"
                className="mt-4 sm:mt-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View All Deals
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {comboDeals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link to={`/deal/${deal.id}`} className="block group">
                <div className="relative bg-card rounded-3xl overflow-hidden shadow-card card-hover">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-card" />

                    {/* Discount Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-4 py-2 rounded-full bg-destructive text-destructive-foreground font-bold text-lg">
                        {deal.discount}% OFF
                      </span>
                    </div>

                    {/* Valid Until */}
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm text-sm font-medium">
                        <Clock className="h-4 w-4 text-primary" />
                        {deal.validUntil}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {deal.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {deal.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm text-muted-foreground line-through">
                          AED {deal.originalPrice}
                        </span>
                        <p className="text-2xl font-bold text-primary">
                          AED {deal.discountedPrice}
                        </p>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
