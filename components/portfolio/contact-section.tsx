"use client"

import { useState } from "react"
import { Check, Mail, Send } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/portfolio/brand-icons"
import { Reveal } from "@/components/portfolio/reveal"
import { useLanguage } from "@/components/language-provider"
import { contact, profile } from "@/lib/portfolio-data"

export function ContactSection() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Demo only: wire this up to an email service or server action.
    setSent(true)
    e.currentTarget.reset()
    window.setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="glass overflow-hidden rounded-3xl">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <p className="font-mono text-sm text-primary">@</p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  {t(contact.title as never)}
                </h2>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                  {t(contact.subtitle as never)}
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href={`mailto:${profile.links.email}`}
                    className="inline-flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                  >
                    <span className="grid size-10 place-items-center rounded-xl border border-border bg-card/40">
                      <Mail className="size-4" />
                    </span>
                    {profile.links.email}
                  </a>
                  <div className="mt-2 flex gap-2">
                    <SocialButton href={profile.links.github} label="GitHub">
                      <GithubIcon className="size-5" />
                    </SocialButton>
                    <SocialButton href={profile.links.linkedin} label="LinkedIn">
                      <LinkedinIcon className="size-5" />
                    </SocialButton>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Field label={t(contact.form.name as never)} htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 outline-none transition-colors focus:border-primary"
                  />
                </Field>
                <Field label={t(contact.form.email as never)} htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 outline-none transition-colors focus:border-primary"
                  />
                </Field>
                <Field label={t(contact.form.message as never)} htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 outline-none transition-colors focus:border-primary"
                  />
                </Field>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 glow-blue"
                >
                  {sent ? (
                    <>
                      <Check className="size-4" /> {t(contact.form.sent as never)}
                    </>
                  ) : (
                    <>
                      <Send className="size-4" /> {t(contact.form.send as never)}
                    </>
                  )}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
      {children}
    </label>
  )
}

function SocialButton({
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
      className="grid size-10 place-items-center rounded-xl border border-border bg-card/40 text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </a>
  )
}
