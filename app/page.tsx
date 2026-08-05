import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  AboutSection,
  BrandStrip,
  ContentSection,
  CtaSection,
  DifferencesSection,
  HeroSection,
  ProductsSection,
  TestimonialsSection,
} from "@/components/sections/home";
import { products } from "@/config/products";
import { siteConfig } from "@/config/site";

export default function Home() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [siteConfig.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: siteConfig.whatsapp,
    },
    makesOffer: products
      .filter((p) => p.status === "available")
      .map((p) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: p.name,
          applicationCategory: "BusinessApplication",
          url: p.href,
        },
      })),
  };

  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only z-[100] rounded bg-white p-3 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo-principal">
        <HeroSection />
        <BrandStrip />
        <ProductsSection />
        <DifferencesSection />
        <ContentSection />
        <AboutSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
