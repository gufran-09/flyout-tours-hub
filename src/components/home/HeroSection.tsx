import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative pb-8 lg:pb-12 -mt-4 lg:-mt-8">
      <div className="section-container">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/9] lg:aspect-[21/9]">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Hero-Video/Hero-Section%20(2).mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 sm:p-12">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
              Discover Dubai's Magic
            </h1>
            <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-xl drop-shadow-lg font-medium">
              Experience the city of wonders with exclusive tours and adventures
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Explore Dubai

            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
