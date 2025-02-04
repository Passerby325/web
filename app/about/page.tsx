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
              : "This is a website and game made by a person who doesn’t know much about programming, using only AI."}
          </p>
          <p>
            {language === "zh"
              ? "我目前使用的AI有CHATGPT、GitHub Copilot、Deepseek R1、Vercel V0和Cursor，而使用的网站有Github、Firebase和Vercel。"
              : "The AI tools I currently use are ChatGPT, GitHub Copilot, Deepseek R1, Vercel V0, and Cursor, while the websites I use include GitHub, Firebase, and Vercel."}
          </p>
        </div>
      </div>
    </PageTransition>
  )
}
