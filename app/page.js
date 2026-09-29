import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import OfficeSection from "@/components/OfficeSection";
import SchoolSection from "@/components/SchoolSection";
import BusinessSection from "@/components/BusinessSection";
import FrequenciesSection from "@/components/FrequenciesSection";
import WhyRiSection from "@/components/WhyRiSection";
import ProcessSection from "@/components/ProcessSection";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import { getFaqSchema } from "@/lib/seo";

export const metadata = {
  title: "Ri Cleaning Services | Professionele Schoonmaak in Amsterdam",
  description:
    "Professionele schoonmaakdiensten voor kantoren, scholen, bedrijven en particuliere klanten in Amsterdam. Betrouwbare en flexibele schoonmaakoplossingen op maat.",
};

export default function HomePage() {
  const faqJsonLd = getFaqSchema("nl");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <TrustSection />
      <AboutSection />
      <ServicesSection />
      <OfficeSection />
      <SchoolSection />
      <BusinessSection />
      <FrequenciesSection />
      <WhyRiSection />
      <ProcessSection />
      <FAQ />
      <ContactSection />
    </>
  );
}
