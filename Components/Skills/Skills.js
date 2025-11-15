"use client"

import React, { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Text } from "@react-three/drei"
import * as THREE from "three"

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
  { name: "Figma", image: "./skills/figma.png" },
  { name: "MicroPython", image: "./skills/micropython.png" },
  { name: "Blender", image: "./skills/blender.png" },
  { name: "Godot", image: "./skills/godot.png" },
  { name: "C", image: "./skills/c.png" },
  { name: "Nest.js", image: "./skills/nestjs.png" },
  { name: "PHP", image: "./skills/php.png" },
  { name: "Vercel", image: "./skills/vercel.png" },
  { name: "Tailwind CSS", image: "./skills/tailwind.png" },
]

// --- rotating planet ---
function Planet({ scale }) {
  const planetRef = useRef()
  
  // Load the Earth texture
  const earthTexture = useMemo(() => {
    const loader = new THREE.TextureLoader()
    return loader.load("/earth.png")
  }, [])

  useFrame(() => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.002
    }
  })

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[2.5 * scale, 64, 64]} />
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
function SkillOrbit({ skills, radius, iconScale }) {
  const groupRef = useRef()
  const { camera } = useThree()
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const textures = useMemo(
    () => skills.map(skill => {
      const loader = new THREE.TextureLoader()
      return loader.load(skill.image)
    }),
    [skills]
  )

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003

      groupRef.current.children.forEach(child => {
        child.lookAt(camera.position)
      })
    }
  })

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => {
        const angle = (i / skills.length) * Math.PI * 2
        const x = radius * Math.cos(angle)
        const z = radius * Math.sin(angle)
        const isHovered = hoveredIndex === i

        return (
          <group key={i} position={[x, 0, z]}>
            {/* Skill Icon */}
            <mesh
              onPointerOver={() => setHoveredIndex(i)}
              onPointerOut={() => setHoveredIndex(null)}
            >
              <planeGeometry args={[0.5 * iconScale * (isHovered ? 1.3 : 1), 0.5 * iconScale * (isHovered ? 1.3 : 1)]} />
              <meshBasicMaterial 
                map={textures[i]} 
                transparent 
                opacity={1}
              />
              {isHovered && (
                <pointLight 
                  position={[0, 0, 0.5]} 
                  color="#6366f1" 
                  intensity={2} 
                  distance={1.5}
                />
              )}
            </mesh>
            
            {/* Duplicate icon for glow effect (behind) */}
            {isHovered && (
              <>
                <mesh position={[0, 0, -0.02]}>
                  <planeGeometry args={[0.6 * iconScale, 0.6 * iconScale]} />
                  <meshBasicMaterial 
                    map={textures[i]}
                    transparent 
                    opacity={0.6}
                    color="#6366f1"
                    blending={THREE.AdditiveBlending}
                  />
                </mesh>
                <mesh position={[0, 0, -0.04]}>
                  <planeGeometry args={[0.7 * iconScale, 0.7 * iconScale]} />
                  <meshBasicMaterial 
                    map={textures[i]}
                    transparent 
                    opacity={0.4}
                    color="#6366f1"
                    blending={THREE.AdditiveBlending}
                  />
                </mesh>
                <mesh position={[0, 0, -0.06]}>
                  <planeGeometry args={[0.8 * iconScale, 0.8 * iconScale]} />
                  <meshBasicMaterial 
                    map={textures[i]}
                    transparent 
                    opacity={0.2}
                    color="#6366f1"
                    blending={THREE.AdditiveBlending}
                  />
                </mesh>
              </>
            )}
            
            {/* Label */}
            {isHovered && (
              <Text
                position={[0, 0.5 * iconScale, 0]}
                fontSize={0.15 * iconScale}
                color="#ffffff"
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.02}
                outlineColor="#6366f1"
              >
                {skill.name}
              </Text>
            )}
          </group>
        )
      })}
    </group>
  )
}

// --- main scene ---
export default function SkillsPlanet() {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: 600
  })

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      let height = 600
      
      if (width < 480) {
        height = 380
      } else if (width < 768) {
        height = 480
      }
      
      setDimensions({ width, height })
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Responsive values based on screen width
  const isMobile = dimensions.width < 768
  const isSmallMobile = dimensions.width < 480

  const cameraDistance = isSmallMobile ? 10 : isMobile ? 9 : 8
  const planetScale = isSmallMobile ? 0.7 : isMobile ? 0.8 : 1
  const orbitRadius = isSmallMobile ? 3.2 : isMobile ? 3.5 : 4
  const iconScale = isSmallMobile ? 0.8 : isMobile ? 0.9 : 1

  return (
    <div style={{ 
      padding: isMobile ? '2rem 1rem' : '4rem 3rem',
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h2 style={{
        fontSize: isSmallMobile ? '28px' : isMobile ? '32px' : '40px',
        fontWeight: 600,
        color: '#ffffff',
        marginBottom: '2rem'
      }}>
        Skills
      </h2>
    
      <div style={{ 
        display: "flex", 
        textAlign: "center", 
        width: "100%", 
        height: dimensions.height,
        background: 'transparent',
        borderRadius: '20px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <Canvas 
          camera={{ position: [0, 0, cameraDistance], fov: 50 }}
          style={{ width: '100%', height: '100%', paddingBottom: '50px' }}
        >
          <ambientLight intensity={5} />
          <directionalLight position={[5, 5, 5]} intensity={7} />
          <Planet scale={planetScale} />
          <SkillOrbit skills={skills} radius={orbitRadius} iconScale={iconScale} />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2.8}
            minPolarAngle={Math.PI / 2.8}
            rotateSpeed={isMobile ? 0.3 : 0.5}
          />
        </Canvas>
      </div>
    </div>
  )
}