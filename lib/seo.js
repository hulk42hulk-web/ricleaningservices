import { companyInfo, content } from "./siteData";

export const siteUrl = companyInfo.websiteUrl;

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "additionalType": "https://schema.org/CleaningService",
    "name": companyInfo.name,
    "legalName": companyInfo.legalName,
    "url": siteUrl,
    "email": companyInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyInfo.address.street,
      "postalCode": companyInfo.address.postalCode,
      "addressLocality": companyInfo.address.city,
      "addressCountry": companyInfo.address.countryCode,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": companyInfo.geo.latitude,
      "longitude": companyInfo.geo.longitude,
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Amsterdam",
      },
      {
        "@type": "Country",
        "name": "Netherlands",
      },
    ],
    "description": "Professionele schoonmaakdiensten voor kantoren, scholen, bedrijven en particuliere klanten in Amsterdam. Betrouwbare en flexibele schoonmaakoplossingen op maat.",
    "serviceType": [
      "Kantoor schoonmaak",
      "Schoonmaak voor scholen",
      "Bedrijfsschoonmaak",
      "Huishoudelijke schoonmaak",
      "Dagelijkse schoonmaak",
      "Periodieke schoonmaak",
      "Specialistische schoonmaak",
    ],
    "priceRange": "$$",
  };
}

export function getServicesSchema() {
  const services = content.nl.services;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((svc, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": svc.title,
        "description": svc.fullDesc,
        "provider": {
          "@type": "LocalBusiness",
          "name": companyInfo.name,
        },
        "areaServed": {
          "@type": "City",
          "name": "Amsterdam",
        },
      },
    })),
  };
}

export function getFaqSchema(lang = "nl") {
  const faqItems = content[lang].faq.items;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };
}
