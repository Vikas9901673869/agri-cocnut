
"use client";

import { AlertTriangle } from "lucide-react";
import { useApp } from "@/context/LanguageContext";

interface Props {
  diseaseName: string;
  confidence: number;
  affectedPart: string;
  previewUrl: string;
}

export default function ResultCard({ diseaseName, confidence, affectedPart, previewUrl }: Props) {
  const { t } = useApp();

  return (
    <div className="bg-white rounded-2xl p-5 border border-[#DDE8DD] shadow-sm flex flex-col gap-4">
      <div className="rounded-xl overflow-hidden aspect-[4/3] bg-gray-100 border border-emerald-100">
        <img src={previewUrl} alt="Analyzed Leaf" className="w-full h-full object-cover" />
      </div>
      <span className="text-xs font-semibold text-[#607D68]">
        {t("uploaded_image")}
      </span>

      <div className="bg-red-50/70 border border-red-200 rounded-xl p-4">
        <div className="flex items-center gap-1.5 text-[#D84315] text-[11px] font-bold uppercase tracking-wider mb-1">
          <AlertTriangle className="w-3.5 h-3.5" />
          {t("disease_detected")}
        </div>
        <h3 className="text-lg font-bold text-[#263238]">
          {diseaseName}
        </h3>

        <div className="mt-3">
          <div className="flex justify-between text-xs font-semibold mb-1">
            <span className="text-[#607D68]">{t("confidence")}</span>
            <span className="text-[#1B5E20]">{(confidence * 100).toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#1B5E20] h-2 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(confidence * 100, 100)}%` }}
            ></div>
          </div>
        </div>

        <div className="mt-4">
          <span className="bg-red-100 text-[#D84315] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
            {affectedPart}
          </span>
        </div>
      </div>
    </div>
  );
}

