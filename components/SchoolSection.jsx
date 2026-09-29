"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, GraduationCap } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import GlassCard from "./GlassCard";

export default function SchoolSection() {
  const { t } = useLanguage();
  const data = t.schoolDeepDive;

  return (
    <section className="py-14 sm:py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassCard variant="feature" className="p-8 sm:p-12 lg:p-16 border-white/90">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Image Composition (Reversed layout for visual rhythm) */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] shadow-xl border-4 border-white/90">
                <Image
                  src="/images/school-cleaning.jpg"
                  alt="Hygiënische schoonmaak voor scholen en onderwijsinstellingen in Amsterdam"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-4 border border-white">
                <GraduationCap className="w-3.5 h-3.5 text-brand-cyan" />
                <span className="text-xs font-bold tracking-wider text-brand-blue uppercase font-sans">
                  {data.eyebrow}
                </span>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#0B1F33] tracking-tight leading-tight mb-4">
                {data.headline}
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                {data.description}
              </p>

              <div className="space-y-3 mb-8 w-full">
                {data.points.map((pt) => (
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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-brand-blue font-semibold text-sm sm:text-base border border-brand-blue/30 shadow-xs hover:shadow-md transition-all"
              >
                <span>{data.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </GlassCard>
      </div>
    </section>
  );
}
