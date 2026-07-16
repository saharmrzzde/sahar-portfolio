"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, RoundedBox, Text } from "@react-three/drei"
import * as THREE from "three"
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion"

const BLUE = "#74a8f5"
const PINK = "#f3a5c5"
const CREAM = "#fff8ee"

function Frame({ position, label, color }: { position: [number, number, number]; label: string; color: string }) {
  return (
    <group position={position}>
      <RoundedBox args={[1.4, 0.95, 0.1]} radius={0.06} smoothness={4}>
        <meshStandardMaterial color="#ffffff" roughness={0.38} />
      </RoundedBox>
      <mesh position={[0, 0, 0.065]}>
        <planeGeometry args={[1.12, 0.68]} />
        <meshStandardMaterial color={color} roughness={0.7} />
      </mesh>
      <Text position={[0, 0, 0.08]} fontSize={0.16} color="#40506b" anchorX="center" anchorY="middle" maxWidth={0.95} textAlign="center">
        {label}
      </Text>
    </group>
  )
}

function Room() {
  const room = useRef<THREE.Group>(null)
  const reduced = usePrefersReducedMotion()

  useFrame((state) => {
    if (!room.current || reduced) return
    const targetY = state.pointer.x * 0.08 - 0.1
    const targetX = -state.pointer.y * 0.04 + 0.04
    room.current.rotation.y += (targetY - room.current.rotation.y) * 0.035
    room.current.rotation.x += (targetX - room.current.rotation.x) * 0.035
  })

  return (
    <group ref={room} position={[0, -0.35, 0]}>
      <mesh position={[0, 0.45, -1.7]}><boxGeometry args={[7.5, 6.4, 0.15]} /><meshStandardMaterial color={CREAM} roughness={0.9} /></mesh>
      <mesh position={[0, -1.58, 0]}><boxGeometry args={[7.5, 0.16, 5.2]} /><meshStandardMaterial color="#ead9c8" roughness={0.95} /></mesh>
      <Frame position={[-2.05, 1.7, -1.58]} label="TOPIK 5" color="#dcecff" />
      <Frame position={[0, 1.85, -1.58]} label="Samsung Dream Scholar" color="#ffe1ec" />
      <Frame position={[2.05, 1.7, -1.58]} label="ICDL · 2019" color="#eee7ff" />
      <mesh position={[0, -0.72, 0]}><boxGeometry args={[5.6, 0.18, 1.9]} /><meshStandardMaterial color="#bd9071" roughness={0.75} /></mesh>
      <mesh position={[-2.35, -1.25, 0]}><boxGeometry args={[0.16, 1.05, 0.16]} /><meshStandardMaterial color="#9e745c" /></mesh>
      <mesh position={[2.35, -1.25, 0]}><boxGeometry args={[0.16, 1.05, 0.16]} /><meshStandardMaterial color="#9e745c" /></mesh>
      <Float speed={1.3} rotationIntensity={0.15} floatIntensity={0.35}>
        <RoundedBox args={[0.8, 0.8, 0.12]} radius={0.16} smoothness={4} position={[-2.45, 0.25, -0.1]}>
          <meshStandardMaterial color="#ffffff" emissive={BLUE} emissiveIntensity={0.08} />
        </RoundedBox>
        <Text position={[-2.45, 0.25, -0.02]} fontSize={0.22} color={BLUE} anchorX="center" anchorY="middle">{"</>"}</Text>
      </Float>
    </group>
  )
}

export default function Scene() {
  return (
    <div className="glass h-full overflow-hidden rounded-[2.5rem]">
      <Canvas camera={{ position: [0, 0.45, 7.4], fov: 40 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={["#fffaf3"]} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[4, 6, 5]} intensity={2.2} color="#fff7ec" />
        <pointLight position={[-4, 2, 4]} intensity={18} color={PINK} distance={12} />
        <pointLight position={[4, 2, 4]} intensity={16} color={BLUE} distance={12} />
        <Room />
      </Canvas>
    </div>
  )
}
