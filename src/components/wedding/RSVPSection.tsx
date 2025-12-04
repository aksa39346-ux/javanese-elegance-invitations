import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { JawaOrnament } from "./JawaOrnament";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle2 } from "lucide-react";

export function RSVPSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    guests: "1",
    attendance: "hadir",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      toast({
        title: "Mohon isi nama Anda",
        variant: "destructive",
      });
      return;
    }

    // Simulate submission
    setIsSubmitted(true);
    toast({
      title: "Terima kasih!",
      description: "Konfirmasi kehadiran Anda telah kami terima.",
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-16 md:py-24 bg-cream">
        <div className="container max-w-lg mx-auto px-4 text-center">
          <div className="elegant-card">
            <CheckCircle2 size={64} className="text-accent mx-auto mb-4" />
            <h3 className="font-playfair text-2xl text-primary mb-2">
              Terima Kasih!
            </h3>
            <p className="text-muted-foreground font-lato">
              Konfirmasi kehadiran Anda telah kami terima. Kami sangat menantikan 
              kehadiran Anda di hari bahagia kami.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container max-w-lg mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={ref}
          className={cn(
            "text-center mb-12",
            isVisible ? "animate-fade-up" : "opacity-0"
          )}
        >
          <p className="text-accent font-lato tracking-[0.2em] uppercase text-sm mb-2">
            Konfirmasi
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-primary">
            RSVP
          </h2>
          <JawaOrnament className="mt-6" />
          <p className="text-muted-foreground font-lato mt-4">
            Mohon konfirmasi kehadiran Anda
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="elegant-card space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-lato">Nama Lengkap</Label>
            <Input
              id="name"
              placeholder="Masukkan nama Anda"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-border focus:border-accent focus:ring-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests" className="font-lato">Jumlah Tamu</Label>
            <Input
              id="guests"
              type="number"
              min="1"
              max="5"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="border-border focus:border-accent focus:ring-accent"
            />
          </div>

          <div className="space-y-3">
            <Label className="font-lato">Konfirmasi Kehadiran</Label>
            <RadioGroup
              value={formData.attendance}
              onValueChange={(value) => setFormData({ ...formData, attendance: value })}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="hadir" id="hadir" />
                <Label htmlFor="hadir" className="font-lato font-normal cursor-pointer">
                  Ya, saya akan hadir
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="tidak" id="tidak" />
                <Label htmlFor="tidak" className="font-lato font-normal cursor-pointer">
                  Maaf, saya tidak bisa hadir
                </Label>
              </div>
              <div className="flex items-center space-x-3">
                <RadioGroupItem value="mungkin" id="mungkin" />
                <Label htmlFor="mungkin" className="font-lato font-normal cursor-pointer">
                  Masih belum pasti
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Send size={16} className="mr-2" />
            Kirim Konfirmasi
          </Button>
        </form>
      </div>
    </section>
  );
}
