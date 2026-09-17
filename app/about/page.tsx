
"use client";

import { Leaf, CheckCircle2 } from "lucide-react";
import { useApp } from "@/context/LanguageContext";

export default function AboutPage() {
  const { t } = useApp();

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#DDE8DD] shadow-sm space-y-6">
      <h2 className="text-2xl font-bold flex items-center gap-2 text-[#263238]">
        <Leaf className="w-6 h-6 text-[#1B5E20]" />
        {t("about_title")}
      </h2>
      <p className="text-sm md:text-base text-[#607D68] leading-relaxed max-w-3xl">
        {t("about_desc")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <div className="p-4 bg-[#F7FAF5] rounded-xl border border-[#DDE8DD] text-xs font-bold text-[#1B5E20] flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#1B5E20]" />
          {t("pill_ai")}
        </div>
        <div className="p-4 bg-[#F7FAF5] rounded-xl border border-[#DDE8DD] text-xs font-bold text-[#1B5E20] flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#1B5E20]" />
          {t("pill_evidence")}
        </div>
        <div className="p-4 bg-[#F7FAF5] rounded-xl border border-[#DDE8DD] text-xs font-bold text-[#1B5E20] flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#1B5E20]" />
          {t("pill_bilingual")}
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] p-8 text-center text-white mt-6">
        <p className="font-bold text-sm tracking-wide">
          {t("about_tagline")}
        </p>
      </div>
    </div>
  );
}
