"use client"

import Link from "next/link"
import { useLanguage } from "../lib/LanguageContext"

export default function Navbar() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "zh" ? "en" : "zh")
  }

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          {language === "zh" ? "我的作品集" : "My Portfolio"}
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              {language === "zh" ? "首页" : "Home"}
            </Link>
          </li>
          <li>
            <Link href="#games" className="hover:text-gray-300">
              {language === "zh" ? "游戏" : "Games"}
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              {language === "zh" ? "关于我" : "About Me"}
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              {language === "zh" ? "联系方式" : "Contact"}
            </Link>
          </li>
        </ul>
        <button onClick={toggleLanguage} className="bg-white text-gray-800 px-3 py-1 rounded">
          {language === "zh" ? "EN" : "中文"}
        </button>
      </div>
    </nav>
  )
}

