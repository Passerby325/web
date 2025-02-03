import WorkSection from "../components/WorkSection"

const games = [
  {
    id: 1,
    title: "贪吃蛇（电脑）",
    description: "有排行榜的贪吃蛇游戏，只能电脑玩",
    link: "https://test2-74dd1.web.app/",
  },
  {
    id: 2,
    title: "2D横向射击游戏（手机）",
    description: "有排行榜的2D横向射击游戏，你能活多久？（推荐手机玩）",
    link: "https://passerby325.github.io/real-2d-shooting-game/",
  },
  {
    id: 3,
    title: "俯视角射击游戏（电脑)",
    description: "用子弹和走位消灭敌人并生成下去吧！",
    link: "https://passerby325.github.io/top-down-shooting-game/",
  },
  {
    id: 4,
    title: "2D横向射击游戏（电脑简单版）",
    description: "2D横向射击游戏（电脑简单版）",
    link: "https://passerby325.github.io/shooting-2d-laptop-/",
  },

  {
    id: 5,
    title: "剪刀石头布（决斗版）",
    description: "在这个游戏内，你有5条命",
    link: "https://newheartjdstb.vercel.app/",
  },
]

const otherWorks = [
  {
    id: 1,
    title: "memory test",
    description:
      "This webpage will display 6 groups of 5 random letters. You have 20 seconds to memorize them. You can choose to show a timer. After the memory phase, you will enter your answers in the provided fields, and your accuracy will be calculated.",
    link: "https://passerby325.github.io/325memorytest/",
  },
  {
    id: 2,
    title: "记忆测试",
    description:
      "这个网页会显示6组5个随机字母。你有20秒的时间来记住它们。你可以选择显示一个计时器。在记忆阶段后，你将在提供的字段中输入你的答案，并计算你的准确率。如果答对两个或以上，有神秘惊喜！！！",
    link: "https://passerby325.github.io/6group-memory-test-mandarin-version-/",
  },
]

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Passerby273的作品集</h1>
      <WorkSection title="游戏作品" works={games} />
      <WorkSection title="其他作品" works={otherWorks} />
    </main>
  )
}

