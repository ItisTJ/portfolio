"use client"

import React, { useRef, useMemo } from "react"
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber" // ✅ include useLoader
import { OrbitControls, Text } from "@react-three/drei"
import * as THREE from "three"
import './styles/skills.css'

// --- skills data ---
const skills = [
  { name: "GIT", image: "./skills/git.png" },
  { name: "HTML", image: "./skills/html.png" },
  { name: "CSS", image: "./skills/css.png" },
  { name: "JavaScript", image: "./skills/javascript.png" },
  { name: "React", image: "./skills/react.png" },
  { name: "Next.js", image: "./skills/nextjs.png" },
  { name: "Node.js", image: "./skills/nodejs.png" },
  { name: "MongoDB", image: "./skills/mongodb.png" },
  { name: "MySQL", image: "./skills/mysql.png" },
  { name: "Python", image: "./skills/python.png" },
  { name: "Java", image: "./skills/java.png" },
  { name: "Figma", image: "./skills/figma.png" }
]

// --- rotating planet ---
function Planet() {
  const planetRef = useRef()

  // Load the Earth texture from /public folder
  const earthTexture = useLoader(THREE.TextureLoader, "/earth.png") // ✅ make sure earth.jpg is in /public

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.002 // rotate slowly around Y
    }
  })

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial
        color="#1d3557"
        metalness={0.4}
        roughness={0.6}
        map={earthTexture}
      />
    </mesh>
  )
}

// --- skills orbiting around planet ---
function SkillOrbit({ skills }) {
  const groupRef = useRef()
  const { camera } = useThree()

  // Load all skill images as textures
  const textures = useMemo(
    () => skills.map(skill => useLoader(THREE.TextureLoader, skill.image)),
    [skills]
  )

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003

      // Make each icon face the camera
      groupRef.current.children.forEach(child => {
        child.lookAt(camera.position)
      })
    }
  })

  const radius = 4

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => {
        const angle = (i / skills.length) * Math.PI * 2
        const x = radius * Math.cos(angle)
        const z = radius * Math.sin(angle)

        return (
          <group key={i} position={[x, 0, z]}>
            {/* Skill Icon */}
            <mesh>
              <planeGeometry args={[0.8, 0.8]} />
              <meshBasicMaterial map={textures[i]} transparent />
            </mesh>
          </group>
        )
      })}
    </group>
  )
}

// --- main scene ---
export default function SkillsPlanet() {
  return (
    <div className="skills">
      <h2 className="skills-title">Skills</h2>
    
    <div style={{ display:"flex", textAlign:"center", idth: "100%", height: "600px" }}>

      <Canvas camera={{ position: [0, 3, 8], fov: 50 }}>
        <ambientLight intensity={5} />
        <directionalLight position={[5, 5, 5]} intensity={7} />
        <Planet />
        <SkillOrbit skills={skills} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
    </div>
  )
}
