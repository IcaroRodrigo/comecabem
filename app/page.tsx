import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { BrandStrip } from "@/components/sections/BrandStrip";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ForWhomSection } from "@/components/sections/ForWhomSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BrandStrip />
        <ProductsSection />
        <ForWhomSection />
        <HowItWorksSection />
        <ManifestoSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
