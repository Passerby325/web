import Link from "next/link"

interface WorkItemProps {
  id: number
  title: string
  description: string
  link: string
}

export default function WorkItem({ id, title, description, link }: WorkItemProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        查看项目
      </Link>
    </div>
  )
}

