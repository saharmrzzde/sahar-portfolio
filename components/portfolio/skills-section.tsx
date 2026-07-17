"use client"

import { Braces, Languages, Server, Wrench } from "lucide-react"
import { Reveal } from "@/components/portfolio/reveal"
import { useLanguage } from "@/components/language-provider"
import { languages, nav, skillGroups } from "@/lib/portfolio-data"

const icons = [Braces, Server, Wrench]
const colors = ["bg-[#dcecff] text-primary", "bg-[#ffe0ed] text-[#b75d85]", "bg-[#eee7ff] text-[#7760ad]"]

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="relative scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-kicker">{t(nav.skills)}</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
            {t({ en: "A growing toolkit, grounded in fundamentals.", ko: "기초를 바탕으로 넓혀 가는 기술 역량." })}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={group.title.en} delay={index * 0.08}>
                <article className="glass h-full rounded-3xl p-6 transition-transform hover:-translate-y-1">
                  <span className={`grid size-12 place-items-center rounded-2xl ${colors[index]}`}><Icon className="size-5" aria-hidden="true" /></span>
                  <p className="mt-5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{t(group.note)}</p>
                  <h3 className="mt-1 font-display text-xl font-bold">{t(group.title)}</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => <li key={item} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-muted-foreground">{item}</li>)}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="glass mt-6 grid gap-6 rounded-3xl p-6 sm:p-8 lg:grid-cols-[0.8fr_2.2fr] lg:items-center">
            <div>
              <span className="grid size-12 place-items-center rounded-2xl bg-[#fff0bf] text-[#9a7428]"><Languages className="size-5" aria-hidden="true" /></span>
              <h3 className="mt-4 font-display text-xl font-bold">{t({ en: "Languages", ko: "언어" })}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t({ en: "Communication across six languages and cultures.", ko: "여섯 언어와 문화권을 잇는 소통 역량입니다." })}</p>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {languages.map((language) => <li key={language.name.en} className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3"><span className="block text-sm font-semibold">{t(language.name)}</span><span className="mt-0.5 block text-xs text-muted-foreground">{t(language.level)}</span></li>)}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
