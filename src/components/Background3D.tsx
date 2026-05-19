import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Edges, Line } from '@react-three/drei'
import * as THREE from 'three'

function ArchitecturalShapes() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  // Theme detection for colors
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
  const color = isDark ? '#60a5fa' : '#2f5ea3'
  const opacity = isDark ? 0.25 : 0.15

  return (
    <group ref={groupRef}>
      {/* Central Abstract Structure */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[0, 0, -2]}>
          <icosahedronGeometry args={[2.5, 0]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={opacity * 0.6} />
        </mesh>
      </Float>

      {/* Floating Blueprint boxes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Float
          key={i}
          speed={2 + Math.random()}
          rotationIntensity={1}
          floatIntensity={2}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 10 - 5
          ]}
        >
          <mesh>
            <boxGeometry args={[1 + Math.random(), 1 + Math.random(), 1 + Math.random()]} />
            <Edges scale={1} threshold={15} color={color} transparent opacity={opacity * 1.5} />
            <meshBasicMaterial transparent opacity={0} />
          </mesh>
        </Float>
      ))}
      
      {/* Ambient Grid Lines in the background */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Line
          key={`h-line-${i}`}
          points={[
            new THREE.Vector3(-15, -8 + i * 2, -10),
            new THREE.Vector3(15, -8 + i * 2, -10)
          ]}
          color={color}
          lineWidth={0.5}
          transparent
          opacity={opacity * 0.3}
        />
      ))}
    </group>
  )
}

export default function Background3D() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
      aria-hidden="true"
    >
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ArchitecturalShapes />
      </Canvas>
    </div>
  )
}
