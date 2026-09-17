"use client";

import React, { useState } from "react";
import { UploadCloud, CheckCircle2, Scan } from "lucide-react";
import { useApp } from "@/context/LanguageContext";

interface Props {
  onAnalyze: (file: File) => void;
  loading: boolean;
}

export default function ImageUploader({ onAnalyze, loading }: Props) {
  const { t } = useApp();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file (PNG or JPG).");
      return;
    }
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
    // Reset value so selecting the same file again triggers onChange
    e.target.value = "";
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 bg-white rounded-2xl p-6 border border-[#DDE8DD] shadow-sm flex flex-col justify-between">
        
        {/* Native clickable label - bypasses React ref issues */}
        <label
          htmlFor="coconut-file-upload"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[260px] cursor-pointer transition select-none ${
            isDragging
              ? "border-[#1B5E20] bg-emerald-50/50"
              : "border-[#DDE8DD] bg-[#F7FAF5]/70 hover:bg-[#F7FAF5]"
          }`}
        >
          <input
            id="coconut-file-upload"
            type="file"
            onChange={handleInputChange}
            accept="image/png, image/jpeg, image/jpg"
            className="sr-only"
          />

          {preview ? (
            <div className="flex flex-col items-center">
              <img
                src={preview}
                alt="Selected preview"
                className="w-44 h-36 object-cover rounded-xl border border-emerald-200 shadow-sm mb-3 pointer-events-none"
              />
              <span className="text-xs font-semibold text-[#1B5E20]">
                {selectedFile?.name}
              </span>
              <span className="text-[11px] text-gray-400 mt-1">
                Click anywhere to choose a different photo
              </span>
            </div>
          ) : (
            <>
              <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-[#1B5E20] mb-3 pointer-events-none">
                <UploadCloud className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-sm text-[#263238] mb-1 pointer-events-none">
                {t ? t("upload_title") : "Upload Coconut Image"}
              </h4>
              <p className="text-xs text-[#607D68] max-w-sm mb-4 pointer-events-none">
                {t ? t("upload_desc") : "Drag and drop an image here or choose from your device."}
              </p>
              
              <span className="bg-[#1B5E20] hover:bg-[#2E7D32] active:scale-95 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow transition pointer-events-none inline-block">
                {t ? t("choose_image") : "Choose Image"}
              </span>

              <span className="text-[11px] text-gray-400 mt-2 pointer-events-none">
                {t ? t("formats") : "Supported formats: JPG, PNG (Max 5MB)"}
              </span>
            </>
          )}
        </label>

        {/* Analyze Action Button */}
        <button
          type="button"
          onClick={() => {
            if (selectedFile) {
              onAnalyze(selectedFile);
            }
          }}
          disabled={!selectedFile || loading}
          className={`w-full mt-5 font-bold py-3 rounded-xl transition shadow flex items-center justify-center gap-2 ${
            selectedFile && !loading
              ? "bg-[#1B5E20] hover:bg-[#2E7D32] active:scale-[0.99] text-white cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <Scan className="w-4 h-4" />
          {loading
            ? (t ? t("analyzing_btn") : "Analyzing...")
            : (t ? t("analyze_btn") : "Analyze Image")}
        </button>
      </div>

      {/* Guidelines Sidebar */}
      <div className="bg-white rounded-2xl p-6 border border-[#DDE8DD] shadow-sm flex flex-col gap-4">
        <div className="rounded-xl overflow-hidden aspect-[16/10] bg-emerald-100 flex items-center justify-center text-emerald-800 text-xs font-medium">
          {preview ? (
            <img src={preview} alt="Sample preview" className="w-full h-full object-cover" />
          ) : (
            <span className="text-center px-4">Leaf Reference Focus Area</span>
          )}
        </div>

        <div>
          <h4 className="font-bold text-xs uppercase tracking-wider text-[#263238] mb-3">
            💡 {t ? t("guidelines_title") : "Image Guidelines"}
          </h4>
          <ul className="space-y-2.5 text-xs text-[#607D68]">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1B5E20] shrink-0 mt-0.5" />
              <span>{t ? t("guide_1") : "Use a clear and well-lit image"}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1B5E20] shrink-0 mt-0.5" />
              <span>{t ? t("guide_2") : "Focus on the affected part of the plant"}</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1B5E20] shrink-0 mt-0.5" />
              <span>{t ? t("guide_3") : "Avoid blurry or low-quality images"}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}