"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Code2, Sparkles } from "lucide-react"
import { useIsMobile } from "@/hooks/use-reduced-motion"

const Scene = dynamic(() => import("@/components/portfolio/scene"), { ssr: false })

function RoomFallback() {
  return (
    <div className="glass relative h-full min-h-[26rem] overflow-hidden rounded-[2.5rem]" aria-label="Sahar coding in a pastel room">
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[#eadccf]/70" />
      <div className="absolute top-10 left-8 rounded-2xl border-[6px] border-white bg-[#dfeeff] p-3 shadow-lg sm:left-12">
        <Code2 className="size-8 text-primary" />
      </div>
      <div className="absolute top-12 right-8 rounded-2xl border-[6px] border-white bg-[#ffe0ed] p-3 shadow-lg sm:right-12">
        <Sparkles className="size-8 text-pink" />
      </div>
      <div className="absolute inset-x-[8%] bottom-[17%] h-4 rounded-full bg-[#b89478] shadow-lg" />
      <div className="absolute left-[12%] bottom-[8%] h-[12%] w-3 rounded-full bg-[#9c7258]" />
      <div className="absolute right-[12%] bottom-[8%] h-[12%] w-3 rounded-full bg-[#9c7258]" />
      <span className="absolute right-[12%] bottom-[9%] rounded-full bg-white/75 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">Sahar&apos;s room</span>
    </div>
  )
}

function SaharSticker() {
  return (
    <div className="pointer-events-none absolute bottom-[13%] left-1/2 z-20 aspect-[0.78] w-[60%] -translate-x-1/2 overflow-hidden drop-shadow-[0_18px_18px_rgba(73,63,91,0.18)] sm:w-[57%]" aria-hidden="true">
      <Image
        src="/sahar-pixel-stickers.png"
        alt=""
        width={1921}
        height={819}
        priority
        className="absolute top-0 left-0 h-auto w-[300%] max-w-none select-none"
      />
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

  return (
    <div className="relative h-full">
      {isMobile || !checked || !webgl ? <RoomFallback /> : <Scene />}
      <SaharSticker />
    </div>
  )
}
