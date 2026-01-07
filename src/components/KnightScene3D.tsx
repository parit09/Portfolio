"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function KnightBackground() {
  const KnightModel = () => {
    const ref = useRef<THREE.Group>(null);
    const { scene } = useGLTF("/untitled.glb");

    useFrame((state) => {
      if (!ref.current) return;
      const t = state.clock.elapsedTime;
      ref.current.rotation.y = Math.sin(t * 0.25) * 0.25;
      ref.current.position.y = Math.sin(t * 0.4) * 0.2;
    });

    return (
      <primitive
        ref={ref}
        object={scene}
        scale={2.8}                 // 🔥 BIGGER MODEL
        position={[3.6, -1.8, 0]}   // 🔥 PUSH TO RIGHT
        rotation={[0, Math.PI * 0.6, 0]}
      />
    );
  };

  return (
    <>
      {/* 3D BACKGROUND LAYER */}
      <div
        className="
          fixed inset-0 
          z-0
          pointer-events-none 
          opacity-50
          hidden lg:block
        "
      >
        <Canvas camera={{ position: [3.5, 0, 5], fov:60 }}>
          <Suspense fallback={null}>
            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[6, 8, 5]} intensity={1.2} />
            <directionalLight position={[-6, 3, -5]} intensity={0.4} />
            <pointLight position={[0, 3, 3]} intensity={0.6} />

            <KnightModel />
          </Suspense>
        </Canvas>
      </div>

      {/* CONTENT WRAPPER (ALWAYS ABOVE) */}
      <div className="relative z-10">
        {/* your normal page content goes here */}
      </div>
    </>
  );
}

// Preload
useGLTF.preload("/untitled.glb");
