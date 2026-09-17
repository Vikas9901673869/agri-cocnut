"use client";

import { Leaf, CheckCircle2, ShieldAlert, BookOpen } from "lucide-react";
import { useApp } from "@/context/LanguageContext";

interface Props {
  about: string;
  management: string[];
  precautions: string[];
}

export default function AdvisoryCard({ about, management, precautions }: Props) {
  const { t } = useApp();

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#DDE8DD] shadow-sm flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-[#263238] flex items-center gap-2 pb-3 border-b border-gray-100 mb-4">
          <Leaf className="w-5 h-5 text-[#1B5E20]" />
          {t("advisory_title")}
        </h3>

        <div className="mb-4">
          <h4 className="text-xs font-bold text-[#263238] uppercase tracking-wide mb-1">
            ℹ️ {t("about_disease_title")}
          </h4>
          <p className="text-xs text-[#607D68] leading-relaxed">
            {about}
          </p>
        </div>

        <div className="mb-4">
          <h4 className="text-xs font-bold text-[#263238] uppercase tracking-wide mb-2">
            🛡️ {t("mgmt_title")}
          </h4>
          <ul className="space-y-1.5 text-xs text-[#263238]">
            {management.map((step, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1B5E20] shrink-0 mt-0.5" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-5">
          <h4 className="text-xs font-bold text-[#D84315] uppercase tracking-wide mb-1.5 flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5" />
            {t("precautions_title")}
          </h4>
          <ul className="list-disc list-inside text-xs text-[#607D68] space-y-1">
            {precautions.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#EBF3EC] border border-[#D5E6D8] rounded-xl p-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <BookOpen className="w-4 h-4 text-[#1B5E20]" />
          <div>
            <p className="text-[11px] font-bold text-[#1B5E20]">{t("trusted_source")}</p>
            <p className="text-[10px] text-[#607D68]">{t("source_authorities")}</p>
          </div>
        </div>
        <span className="text-xs font-bold text-[#1B5E20] cursor-pointer hover:underline">
          {t("view_sources")}
        </span>
      </div>
    </div>
  );
}
