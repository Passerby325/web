import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "../components/Navbar"
import { LanguageProvider } from "../contexts/LanguageContext"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Passerby273的作品展示",
  description: "这是简单的个人作品展示网站",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <LanguageProvider>
        <body className={`${inter.className} bg-[#f5f5dc]`}>
          <Navbar />
          {children}
        </body>
      </LanguageProvider>
    </html>
  )
}

