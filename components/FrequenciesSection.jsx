"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check, Calendar, Repeat } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import GlassCard from "./GlassCard";

export default function FrequenciesSection() {
  const { t } = useLanguage();
  const freq = t.frequencies;

  return (
    <section className="py-14 sm:py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-4 border border-white/90">
            <span className="text-xs font-bold tracking-wider text-brand-blue uppercase font-sans">
              {freq.eyebrow}
            </span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#0B1F33] tracking-tight leading-tight mb-3">
            {freq.headline}
          </h2>
          <p className="text-base text-slate-600 font-normal">
            {freq.description}
          </p>
        </div>

        {/* Two Visual Glass Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Daily Cleaning Glass Panel */}
          <GlassCard
            variant="feature"
            className="p-8 sm:p-10 flex flex-col justify-between border-white/90 hover:border-brand-blue/30 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Repeat className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                  {freq.daily.badge}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-[#0B1F33] mb-3">
                {freq.daily.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                {freq.daily.desc}
              </p>

              <ul className="space-y-3 mb-8 pt-4 border-t border-slate-200/60" aria-label="Kenmerken dagelijkse schoonmaak">
                {freq.daily.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-emerald-600" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-between w-full py-3 px-5 rounded-xl bg-white hover:bg-slate-50 text-[#102A43] text-sm font-semibold border border-slate-200/80 shadow-xs hover:border-brand-blue transition-all"
            >
              <span>Vraag dagelijkse schoonmaak aan</span>
              <ArrowRight className="w-4 h-4 text-brand-blue" />
            </Link>
          </GlassCard>

          {/* Periodic Cleaning Glass Panel */}
          <GlassCard
            variant="feature"
            className="p-8 sm:p-10 flex flex-col justify-between border-white/90 hover:border-brand-blue/30 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-brand-cyan">
                  <Calendar className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-700 border border-cyan-500/20">
                  {freq.periodic.badge}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-[#0B1F33] mb-3">
                {freq.periodic.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                {freq.periodic.desc}
              </p>

              <ul className="space-y-3 mb-8 pt-4 border-t border-slate-200/60" aria-label="Kenmerken periodieke schoonmaak">
                {freq.periodic.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <div className="w-4 h-4 rounded-full bg-cyan-500/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-cyan-600" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-between w-full py-3 px-5 rounded-xl bg-white hover:bg-slate-50 text-[#102A43] text-sm font-semibold border border-slate-200/80 shadow-xs hover:border-brand-blue transition-all"
            >
              <span>Vraag periodieke schoonmaak aan</span>
              <ArrowRight className="w-4 h-4 text-brand-blue" />
            </Link>
          </GlassCard>

        </div>

      </div>
    </section>
  );
}
