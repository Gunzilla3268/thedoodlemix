import { HeroSection } from "@/components/home/hero-section";
import { TrustTiles } from "@/components/home/trust-tiles";
import { PuppyPreview } from "@/components/home/puppy-preview";
import { AboutSection } from "@/components/home/about-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { PaymentDisclaimer } from "@/components/home/payment-disclaimer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustTiles />
      <PuppyPreview />
      <AboutSection />
      <TestimonialsSection />
      <PaymentDisclaimer />
    </>
  );
}
