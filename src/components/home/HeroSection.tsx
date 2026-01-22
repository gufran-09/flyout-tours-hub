import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-section.mp4";

export function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden -mt-20">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Hero-Video/Hero-Section%20(2).mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative h-full section-container flex flex-col justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Discover Dubai's Magic
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl">
            Experience the city of wonders with exclusive tours and adventures
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
          >
            Explore Dubai
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
