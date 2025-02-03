import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          我的作品集
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              首页
            </Link>
          </li>
          <li>
            <Link href="#games" className="hover:text-gray-300">
              游戏
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-300">
              关于我
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-300">
              联系方式
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

