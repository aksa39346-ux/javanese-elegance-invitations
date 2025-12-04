import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import heroCouple from "@/assets/hero-couple.jpg";
import batikPattern from "@/assets/batik-pattern.jpg";
import { JawaOrnament } from "./JawaOrnament";

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${batikPattern})`,
        backgroundSize: '200px',
        backgroundRepeat: 'repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      
      <div 
        ref={ref}
        className={cn(
          "relative z-10 container max-w-4xl mx-auto px-4 py-12 text-center",
          isVisible ? "animate-fade-up" : "opacity-0"
        )}
      >
        <JawaOrnament variant="top" className="mb-8 max-w-xs mx-auto" />
        
        {/* The Wedding Of */}
        <p className="text-accent font-lato tracking-[0.3em] uppercase text-sm mb-4">
          The Wedding Of
        </p>

        {/* Photo Frame */}
        <div className="relative mx-auto w-64 h-80 md:w-80 md:h-96 mb-8">
          {/* Decorative corners */}
          <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-accent" />
          <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-accent" />
          <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-accent" />
          <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-accent" />
          
          {/* Photo */}
          <div className="w-full h-full overflow-hidden border-4 border-cream-dark">
            <img
              src={heroCouple}
              alt="Rama & Shinta"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Names */}
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-primary mb-4">
          <span className="block">Rama</span>
          <span className="text-accent text-3xl md:text-4xl">&</span>
          <span className="block">Shinta</span>
        </h1>

        {/* Date */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="h-px w-12 bg-accent/50" />
          <p className="font-playfair text-lg md:text-xl text-brown-light italic">
            14 Februari 2025
          </p>
          <div className="h-px w-12 bg-accent/50" />
        </div>

        <JawaOrnament variant="bottom" className="mt-8 max-w-xs mx-auto" />

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 bg-accent rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
