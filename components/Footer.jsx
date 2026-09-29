"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Mail, MapPin, Globe } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { companyInfo } from "@/lib/siteData";

export default function Footer() {
  const { lang, setLang, t } = useLanguage();

  return (
    <footer className="bg-[#0B1F33] text-white pt-14 sm:pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#1677FF] to-[#38BDF8] flex items-center justify-center text-white shadow-sm">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg tracking-tight text-white leading-none">
                  RI CLEANING
                </span>
                <span className="text-[10px] tracking-wider text-slate-400 uppercase font-semibold mt-0.5">
                  Services • Amsterdam
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              {t.footer.tagline}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Gevestigd in Amsterdam Zuidoost</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-200">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="hover:text-white transition-colors">
                  {t.nav.diensten}
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="hover:text-white transition-colors">
                  {t.nav.overOns}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  {t.footer.privacyLink}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services list */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-200">
              {t.footer.servicesTitle}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
              <li>
                <Link href="/diensten#kantoor" className="hover:text-white transition-colors">
                  Kantoor schoonmaak
                </Link>
              </li>
              <li>
                <Link href="/diensten#scholen" className="hover:text-white transition-colors">
                  Schoonmaak voor scholen
                </Link>
              </li>
              <li>
                <Link href="/diensten#bedrijven" className="hover:text-white transition-colors">
                  Bedrijfsschoonmaak
                </Link>
              </li>
              <li>
                <Link href="/diensten#huishoudelijk" className="hover:text-white transition-colors">
                  Huishoudelijke schoonmaak
                </Link>
              </li>
              <li>
                <Link href="/diensten#dagelijks" className="hover:text-white transition-colors">
                  Dagelijkse schoonmaak
                </Link>
              </li>
              <li>
                <Link href="/diensten#periodiek" className="hover:text-white transition-colors">
                  Periodieke schoonmaak
                </Link>
              </li>
              <li className="sm:col-span-2">
                <Link href="/diensten#specialistisch" className="hover:text-white transition-colors">
                  Specialistische schoonmaak
                </Link>
              </li>
            </ul>

            <div className="pt-3 border-t border-slate-800 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-blue" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition-colors">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
                <span>{companyInfo.address.street}, {companyInfo.address.city}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Language Switcher */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {companyInfo.name}. {t.footer.rights}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Globe className="w-3.5 h-3.5" />
              <span>Taal:</span>
            </div>
            <div className="flex items-center bg-slate-800/80 rounded-full p-1 border border-slate-700">
              <button
                type="button"
                onClick={() => setLang("nl")}
                className={`px-2 py-0.5 rounded-full font-bold transition-all ${
                  lang === "nl" ? "bg-brand-blue text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                NL
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2 py-0.5 rounded-full font-bold transition-all ${
                  lang === "en" ? "bg-brand-blue text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
