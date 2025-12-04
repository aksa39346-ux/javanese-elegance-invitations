import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { JawaOrnament } from "./JawaOrnament";
import { Calendar, Clock, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  address: string;
  mapsUrl: string;
  delay?: string;
}

function EventCard({ title, date, time, location, address, mapsUrl, delay }: EventCardProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={cn(
        "elegant-card text-center",
        isVisible ? "animate-scale-in" : "opacity-0"
      )}
      style={{ animationDelay: delay }}
    >
      <h3 className="font-playfair text-2xl md:text-3xl text-primary mb-6">
        {title}
      </h3>

      <JawaOrnament className="mb-6 scale-75" />

      <div className="space-y-4">
        <div className="flex items-center justify-center gap-3 text-foreground">
          <Calendar size={20} className="text-accent" />
          <span className="font-lato">{date}</span>
        </div>

        <div className="flex items-center justify-center gap-3 text-foreground">
          <Clock size={20} className="text-accent" />
          <span className="font-lato">{time}</span>
        </div>

        <div className="flex flex-col items-center gap-2 text-foreground">
          <div className="flex items-center gap-3">
            <MapPin size={20} className="text-accent" />
            <span className="font-lato font-semibold">{location}</span>
          </div>
          <p className="text-muted-foreground text-sm font-lato max-w-xs">
            {address}
          </p>
        </div>
      </div>

      <Button
        variant="outline"
        className="mt-6 border-accent text-accent hover:bg-accent hover:text-primary-foreground"
        onClick={() => window.open(mapsUrl, '_blank')}
      >
        <ExternalLink size={16} className="mr-2" />
        Buka Google Maps
      </Button>
    </div>
  );
}

export function EventSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-cream">
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
            Waktu & Tempat
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-primary">
            Acara Pernikahan
          </h2>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <EventCard
            title="Akad Nikah"
            date="Jumat, 14 Februari 2025"
            time="08:00 - 10:00 WIB"
            location="Pendopo Agung"
            address="Jl. Malioboro No. 123, Yogyakarta, DIY 55271"
            mapsUrl="https://maps.google.com/?q=Pendopo+Agung+Yogyakarta"
          />
          
          <EventCard
            title="Resepsi"
            date="Jumat, 14 Februari 2025"
            time="11:00 - 14:00 WIB"
            location="Pendopo Agung"
            address="Jl. Malioboro No. 123, Yogyakarta, DIY 55271"
            mapsUrl="https://maps.google.com/?q=Pendopo+Agung+Yogyakarta"
            delay="200ms"
          />
        </div>
      </div>
    </section>
  );
}
