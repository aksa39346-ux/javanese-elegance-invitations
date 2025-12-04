import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { JawaOrnament } from "./JawaOrnament";
import { useState } from "react";
import { X } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const galleryImages = [
  { src: gallery1, alt: "Prewedding 1" },
  { src: gallery2, alt: "Prewedding 2" },
  { src: gallery3, alt: "Prewedding 3" },
  { src: gallery4, alt: "Prewedding 4" },
  { src: gallery5, alt: "Prewedding 5" },
  { src: gallery6, alt: "Prewedding 6" },
];

export function GallerySection() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="py-16 md:py-24 bg-cream">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div 
            ref={ref}
            className={cn(
              "text-center mb-12",
              isVisible ? "animate-fade-up" : "opacity-0"
            )}
          >
            <p className="text-accent font-lato tracking-[0.2em] uppercase text-sm mb-2">
              Galeri
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl text-primary">
              Momen Bahagia
            </h2>
            <JawaOrnament className="mt-6" />
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <GalleryItem
                key={index}
                src={image.src}
                alt={image.alt}
                index={index}
                onClick={() => setSelectedImage(image.src)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-primary-foreground hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

interface GalleryItemProps {
  src: string;
  alt: string;
  index: number;
  onClick: () => void;
}

function GalleryItem({ src, alt, index, onClick }: GalleryItemProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        "relative aspect-square overflow-hidden rounded-lg cursor-pointer group",
        isVisible ? "animate-scale-in" : "opacity-0"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-300" />
    </div>
  );
}
