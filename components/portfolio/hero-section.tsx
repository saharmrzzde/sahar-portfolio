"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Mail, MapPin } from "lucide-react"
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
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* soft radial glow backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 40%, oklch(0.7 0.15 245 / 0.18), transparent 70%), radial-gradient(40% 40% at 80% 70%, oklch(0.78 0.13 355 / 0.14), transparent 70%)",
        }}
      />

      {/* 3D canvas layer */}
      <div className="absolute inset-0">
        <SceneWrapper />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-28 pb-20">
        <div
          className={cn(
            "max-w-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-sm text-muted-foreground backdrop-blur">
            <MapPin className="size-3.5 text-primary" aria-hidden="true" />
            {t(profile.location)}
          </span>

          <p className="mt-6 font-mono text-sm text-primary sm:text-base">{t(hero.greeting)}</p>
          <h1 className="mt-2 font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            <span className="text-gradient">{profile.name}</span>
          </h1>
          <p className="mt-4 max-w-xl font-display text-xl font-medium text-foreground/90 text-balance sm:text-2xl">
            {t(hero.headline)}
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{t(hero.subline)}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 glow-blue"
            >
              {t(hero.ctaProjects)}
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-border bg-card/40 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-secondary"
            >
              {t(hero.ctaContact)}
            </a>
            <div className="ml-1 flex items-center gap-1">
              <IconLink href={profile.links.github} label="GitHub">
                <GithubIcon className="size-5" />
              </IconLink>
              <IconLink href={profile.links.linkedin} label="LinkedIn">
                <LinkedinIcon className="size-5" />
              </IconLink>
              <IconLink href={`mailto:${profile.links.email}`} label="Email">
                <Mail className="size-5" />
              </IconLink>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className={cn(
            "absolute inset-x-0 bottom-8 mx-auto flex w-fit flex-col items-center gap-2 text-xs text-muted-foreground transition-opacity duration-700 delay-500",
            mounted ? "opacity-100" : "opacity-0",
          )}
        >
          <span>{t(hero.scroll)}</span>
          <ArrowDown className="size-4 animate-bounce text-primary" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-10 place-items-center rounded-xl border border-border bg-card/40 text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
    >
      {children}
    </a>
  )
}
