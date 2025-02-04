"use client"
import { useLanguage } from "../../lib/LanguageContext"
import PageTransition from "../../components/PageTransition"

export default function Contact() {
  const { language } = useLanguage()

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">{language === "zh" ? "联系方式" : "Contact"}</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="mb-4">
            {language === "zh"
              ? "如果你对我的项目感兴趣，或者想要合作，欢迎通过以下方式联系我（虽然我不一定发现到哈哈："
              : "If you are interested in my projects or would like to collaborate, feel free to contact me through the following methods (Although I may not have noticed it haha:"}
          </p>
          <ul className="list-disc list-inside">
            <li>Email:Timepasserby325@gmail.com </li>
             <li>{language === "zh" ? "其他联系方式很快就来" : "Other contact ways is coming soon"}</li>
          </ul>
        </div>
      </div>
    </PageTransition>
  )
}

