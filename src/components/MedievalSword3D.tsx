import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

const Sword = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.15;
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.15;
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* ================= HANDLE ================= */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.07, 0.8, 16]} />
        <meshStandardMaterial color="#4a3728" roughness={0.85} metalness={0.15} />
      </mesh>

      {/* Handle Wrap */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[0, -0.25 + i * 0.18, 0]}>
          <torusGeometry args={[0.08, 0.02, 8, 16]} />
          <meshStandardMaterial color="#d4af37" metalness={0.6} roughness={0.4} />
        </mesh>
      ))}

      {/* Pommel */}
      <mesh position={[0, -0.55, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.25} />
      </mesh>

      {/* Gem */}
      <mesh position={[0, -0.55, 0.1]}>
        <octahedronGeometry args={[0.05]} />
        <meshStandardMaterial
          color="#8b0000"
          emissive="#8b0000"
          emissiveIntensity={0.6}
          roughness={0.2}
        />
      </mesh>

      {/* ================= GUARD ================= */}
      <mesh position={[0, 0.45, 0]}>
        <boxGeometry args={[0.85, 0.1, 0.15]} />
        <meshStandardMaterial color="#d4af37" metalness={0.85} roughness={0.3} />
      </mesh>

      <mesh position={[-0.38, 0.45, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.3} />
      </mesh>

      <mesh position={[0.38, 0.45, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* ================= BLADE ================= */}
      <mesh position={[0, 2.1, 0]}>
        <boxGeometry args={[0.14, 3.3, 0.05]} />
        <meshStandardMaterial color="#b0b0b0" metalness={0.95} roughness={0.2} />
      </mesh>

      {/* Blade Glow */}
      <mesh position={[0, 2.1, 0]}>
        <boxGeometry args={[0.15, 3.3, 0.02]} />
        <meshBasicMaterial color="#d4af37" opacity={0.25} transparent />
      </mesh>

      {/* Blade Tip */}
      <mesh position={[0, 3.9, 0]}>
        <coneGeometry args={[0.11, 0.45, 4]} />
        <meshStandardMaterial color="#c8c8c8" metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
};

const MedievalSword3D = () => {
  return (
    <div className="absolute right-0 top-1/4 w-[300px] h-[500px] pointer-events-none opacity-40 hidden lg:block">
      <Canvas camera={{ position: [0, 0.8, 6], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.25} />
          <directionalLight position={[6, 8, 5]} intensity={1} color="#d4af37" />
          <directionalLight position={[-5, -3, -5]} intensity={0.35} />
          <pointLight position={[0, 2, 3]} intensity={0.5} color="#d4af37" />
          <Sword />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MedievalSword3D;
