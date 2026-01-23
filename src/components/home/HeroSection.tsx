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
          <div className="absolute inset-0 bg-black/20" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 sm:p-12">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-md">
              Discover Dubai's Magic
            </h1>
            <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-xl drop-shadow-sm">
              Experience the city of wonders with exclusive tours and adventures
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg transition-transform hover:scale-105"
            >
              Explore Dubai
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
