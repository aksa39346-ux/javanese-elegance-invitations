import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { JawaOrnament } from "./JawaOrnament";
import { useState, useEffect } from "react";

interface TimeUnit {
  value: number;
  label: string;
}

function CountdownUnit({ value, label }: TimeUnit) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mb-2 shadow-lg">
        <span className="font-playfair text-2xl md:text-3xl">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-muted-foreground font-lato text-xs md:text-sm uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export function CountdownSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date('2025-02-14T08:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div 
        ref={ref}
        className={cn(
          "container max-w-3xl mx-auto px-4 text-center",
          isVisible ? "animate-fade-up" : "opacity-0"
        )}
      >
        <p className="text-accent font-lato tracking-[0.2em] uppercase text-sm mb-2">
          Hitung Mundur
        </p>
        <h2 className="font-playfair text-3xl md:text-4xl text-primary mb-8">
          Menuju Hari Bahagia
        </h2>

        <JawaOrnament className="mb-10" />

        <div className="flex justify-center gap-4 md:gap-8">
          <CountdownUnit value={timeLeft.days} label="Hari" />
          <CountdownUnit value={timeLeft.hours} label="Jam" />
          <CountdownUnit value={timeLeft.minutes} label="Menit" />
          <CountdownUnit value={timeLeft.seconds} label="Detik" />
        </div>

        <p className="mt-10 font-playfair text-lg text-muted-foreground italic">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu 
          pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram 
          kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."
        </p>
        <p className="mt-2 text-accent font-lato text-sm">
          — QS. Ar-Rum: 21
        </p>
      </div>
    </section>
  );
}
