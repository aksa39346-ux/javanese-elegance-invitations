import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { JawaOrnament } from "./JawaOrnament";

export function OpeningSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div 
        ref={ref}
        className={cn(
          "container max-w-3xl mx-auto px-4 text-center",
          isVisible ? "animate-fade-up" : "opacity-0"
        )}
      >
        <p className="font-playfair text-2xl md:text-3xl text-primary mb-6 italic">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 font-lato">
          Assalamualaikum Warahmatullahi Wabarakatuh
        </p>

        <JawaOrnament className="mb-8" />

        <p className="text-foreground leading-relaxed font-lato text-base md:text-lg">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang 
          Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.
        </p>

        <p className="mt-6 text-muted-foreground font-lato italic">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila 
          Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu 
          kepada kedua mempelai.
        </p>
      </div>
    </section>
  );
}
