"use client"

import { useLanguage } from "../../lib/LanguageContext"

export default function About() {
  const { language } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">{language === "zh" ? "关于我" : "About Me"}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="mb-4">
          {language === "zh"
            ? "这是一个由不太懂编程的人仅仅使用人工智能制作的网站和游戏。"
            : "This is a website and game made by people who don’t know much about programming, using only artificial intelligence."}
        </p>
      </div>
    </div>
  )
}

