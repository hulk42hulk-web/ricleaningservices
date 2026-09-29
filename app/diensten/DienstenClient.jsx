"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Shield, Clock } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import GlassCard from "@/components/GlassCard";
import ContactSection from "@/components/ContactSection";

export default function DienstenClient() {
  const { t } = useLanguage();

  return (
    <div className="pt-6 sm:pt-10">
      {/* Header Banner */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-4 border border-white/90">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              <span className="text-xs font-bold tracking-wider text-brand-blue uppercase font-sans">
                {t.servicesOverview.eyebrow}
              </span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-[#0B1F33] tracking-tight leading-tight mb-4">
              {t.servicesOverview.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              {t.servicesOverview.description}
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {t.services.map((svc, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className="scroll-mt-28"
              >
                <GlassCard variant="feature" className="p-6 sm:p-10 lg:p-12 border-white/90">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Visual Media */}
                    <div className={`lg:col-span-6 relative ${isReversed ? "order-1 lg:order-2" : "order-1"}`}>
                      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] shadow-lg border-2 border-white">
                        <Image
                          src={svc.image}
                          alt={`${svc.title} - Ri Cleaning Services Amsterdam`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                        />
                        <div className="absolute top-3 left-3 glass-badge px-3 py-1 rounded-full text-xs font-bold text-slate-800">
                          {svc.num}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`lg:col-span-6 flex flex-col items-start ${isReversed ? "order-2 lg:order-1" : "order-2"}`}>
                      <span className="font-display font-black text-2xl sm:text-3xl text-slate-300 mb-1">
                        {svc.num}
                      </span>
                      <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1F33] mb-3">
                        {svc.title}
                      </h2>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                        {svc.fullDesc}
                      </p>

                      <div className="w-full mb-6 pt-4 border-t border-slate-200/60">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                          Werkzaamheden & Specificaties
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {svc.features.map((feat) => (
                            <div key={feat} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={`/contact`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-blue hover:bg-blue-600 text-white font-semibold text-sm shadow-md shadow-brand-blue/20 transition-all"
                      >
                        <span>Offerte aanvragen voor {svc.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                  </div>
                </GlassCard>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact CTA */}
      <ContactSection />
    </div>
  );
}
