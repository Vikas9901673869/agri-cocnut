"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "@/locales/en.json";
import kn from "@/locales/kn.json";

export type Language = "en" | "kn";

export interface AnalysisResult {
  confidence: number;
  previewUrl: string;
}

const translations = { en, kn };

type TranslationKeys = keyof typeof translations.en;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKeys) => string;
  resultData: AnalysisResult | null;
  setResultData: (data: AnalysisResult | null) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [resultData, setResultData] = useState<AnalysisResult | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("agricoco_lang") as Language;
    if (saved === "en" || saved === "kn") {
      const timeoutId = window.setTimeout(() => setLangState(saved), 0);
      return () => window.clearTimeout(timeoutId);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("agricoco_lang", newLang);
  };

  const t = (key: TranslationKeys): string => {
    const dict = translations[lang] || translations.en;
    return dict[key] || translations.en[key] || String(key);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, resultData, setResultData }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useApp() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useApp must be used within a LanguageProvider");
  }
  return context;
}