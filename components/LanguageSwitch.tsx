"use client"

import { useLanguage } from "../contexts/LanguageContext"

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()

  return (
    <button
      onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
    >
      {language === "zh" ? "English" : "中文"}
    </button>
  )
}

