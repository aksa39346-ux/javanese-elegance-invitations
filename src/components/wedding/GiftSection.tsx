import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { JawaOrnament } from "./JawaOrnament";
import { Button } from "@/components/ui/button";
import { Copy, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const bankAccounts = [
  {
    bank: "Bank Central Asia (BCA)",
    accountNumber: "1234567890",
    accountName: "Rama Wijaya Kusuma",
  },
  {
    bank: "Bank Mandiri",
    accountNumber: "0987654321",
    accountName: "Shinta Dewi Rahayu",
  },
];

export function GiftSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Tersalin!",
      description: `${label} telah disalin ke clipboard.`,
    });
  };

  return (
    <section className="py-16 md:py-24 bg-background">
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
            <Gift size={28} className="text-accent" />
          </div>
          <p className="text-accent font-lato tracking-[0.2em] uppercase text-sm mb-2">
            Hadiah
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl text-primary">
            Wedding Gift
          </h2>
          <JawaOrnament className="mt-6" />
          <p className="text-muted-foreground font-lato mt-4 max-w-md mx-auto">
            Doa restu Anda adalah hadiah terindah bagi kami. Namun jika Anda ingin 
            memberikan tanda kasih, kami menyediakan informasi berikut.
          </p>
        </div>

        {/* Bank Accounts */}
        <div className="grid md:grid-cols-2 gap-6">
          {bankAccounts.map((account, index) => (
            <BankCard
              key={index}
              {...account}
              index={index}
              onCopy={copyToClipboard}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface BankCardProps {
  bank: string;
  accountNumber: string;
  accountName: string;
  index: number;
  onCopy: (text: string, label: string) => void;
}

function BankCard({ bank, accountNumber, accountName, index, onCopy }: BankCardProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={cn(
        "elegant-card text-center",
        isVisible ? "animate-scale-in" : "opacity-0"
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <h4 className="font-playfair text-lg text-primary mb-4">{bank}</h4>
      
      <div className="bg-muted rounded-lg p-4 mb-4">
        <p className="font-mono text-xl text-foreground tracking-wider">
          {accountNumber}
        </p>
      </div>
      
      <p className="text-muted-foreground font-lato mb-4">
        a.n. {accountName}
      </p>

      <Button
        variant="outline"
        size="sm"
        className="border-accent text-accent hover:bg-accent hover:text-primary-foreground"
        onClick={() => onCopy(accountNumber, "Nomor rekening")}
      >
        <Copy size={14} className="mr-2" />
        Salin Nomor
      </Button>
    </div>
  );
}
