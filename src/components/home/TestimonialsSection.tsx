import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "United Kingdom",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 5,
    text: "Absolutely amazing experience! The desert safari was the highlight of our trip. The team was professional and made us feel so welcome.",
    tour: "Desert Safari",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Singapore",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    text: "The yacht tour was luxurious and the views of Dubai Marina were breathtaking. Highly recommend Flyout Tours for premium experiences!",
    tour: "Yacht Tour",
  },
  {
    id: 3,
    name: "Emma Williams",
    location: "Australia",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    rating: 5,
    text: "Burj Khalifa at sunset was magical. The booking process was smooth and the guide was incredibly knowledgeable about Dubai's history.",
    tour: "Burj Khalifa Tour",
  },
  {
    id: 4,
    name: "Ahmed Hassan",
    location: "Egypt",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    text: "Best water sports experience ever! From jet skiing to flyboarding, every moment was thrilling. The instructors were fantastic.",
    tour: "Water Sports Package",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
<<<<<<< HEAD
            Don't just take our word for it. Here's what tourists from around the world
=======
            Don't just take our word for it. Here's what tourists from around the world 
>>>>>>> 60d4dfb783a5b22e37f11b9b9f4195113a978a96
            have to say about their UAE adventures with Flyout Tours.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card card-hover"
            >
              {/* Quote Icon */}
              <Quote className="h-8 w-8 text-primary/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground text-sm mb-6 line-clamp-4">
                "{testimonial.text}"
              </p>

              {/* Tour Badge */}
              <span className="badge-category mb-4 inline-block">
                {testimonial.tour}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "50K+", label: "Happy Tourists" },
            { value: "200+", label: "Tours & Experiences" },
            { value: "4.9", label: "Average Rating" },
            { value: "24/7", label: "Customer Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
