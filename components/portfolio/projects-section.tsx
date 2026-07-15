"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { GithubIcon } from "@/components/portfolio/brand-icons"
import { Reveal } from "@/components/portfolio/reveal"
import { useLanguage } from "@/components/language-provider"
import { nav, projects, type Project } from "@/lib/portfolio-data"

const glowByAccent: Record<Project["accent"], string> = {
  blue: "glow-blue",
  pink: "glow-pink",
  lavender: "glow-pink",
}

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="relative scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-sm text-primary">{"{ }"}</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {t(nav.projects)}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={i} delay={(i % 2) * 0.1}>
              <article className="group glass h-full overflow-hidden rounded-2xl transition-transform hover:-translate-y-1.5">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={t(project.title)}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold">{t(project.title)}</h3>
                    <span
                      className={`size-2.5 shrink-0 translate-y-2 rounded-full bg-primary ${glowByAccent[project.accent]}`}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {t(project.description)}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md bg-secondary/60 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center gap-4 text-sm font-medium">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-primary"
                    >
                      Live demo <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <GithubIcon className="size-4" /> Code
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
