"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import GlassCard from "./GlassCard";
import { MessageSquare, ClipboardCheck, Sparkles, CheckCircle2 } from "lucide-react";

export default function ProcessSection() {
  const { t } = useLanguage();
  const data = t.process;

  const stepIcons = [
    <MessageSquare key="msg" className="w-5 h-5 text-brand-blue" />,
    <ClipboardCheck key="clip" className="w-5 h-5 text-brand-cyan" />,
    <Sparkles key="spark" className="w-5 h-5 text-brand-mint" />,
    <CheckCircle2 key="check" className="w-5 h-5 text-emerald-600" />,
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-4 border border-white/90">
            <span className="text-xs font-bold tracking-wider text-brand-blue uppercase font-sans">
              {data.eyebrow}
            </span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#0B1F33] tracking-tight leading-tight">
            {data.headline}
          </h2>
        </div>

        {/* 4 Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {data.steps.map((step, idx) => (
            <GlassCard
              key={step.num}
              className="p-6 sm:p-7 flex flex-col justify-between group border-white/80 hover:border-brand-blue/30 transition-all duration-300 relative"
            >
              <div>
                {/* Step indicator header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-xs">
                    {stepIcons[idx]}
                  </div>
                  <span className="font-display font-black text-xl text-slate-300 group-hover:text-brand-blue transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-[#0B1F33] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              {/* Progress step badge */}
              <div className="mt-6 pt-4 border-t border-slate-200/50 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                <span>Stap {idx + 1} van 4</span>
                <span className="w-2 h-2 rounded-full bg-brand-blue/40 group-hover:bg-brand-blue transition-colors" />
              </div>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}
