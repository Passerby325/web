"use client"

import { useLanguage } from "../contexts/LanguageContext"
import WorkSection from "../components/WorkSection"
import Link from "next/link"

const games = [
  {
    id: 1,
    title: { zh: "贪吃蛇（电脑）", en: "Snake Game (PC)" },
    description: {
      zh: "有排行榜的贪吃蛇游戏，只能电脑玩",
      en: "A snake game with leaderboard, playable on PC only",
    },
    link: "https://test2-74dd1.web.app/",
  },
  {
    id: 2,
    title: { zh: "2D横向射击游戏（手机）", en: "2D Horizontal Shooting Game (Mobile)" },
    description: {
      zh: "有排行榜的2D横向射击游戏，你能活多久？（推荐手机玩）",
      en: "A 2D horizontal shooting game with leaderboard. How long can you survive? (Recommended for mobile)",
    },
    link: "https://passerby325.github.io/real-2d-shooting-game/",
  },
  {
    id: 3,
    title: { zh: "俯视角射击游戏（电脑)", en: "Top-Down Shooting Game (PC)" },
    description: { zh: "用子弹和走位消灭敌人并生成下去吧！", en: "Eliminate enemies with bullets and movement!" },
    link: "https://passerby325.github.io/top-down-shooting-game/",
  },
  {
    id: 4,
    title: { zh: "2D横向射击游戏（电脑简单版）", en: "2D Horizontal Shooting Game (Simple PC Version)" },
    description: { zh: "2D横向射击游戏（电脑简单版）", en: "2D Horizontal Shooting Game (Simple PC Version)" },
    link: "https://passerby325.github.io/shooting-2d-laptop-/",
  },
  {
    id: 5,
    title: { zh: "剪刀石头布", en: "Rock Paper Scissors" },
    description: { zh: "双人游戏", en: "Two-player game" },
    link: "https://jdstb2.vercel.app/",
  },
  {
    id: 6,
    title: { zh: "剪刀石头布（决斗版）", en: "Rock Paper Scissors (Duel Version)" },
    description: { zh: "在这个游戏内，你有5条命", en: "You have 5 lives in this game" },
    link: "https://newheartjdstb.vercel.app/",
  },
]

const otherWorks = [
  {
    id: 1,
    title: { zh: "记忆测试", en: "Memory Test" },
    description: {
      zh: "这个网页会显示6组5个随机字母。你有20秒的时间来记住它们。你可以选择显示一个计时器。在记忆阶段后，你将在提供的字段中输入你的答案，并计算你的准确率。如果答对两个或以上，有神秘惊喜！！！",
      en: "This webpage will display 6 groups of 5 random letters. You have 20 seconds to memorize them. You can choose to show a timer. After the memory phase, you will enter your answers in the provided fields, and your accuracy will be calculated. If you get two or more correct, there's a mysterious surprise!!!",
    },
    link: "https://passerby325.github.io/6group-memory-test-mandarin-version-/",
  },
  {
    id: 2,
    title: { zh: "memory test", en: "Memory Test" },
    description: {
      zh: "This webpage will display 6 groups of 5 random letters. You have 20 seconds to memorize them. You can choose to show a timer. After the memory phase, you will enter your answers in the provided fields, and your accuracy will be calculated.",
      en: "This webpage will display 6 groups of 5 random letters. You have 20 seconds to memorize them. You can choose to show a timer. After the memory phase, you will enter your answers in the provided fields, and your accuracy will be calculated.",
    },
    link: "https://passerby325.github.io/325memorytest/",
  },
]

export default function Home() {
  const { language } = useLanguage()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        {language === "zh" ? "Passerby273的作品集" : "Passerby273's Portfolio"}
      </h1>
      <p className="text-center mb-8">
        {language === "zh"
          ? "欢迎来到我的作品集！这里展示了我开发的各种游戏和其他项目。请随意浏览并尝试它们。"
          : "Welcome to my portfolio! Here you'll find various games and projects I've developed. Feel free to browse and try them out."}
      </p>
      <WorkSection
        title={language === "zh" ? "游戏作品" : "Game Projects"}
        works={games.map((game) => ({
          ...game,
          title: game.title[language],
          description: game.description[language],
        }))}
      />
      <WorkSection
        title={language === "zh" ? "其他作品" : "Other Projects"}
        works={otherWorks.map((work) => ({
          ...work,
          title: work.title[language],
          description: work.description[language],
        }))}
      />
      <div className="text-center mt-8">
        <Link href="/about" className="text-blue-500 hover:underline">
          {language === "zh" ? "了解更多关于我" : "Learn more about me"}
        </Link>
      </div>
    </main>
  )
}

