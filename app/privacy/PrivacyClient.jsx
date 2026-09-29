"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Mail } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import GlassCard from "@/components/GlassCard";
import { companyInfo } from "@/lib/siteData";

export default function PrivacyClient() {
  const { t } = useLanguage();
  const priv = t.privacy;

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 hover:text-brand-blue transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Terug naar home</span>
          </Link>
        </div>

        <GlassCard variant="feature" hover={false} className="p-8 sm:p-12 border-white/90">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-200/80">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1F33]">
                {priv.title}
              </h1>
              <p className="text-xs text-slate-400 font-medium">
                {priv.lastUpdated} • Ri Cleaning Services Amsterdam
              </p>
            </div>
          </div>

          <p className="text-base text-slate-600 leading-relaxed mb-8">
            {priv.intro}
          </p>

          <div className="space-y-8">
            {priv.sections.map((sec) => (
              <div key={sec.heading} className="space-y-2">
                <h2 className="font-display font-bold text-lg text-[#0B1F33]">
                  {sec.heading}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {sec.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              <span>Contactpersoon gegevensbescherming: </span>
              <a href={`mailto:${companyInfo.email}`} className="text-brand-blue font-semibold hover:underline">
                {companyInfo.email}
              </a>
            </div>
            <span>{companyInfo.address.street}, {companyInfo.address.city}</span>
          </div>
        </GlassCard>

      </div>
    </div>
  );
}
