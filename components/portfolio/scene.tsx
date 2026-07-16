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
      <RoundedBox args={[1.2, 0.76, 0.1]} radius={0.05} smoothness={4}>
        <meshStandardMaterial color="#fffdf9" roughness={0.35} />
      </RoundedBox>
      <mesh position={[0, 0, 0.065]}>
        <planeGeometry args={[0.98, 0.55]} />
        <meshStandardMaterial color={color} roughness={0.72} />
      </mesh>
      <Text position={[0, 0, 0.08]} fontSize={0.13} color="#40506b" anchorX="center" anchorY="middle" maxWidth={0.82} textAlign="center">
        {label}
      </Text>
    </group>
  )
}

function Books({ position }: { position: [number, number, number] }) {
  const colors = ["#769ed8", "#efabc4", "#f2c783", "#9c8bc3"]
  return (
    <group position={position}>
      {colors.map((color, index) => (
        <mesh key={color} position={[index * 0.18, index % 2 ? 0.02 : 0, 0]} rotation={[0, 0, index === 3 ? -0.1 : 0]}>
          <boxGeometry args={[0.14, 0.62 - index * 0.03, 0.38]} />
          <meshStandardMaterial color={color} roughness={0.7} />
        </mesh>
      ))}
    </group>
  )
}

function Plant({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, -0.18, 0]}>
        <cylinderGeometry args={[0.25, 0.19, 0.42, 20]} />
        <meshStandardMaterial color="#e8b397" roughness={0.75} />
      </mesh>
      {[[-0.18, 0.2, 0], [0.18, 0.28, 0.02], [0, 0.42, -0.02], [-0.08, 0.55, 0]].map((leaf, index) => (
        <mesh key={index} position={leaf as [number, number, number]} rotation={[0, 0, index % 2 ? -0.5 : 0.5]}>
          <sphereGeometry args={[0.18, 14, 10]} />
          <meshStandardMaterial color={index % 2 ? "#6f9b7a" : "#85ad8c"} roughness={0.82} />
        </mesh>
      ))}
    </group>
  )
}

