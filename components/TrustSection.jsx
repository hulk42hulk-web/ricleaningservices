"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import GlassCard from "./GlassCard";
import { ShieldCheck, Clock, UserCheck, Search } from "lucide-react";

export default function TrustSection() {
  const { t } = useLanguage();

  const icons = [
    <ShieldCheck key="shield" className="w-5 h-5 text-brand-blue" />,
    <Clock key="clock" className="w-5 h-5 text-brand-cyan" />,
    <UserCheck key="user" className="w-5 h-5 text-brand-mint" />,
    <Search key="search" className="w-5 h-5 text-brand-blue" />,
  ];

  return (
    <section className="relative z-10 -mt-4 sm:-mt-6 mb-12 sm:mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.trustStrip.map((item, idx) => (
            <GlassCard
              key={item.id}
              className="p-5 sm:p-6 flex flex-col justify-between group hover:border-brand-blue/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-display font-extrabold text-xl text-slate-300 group-hover:text-brand-blue transition-colors">
                  {item.id}
                </span>
                <div className="w-9 h-9 rounded-xl bg-white/80 border border-white flex items-center justify-center shadow-xs">
                  {icons[idx]}
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#102A43] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
