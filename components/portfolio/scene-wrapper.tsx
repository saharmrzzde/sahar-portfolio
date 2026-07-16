"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Code2, Sparkles } from "lucide-react"

const Scene = dynamic(() => import("@/components/portfolio/scene"), { ssr: false })

function RoomFallback() {
  return (
    <div className="glass relative h-full min-h-[26rem] overflow-hidden rounded-[2.5rem]" aria-label="Sahar coding in a pastel room">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#111a2d_0%,#1d2947_55%,#261d3b_100%)]" />
      <div className="absolute top-[8%] left-[7%] h-[28%] w-[30%] rounded-xl border-[7px] border-white bg-gradient-to-b from-[#b8dcf5] to-[#f9d9c7] shadow-xl">
        <div className="absolute inset-y-0 left-1/2 w-1 bg-white" />
        <div className="absolute inset-x-0 top-1/2 h-1 bg-white" />
      </div>
      <div className="absolute top-[9%] right-[8%] flex gap-2">
        <div className="rounded-xl border-4 border-white bg-[#dfeeff] p-2 shadow-md"><Code2 className="size-5 text-primary" /></div>
        <div className="rounded-xl border-4 border-white bg-[#ffe0ed] p-2 shadow-md"><Sparkles className="size-5 text-pink" /></div>
      </div>
      <div className="absolute top-[30%] right-[7%] h-3 w-[42%] rounded-full bg-[#a87961] shadow-lg" />
      <div className="absolute top-[24%] right-[10%] flex items-end gap-1">
        <div className="h-10 w-3 rounded-sm bg-[#779ed8]" /><div className="h-8 w-3 rounded-sm bg-[#eeabc4]" /><div className="h-12 w-3 rounded-sm bg-[#f2c783]" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[27%] bg-[#141a2e]/80" />
      <div className="absolute inset-x-[5%] bottom-[22%] h-7 rounded-xl bg-[#43385f] shadow-[0_12px_25px_rgba(5,8,20,.5)]" />
      <div className="absolute inset-x-[8%] bottom-[3%] h-[21%] rounded-t-xl bg-[#292842] shadow-inner">
        <div className="absolute inset-x-[34%] top-5 h-px bg-[#766099]" />
        <div className="absolute top-4 right-[8%] grid gap-3"><i className="h-1 w-10 rounded-full bg-[#e4bb84]" /><i className="h-1 w-10 rounded-full bg-[#e4bb84]" /></div>
      </div>
      <span className="absolute right-[11%] bottom-[6%] rounded-full bg-white/75 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur">Sahar&apos;s studio</span>
    </div>
  )
}

function SaharSticker() {
  return (
    <div className="pointer-events-none absolute bottom-[19%] left-1/2 z-20 aspect-[0.78] w-[57%] -translate-x-1/2 overflow-hidden drop-shadow-[0_18px_18px_rgba(73,63,91,0.18)] sm:w-[54%]" aria-hidden="true">
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
      {!checked || !webgl ? <RoomFallback /> : <Scene />}
      <SaharSticker />
    </div>
  )
}
