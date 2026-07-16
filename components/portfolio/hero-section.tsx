"use client"

import { useEffect, useState } from "react"
import { ArrowDown, ArrowRight, Mail, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/portfolio/brand-icons"
import SceneWrapper from "@/components/portfolio/scene-wrapper"
import { useLanguage } from "@/components/language-provider"
import { hero, profile } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 pt-28 pb-16">
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-28 size-96 rounded-full bg-pink/20 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute top-20 -right-24 size-[28rem] rounded-full bg-primary/15 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-11rem)] max-w-6xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className={cn("z-10 transition-all duration-700 motion-reduce:transition-none", mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/65 px-3 py-1.5 text-sm text-muted-foreground shadow-sm backdrop-blur">
            <MapPin className="size-3.5 text-primary" aria-hidden="true" />
            {t(profile.location)}
          </span>

          <p className="mt-7 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">{t(hero.eyebrow)}</p>
          <h1 className="mt-3 font-display text-5xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            <span className="block text-foreground">Sahar</span>
            <span className="text-gradient">Mirzazadeh.</span>
          </h1>
          <p className="mt-6 max-w-xl font-display text-xl font-semibold leading-snug text-foreground/90 sm:text-2xl">{t(hero.headline)}</p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{t(hero.subline)}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground glow-blue transition-transform hover:-translate-y-0.5">
              {t(hero.ctaProjects)} <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="rounded-2xl border border-white/90 bg-white/60 px-5 py-3 text-sm font-semibold shadow-sm backdrop-blur transition-colors hover:bg-white">{t(hero.ctaContact)}</a>
            <div className="flex items-center gap-1">
              <IconLink href={profile.links.github} label="GitHub"><GithubIcon className="size-5" /></IconLink>
              <IconLink href={profile.links.linkedin} label="LinkedIn"><LinkedinIcon className="size-5" /></IconLink>
              <IconLink href={`mailto:${profile.links.email}`} label="Email"><Mail className="size-5" /></IconLink>
            </div>
          </div>
        </div>

        <div className={cn("relative h-[28rem] min-w-0 transition-all delay-150 duration-700 sm:h-[34rem] lg:h-[42rem]", mounted ? "scale-100 opacity-100" : "scale-95 opacity-0")}>
          <SceneWrapper />
        </div>
      </div>

      <a href="#about" className="mx-auto mt-2 flex w-fit flex-col items-center gap-1.5 text-xs text-muted-foreground">
        <span>{t(hero.scroll)}</span>
        <ArrowDown className="size-4 animate-bounce text-primary" aria-hidden="true" />
      </a>
    </section>
  )
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid size-11 place-items-center rounded-2xl border border-white/90 bg-white/60 text-muted-foreground shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white hover:text-foreground">
      {children}
    </a>
  )
}
