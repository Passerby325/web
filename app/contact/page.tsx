"use client"

import { useLanguage } from "../../contexts/LanguageContext"

export default function Contact() {
  const { language } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">{language === "zh" ? "联系方式" : "Contact Me"}</h1>
      <div className="max-w-md mx-auto">
        <p className="mb-4 text-center">
          {language === "zh"
            ? "如果您有任何问题或合作意向，请随时与我联系（但我不一定会看到哈哈。"
            : "If you have any questions or collaboration ideas, feel free to reach out to me."}
        </p>
        <ul className="space-y-2">
          <li>
            <strong>{language === "zh" ? "邮箱：" : "Email: "}</strong>
            <a href="mailto:timepasserby325@gmail.com" className="text-blue-500 hover:underline">
              timepasserby325@gmail.com
            </a>
          </li>
          
      
        </ul>
      </div>
    </div>
  )
}

