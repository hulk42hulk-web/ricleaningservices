"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, ArrowRight, Globe } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/diensten", label: t.nav.diensten },
    { href: "/over-ons", label: t.nav.overOns },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled ? "py-2.5 sm:py-3" : "py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Hoofdnavigatie"
            className={`glass-nav rounded-2xl sm:rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "shadow-md" : "shadow-sm"
            }`}
          >
            {/* Brand Logo & Title */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-xl p-1"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[#1677FF] to-[#38BDF8] flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-[#0B1F33] leading-none">
                  RI CLEANING
                </span>
                <span className="text-[10px] tracking-wider text-slate-500 uppercase font-semibold font-sans mt-0.5">
                  Services • Amsterdam
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-brand-blue/10 text-brand-blue font-semibold"
                        : "text-[#526777] hover:text-[#102A43] hover:bg-white/60"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Right Side: Language Switcher & Primary CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Switcher */}
              <div className="flex items-center bg-white/70 border border-white/80 rounded-full p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => setLang("nl")}
                  className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                    lang === "nl"
                      ? "bg-brand-blue text-white shadow-xs"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                  aria-label="Nederlands"
                >
                  NL
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                    lang === "en"
                      ? "bg-brand-blue text-white shadow-xs"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                  aria-label="English"
                >
                  EN
                </button>
              </div>

              {/* Primary CTA Button */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1677FF] to-[#38BDF8] text-white text-sm font-semibold shadow-md shadow-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/30 hover:brightness-105 active:scale-95 transition-all"
              >
                <span>{t.nav.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-700 hover:text-brand-blue hover:border-brand-blue/40 transition-colors"
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
