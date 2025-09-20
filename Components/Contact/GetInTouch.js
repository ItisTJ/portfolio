"use client"

import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF } from "@react-three/drei"

function RotatingModel({ modelPath }) {
  const ref = useRef()
  const { scene } = useGLTF(modelPath)

  // Auto rotate
  useFrame(() => {
    if (ref.current) ref.current.rotation.y -= 0.01
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      position={[0, -1.7, -0.24]} // center model vertically
      scale={1.5}            // adjust scale to fit canvas
    />
  )
}

export default function GetInTouch({ modelPath }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      style={{ width: "100%", height: "65vh" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <RotatingModel modelPath={modelPath} />
    </Canvas>
  )
}
