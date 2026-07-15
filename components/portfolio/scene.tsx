"use client"

import { useMemo, useRef } from "react"
import { Canvas, useFrame, type ThreeElements } from "@react-three/fiber"
import { Environment, Float, RoundedBox, Text } from "@react-three/drei"
import * as THREE from "three"
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion"

const BLUE = "#6aa8ff"
const PINK = "#ff8fc7"
const LAVENDER = "#b9a7ff"

function CodeLine({
  y,
  width,
  color,
}: {
  y: number
  width: number
  color: string
}) {
  return (
    <mesh position={[-1.1 + width / 2, y, 0.06]}>
      <boxGeometry args={[width, 0.08, 0.02]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} toneMapped={false} />
    </mesh>
  )
}

function Laptop(props: ThreeElements["group"]) {
  const codeLines = useMemo(
    () => [
      { width: 1.1, color: LAVENDER },
      { width: 1.7, color: BLUE },
      { width: 0.8, color: PINK },
      { width: 1.9, color: "#8b93b5" },
      { width: 1.3, color: BLUE },
      { width: 0.6, color: PINK },
    ],
    [],
  )

  return (
    <group {...props}>
      {/* Base / keyboard */}
      <RoundedBox args={[3.2, 0.16, 2.1]} radius={0.06} smoothness={4} position={[0, -0.05, 0.55]}>
        <meshStandardMaterial color="#2a3358" metalness={0.6} roughness={0.35} />
      </RoundedBox>
      {/* trackpad */}
      <mesh position={[0, 0.04, 1.1]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.9, 0.6]} />
        <meshStandardMaterial color="#3a4470" metalness={0.4} roughness={0.5} />
      </mesh>

      {/* Screen assembly, hinged at the back */}
      <group position={[0, 0, -0.45]} rotation={[-0.32, 0, 0]}>
        {/* screen shell */}
        <RoundedBox args={[3.2, 2.1, 0.12]} radius={0.06} smoothness={4} position={[0, 1, 0]}>
          <meshStandardMaterial color="#232b4d" metalness={0.6} roughness={0.35} />
        </RoundedBox>
        {/* glowing display */}
        <mesh position={[0, 1, 0.07]}>
          <planeGeometry args={[2.8, 1.7]} />
          <meshStandardMaterial color="#141a35" emissive={BLUE} emissiveIntensity={0.15} toneMapped={false} />
        </mesh>
        {/* code lines */}
        <group position={[0, 1.55, 0.02]}>
          {codeLines.map((line, i) => (
            <CodeLine key={i} y={-i * 0.24} width={line.width} color={line.color} />
          ))}
        </group>
      </group>
    </group>
  )
}

function TechCard({
  label,
  color,
  position,
  floatSpeed,
}: {
  label: string
  color: string
  position: [number, number, number]
  floatSpeed: number
}) {
  return (
    <Float speed={floatSpeed} rotationIntensity={0.6} floatIntensity={1.2}>
      <group position={position}>
        <RoundedBox args={[0.9, 0.9, 0.12]} radius={0.14} smoothness={4}>
          <meshStandardMaterial
            color="#1c2444"
            emissive={color}
            emissiveIntensity={0.25}
            metalness={0.3}
            roughness={0.4}
          />
        </RoundedBox>
        <Text
          position={[0, 0, 0.08]}
          fontSize={0.32}
          color={color}
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      </group>
    </Float>
  )
}

function Particles({ count = 140 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)
  const reduced = usePrefersReducedMotion()

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const palette = [new THREE.Color(BLUE), new THREE.Color(PINK), new THREE.Color(LAVENDER)]
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2
      const c = palette[i % palette.length]
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
    }
    return { positions, colors }
  }, [count])

  useFrame((state) => {
    if (!ref.current || reduced) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.03
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  )
}

function Rig() {
  const group = useRef<THREE.Group>(null)
  const reduced = usePrefersReducedMotion()

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    const targetY = reduced ? -0.3 : state.pointer.x * 0.35 - 0.3
    const targetX = reduced ? 0.1 : -state.pointer.y * 0.2 + 0.1
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.05
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.05
    if (!reduced) group.current.position.y = Math.sin(t * 0.8) * 0.12
  })

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.6}>
        <Laptop position={[0, 0, 0]} />
      </Float>
      <TechCard label="TS" color={BLUE} position={[-3, 1.4, 1]} floatSpeed={1.6} />
      <TechCard label="{ }" color={PINK} position={[3, 1.7, 0.5]} floatSpeed={1.2} />
      <TechCard label="</>" color={LAVENDER} position={[3.2, -1.1, 1.2]} floatSpeed={1.9} />
      <TechCard label="React" color={BLUE} position={[-3.3, -1, 0.8]} floatSpeed={1.3} />
    </group>
  )
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 8], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 6, 5]} intensity={1.1} />
      <pointLight position={[-6, -2, 4]} intensity={40} color={PINK} distance={20} />
      <pointLight position={[6, 3, 2]} intensity={40} color={BLUE} distance={20} />
      <Rig />
      <Particles />
      <Environment preset="night" />
    </Canvas>
  )
}
