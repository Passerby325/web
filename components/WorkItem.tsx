import Link from "next/link"

interface WorkItemProps {
  id: number
  title: {
    zh: string
    en: string
  }
  description: {
    zh: string
    en: string
  }
  link: string
  language: "zh" | "en"
}

export default function WorkItem({ id, title, description, link, language }: WorkItemProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">{title[language]}</h2>
      <p className="text-gray-600 mb-4">{description[language]}</p>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        {language === "zh" ? "开始" : "Start"}
      </Link>
    </div>
  )
}

