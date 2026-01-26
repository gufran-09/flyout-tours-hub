import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative pb-8 lg:pb-12 -mt-4 lg:-mt-8">
      <div className="section-container">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/9] lg:aspect-[21/9]">
          <video
            className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-105"
            src="https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Hero-Video/Video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Cinematic Overlays */}
          {/* Dark Top Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/60 z-10" />

          {/* Soft Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-10" />

          {/* Warm Tint */}
          <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay z-10" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 sm:p-12 z-20">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
              Discover Dubai's Magic
            </h1>
            <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-xl drop-shadow-lg font-medium leading-relaxed">
              Curated luxury experiences, crafted for unforgettable journeys.
            </p>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#B88E2F] to-[#ffd700] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Button
                size="lg"
                className="relative bg-[#0A1F44] text-white text-lg px-10 py-7 rounded-full shadow-lg ring-1 ring-white/10 hover:ring-[#B88E2F] hover:bg-[#0A1F44]/90 transition-all duration-300 hover:-translate-y-1 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Dubai
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
