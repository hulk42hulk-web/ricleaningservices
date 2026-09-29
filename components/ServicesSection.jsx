"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-14 sm:py-20 lg:py-28 relative" id="diensten">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Asymmetric Layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-4 border border-white/90">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              <span className="text-xs font-bold tracking-wider text-brand-blue uppercase font-sans">
                {t.servicesOverview.eyebrow}
              </span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#0B1F33] tracking-tight leading-tight mb-3">
              {t.servicesOverview.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal">
              {t.servicesOverview.description}
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-50 text-brand-blue text-sm font-semibold border border-brand-blue/30 shadow-sm transition-all"
            >
              <span>{t.servicesOverview.ctaButton}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}
