import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { JawaOrnament } from "./JawaOrnament";
import { Heart } from "lucide-react";

const loveStoryEvents = [
  {
    year: "2018",
    title: "Pertama Bertemu",
    description: "Kami pertama kali bertemu di sebuah acara kampus. Saat itu, tatapan pertama sudah terasa istimewa.",
  },
  {
    year: "2019",
    title: "Mulai Dekat",
    description: "Dari pertemanan biasa, perlahan perasaan mulai tumbuh. Kami sering menghabiskan waktu bersama.",
  },
  {
    year: "2021",
    title: "Resmi Berpacaran",
    description: "Setelah lama menyimpan perasaan, akhirnya kami memutuskan untuk memulai hubungan yang lebih serius.",
  },
  {
    year: "2024",
    title: "Lamaran",
    description: "Dengan penuh keberanian dan doa, pinangan disampaikan dan Alhamdulillah diterima dengan bahagia.",
  },
];

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
  isLast: boolean;
}

function TimelineItem({ year, title, description, index, isLast }: TimelineItemProps) {
  const { ref, isVisible } = useScrollAnimation();
  const isLeft = index % 2 === 0;

  return (
    <div 
      ref={ref}
      className={cn(
        "relative flex items-center",
        isVisible ? (isLeft ? "animate-slide-right" : "animate-slide-left") : "opacity-0"
      )}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center w-full">
        {/* Left content */}
        <div className={cn("flex-1 pr-8", !isLeft && "opacity-0")}>
          {isLeft && (
            <div className="text-right">
              <span className="text-accent font-playfair text-xl">{year}</span>
              <h4 className="font-playfair text-xl text-primary mt-1">{title}</h4>
              <p className="text-muted-foreground font-lato text-sm mt-2">{description}</p>
            </div>
          )}
        </div>

        {/* Center line & dot */}
        <div className="relative flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center z-10">
            <Heart size={18} className="text-primary-foreground" fill="currentColor" />
          </div>
          {!isLast && (
            <div className="absolute top-10 w-0.5 h-24 bg-accent/30" />
          )}
        </div>

        {/* Right content */}
        <div className={cn("flex-1 pl-8", isLeft && "opacity-0")}>
          {!isLeft && (
            <div className="text-left">
              <span className="text-accent font-playfair text-xl">{year}</span>
              <h4 className="font-playfair text-xl text-primary mt-1">{title}</h4>
              <p className="text-muted-foreground font-lato text-sm mt-2">{description}</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden items-start gap-4 w-full">
        {/* Line & dot */}
        <div className="relative flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center z-10 flex-shrink-0">
            <Heart size={14} className="text-primary-foreground" fill="currentColor" />
          </div>
          {!isLast && (
            <div className="absolute top-8 w-0.5 h-full bg-accent/30" />
          )}
        </div>

        {/* Content */}
        <div className="pb-8">
          <span className="text-accent font-playfair text-lg">{year}</span>
          <h4 className="font-playfair text-lg text-primary mt-1">{title}</h4>
          <p className="text-muted-foreground font-lato text-sm mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function LoveStorySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={ref}
          className={cn(
            "text-center mb-12",
            isVisible ? "animate-fade-up" : "opacity-0"
          )}
        >
          <p className="text-accent font-lato tracking-[0.2em] uppercase text-sm mb-2">
            Kisah Kami
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-primary">
            Love Story
          </h2>
          <JawaOrnament className="mt-6" />
        </div>

        {/* Timeline */}
        <div className="space-y-4 md:space-y-0">
          {loveStoryEvents.map((event, index) => (
            <TimelineItem
              key={index}
              {...event}
              index={index}
              isLast={index === loveStoryEvents.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
