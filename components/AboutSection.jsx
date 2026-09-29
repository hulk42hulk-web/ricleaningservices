"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Award, HeartHandshake } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import GlassCard from "./GlassCard";

export default function AboutSection() {
  const { t } = useLanguage();

  const valueIcons = [
    <Award key="award" className="w-5 h-5 text-brand-blue" />,
    <Shield key="shield" className="w-5 h-5 text-emerald-600" />,
    <HeartHandshake key="heart" className="w-5 h-5 text-brand-cyan" />,
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-4 border border-white/90">
            <span className="text-xs font-bold tracking-wider text-brand-blue uppercase font-sans">
              {t.about.eyebrow}
            </span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#0B1F33] tracking-tight leading-tight">
            {t.about.title}
          </h2>
        </div>

        {/* Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Story & Image */}
          <div className="lg:col-span-6 flex flex-col space-y-6 sm:space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* Architectural detail image */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/80 shadow-lg aspect-[16/10] w-full">
              <Image
                src="/images/specialist-cleaning.jpg"
                alt="Zorgvuldig schoonmaakonderhoud en hygiënische standaarden in Amsterdam"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm font-medium bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20">
                Aandacht voor elk detail en hoogste standaarden in Amsterdam
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/over-ons"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-brand-blue hover:text-blue-700 transition-colors"
              >
                <span>Lees meer over onze werkwijze en uitgangspunten</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Values Glass Panel */}
          <div className="lg:col-span-6 flex flex-col space-y-4 sm:space-y-6">
            {t.about.coreValues.map((val, idx) => (
              <GlassCard
                key={val.title}
                variant="feature"
                className="p-6 sm:p-7 flex items-start gap-4 sm:gap-5 border-white/90"
              >
                <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100">
                  {valueIcons[idx]}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#102A43] mb-1.5">
                    {val.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              </GlassCard>
            ))}

            {/* Quick Fact Banner */}
            <div className="glass-card p-6 rounded-2xl border border-white/80 bg-gradient-to-r from-white/90 to-brand-blue/5">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <p className="text-sm font-medium text-slate-700">
                  Flexibele inzetbaarheid: vroege ochtenden, reguliere werkuren of rustige avonduren mogelijk.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
