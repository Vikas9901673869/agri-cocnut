"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Leaf } from "lucide-react";
import ImageUploader from "@/components/ImageUploader";
import { useApp } from "@/context/LanguageContext";

export default function DetectPage() {
  const { t, setResultData } = useApp();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAnalyze = async (file: File) => {
    setLoading(true);
    const previewUrl = URL.createObjectURL(file);

    try {
      // Simulate 1 second inference delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setResultData({
        confidence: 0.976,
        previewUrl,
      });

      router.push("/result");
    } catch (err) {
      console.error(err);
      alert("Error analyzing image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold flex items-center gap-2 text-[#263238]">
          <Leaf className="w-6 h-6 text-[#1B5E20]" />
          {t("detect_title")}
        </h2>
        <p className="text-xs text-[#607D68] mt-1">{t("detect_subtitle")}</p>
      </div>

      <ImageUploader onAnalyze={handleAnalyze} loading={loading} />
    </div>
  );
}