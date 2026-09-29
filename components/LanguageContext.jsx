"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { content } from "@/lib/siteData";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("nl");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("ri_lang");
      if (savedLang === "en" || savedLang === "nl") {
        setLang(savedLang);
        document.documentElement.lang = savedLang;
      } else {
        document.documentElement.lang = "nl";
      }
    } catch {
      // ignore
    }
  }, []);

  const changeLang = (newLang) => {
    setLang(newLang);
    try {
      localStorage.setItem("ri_lang", newLang);
      document.documentElement.lang = newLang;
    } catch {
      // ignore
    }
  };

  const t = content[lang] || content.nl;

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
