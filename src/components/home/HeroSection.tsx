import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative pb-8 lg:pb-12 -mt-4 lg:-mt-8">
      <div className="section-container">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/9] lg:aspect-[21/9]">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://bfzhzxyjjkcctxnmzafb.supabase.co/storage/v1/object/public/Hero-Video/Video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 sm:p-12">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
              Discover Dubai's Magic
            </h1>
            <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-xl drop-shadow-lg font-medium">
              Curated luxury experiences, crafted for unforgettable journeys.
            </p>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#B88E2F] to-[#ffd700] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-[#0A1F44] to-[#1A2B47] text-white text-lg px-10 py-7 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.25)] ring-1 ring-white/10 hover:ring-[#B88E2F]/80 transition-all duration-700 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(184,142,47,0.3)] overflow-hidden"
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
