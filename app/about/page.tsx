"use client"

import { useLanguage } from "../../contexts/LanguageContext"
import Link from "next/link"

export default function About() {
  const { language } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">{language === "zh" ? "关于我" : "About Me"}</h1>
      <div className="max-w-2xl mx-auto">
        <p className="mb-4">
          {language === "zh"
            ? "你好！我是Passerby273，一个热爱编程和游戏开发的开发者。我喜欢创造有趣和有挑战性的项目，特别是在游戏开发领域。"
            : "Hello! I'm Passerby273, a developer passionate about programming and game development. I love creating fun and challenging projects, especially in the field of game development."}
        </p>
        <p className="mb-4">
          {language === "zh"
            ? "我的作品集展示了我在不同类型项目上的经验，从简单的网页游戏到更复杂的应用程序。我总是在学习新的技术和改进我的技能。"
            : "My portfolio showcases my experience with various types of projects, from simple web games to more complex applications. I'm always learning new technologies and improving my skills."}
        </p>
        <p className="mb-8">
          {language === "zh"
            ? "如果你对我的项目感兴趣，或者想讨论潜在的合作机会，请随时与我联系！"
            : "If you're interested in my projects or want to discuss potential collaborations, feel free to get in touch!"}
        </p>
        <div className="text-center">
          <Link href="/contact" className="text-blue-500 hover:underline">
            {language === "zh" ? "联系我" : "Contact Me"}
          </Link>
        </div>
      </div>
    </div>
  )
}

