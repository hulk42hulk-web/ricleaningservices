"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles, MapPin } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import GlassCard from "./GlassCard";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-6 sm:pt-10 lg:pt-16 pb-14 sm:pb-20 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Typography & Conversion CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-5 sm:mb-6 shadow-xs border border-white/90">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-brand-blue" />
              <span className="text-xs font-bold tracking-wider text-[#102A43] uppercase font-sans">
                {t.hero.eyebrow}
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="font-display font-extrabold text-[#0B1F33] tracking-tight leading-[1.12] mb-5 sm:mb-6 text-3xl sm:text-5xl lg:text-6xl text-balance">
              {t.hero.title}
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg lg:text-xl text-[#526777] leading-relaxed max-w-2xl mb-8 sm:mb-10 font-normal">
              {t.hero.description}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#1677FF] to-[#38BDF8] text-white text-base font-semibold shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/35 hover:brightness-105 active:scale-95 transition-all text-center"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/diensten"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full glass-card hover:bg-white text-[#102A43] text-base font-semibold border border-white/80 shadow-xs hover:border-slate-300 transition-all text-center"
              >
                <span>{t.hero.secondaryCta}</span>
              </Link>
            </div>

            {/* Subtle Trust Indicators */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-slate-200/60 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Vaste kwaliteitsstandaard
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                Flexibele planning
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Vrijblijvend voorstel
              </span>
            </div>
          </div>

          {/* Right Column: High-End Hero Composition with Floating Glass Cards */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Visual Container */}
            <div className="relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/10 border-4 border-white/90 aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] max-h-[580px] w-full">
              <Image
                src="/images/hero.jpg"
                alt="Moderne representatieve kantoorruimte in Amsterdam - Ri Cleaning Services"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/40 via-transparent to-transparent pointer-events-none" />

              {/* In-Image Status Tag */}
              <div className="absolute top-4 left-4 glass-badge px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-semibold text-slate-800 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                <span>Amsterdam Schoonmaakservice</span>
              </div>
            </div>

            {/* Floating Glass Card 1 (Top Right / Desktop floating) */}
            <div className="hidden sm:block absolute -top-5 -right-4 sm:-right-6 max-w-[240px] z-20 animate-float">
              <GlassCard variant="floating" hover={false} className="p-4 sm:p-5 shadow-glass-floating border-white">
                <div className="flex items-center gap-2 text-brand-blue mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#102A43]">
                    {t.hero.badge1Title}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  {t.hero.badge1Desc}
                </p>
              </GlassCard>
            </div>

            {/* Floating Glass Card 2 (Bottom Left / Desktop floating) */}
            <div className="hidden sm:block absolute -bottom-6 -left-4 sm:-left-6 max-w-[260px] z-20">
              <GlassCard variant="floating" hover={false} className="p-4 sm:p-5 shadow-glass-floating border-white">
                <div className="flex items-center gap-2 text-emerald-600 mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#102A43]">
                    {t.hero.badge2Title}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-snug">
                  {t.hero.badge2Desc}
                </p>
              </GlassCard>
            </div>

            {/* Mobile-only clean stacked glass pill */}
            <div className="sm:hidden mt-3 grid grid-cols-2 gap-2">
              <div className="glass-card p-3 rounded-xl border border-white">
                <p className="text-[10px] font-bold text-brand-blue uppercase">{t.hero.badge1Title}</p>
                <p className="text-xs text-slate-700 font-medium">Op maat & flexibel</p>
              </div>
              <div className="glass-card p-3 rounded-xl border border-white">
                <p className="text-[10px] font-bold text-emerald-600 uppercase">{t.hero.badge2Title}</p>
                <p className="text-xs text-slate-700 font-medium">Amsterdam & regio</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
