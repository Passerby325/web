"use client"
import { useLanguage } from "../../lib/LanguageContext"
import PageTransition from "../../components/PageTransition"

export default function About() {
  const { language } = useLanguage()

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">{language === "zh" ? "关于我" : "About Me"}</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="mb-4">
          {language === "zh"
            ? "这是一个由不太懂编程的人仅仅使用人工智能制作的网站和游戏。"
            : "This is a website and game made by a person who don’t know much about programming, using only AI."}
        </p>
        </div>
      </div>
    </PageTransition>
  )
}

