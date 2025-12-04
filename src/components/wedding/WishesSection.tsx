import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { JawaOrnament } from "./JawaOrnament";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send, MessageCircleHeart, User } from "lucide-react";

interface Wish {
  id: number;
  name: string;
  message: string;
  timestamp: Date;
}

const initialWishes: Wish[] = [
  {
    id: 1,
    name: "Budi Santoso",
    message: "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Barakallah!",
    timestamp: new Date('2024-12-01'),
  },
  {
    id: 2,
    name: "Siti Aminah",
    message: "Bahagia selalu ya untuk Rama & Shinta. Semoga cinta kalian abadi selamanya!",
    timestamp: new Date('2024-12-02'),
  },
  {
    id: 3,
    name: "Ahmad Ridwan",
    message: "Selamat berbahagia! Semoga pernikahan ini menjadi awal dari kebahagiaan yang tak berujung.",
    timestamp: new Date('2024-12-03'),
  },
];

export function WishesSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      toast({
        title: "Mohon lengkapi form",
        description: "Nama dan ucapan harus diisi.",
        variant: "destructive",
      });
      return;
    }

    const newWish: Wish = {
      id: Date.now(),
      name: formData.name,
      message: formData.message,
      timestamp: new Date(),
    };

    setWishes([newWish, ...wishes]);
    setFormData({ name: "", message: "" });
    
    toast({
      title: "Terima kasih!",
      description: "Ucapan Anda telah dikirim.",
    });
  };

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container max-w-3xl mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={ref}
          className={cn(
            "text-center mb-12",
            isVisible ? "animate-fade-up" : "opacity-0"
          )}
        >
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
            <MessageCircleHeart size={28} className="text-accent" />
          </div>
          <p className="text-accent font-lato tracking-[0.2em] uppercase text-sm mb-2">
            Ucapan
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-primary">
            Wedding Wishes
          </h2>
          <JawaOrnament className="mt-6" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="elegant-card space-y-4 mb-8">
          <div className="space-y-2">
            <Label htmlFor="wish-name" className="font-lato">Nama</Label>
            <Input
              id="wish-name"
              placeholder="Masukkan nama Anda"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-border focus:border-accent focus:ring-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="wish-message" className="font-lato">Ucapan & Doa</Label>
            <Textarea
              id="wish-message"
              placeholder="Tuliskan ucapan dan doa untuk kedua mempelai..."
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="border-border focus:border-accent focus:ring-accent resize-none"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Send size={16} className="mr-2" />
            Kirim Ucapan
          </Button>
        </form>

        {/* Wishes List */}
        <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
          {wishes.map((wish, index) => (
            <WishCard key={wish.id} wish={wish} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface WishCardProps {
  wish: Wish;
  index: number;
}

function WishCard({ wish, index }: WishCardProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={cn(
        "bg-background rounded-lg p-4 border border-border",
        isVisible ? "animate-fade-up" : "opacity-0"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
          <User size={18} className="text-accent" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-playfair text-primary">{wish.name}</h4>
            <span className="text-xs text-muted-foreground font-lato">
              {wish.timestamp.toLocaleDateString('id-ID', { 
                day: 'numeric', 
                month: 'short' 
              })}
            </span>
          </div>
          <p className="text-muted-foreground font-lato text-sm">
            {wish.message}
          </p>
        </div>
      </div>
    </div>
  );
}