function Room() {
  const room = useRef<THREE.Group>(null)
  const reduced = usePrefersReducedMotion()

  useFrame((state) => {
    if (!room.current || reduced) return
    const targetY = state.pointer.x * 0.07 - 0.08
    const targetX = -state.pointer.y * 0.035 + 0.035
    room.current.rotation.y += (targetY - room.current.rotation.y) * 0.035
    room.current.rotation.x += (targetX - room.current.rotation.x) * 0.035
  })

  return (
    <group ref={room} position={[0, -0.3, 0]}>
      {/* Architectural shell */}
      <mesh position={[0, 0.45, -1.72]}>
        <boxGeometry args={[7.5, 6.4, 0.16]} />
        <meshStandardMaterial color={CREAM} roughness={0.88} />
      </mesh>
      <mesh position={[-3.62, 0.15, 0]}>
        <boxGeometry args={[0.16, 5.8, 3.55]} />
        <meshStandardMaterial color="#f4e8dc" roughness={0.9} />
      </mesh>
      <mesh position={[0, -1.6, 0]}>
        <boxGeometry args={[7.5, 0.16, 5.2]} />
        <meshStandardMaterial color="#dfc6b1" roughness={0.92} />
      </mesh>
      <mesh position={[0, -1.48, -1.58]}>
        <boxGeometry args={[7.3, 0.12, 0.16]} />
        <meshStandardMaterial color="#d2ae93" roughness={0.7} />
      </mesh>

      {/* Window and warm city view */}
      <RoundedBox args={[2.15, 1.72, 0.12]} radius={0.06} smoothness={4} position={[-2.18, 1.25, -1.57]}>
        <meshStandardMaterial color="#fffdfa" roughness={0.28} />
      </RoundedBox>
      <mesh position={[-2.18, 1.25, -1.49]}>
        <planeGeometry args={[1.86, 1.43]} />
        <meshStandardMaterial color="#b8daf3" emissive="#9bc9ee" emissiveIntensity={0.22} />
      </mesh>
      <mesh position={[-2.18, 1.25, -1.39]}>
        <boxGeometry args={[0.055, 1.43, 0.035]} />
        <meshStandardMaterial color="#fffdf9" />
      </mesh>
      <mesh position={[-2.18, 1.25, -1.38]}>
        <boxGeometry args={[1.86, 0.055, 0.035]} />
        <meshStandardMaterial color="#fffdf9" />
      </mesh>
      <mesh position={[-2.18, 0.53, -1.35]}>
        <boxGeometry args={[2.18, 0.1, 0.3]} />
        <meshStandardMaterial color="#f7efe6" roughness={0.5} />
      </mesh>

      {/* Achievements and shelf */}
      <Frame position={[0.08, 1.73, -1.58]} label="TOPIK 5" color="#dcecff" />
      <Frame position={[1.42, 1.73, -1.58]} label="Dream Scholar" color="#ffe1ec" />
      <Frame position={[2.76, 1.73, -1.58]} label="ICDL · 2019" color="#eee7ff" />
      <mesh position={[1.42, 0.62, -1.35]}>
        <boxGeometry args={[3.18, 0.12, 0.48]} />
        <meshStandardMaterial color="#ad8067" roughness={0.65} />
      </mesh>
      <Books position={[0.35, 0.98, -1.25]} />
      <Plant position={[2.45, 1.02, -1.25]} />
      <RoundedBox args={[0.62, 0.52, 0.12]} radius={0.08} smoothness={4} position={[1.43, 0.95, -1.28]}>
        <meshStandardMaterial color="#2f3c55" roughness={0.45} />
      </RoundedBox>
      <Text position={[1.43, 0.95, -1.2]} fontSize={0.12} color="#a9d0ff" anchorX="center" anchorY="middle">{"{ code }"}</Text>

      {/* Large executive desk: the solid front hides the character's lower body */}
      <RoundedBox args={[6.2, 0.26, 2.05]} radius={0.09} smoothness={4} position={[0, -0.54, 0.18]}>
        <meshStandardMaterial color="#b77f5f" roughness={0.58} />
      </RoundedBox>
      <RoundedBox args={[5.86, 1.16, 0.24]} radius={0.07} smoothness={4} position={[0, -1.12, 0.99]}>
        <meshStandardMaterial color="#9f6d54" roughness={0.68} />
      </RoundedBox>
      <mesh position={[0, -0.96, 1.13]}>
        <boxGeometry args={[3.75, 0.035, 0.025]} />
        <meshStandardMaterial color="#c99675" />
      </mesh>
      {[-2.42, 2.42].map((x) => (
        <group key={x} position={[x, -1.05, 1.14]}>
          {[0.23, -0.13, -0.49].map((y) => (
            <group key={y} position={[0, y, 0]}>
              <mesh><boxGeometry args={[0.72, 0.25, 0.05]} /><meshStandardMaterial color="#aa765a" roughness={0.62} /></mesh>
              <mesh position={[0, 0, 0.04]}><boxGeometry args={[0.18, 0.025, 0.025]} /><meshStandardMaterial color="#e4bb84" metalness={0.55} roughness={0.25} /></mesh>
            </group>
          ))}
        </group>
      ))}

      {/* Desk accessories */}
      <group position={[-2.18, -0.18, 0.05]}>
        <mesh position={[0, 0.23, 0]} rotation={[0, 0, -0.18]}>
          <cylinderGeometry args={[0.045, 0.045, 0.55, 12]} />
          <meshStandardMaterial color="#40506b" metalness={0.35} />
        </mesh>
        <mesh position={[0.14, 0.52, 0]} rotation={[0, 0, -0.55]}>
          <coneGeometry args={[0.23, 0.3, 20]} />
          <meshStandardMaterial color="#f0b56d" roughness={0.45} />
        </mesh>
        <mesh position={[-0.06, -0.02, 0]}><cylinderGeometry args={[0.25, 0.3, 0.08, 20]} /><meshStandardMaterial color="#40506b" /></mesh>
      </group>
      <Plant position={[2.42, 0.08, 0.12]} />
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.22}>
        <RoundedBox args={[0.72, 0.72, 0.12]} radius={0.16} smoothness={4} position={[-2.75, 0.55, -0.5]}>
          <meshStandardMaterial color="#ffffff" emissive={BLUE} emissiveIntensity={0.08} />
        </RoundedBox>
        <Text position={[-2.75, 0.55, -0.42]} fontSize={0.2} color={BLUE} anchorX="center" anchorY="middle">{"</>"}</Text>
      </Float>
    </group>
  )
}

export default function Scene() {
  return (
    <div className="glass h-full overflow-hidden rounded-[2.5rem]">
      <Canvas camera={{ position: [0, 0.42, 7.65], fov: 40 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} shadows>
        <color attach="background" args={["#fffaf3"]} />
        <ambientLight intensity={1.25} />
        <directionalLight position={[4, 6, 5]} intensity={2.4} color="#fff7ec" castShadow />
        <pointLight position={[-3, 2.2, 3]} intensity={15} color={PINK} distance={11} />
        <pointLight position={[3.5, 2, 4]} intensity={17} color={BLUE} distance={12} />
        <pointLight position={[-2.1, 0.55, 1]} intensity={7} color="#ffd79d" distance={5} />
        <Room />
      </Canvas>
    </div>
  )
}
