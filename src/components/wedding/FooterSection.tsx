import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { JawaOrnament } from "./JawaOrnament";
import { Heart } from "lucide-react";

export function FooterSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div 
        ref={ref}
        className={cn(
          "container max-w-2xl mx-auto px-4 text-center",
          isVisible ? "animate-fade-up" : "opacity-0"
        )}
      >
        <JawaOrnament className="mb-8 [&_svg]:text-gold-light [&_.bg-gradient-to-r]:from-transparent [&_.bg-gradient-to-r]:to-gold-light/50 [&_.bg-gradient-to-l]:from-transparent [&_.bg-gradient-to-l]:to-gold-light/50" />

        <p className="font-playfair text-2xl md:text-3xl mb-6 italic">
          "Terima Kasih"
        </p>

        <p className="font-lato text-primary-foreground/80 mb-8 leading-relaxed">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila 
          Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu 
          kepada kami. Atas kehadiran dan doa restunya, kami mengucapkan 
          terima kasih.
        </p>

        <p className="text-gold-light font-lato mb-2">
          Wassalamualaikum Warahmatullahi Wabarakatuh
        </p>

        <div className="flex items-center justify-center gap-3 mt-8 mb-4">
          <div className="h-px w-12 bg-gold-light/30" />
          <Heart size={20} className="text-gold-light" fill="currentColor" />
          <div className="h-px w-12 bg-gold-light/30" />
        </div>

        <h2 className="font-playfair text-3xl md:text-4xl">
          Rama & Shinta
        </h2>

        <p className="mt-8 text-sm text-primary-foreground/60 font-lato">
          © 2024 • Dibuat dengan{" "}
          <Heart size={12} className="inline text-gold-light" fill="currentColor" />{" "}
          untuk hari bahagia kami
        </p>
      </div>
    </footer>
  );
}
