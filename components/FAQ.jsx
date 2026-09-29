"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import GlassCard from "./GlassCard";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-14 sm:py-20 lg:py-28 relative" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-4 border border-white/90">
            <HelpCircle className="w-3.5 h-3.5 text-brand-blue" />
            <span className="text-xs font-bold tracking-wider text-brand-blue uppercase font-sans">
              {t.faq.eyebrow}
            </span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#0B1F33] tracking-tight leading-tight">
            {t.faq.headline}
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <GlassCard
                key={item.q}
                hover={false}
                className="p-0 border border-white/80 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-brand-blue/5 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-[#102A43]">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 border border-slate-100 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-brand-blue" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100/80 pt-3 animate-fadeIn"
                  >
                    <p>{item.a}</p>
                  </div>
                )}
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
