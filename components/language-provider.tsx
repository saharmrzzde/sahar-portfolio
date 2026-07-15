"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import type { Locale, Localized } from "@/lib/portfolio-data"

type LanguageContextValue = {
  locale: Locale
  setLocale: (l: Locale) => void
  toggle: () => void
  /** translate a Localized value for the current locale */
  t: (value: Localized) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "portfolio-locale"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null
    if (stored === "en" || stored === "ko") setLocaleState(stored)
  }, [])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    window.localStorage.setItem(STORAGE_KEY, l)
    document.documentElement.lang = l
  }, [])

  const toggle = useCallback(() => {
    setLocaleState((prev) => {
      const next = prev === "en" ? "ko" : "en"
      window.localStorage.setItem(STORAGE_KEY, next)
      document.documentElement.lang = next
      return next
    })
  }, [])

  const t = useCallback((value: Localized) => value[locale], [locale])

  const value = useMemo(() => ({ locale, setLocale, toggle, t }), [locale, setLocale, toggle, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider")
  return ctx
}
