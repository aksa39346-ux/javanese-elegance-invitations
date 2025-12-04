import { HeroSection } from "@/components/wedding/HeroSection";
import { OpeningSection } from "@/components/wedding/OpeningSection";
import { CoupleSection } from "@/components/wedding/CoupleSection";
import { EventSection } from "@/components/wedding/EventSection";
import { CountdownSection } from "@/components/wedding/CountdownSection";
import { GallerySection } from "@/components/wedding/GallerySection";
import { LoveStorySection } from "@/components/wedding/LoveStorySection";
import { RSVPSection } from "@/components/wedding/RSVPSection";
import { GiftSection } from "@/components/wedding/GiftSection";
import { WishesSection } from "@/components/wedding/WishesSection";
import { FooterSection } from "@/components/wedding/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <OpeningSection />
      <CoupleSection />
      <EventSection />
      <CountdownSection />
      <GallerySection />
      <LoveStorySection />
      <RSVPSection />
      <GiftSection />
      <WishesSection />
      <FooterSection />
    </main>
  );
};

export default Index;
