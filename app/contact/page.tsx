"use client"

import { useLanguage } from "../../lib/LanguageContext"

export default function Contact() {
  const { language } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">{language === "zh" ? "联系方式" : "Contact"}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="mb-4">
          {language === "zh"
            ? "如果你对我的项目感兴趣，或者想要合作，欢迎通过以下方式联系我："
            : "If you are interested in my projects or would like to collaborate, feel free to contact me through the following methods:"}
        </p>
        <ul className="list-disc list-inside">
          <li>Email: example@example.com</li>
          <li>
            GitHub:{" "}
            <a href="https://github.com/yourusername" className="text-blue-500 hover:underline">
              https://github.com/yourusername
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/yourusername" className="text-blue-500 hover:underline">
              https://www.linkedin.com/in/yourusername
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

