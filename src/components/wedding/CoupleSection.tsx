import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { JawaOrnament } from "./JawaOrnament";
import groomImage from "@/assets/groom.jpg";
import brideImage from "@/assets/bride.jpg";
import { Instagram } from "lucide-react";

interface CoupleCardProps {
  image: string;
  name: string;
  fullName: string;
  parents: string;
  instagram?: string;
  delay?: string;
}

function CoupleCard({ image, name, fullName, parents, instagram, delay }: CoupleCardProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={cn(
        "flex flex-col items-center text-center",
        isVisible ? "animate-fade-up" : "opacity-0",
        delay
      )}
      style={{ animationDelay: delay }}
    >
      {/* Photo Frame */}
      <div className="relative w-48 h-60 md:w-56 md:h-72 mb-6">
        <div className="absolute inset-0 border-2 border-accent/30 -rotate-3" />
        <div className="absolute inset-0 border-2 border-accent/30 rotate-3" />
        <div className="relative w-full h-full overflow-hidden border-4 border-cream">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="font-playfair text-3xl md:text-4xl text-primary mb-2">
        {name}
      </h3>
      
      <p className="font-lato text-foreground mb-2">
        {fullName}
      </p>

      <JawaOrnament className="my-3 scale-75" />

      <p className="text-muted-foreground text-sm font-lato">
        {parents}
      </p>

      {instagram && (
        <a
          href={`https://instagram.com/${instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
        >
          <Instagram size={18} />
          <span className="text-sm font-lato">@{instagram}</span>
        </a>
      )}
    </div>
  );
}

export function CoupleSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={ref}
          className={cn(
            "text-center mb-12",
            isVisible ? "animate-fade-up" : "opacity-0"
          )}
        >
          <p className="text-accent font-lato tracking-[0.2em] uppercase text-sm mb-2">
            Mempelai
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-primary">
            Calon Pengantin
          </h2>
        </div>

        {/* Couple Cards */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-8">
          <CoupleCard
            image={groomImage}
            name="Rama Wijaya"
            fullName="Rama Wijaya Kusuma, S.T."
            parents="Putra dari Bapak Dasarata & Ibu Kausalya"
            instagram="rama.wijaya"
          />
          
          {/* & Symbol for desktop */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="font-playfair text-6xl text-accent/30">&</span>
          </div>
          
          {/* & Symbol for mobile */}
          <div className="flex md:hidden items-center justify-center -my-4">
            <span className="font-playfair text-4xl text-accent">&</span>
          </div>
          
          <CoupleCard
            image={brideImage}
            name="Shinta Dewi"
            fullName="Shinta Dewi Rahayu, S.Pd."
            parents="Putri dari Bapak Janaka & Ibu Tara"
            instagram="shinta.dewi"
            delay="200ms"
          />
        </div>
      </div>
    </section>
  );
}
