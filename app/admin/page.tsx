"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminPage() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [link, setLink] = useState("")
  const [category, setCategory] = useState("games")

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // 这里您需要实现一个API来保存新的作品
    // 例如：
    // await fetch('/api/works', {
    //   method: 'POST',
    //   body: JSON.stringify({ title, description, link, category }),
    // })

    // 重置表单
    setTitle("")
    setDescription("")
    setLink("")
    setCategory("games")

    // 刷新页面以显示新添加的作品
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="标题"
        className="w-full p-2 border rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="描述"
        className="w-full p-2 border rounded"
      />
      <input
        type="url"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="链接"
        className="w-full p-2 border rounded"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border rounded">
        <option value="games">游戏</option>
        <option value="otherWorks">其他作品</option>
      </select>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        添加新作品
      </button>
    </form>
  )
}

