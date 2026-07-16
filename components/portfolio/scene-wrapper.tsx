"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { Code2, Laptop, Sparkles } from "lucide-react"
import { useIsMobile } from "@/hooks/use-reduced-motion"

const Scene = dynamic(() => import("@/components/portfolio/scene"), { ssr: false })

function RoomFallback() {
  return (
    <div className="glass relative h-full min-h-[26rem] overflow-hidden rounded-[2.5rem]" aria-label="Pastel coding room illustration">
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#eadccf]/70" />
      <div className="absolute top-10 left-8 rounded-2xl border-[6px] border-white bg-[#dfeeff] p-3 shadow-lg sm:left-12">
        <Code2 className="size-8 text-primary" />
      </div>
      <div className="absolute top-12 right-8 rounded-2xl border-[6px] border-white bg-[#ffe0ed] p-3 shadow-lg sm:right-12">
        <Sparkles className="size-8 text-pink" />
      </div>
      <div className="absolute inset-x-[12%] bottom-[18%] h-4 rounded-full bg-[#b89478] shadow-lg" />
      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 rounded-2xl bg-[#536d9c] p-5 shadow-2xl">
        <Laptop className="size-16 text-[#d9e9ff]" />
      </div>
      <div className="absolute right-[15%] bottom-[22%] h-20 w-14 rounded-t-full bg-[#3e3155] shadow-lg" />
      <div className="absolute right-[17%] bottom-[35%] size-11 rounded-full bg-[#f0c8b3] shadow-md" />
      <span className="absolute right-[12%] bottom-[9%] rounded-full bg-white/75 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">Sahar&apos;s room</span>
    </div>
  )
}

export default function SceneWrapper() {
  const isMobile = useIsMobile()
  const [webgl, setWebgl] = useState(false)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    let supported = false
    try {
      const canvas = document.createElement("canvas")
      supported = Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"))
    } catch {
      supported = false
    }
    const id = requestAnimationFrame(() => {
      setWebgl(supported)
      setChecked(true)
    })
    return () => cancelAnimationFrame(id)
  }, [])

  if (isMobile || !checked || !webgl) return <RoomFallback />
  return <Scene />
}
