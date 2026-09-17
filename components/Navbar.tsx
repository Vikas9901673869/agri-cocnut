"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Trees } from "lucide-react";
import { useApp } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useApp();
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: t("nav_home") || "Home" },
    { href: "/detect", label: t("nav_detect") || "Disease Detection" },
    { href: "/about", label: t("nav_about") || "About" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1B5E20] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="bg-white/10 p-1.5 rounded-lg group-hover:bg-white/20 transition">
            <Trees className="w-6 h-6 text-[#66BB6A]" />
          </div>
          <div className="leading-tight">
            <span className="font-bold text-lg tracking-tight block text-white">
              {t("title") || "AgriCoco"}
            </span>
            <span className="text-[10px] text-[#DDE8DD]/80 block -mt-0.5">
              {t("subtitle") || "Smart Support for Healthy Coconut"}
            </span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-semibold tracking-wide transition-colors py-1 border-b-2 ${
                  isActive
                    ? "border-white text-white"
                    : "border-transparent text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Language Switcher Pill */}
        <div className="flex items-center bg-black/20 p-1 rounded-full border border-white/20">
          <button
            type="button"
            onClick={() => {
              console.log("Switching to English");
              setLang("en");
            }}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer ${
              lang === "en"
                ? "bg-white text-[#1B5E20] shadow-sm font-bold"
                : "text-white/80 hover:text-white"
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => {
              console.log("Switching to Kannada");
              setLang("kn");
            }}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition cursor-pointer ${
              lang === "kn"
                ? "bg-white text-[#1B5E20] shadow-sm font-bold"
                : "text-white/80 hover:text-white"
            }`}
          >
            ಕನ್ನಡ
          </button>
        </div>
      </div>
    </header>
  );
}