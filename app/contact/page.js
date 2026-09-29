import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Contact & Offerte Aanvragen | Ri Cleaning Services Amsterdam",
  description:
    "Neem direct contact op met Ri Cleaning Services in Amsterdam. Vraag vrijblijvend een offerte aan voor kantoorschoonmaak, scholen, bedrijven of woningen. E-mail: ricleaning24@gmail.com.",
};

export default function ContactPage() {
  return (
    <div className="pt-6 sm:pt-10">
      <ContactSection />
      <FAQ />
    </div>
  );
}
