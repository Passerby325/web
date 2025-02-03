import Link from "next/link"
import LanguageSwitch from "./LanguageSwitch"
import { useLanguage } from "../contexts/LanguageContext"

export default function Navbar() {
  const { language } = useLanguage()

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          {language === "zh" ? "我的作品集" : "My Portfolio"}
        </Link>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link href="/" className="hover:text-gray-300">
              {language === "zh" ? "首页" : "Home"}
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              {language === "zh" ? "关于我" : "About"}
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              {language === "zh" ? "联系方式" : "Contact"}
            </Link>
          </li>
          <li>
            <LanguageSwitch />
          </li>
        </ul>
      </div>
    </nav>
  )
}

