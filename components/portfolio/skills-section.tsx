"use client"

import { Code2, Server, Wrench } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"
import { useLanguage } from "@/components/language-provider"
import { nav, skillGroups } from "@/lib/portfolio-data"

const icons = [Code2, Server, Wrench]
const accents = ["text-primary", "text-pink", "text-lavender"]

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="relative scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-primary">{"< / >"}</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {t(nav.skills)}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={i} delay={i * 0.1}>
                <div className="glass h-full rounded-2xl p-6 transition-transform hover:-translate-y-1">
                  <Icon className={`size-7 ${accents[i % accents.length]}`} aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg font-semibold">{t(group.title)}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border bg-secondary/60 px-3 py-1.5 text-sm text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
