import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLocalBusinessSchema, getServicesSchema, siteUrl } from "@/lib/seo";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ri Cleaning Services | Professionele Schoonmaak in Amsterdam",
    template: "%s | Ri Cleaning Services",
  },
  description:
    "Professionele schoonmaakdiensten voor kantoren, scholen, bedrijven en particuliere klanten in Amsterdam. Betrouwbare en flexibele schoonmaakoplossingen op maat.",
  keywords: [
    "schoonmaak Amsterdam",
    "schoonmaakbedrijf Amsterdam",
    "professionele schoonmaak Amsterdam",
    "kantoor schoonmaak Amsterdam",
    "bedrijfsschoonmaak Amsterdam",
    "school schoonmaak Amsterdam",
    "huishoudelijke schoonmaak Amsterdam",
    "dagelijkse schoonmaak Amsterdam",
    "periodieke schoonmaak Amsterdam",
    "Ri Cleaning Services",
  ],
  authors: [{ name: "Ri Cleaning Services" }],
  creator: "Ri Cleaning Services",
  publisher: "Ri Cleaning Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "nl-NL": `${siteUrl}`,
      "en-US": `${siteUrl}?lang=en`,
    },
  },
  openGraph: {
    title: "Ri Cleaning Services | Professionele Schoonmaak in Amsterdam",
    description:
      "Professionele schoonmaakoplossingen voor kantoren, scholen, bedrijven en particuliere klanten in Amsterdam. Betrouwbaar, flexibel en met oog voor detail.",
    url: siteUrl,
    siteName: "Ri Cleaning Services",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 675,
        alt: "Ri Cleaning Services Amsterdam - Professionele Kantoorschoonmaak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ri Cleaning Services | Professionele Schoonmaak in Amsterdam",
    description:
      "Professionele schoonmaakdiensten voor kantoren, scholen, bedrijven en particulieren in Amsterdam.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const localBusinessJsonLd = getLocalBusinessSchema();
  const servicesJsonLd = getServicesSchema();

  return (
    <html lang="nl" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F5F9FC] text-[#102A43] flex flex-col relative selection:bg-brand-blue/15 selection:text-brand-navy">
        {/* Subtle Ambient Background Gradient Lighting - strictly non-overflowing */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
          <div className="ambient-glow bg-[#38BDF8] w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] top-[-100px] left-[-150px] sm:left-[-100px] opacity-25" />
          <div className="ambient-glow bg-[#5ED6C0] w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] top-[30%] right-[-120px] opacity-20" />
          <div className="ambient-glow bg-[#1677FF] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bottom-[15%] left-[10%] opacity-15" />
        </div>

        <LanguageProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
