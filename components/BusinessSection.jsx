"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Store, Home } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import GlassCard from "./GlassCard";

export default function BusinessSection() {
  const { t } = useLanguage();
  const bData = t.businessDeepDive;
  const rData = t.residentialSection;

  return (
    <section className="py-14 sm:py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Commercial & Business Cleaning Banner */}
        <GlassCard variant="feature" className="p-8 sm:p-12 lg:p-16 border-white/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-4 border border-white">
                <Store className="w-3.5 h-3.5 text-brand-mint" />
                <span className="text-xs font-bold tracking-wider text-brand-blue uppercase font-sans">
                  {bData.eyebrow}
                </span>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#0B1F33] tracking-tight leading-tight mb-4">
                {bData.headline}
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                {bData.description}
              </p>

              <div className="space-y-3 mb-8 w-full">
                {bData.points.map((pt) => (
                  <div key={pt} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-700 font-medium">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1677FF] hover:bg-blue-600 text-white font-semibold text-sm sm:text-base shadow-md shadow-brand-blue/20 hover:shadow-lg transition-all"
              >
                <span>{bData.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border-4 border-white/90">
                <Image
                  src="/images/commercial-cleaning.jpg"
                  alt="Bedrijfsschoonmaak in Amsterdam - verzorgde winkels en commerciële ruimtes"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </GlassCard>

        {/* Residential Cleaning Subtle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card p-6 sm:p-10 rounded-3xl border border-white">
          <div className="lg:col-span-4 relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/80 shadow-md">
            <Image
              src="/images/residential-cleaning.jpg"
              alt="Huishoudelijke schoonmaak in Amsterdam particuliere woningen"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-8 flex flex-col items-start justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-badge mb-3 text-xs font-semibold text-slate-700">
              <Home className="w-3.5 h-3.5 text-brand-blue" />
              <span>{rData.eyebrow}</span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#0B1F33] mb-2">
              {rData.headline}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mb-5 leading-relaxed">
              {rData.description}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-blue-700 transition-colors"
            >
              <span>{rData.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
