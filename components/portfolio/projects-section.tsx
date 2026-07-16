"use client"

import { ArrowUpRight, BarChart3, Database, MapPin, Terminal } from "lucide-react"
import { GithubIcon } from "@/components/portfolio/brand-icons"
import { Reveal } from "@/components/portfolio/reveal"
import { useLanguage } from "@/components/language-provider"
import { nav, projects, type Project } from "@/lib/portfolio-data"

const tone: Record<Project["accent"], string> = {
  blue: "from-[#dcecff] to-[#edf6ff]",
  pink: "from-[#ffe0ed] to-[#fff1f6]",
  yellow: "from-[#fff0bf] to-[#fff8de]",
  lavender: "from-[#e9e1ff] to-[#f6f1ff]",
}

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="relative scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="section-kicker">{t(nav.projects)}</p>
          <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-5xl">
              {t({ en: "Selected work, built from real problems.", ko: "실제 문제에서 출발한 프로젝트." })}
            </h2>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t({ en: "Web, data, and computer science projects—each with a different kind of challenge.", ko: "웹, 데이터, 컴퓨터공학 분야에서 서로 다른 문제를 해결한 작업입니다." })}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 2) * 0.08}>
              <article className="glass group h-full overflow-hidden rounded-[2rem] transition-transform duration-300 hover:-translate-y-1.5">
                <ProjectPreview project={project} />
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-bold sm:text-2xl">{t(project.title)}</h3>
                    <span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">0{index + 1}</span>
                  </div>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{t(project.description)}</p>
                  <p className="mt-3 border-l-2 border-primary/40 pl-3 text-sm font-medium text-foreground/75">{t(project.outcome)}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => <li key={tag} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-muted-foreground">{tag}</li>)}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold">
                    {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-primary hover:underline">{t({ en: "Live project", ko: "라이브 프로젝트" })}<ArrowUpRight className="size-4" /></a>}
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground"><GithubIcon className="size-4" />{t({ en: "Source code", ko: "소스 코드" })}</a>}
                    {!project.demo && !project.github && <span className="text-xs text-muted-foreground">{t({ en: "Academic team project", ko: "전공 팀 프로젝트" })}</span>}
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

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className={`project-grid relative h-60 overflow-hidden bg-gradient-to-br ${tone[project.accent]} p-6`} aria-hidden="true">
      {project.slug === "lxp" && (
        <div className="relative h-full rounded-2xl border border-white/80 bg-white/70 p-4 shadow-xl backdrop-blur">
          <div className="flex items-center justify-between"><span className="font-display text-sm font-bold text-[#49698f]">LXP · StudySpot</span><MapPin className="size-4 text-primary" /></div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Library 3F", "Hanbit 3F", "Mirae 3F"].map((name, i) => <div key={name} className="rounded-xl bg-white p-2 shadow-sm"><span className="block text-[9px] font-semibold text-[#56657b]">{name}</span><span className={`mt-2 block h-1.5 rounded-full ${i === 1 ? "w-1/2 bg-pink" : "w-3/4 bg-primary"}`} /></div>)}
          </div>
          <div className="mt-3 h-20 rounded-xl bg-[#dbeaf1] p-2"><div className="h-full rounded-lg border border-dashed border-[#87a7b7] bg-white/40" /></div>
        </div>
      )}
      {project.slug === "stocks" && (
        <div className="relative h-full rounded-2xl bg-[#3f365b] p-4 shadow-xl">
          <div className="flex items-center justify-between text-white"><span className="font-mono text-xs">ML BACKTEST</span><BarChart3 className="size-4 text-[#ffc1d9]" /></div>
          <div className="mt-8 flex h-24 items-end gap-2 border-b border-l border-white/20 pl-2">
            {[38, 62, 48, 82, 67, 96, 76, 110].map((h, i) => <span key={i} className="w-full rounded-t bg-gradient-to-t from-[#7ba5ff] to-[#ffc1d9]" style={{ height: h }} />)}
          </div>
          <div className="mt-3 flex gap-2"><span className="rounded-full bg-white/10 px-2 py-1 font-mono text-[9px] text-white/70">Random Forest</span><span className="rounded-full bg-white/10 px-2 py-1 font-mono text-[9px] text-white/70">Naver Finance</span></div>
        </div>
      )}
      {project.slug === "hash" && (
        <div className="relative h-full rounded-2xl border border-white/80 bg-[#28354c] p-4 shadow-xl">
          <div className="flex items-center gap-2 text-[#ffe69a]"><Database className="size-4" /><span className="font-mono text-xs">capacity: dynamic</span></div>
          <div className="mt-5 grid grid-cols-6 gap-2">
            {Array.from({ length: 18 }).map((_, i) => <span key={i} className={`aspect-square rounded-md border ${[1, 4, 8, 12, 16].includes(i) ? "border-[#ffe18a] bg-[#ffe18a]/35" : "border-white/15 bg-white/5"}`} />)}
          </div>
          <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-white/60"><span>load factor</span><span className="text-[#ffe18a]">0.75 → resize()</span></div>
        </div>
      )}
      {project.slug === "portfolio" && (
        <div className="relative h-full rounded-2xl border border-white/80 bg-white/75 p-4 shadow-xl backdrop-blur">
          <div className="flex items-center justify-between"><span className="font-display text-sm font-bold text-[#69578d]">Sahar&apos;s room</span><Terminal className="size-4 text-[#927bd0]" /></div>
          <div className="absolute inset-x-6 bottom-5 top-12 overflow-hidden rounded-xl bg-[#fff8ef]">
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#ead8c6]" />
            <div className="absolute top-4 left-5 h-10 w-14 rounded border-4 border-white bg-[#dcecff]" />
            <div className="absolute top-4 right-5 h-10 w-14 rounded border-4 border-white bg-[#ffe0ed]" />
            <div className="absolute inset-x-8 bottom-8 h-2 rounded bg-[#b98768]" />
            <div className="absolute bottom-10 left-1/2 h-12 w-20 -translate-x-1/2 rounded-t-lg bg-[#596987]" />
          </div>
        </div>
      )}
    </div>
  )
}
