import WorkItem from "./WorkItem"

interface Work {
  id: number
  title: string
  description: string
  link: string
}

interface WorkSectionProps {
  title: string
  works: Work[]
}

export default function WorkSection({ title, works }: WorkSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((work) => (
          <WorkItem key={work.id} {...work} />
        ))}
      </div>
    </section>
  )
}

