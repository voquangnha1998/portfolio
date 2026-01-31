import type { FC, ReactNode } from "react"

interface Props {
  title: string
  children: ReactNode
}

const Section: FC<Props> = ({ title, children }) => {
  return (
    <section className="bg-gray-900 rounded-2xl p-6">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  )
}

export default Section
