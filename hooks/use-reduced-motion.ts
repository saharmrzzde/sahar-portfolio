"use client"

import { useCallback, useSyncExternalStore } from "react"

const getServerSnapshot = () => false

function useMediaQuery(query: string) {
  const subscribe = useCallback((onStoreChange: () => void) => {
    const media = window.matchMedia(query)
    media.addEventListener("change", onStoreChange)
    return () => media.removeEventListener("change", onStoreChange)
  }, [query])

  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query])
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

export function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)")
}

export function useIsMobile(breakpoint = 768) {
  return useMediaQuery(`(max-width: ${breakpoint - 1}px)`)
}
