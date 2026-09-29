"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight, Globe, Sparkles } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function MobileMenu({ isOpen, onClose }) {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/diensten", label: t.nav.diensten },
    { href: "/over-ons", label: t.nav.overOns },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-between bg-white/95 backdrop-blur-2xl p-6 sm:p-8 animate-fadeIn transition-all duration-300 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Mobiele navigatie"
    >
      {/* Header with Brand & Close Button */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-200/80">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-2.5 font-display font-bold text-lg tracking-tight text-[#102A43]"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#1677FF] to-[#38BDF8] flex items-center justify-center text-white shadow-sm">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span>RI CLEANING</span>
        </Link>
        <button
          onClick={onClose}
          type="button"
          className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-slate-700 hover:text-brand-blue hover:border-brand-blue/40 transition-colors"
          aria-label="Sluit menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="py-8 flex flex-col space-y-3" aria-label="Mobiel hoofdmenu">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-lg font-medium transition-all ${
                isActive
                  ? "bg-brand-blue/10 text-brand-blue font-semibold"
                  : "text-[#102A43] hover:bg-slate-100/70"
              }`}
            >
              <span>{link.label}</span>
              <ArrowRight className={`w-5 h-5 ${isActive ? "text-brand-blue" : "text-slate-400"}`} />
            </Link>
          );
        })}
      </nav>

      {/* Language Switcher & Action CTA */}
      <div className="pt-6 border-t border-slate-200/80 space-y-4">
        <div className="flex items-center justify-between bg-slate-100/80 p-2 rounded-xl">
          <div className="flex items-center gap-2 text-sm text-slate-600 pl-2">
            <Globe className="w-4 h-4 text-brand-blue" />
            <span>Taal / Language</span>
          </div>
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => setLang("nl")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                lang === "nl"
                  ? "bg-white text-brand-blue shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              NL
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                lang === "en"
                  ? "bg-white text-brand-blue shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <Link
          href="/contact"
          onClick={onClose}
          className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#1677FF] to-[#38BDF8] text-white font-semibold text-center shadow-lg shadow-brand-blue/25 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
        >
          <span>{t.nav.cta}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        <p className="text-center text-xs text-slate-400 pt-2">
          Amsterdam, Nederland • ricleaning24@gmail.com
        </p>
      </div>
    </div>
  );
}
