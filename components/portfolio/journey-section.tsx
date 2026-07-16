"use client"

import { Award, GraduationCap, Users, BadgeCheck } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"
import { useLanguage } from "@/components/language-provider"
import { journey, nav } from "@/lib/portfolio-data"

const icons = [Award, Users, GraduationCap, BadgeCheck]

export function JourneySection() {
  const { t } = useLanguage()

  return (
    <section id="journey" className="relative scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-kicker">{t(nav.journey)}</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
            {t({ en: "The path behind the projects.", ko: "프로젝트를 만든 경험과 과정." })}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {journey.map((item, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={`${item.year}-${index}`} delay={(index % 2) * 0.08}>
                <article className="glass flex h-full gap-4 rounded-3xl p-6 transition-transform hover:-translate-y-1">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-xs font-semibold text-primary">{item.year}</p>
                    <h3 className="mt-1 font-display text-lg font-bold">{t(item.title)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(item.detail)}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
