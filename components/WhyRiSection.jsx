"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import GlassCard from "./GlassCard";
import {
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Award,
  ThumbsUp,
  Lock,
} from "lucide-react";

export default function WhyRiSection() {
  const { t } = useLanguage();
  const data = t.whyChoose;

  const icons = [
    <ShieldCheck key="1" className="w-5 h-5 text-brand-blue" />,
    <SlidersHorizontal key="2" className="w-5 h-5 text-brand-cyan" />,
    <Sparkles key="3" className="w-5 h-5 text-brand-mint" />,
    <Award key="4" className="w-5 h-5 text-brand-blue" />,
    <ThumbsUp key="5" className="w-5 h-5 text-emerald-600" />,
    <Lock key="6" className="w-5 h-5 text-brand-navy" />,
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-4 border border-white/90">
            <span className="text-xs font-bold tracking-wider text-brand-blue uppercase font-sans">
              {data.eyebrow}
            </span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#0B1F33] tracking-tight leading-tight mb-3">
            {data.headline}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            {data.subtitle}
          </p>
        </div>

        {/* 6 Attributes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {data.items.map((item, idx) => (
            <GlassCard
              key={item.num}
              className="p-6 sm:p-8 flex flex-col justify-between group hover:border-brand-blue/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-xs">
                    {icons[idx]}
                  </div>
                  <span className="font-display font-extrabold text-sm text-slate-300 group-hover:text-brand-blue transition-colors">
                    {item.num}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B1F33] mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Decorative subtle progress hairline */}
              <div className="mt-6 pt-4 border-t border-slate-200/50 flex items-center gap-1.5" aria-hidden="true">
                <span className="h-1 w-6 rounded-full bg-brand-blue/30 group-hover:bg-brand-blue transition-colors" />
                <span className="h-1 w-2 rounded-full bg-slate-200 group-hover:bg-brand-cyan/60 transition-colors" />
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}
