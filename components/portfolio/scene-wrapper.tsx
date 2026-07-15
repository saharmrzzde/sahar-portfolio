"use client"

import dynamic from "next/dynamic"
import { useIsMobile } from "@/hooks/use-reduced-motion"

const Scene = dynamic(() => import("@/components/portfolio/scene"), {
  ssr: false,
  loading: () => <SceneFallback />,
})

function SceneFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
      <div className="animate-float-slow relative h-48 w-64 rounded-2xl glass glow-blue">
        <div className="absolute inset-4 rounded-lg bg-background/60">
          <div className="flex flex-col gap-2 p-4">
            <span className="h-2 w-2/3 rounded-full bg-primary/70" />
            <span className="h-2 w-1/2 rounded-full bg-pink/70" />
            <span className="h-2 w-3/4 rounded-full bg-lavender/70" />
            <span className="h-2 w-1/3 rounded-full bg-primary/50" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SceneWrapper() {
  const isMobile = useIsMobile()

  // On small screens, skip the WebGL canvas entirely for performance.
  if (isMobile) return <SceneFallback />

  return <Scene />
}
