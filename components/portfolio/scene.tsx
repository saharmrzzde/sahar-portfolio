"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, RoundedBox, Text } from "@react-three/drei"
import * as THREE from "three"
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion"

const BLUE = "#74a8f5"
const PINK = "#f3a5c5"
const CREAM = "#18243d"

function Frame({ position, label, color }: { position: [number, number, number]; label: string; color: string }) {
  return (
    <group position={position}>
      <RoundedBox args={[1.2, 0.76, 0.1]} radius={0.05} smoothness={4}>
        <meshStandardMaterial color="#33405f" roughness={0.35} metalness={0.1} />
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
  const leaves: Array<{ position: [number, number, number]; rotation: [number, number, number]; scale: [number, number, number]; color: string }> = [
    { position: [-0.2, 0.18, 0], rotation: [0, 0, 0.72], scale: [0.12, 0.34, 0.08], color: "#65a683" },
    { position: [0.2, 0.22, 0.02], rotation: [0, 0, -0.72], scale: [0.13, 0.38, 0.08], color: "#78b68d" },
    { position: [-0.12, 0.45, -0.02], rotation: [0.15, 0, 0.42], scale: [0.12, 0.4, 0.08], color: "#4f916f" },
    { position: [0.12, 0.5, 0.02], rotation: [-0.15, 0, -0.38], scale: [0.13, 0.42, 0.08], color: "#70ae86" },
    { position: [0, 0.64, 0], rotation: [0, 0, 0.04], scale: [0.12, 0.42, 0.08], color: "#5ba079" },
  ]
  return (
    <group position={position}>
      <mesh position={[0, -0.18, 0]}>
        <cylinderGeometry args={[0.27, 0.21, 0.42, 24]} />
        <meshStandardMaterial color="#514367" roughness={0.34} metalness={0.12} />
      </mesh>
      <mesh position={[0, 0.12, 0]}><cylinderGeometry args={[0.025, 0.035, 0.85, 10]} /><meshStandardMaterial color="#52785f" /></mesh>
      {leaves.map((leaf, index) => (
        <mesh key={index} position={leaf.position} rotation={leaf.rotation} scale={leaf.scale}>
          <sphereGeometry args={[1, 18, 12]} />
          <meshStandardMaterial color={leaf.color} roughness={0.64} />
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
        <meshStandardMaterial color="#202b48" roughness={0.9} />
      </mesh>
      <mesh position={[0, -1.6, 0]}>
        <boxGeometry args={[7.5, 0.16, 5.2]} />
        <meshStandardMaterial color="#171d33" roughness={0.92} />
      </mesh>
      <mesh position={[0, -1.48, -1.58]}>
        <boxGeometry args={[7.3, 0.12, 0.16]} />
        <meshStandardMaterial color="#35405f" roughness={0.7} />
      </mesh>

      {/* Window and warm city view */}
      <RoundedBox args={[2.15, 1.72, 0.12]} radius={0.06} smoothness={4} position={[-2.18, 1.25, -1.57]}>
        <meshStandardMaterial color="#8795bd" roughness={0.28} metalness={0.2} />
      </RoundedBox>
      <mesh position={[-2.18, 1.25, -1.49]}>
        <planeGeometry args={[1.86, 1.43]} />
        <meshStandardMaterial color="#293b66" emissive="#4b83d4" emissiveIntensity={0.35} />
      </mesh>
      {[-2.82, -2.58, -2.31, -2.02, -1.72, -1.48].map((x, index) => (
        <group key={x} position={[x, 0.78, -1.38]}>
          <mesh position={[0, (index % 3) * 0.08, 0]}><boxGeometry args={[0.18, 0.34 + (index % 2) * 0.2, 0.025]} /><meshStandardMaterial color="#17233f" /></mesh>
          <mesh position={[0, 0.04 + (index % 3) * 0.08, 0.025]}><planeGeometry args={[0.035, 0.05]} /><meshBasicMaterial color={index % 2 ? PINK : BLUE} /></mesh>
        </group>
      ))}
      <mesh position={[-2.18, 1.25, -1.39]}>
        <boxGeometry args={[0.055, 1.43, 0.035]} />
        <meshStandardMaterial color="#9cadd0" />
      </mesh>
      <mesh position={[-2.18, 1.25, -1.38]}>
        <boxGeometry args={[1.86, 0.055, 0.035]} />
        <meshStandardMaterial color="#9cadd0" />
      </mesh>
      <mesh position={[-2.18, 0.53, -1.35]}>
        <boxGeometry args={[2.18, 0.1, 0.3]} />
        <meshStandardMaterial color="#4a5878" roughness={0.5} />
      </mesh>

      {/* Achievements and shelf */}
      <Frame position={[0.08, 1.73, -1.58]} label="TOPIK 5" color="#dcecff" />
      <Frame position={[1.42, 1.73, -1.58]} label="Dream Scholar" color="#ffe1ec" />
      <Frame position={[2.76, 1.73, -1.58]} label="ICDL · 2019" color="#eee7ff" />
      <mesh position={[1.42, 0.62, -1.35]}>
        <boxGeometry args={[3.18, 0.12, 0.48]} />
        <meshStandardMaterial color="#765275" roughness={0.65} />
      </mesh>
      <mesh position={[1.42, 0.56, -1.31]}><boxGeometry args={[3.05, 0.025, 0.03]} /><meshBasicMaterial color="#b86fa9" /></mesh>
      <Books position={[0.35, 0.98, -1.25]} />
      <Plant position={[2.45, 1.02, -1.25]} />
      <RoundedBox args={[0.62, 0.52, 0.12]} radius={0.08} smoothness={4} position={[1.43, 0.95, -1.28]}>
        <meshStandardMaterial color="#2f3c55" roughness={0.45} />
      </RoundedBox>
      <Text position={[1.43, 0.95, -1.2]} fontSize={0.12} color="#a9d0ff" anchorX="center" anchorY="middle">{"{ code }"}</Text>

      {/* Large executive desk: the solid front hides the character's lower body */}
      <RoundedBox args={[6.2, 0.26, 2.05]} radius={0.09} smoothness={4} position={[0, -0.54, 0.18]}>
        <meshStandardMaterial color="#43385f" roughness={0.45} metalness={0.12} />
      </RoundedBox>
      <mesh position={[0, -0.39, 0.2]}><boxGeometry args={[5.75, 0.025, 1.64]} /><meshStandardMaterial color="#74628f" roughness={0.35} metalness={0.25} /></mesh>
      <RoundedBox args={[5.86, 1.16, 0.24]} radius={0.07} smoothness={4} position={[0, -1.12, 0.99]}>
        <meshStandardMaterial color="#292842" roughness={0.58} metalness={0.08} />
      </RoundedBox>
      <mesh position={[0, -0.96, 1.13]}>
        <boxGeometry args={[3.75, 0.035, 0.025]} />
        <meshStandardMaterial color="#6f5e91" emissive="#8e63b7" emissiveIntensity={0.15} />
      </mesh>
      {[-1.65, -1.32, -0.99, -0.66, -0.33, 0, 0.33, 0.66, 0.99, 1.32, 1.65].map((x) => (
        <mesh key={x} position={[x, -1.23, 1.135]}><boxGeometry args={[0.055, 0.78, 0.028]} /><meshStandardMaterial color="#3c3857" roughness={0.5} /></mesh>
      ))}
      {[-2.42, 2.42].map((x) => (
        <group key={x} position={[x, -1.05, 1.14]}>
          {[0.23, -0.13, -0.49].map((y) => (
            <group key={y} position={[0, y, 0]}>
              <mesh><boxGeometry args={[0.72, 0.25, 0.05]} /><meshStandardMaterial color="#34324f" roughness={0.62} /></mesh>
              <mesh position={[0, 0, 0.04]}><boxGeometry args={[0.18, 0.025, 0.025]} /><meshStandardMaterial color="#e4bb84" metalness={0.55} roughness={0.25} /></mesh>
            </group>
          ))}
        </group>
      ))}

      {/* Desk accessories */}
      <group position={[-2.18, -0.17, 0.05]}>
        <mesh position={[-0.08, -0.01, 0]} scale={[1.2, 1, 0.72]}>
          <cylinderGeometry args={[0.25, 0.3, 0.08, 24]} />
          <meshStandardMaterial color="#303b59" roughness={0.28} metalness={0.48} />
        </mesh>
        <mesh position={[-0.08, 0.24, 0]} rotation={[0, 0, -0.22]}>
          <cylinderGeometry args={[0.035, 0.045, 0.52, 16]} />
          <meshStandardMaterial color="#53617f" roughness={0.24} metalness={0.62} />
        </mesh>
        <mesh position={[0.08, 0.53, 0]} rotation={[0, 0, -0.82]}>
          <cylinderGeometry args={[0.032, 0.04, 0.44, 16]} />
          <meshStandardMaterial color="#53617f" roughness={0.24} metalness={0.62} />
        </mesh>
        <mesh position={[-0.02, 0.48, 0]}><sphereGeometry args={[0.075, 18, 12]} /><meshStandardMaterial color="#9c7bb0" roughness={0.26} metalness={0.4} /></mesh>
        <group position={[0.29, 0.68, 0]} rotation={[0, 0, -0.12]}>
          <RoundedBox args={[0.52, 0.16, 0.28]} radius={0.07} smoothness={5}>
            <meshStandardMaterial color="#4a3d68" roughness={0.26} metalness={0.32} />
          </RoundedBox>
          <mesh position={[0, -0.09, 0]}>
            <boxGeometry args={[0.38, 0.025, 0.18]} />
            <meshStandardMaterial color="#ffd99a" emissive="#ffc56f" emissiveIntensity={2.2} toneMapped={false} />
          </mesh>
          <pointLight position={[0, -0.14, 0.08]} intensity={3.5} color="#ffc477" distance={2.1} decay={2} />
        </group>
      </group>
      <group position={[0.2, -0.02, -0.48]}>
        <RoundedBox args={[1.66, 0.94, 0.12]} radius={0.08} smoothness={4} position={[0, 0.26, 0]}>
          <meshStandardMaterial color="#1c263d" roughness={0.3} metalness={0.25} />
        </RoundedBox>
        <mesh position={[0, 0.26, 0.07]}><planeGeometry args={[1.44, 0.72]} /><meshStandardMaterial color="#182746" emissive="#326eae" emissiveIntensity={0.22} /></mesh>
        {[[-0.48, 0.42, 0.08, PINK], [-0.3, 0.24, 0.56, BLUE], [-0.18, 0.06, 0.92, "#a995dd"]].map(([x, y, width, color], index) => (
          <mesh key={index} position={[x as number, y as number, 0.085]}><planeGeometry args={[width as number, 0.045]} /><meshBasicMaterial color={color as string} /></mesh>
        ))}
        <mesh position={[0, -0.36, 0]}><cylinderGeometry args={[0.055, 0.075, 0.42, 16]} /><meshStandardMaterial color="#45516e" metalness={0.4} /></mesh>
        <mesh position={[0, -0.57, 0]}><boxGeometry args={[0.58, 0.06, 0.34]} /><meshStandardMaterial color="#45516e" metalness={0.35} /></mesh>
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
        <color attach="background" args={["#111a2d"]} />
        <ambientLight intensity={1.25} />
        <directionalLight position={[4, 6, 5]} intensity={2.1} color="#dce8ff" castShadow />
        <pointLight position={[-3, 2.2, 3]} intensity={15} color={PINK} distance={11} />
        <pointLight position={[3.5, 2, 4]} intensity={17} color={BLUE} distance={12} />
        <pointLight position={[-2.1, 0.55, 1]} intensity={7} color="#ffd79d" distance={5} />
        <Room />
      </Canvas>
    </div>
  )
}
