"use client"
import WorkSection from "../components/WorkSection"
import { useLanguage } from "../lib/LanguageContext"
import PageTransition from "../components/PageTransition"
import styles from "../components/Navbar.module.css"
import { useState, useCallback } from "react"

const games = [
  {
    id: 1,
    title: {
      zh: "贪吃蛇（电脑）",
      en: "Snake Game (PC)",
    },
    description: {
      zh: "有排行榜的贪吃蛇游戏，只能电脑玩",
      en: "A snake game with leaderboard, playable on PC only",
    },
    link: "https://test2-74dd1.web.app/",
    image: "/images/snake-game.jpg",
  },
  {
    id: 2,
    title: {
      zh: "2D横向射击游戏（手机）",
      en: "2D Side-scrolling Shooter (Mobile)",
    },
    description: {
      zh: "有排行榜的2D横向射击游戏，你能活多久？（推荐手机玩）",
      en: "A 2D side-scrolling shooter game with leaderboard. How long can you survive? (Recommended for mobile)",
    },
    link: "https://passerby325.github.io/real-2d-shooting-game/",
    image: "/images/2dshoot.jpg",
  },
  {
    id: 3,
    title: {
      zh: "俯视角射击游戏（电脑)",
      en: "Top-down Shooter (PC)",
    },
    description: {
      zh: "用子弹和走位消灭敌人并生存下去吧！",
      en: "Eliminate enemies with bullets and movement to survive!",
    },
    link: "https://passerby325.github.io/top-down-shooting-game/",
    image: "/images/top-down-shooting-game.jpg",
  },
  {
    id: 4,
    title: {
      zh: "2D横向射击游戏（电脑简单版）",
      en: "2D Side-scrolling Shooter (PC Simple Version)",
    },
    description: {
      zh: "2D横向射击游戏（电脑简单版）",
      en: "A simple version of 2D side-scrolling shooter game for PC",
    },
    link: "https://passerby325.github.io/shooting-2d-laptop-/",
    image: "/images/2dshoot.jpg",
  },
  {
    id: 5,
    title: {
      zh: "剪刀石头布",
      en: "Rock Paper Scissors",
    },
    description: {
      zh: "双人游戏",
      en: "Two-player game",
    },
    link: "https://jdstb2.vercel.app/",
    image: "/images/rock-paper-scissors.png",
  },
  {
    id: 6,
    title: {
      zh: "剪刀石头布（决斗版）",
      en: "Rock Paper Scissors (Duel Version)",
    },
    description: {
      zh: "在这个游戏内，你有5条命",
      en: "In this game, you have 5 lives",
    },
    link: "https://newheartjdstb.vercel.app/",
    image: "/images/rock-paper-scissors.png",
  },
  {
    id: 7,
    title: {
      zh: "地图游戏",
      en: "Map Game",
    },
    description: {
      zh: "一个有些特别的走迷宫游戏，特别模式有些难",
      en: "A somewhat special maze game, the special mode is a bit difficult",
    },
    link: "https://map2-sigma.vercel.app/", 
    image: "/images/map-game.jpg",
  },
]

const otherWorks = [
  {
    id: 1,
    title: {
      zh: "记忆测试（英文版）",
      en: "Memory Test",
    },
    description: {
      zh: "这个网页会显示6组5个随机字母。你有20秒的时间来记住它们。你可以选择显示一个计时器。在记忆阶段后，你将在提供的字段中输入你的答案，并计算你的准确率。",
      en: "This webpage will display 6 groups of 5 random letters. You have 20 seconds to memorize them. You can choose to show a timer. After the memory phase, you will enter your answers in the provided fields, and your accuracy will be calculated.",
    },
    link: "https://passerby325.github.io/325memorytest/",
    image: "/images/memorytesten.png",
  },
  {
    id: 2,
    title: {
      zh: "记忆测试（中文版）",
      en: "Memory Test (Chinese Version)",
    },
    description: {
      zh: "这个网页会显示6组5个随机字母。你有20秒的时间来记住它们。你可以选择显示一个计时器。在记忆阶段后，你将在提供的字段中输入你的答案，并计算你的准确率。如果答对两个或以上，有神秘惊喜！！！",
      en: "This webpage displays 6 groups of 5 random letters. You have 20 seconds to memorize them. You can choose to show a timer. After the memory phase, you will enter your answers in the provided fields, and your accuracy will be calculated. If you get two or more correct, there's a mysterious surprise!!!",
    },
    link: "https://passerby325.github.io/6group-memory-test-mandarin-version-/",
    image: "/images/memorytestcn.png",
  },

  {
    id: 3,
    title: {
      zh: "英文情景对话练习",
      en: "English conversation practice",
    },
    description: {
      zh: "一个在不同情景下，用英文与其他人对话的网页。特点是有语法检查和句子建议。然后有自定义。作者觉得好玩。",
      en: "A webpage where you can talk to other people in English in different situations. It features grammar checking and sentence suggestions. It also has customization. The author thinks it's fun.",
    },
    link: "https://talk-vert-alpha.vercel.app/",
    image: "/images/talk.png",
  },
]

export default function Home() {
  const { language } = useLanguage()
  const [isRotating, setIsRotating] = useState(false)

  const handleRotate = useCallback(() => {
    if (!isRotating) {
      setIsRotating(true)
      setTimeout(() => setIsRotating(false), 1000)
    }
  }, [isRotating])

  return (
    <PageTransition>
      <main className="container mx-auto px-4 py-8">
        <h1
          className={`text-3xl font-bold mb-8 text-center ${styles.rotateOnHover} ${isRotating ? styles.rotate : ""}`}
          onClick={handleRotate}
          onMouseEnter={handleRotate}
        >
          {language === "zh" ? "Passerby273的作品集" : "Passerby273's Portfolio"}
        </h1>
        <WorkSection title={language === "zh" ? "游戏作品" : "Game Projects"} works={games} language={language} />
        <WorkSection title={language === "zh" ? "其他作品" : "Other Projects"} works={otherWorks} language={language} />
      </main>
    </PageTransition>
  )
}

