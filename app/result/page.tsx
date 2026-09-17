
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ResultCard from "@/components/ResultCard";
import AdvisoryCard from "@/components/AdvisoryCard";
import { useApp } from "@/context/LanguageContext";

export default function ResultPage() {
  const { resultData, t } = useApp();

  const data = resultData || {
    confidence: 0.976,
    previewUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80",
  };

  const localizedData = {
    diseaseName: t("disease_detected") === "Disease Detected" ? "Gray Leaf Spot" : "ಬೂದು ಎಲೆ ಚುಕ್ಕೆ ರೋಗ",
    confidence: data.confidence,
    affectedPart: t("affected_part"),
    previewUrl: data.previewUrl,
    about: t("about_disease_desc"),
    management: [t("mgmt_1"), t("mgmt_2"), t("mgmt_3"), t("mgmt_4")],
    precautions: [t("prec_1"), t("prec_2")],
  };

  return (
    <div className="space-y-5">
      <Link
        href="/detect"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#607D68] hover:text-[#1B5E20] transition cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        {t("back_to_detection")}
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ResultCard
          diseaseName={localizedData.diseaseName}
          confidence={localizedData.confidence}
          affectedPart={localizedData.affectedPart}
          previewUrl={localizedData.previewUrl}
        />
        <div className="md:col-span-2">
          <AdvisoryCard
            about={localizedData.about}
            management={localizedData.management}
            precautions={localizedData.precautions}
          />
        </div>
      </div>
    </div>
  );
}
