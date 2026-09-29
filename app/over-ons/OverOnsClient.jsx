"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, MapPin, Award, CheckCircle, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import GlassCard from "@/components/GlassCard";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import { companyInfo } from "@/lib/siteData";

export default function OverOnsClient() {
  const { t } = useLanguage();

  return (
    <div className="pt-6 sm:pt-10">
      {/* Editorial Story Header */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge mb-5 border border-white/90">
                <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                <span className="text-xs font-bold tracking-wider text-brand-blue uppercase font-sans">
                  {t.about.eyebrow}
                </span>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-[#0B1F33] tracking-tight leading-tight mb-6">
                {t.about.title}
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>
                  Of het nu gaat om een dagelijks kantooronderhoud, periodieke dieptereiniging voor een school of zorgvuldige huishoudelijke service: wij hechten aan duidelijke communicatie, respect voor uw pand en een continu smetteloos resultaat.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#1677FF] to-[#38BDF8] text-white font-semibold text-sm shadow-md shadow-brand-blue/25 hover:shadow-lg transition-all"
                >
                  <span>Kennismaken & offerte aanvragen</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/diensten"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-card hover:bg-white text-[#102A43] font-semibold text-sm transition-all"
                >
                  <span>Bekijk onze diensten</span>
                </Link>
              </div>
            </div>

            {/* Right Media Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl border-4 border-white/90">
                <Image
                  src="/images/hero.jpg"
                  alt="Ri Cleaning Services kantoor en werkwijze in Amsterdam"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/50 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 glass-floating p-4 rounded-2xl border-white">
                  <div className="flex items-center gap-2 text-brand-blue font-bold text-xs uppercase mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Amsterdam Zuidoost</span>
                  </div>
                  <p className="text-xs text-slate-700">
                    {companyInfo.address.street}, {companyInfo.address.postalCode} Amsterdam
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0B1F33] mb-3">
              Onze Pijlers en Uitgangspunten
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Hoe wij zorgen voor tevreden klanten en een vlekkeloos resultaat bij elke opdracht.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.coreValues.map((val) => (
              <GlassCard key={val.title} variant="feature" className="p-6 sm:p-8 border-white/90">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#0B1F33] mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {val.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
