"use client"

import { useState } from "react"
import { Check, Copy, Mail, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/portfolio/brand-icons"
import { Reveal } from "@/components/portfolio/reveal"
import { useLanguage } from "@/components/language-provider"
import { contact, profile } from "@/lib/portfolio-data"

export function ContactSection() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.links.email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-24">
      <Reveal>
        <div className="glass-strong relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] p-8 sm:p-12 lg:p-16">
          <div aria-hidden="true" className="absolute -top-20 -right-16 size-64 rounded-full bg-pink/25 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-24 -left-16 size-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <p className="section-kicker">{t(contact.kicker)}</p>
              <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-5xl">{t(contact.title)}</h2>
              <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{t(contact.subtitle)}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${profile.links.email}`} className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground glow-blue transition-transform hover:-translate-y-0.5"><Mail className="size-4" />{t(contact.email)}</a>
                <button type="button" onClick={copyEmail} className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold shadow-sm transition-colors hover:bg-white/10" aria-live="polite">
                  {copied ? <Check className="size-4 text-primary" /> : <Copy className="size-4" />}{copied ? t(contact.copied) : t(contact.copy)}
                </button>
              </div>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur">
              <div className="flex items-start gap-3"><span className="grid size-10 place-items-center rounded-xl bg-secondary text-primary"><MapPin className="size-4" /></span><div><p className="text-xs text-muted-foreground">{t({ en: "Based in", ko: "현재 위치" })}</p><p className="mt-0.5 text-sm font-semibold">{t(profile.location)}</p></div></div>
              <div className="mt-5 flex gap-2">
                <Social href={profile.links.github} label="GitHub"><GithubIcon className="size-5" /></Social>
                <Social href={profile.links.linkedin} label="LinkedIn"><LinkedinIcon className="size-5" /></Social>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid size-11 place-items-center rounded-2xl border border-white/15 bg-white/5 text-muted-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white/10 hover:text-foreground">{children}</a>
}
