"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, RoundedBox, Text } from "@react-three/drei"
import * as THREE from "three"
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion"

const BLUE = "#74a8f5"
const PINK = "#f3a5c5"
const LAVENDER = "#b8a8ea"
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

function Laptop() {
  return (
    <group position={[-0.25, -0.1, 0.35]}>
      <RoundedBox args={[2.2, 0.12, 1.35]} radius={0.05} smoothness={4}>
        <meshStandardMaterial color="#d4dced" metalness={0.35} roughness={0.35} />
      </RoundedBox>
      <group position={[0, 0.55, -0.55]} rotation={[-0.12, 0, 0]}>
        <RoundedBox args={[2.2, 1.35, 0.1]} radius={0.05} smoothness={4}>
          <meshStandardMaterial color="#536582" metalness={0.2} roughness={0.4} />
        </RoundedBox>
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[1.94, 1.08]} />
          <meshStandardMaterial color="#eef6ff" emissive={BLUE} emissiveIntensity={0.08} />
        </mesh>
        {[0.28, 0, -0.28].map((y, i) => (
          <mesh key={y} position={[-0.35 + i * 0.12, y, 0.07]}>
            <boxGeometry args={[0.92 + i * 0.18, 0.08, 0.02]} />
            <meshStandardMaterial color={[LAVENDER, BLUE, PINK][i]} />
          </mesh>
        ))}
      </group>
    </group>
  )
}

function PixelSahar() {
  return (
    <group position={[1.48, -0.15, 0.58]} rotation={[0, -0.16, 0]}>
      <mesh position={[0, 1.42, 0]}><boxGeometry args={[0.64, 0.64, 0.56]} /><meshStandardMaterial color="#efc3af" /></mesh>
      <mesh position={[0, 1.67, -0.08]}><boxGeometry args={[0.74, 0.28, 0.62]} /><meshStandardMaterial color="#3b2e4a" /></mesh>
      <mesh position={[0, 0.75, 0]}><boxGeometry args={[0.82, 0.86, 0.55]} /><meshStandardMaterial color="#8e82c9" /></mesh>
      <mesh position={[-0.58, 0.78, -0.12]} rotation={[0, 0, -0.55]}><boxGeometry args={[0.22, 0.88, 0.22]} /><meshStandardMaterial color="#efc3af" /></mesh>
      <mesh position={[0.58, 0.78, -0.12]} rotation={[0, 0, 0.55]}><boxGeometry args={[0.22, 0.88, 0.22]} /><meshStandardMaterial color="#efc3af" /></mesh>
      <mesh position={[-0.24, 0.05, 0]}><boxGeometry args={[0.28, 0.72, 0.3]} /><meshStandardMaterial color="#55627b" /></mesh>
      <mesh position={[0.24, 0.05, 0]}><boxGeometry args={[0.28, 0.72, 0.3]} /><meshStandardMaterial color="#55627b" /></mesh>
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
      <mesh position={[0, 0.8, -1.7]}><boxGeometry args={[7, 4.8, 0.15]} /><meshStandardMaterial color={CREAM} roughness={0.9} /></mesh>
      <mesh position={[0, -1.28, 0]}><boxGeometry args={[7, 0.14, 4.8]} /><meshStandardMaterial color="#ead9c8" roughness={0.95} /></mesh>
      <Frame position={[-2.05, 1.5, -1.58]} label="TOPIK 5" color="#dcecff" />
      <Frame position={[0, 1.65, -1.58]} label="Samsung Dream Scholar" color="#ffe1ec" />
      <Frame position={[2.05, 1.5, -1.58]} label="ICDL · 2019" color="#eee7ff" />
      <mesh position={[0, -0.45, 0]}><boxGeometry args={[4.9, 0.18, 1.85]} /><meshStandardMaterial color="#bd9071" roughness={0.75} /></mesh>
      <mesh position={[-2, -0.95, 0]}><boxGeometry args={[0.16, 1.05, 0.16]} /><meshStandardMaterial color="#9e745c" /></mesh>
      <mesh position={[2, -0.95, 0]}><boxGeometry args={[0.16, 1.05, 0.16]} /><meshStandardMaterial color="#9e745c" /></mesh>
      <Laptop />
      <PixelSahar />
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
      <Canvas camera={{ position: [0, 0.65, 8.2], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
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
