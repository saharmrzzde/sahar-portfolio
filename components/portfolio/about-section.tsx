"use client"

import { Reveal } from "@/components/portfolio/reveal"
import { useLanguage } from "@/components/language-provider"
import { about } from "@/lib/portfolio-data"

export function AboutSection() {
  const { t, locale } = useLanguage()

  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <p className="font-mono text-sm text-primary">{t(about.kicker)}</p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          {t(about.title)}
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          {about.paragraphs[locale].map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-lg leading-relaxed text-muted-foreground">{p}</p>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 lg:grid-cols-1">
          {about.stats.map((stat, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="glass rounded-2xl p-5 text-center lg:text-left">
                <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{t(stat.label)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
