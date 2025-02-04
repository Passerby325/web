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
            ? "我是一名热爱编程和游戏开发的开发者。我喜欢创造有趣和有挑战性的项目，不断学习新的技术和方法。"
            : "I am a developer passionate about programming and game development. I enjoy creating fun and challenging projects while continuously learning new technologies and methods."}
        </p>
        <p>
          {language === "zh"
            ? "在这个作品集网站上，你可以看到我的一些项目。我希望通过这些作品展示我的技能和创造力。"
            : "On this portfolio website, you can see some of my projects. I hope to showcase my skills and creativity through these works."}
        </p>
      </div>
    </div>
  )
}

