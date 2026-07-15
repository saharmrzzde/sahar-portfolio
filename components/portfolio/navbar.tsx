"use client"

import { useEffect, useState } from "react"
import { Languages, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/language-provider"
import { nav, profile } from "@/lib/portfolio-data"

const sections = [
  { id: "home", label: nav.home },
  { id: "about", label: nav.about },
  { id: "skills", label: nav.skills },
  { id: "projects", label: nav.projects },
  { id: "contact", label: nav.contact },
]

export function Navbar() {
  const { t, locale, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 transition-all duration-300 sm:px-6",
          scrolled ? "glass py-2" : "py-2",
        )}
      >
        <a
          href="#home"
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-primary font-mono text-sm text-primary-foreground glow-blue">
            {initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(s.label)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary"
            aria-label={locale === "en" ? "Switch to Korean" : "Switch to English"}
          >
            <Languages className="size-4" aria-hidden="true" />
            <span className="font-mono">{locale === "en" ? "EN" : "KO"}</span>
          </button>

          <button
            type="button"
            className="rounded-lg border border-border p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl px-4 md:hidden">
          <div className="glass flex flex-col gap-1 rounded-2xl p-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {t(s.label)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
