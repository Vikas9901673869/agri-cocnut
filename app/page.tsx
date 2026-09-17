
"use client";

import Link from "next/link";
import { ChevronRight, Scan, Sparkles, Leaf } from "lucide-react";
import { useApp } from "@/context/LanguageContext";

export default function HomePage() {
  const { t } = useApp();

  return (
    <div className="space-y-12">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] text-white p-8 md:p-14 shadow-lg">
        <div className="relative z-10 max-w-xl space-y-4">
          <span className="inline-block text-[#66BB6A] text-xs font-semibold tracking-wide uppercase bg-black/20 px-3 py-1 rounded-full border border-white/10">
            {t("hero_badge")}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {t("hero_headline")}
          </h1>
          <p className="text-white/90 text-sm md:text-base leading-relaxed">
            {t("hero_description")}
          </p>
          <div className="pt-2">
            <Link
              href="/detect"
              className="inline-flex items-center gap-2.5 bg-[#F9A825] hover:bg-[#F9A825]/90 text-[#263238] font-bold px-6 py-3 rounded-xl transition shadow hover:shadow-md cursor-pointer"
            >
              <span>{t("start_detection")}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-[#DDE8DD] shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#1B5E20] shrink-0">
            <Scan className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-[#263238] text-sm">{t("feat1_title")}</h3>
            <p className="text-xs text-[#607D68] mt-0.5">{t("feat1_desc")}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-[#DDE8DD] shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#1B5E20] shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-[#263238] text-sm">{t("feat2_title")}</h3>
            <p className="text-xs text-[#607D68] mt-0.5">{t("feat2_desc")}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-[#DDE8DD] shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#1B5E20] shrink-0">
            <Leaf className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-[#263238] text-sm">{t("feat3_title")}</h3>
            <p className="text-xs text-[#607D68] mt-0.5">{t("feat3_desc")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}