import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

// Knight sitting with sword in ground
const Knight = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle breathing motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });

  return (
    <group ref={groupRef} position={[0, -2.5, 0]} scale={0.8}>
      {/* === SWORD IN GROUND === */}
      <group position={[1.2, 1.5, 0.3]} rotation={[0.1, 0, 0.05]}>
        {/* Blade */}
        <mesh position={[0, 1.2, 0]}>
          <boxGeometry args={[0.08, 2.4, 0.02]} />
          <meshStandardMaterial color="#b8b8b8" metalness={0.95} roughness={0.15} />
        </mesh>
        {/* Blade edge glow */}
        <mesh position={[0, 1.2, 0]}>
          <boxGeometry args={[0.09, 2.4, 0.01]} />
          <meshBasicMaterial color="#d4af37" transparent opacity={0.2} />
        </mesh>
        {/* Blade tip */}
        <mesh position={[0, 2.5, 0]}>
          <coneGeometry args={[0.06, 0.3, 4]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Guard */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.5, 0.06, 0.1]} />
          <meshStandardMaterial color="#d4af37" metalness={0.85} roughness={0.25} />
        </mesh>
        {/* Guard ends */}
        <mesh position={[-0.22, 0, 0]}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0.22, 0, 0]}>
          <sphereGeometry args={[0.05, 12, 12]} />
          <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Handle */}
        <mesh position={[0, -0.35, 0]}>
          <cylinderGeometry args={[0.04, 0.045, 0.6, 12]} />
          <meshStandardMaterial color="#3d2817" metalness={0.1} roughness={0.9} />
        </mesh>
        {/* Pommel */}
        <mesh position={[0, -0.7, 0]}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshStandardMaterial color="#d4af37" metalness={0.85} roughness={0.25} />
        </mesh>
      </group>

      {/* === KNIGHT BODY === */}
      {/* Torso - Chest Armor */}
      <mesh position={[0, 1.8, 0]}>
        <boxGeometry args={[0.9, 1.0, 0.5]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.9} roughness={0.3} />
      </mesh>
      {/* Chest plate detail */}
      <mesh position={[0, 1.9, 0.26]}>
        <boxGeometry args={[0.6, 0.7, 0.05]} />
        <meshStandardMaterial color="#5a5a5a" metalness={0.85} roughness={0.35} />
      </mesh>
      {/* Gold trim on chest */}
      <mesh position={[0, 2.25, 0.27]}>
        <boxGeometry args={[0.65, 0.05, 0.03]} />
        <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Shoulder Pauldrons */}
      <mesh position={[-0.55, 2.1, 0]} rotation={[0, 0, -0.3]}>
        <sphereGeometry args={[0.25, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[0.55, 2.1, 0]} rotation={[0, 0, 0.3]}>
        <sphereGeometry args={[0.25, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* === HEAD === */}
      {/* Helmet base */}
      <mesh position={[0, 2.6, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.9} roughness={0.25} />
      </mesh>
      {/* Helmet visor */}
      <mesh position={[0, 2.55, 0.2]}>
        <boxGeometry args={[0.25, 0.15, 0.15]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.95} roughness={0.2} />
      </mesh>
      {/* Visor slits */}
      <mesh position={[0, 2.55, 0.28]}>
        <boxGeometry args={[0.2, 0.02, 0.02]} />
        <meshBasicMaterial color="#1a1a1a" />
      </mesh>
      {/* Helmet crest/plume holder */}
      <mesh position={[0, 2.85, -0.05]}>
        <cylinderGeometry args={[0.03, 0.05, 0.15, 8]} />
        <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Plume */}
      <mesh position={[0, 3.05, -0.1]} rotation={[0.3, 0, 0]}>
        <coneGeometry args={[0.08, 0.5, 8]} />
        <meshStandardMaterial color="#8b0000" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* === ARMS === */}
      {/* Upper arms */}
      <mesh position={[-0.6, 1.7, 0]} rotation={[0, 0, 0.4]}>
        <cylinderGeometry args={[0.12, 0.14, 0.5, 12]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.85} roughness={0.35} />
      </mesh>
      <mesh position={[0.6, 1.7, 0]} rotation={[0, 0, -0.4]}>
        <cylinderGeometry args={[0.12, 0.14, 0.5, 12]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.85} roughness={0.35} />
      </mesh>

      {/* Forearms */}
      <mesh position={[-0.75, 1.3, 0.1]} rotation={[0.3, 0, 0.6]}>
        <cylinderGeometry args={[0.1, 0.12, 0.45, 12]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.85} roughness={0.35} />
      </mesh>
      {/* Right arm reaching to sword */}
      <mesh position={[0.9, 1.4, 0.2]} rotation={[0.2, 0, -0.8]}>
        <cylinderGeometry args={[0.1, 0.12, 0.5, 12]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.85} roughness={0.35} />
      </mesh>

      {/* Gauntlets */}
      <mesh position={[-0.85, 1.0, 0.2]}>
        <sphereGeometry args={[0.1, 10, 10]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.9} roughness={0.3} />
      </mesh>
      {/* Right hand on sword handle */}
      <mesh position={[1.15, 1.15, 0.3]}>
        <sphereGeometry args={[0.1, 10, 10]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* === LOWER BODY (seated) === */}
      {/* Waist armor */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[0.85, 0.3, 0.45]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.85} roughness={0.35} />
      </mesh>
      {/* Belt */}
      <mesh position={[0, 1.1, 0.23]}>
        <boxGeometry args={[0.9, 0.1, 0.05]} />
        <meshStandardMaterial color="#3d2817" metalness={0.2} roughness={0.8} />
      </mesh>
      {/* Belt buckle */}
      <mesh position={[0, 1.1, 0.27]}>
        <boxGeometry args={[0.15, 0.08, 0.03]} />
        <meshStandardMaterial color="#d4af37" metalness={0.85} roughness={0.25} />
      </mesh>

      {/* Thigh armor (seated position) */}
      <mesh position={[-0.25, 0.85, 0.3]} rotation={[1.2, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.17, 0.6, 12]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.85} roughness={0.35} />
      </mesh>
      <mesh position={[0.25, 0.85, 0.3]} rotation={[1.2, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.17, 0.6, 12]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.85} roughness={0.35} />
      </mesh>

      {/* Knee armor */}
      <mesh position={[-0.25, 0.6, 0.55]}>
        <sphereGeometry args={[0.12, 10, 10]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[0.25, 0.6, 0.55]}>
        <sphereGeometry args={[0.12, 10, 10]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* Shin armor */}
      <mesh position={[-0.25, 0.2, 0.4]} rotation={[0.3, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.5, 12]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.85} roughness={0.35} />
      </mesh>
      <mesh position={[0.25, 0.2, 0.4]} rotation={[0.3, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.5, 12]} />
        <meshStandardMaterial color="#4a4a4a" metalness={0.85} roughness={0.35} />
      </mesh>

      {/* Boots */}
      <mesh position={[-0.25, -0.1, 0.5]}>
        <boxGeometry args={[0.15, 0.12, 0.3]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.3} roughness={0.7} />
      </mesh>
      <mesh position={[0.25, -0.1, 0.5]}>
        <boxGeometry args={[0.15, 0.12, 0.3]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* === CAPE === */}
      <mesh position={[0, 1.6, -0.35]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[0.9, 1.8, 0.05]} />
        <meshStandardMaterial 
          color="#8b0000" 
          metalness={0.1} 
          roughness={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Cape gold trim */}
      <mesh position={[0, 2.45, -0.36]}>
        <boxGeometry args={[0.95, 0.08, 0.02]} />
        <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* === GROUND/ROCK === */}
      <mesh position={[0, -0.3, 0.2]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[2, 0.4, 1.5]} />
        <meshStandardMaterial color="#3a3632" metalness={0.1} roughness={0.95} />
      </mesh>
      {/* Smaller rocks */}
      <mesh position={[-0.8, -0.15, 0.6]}>
        <dodecahedronGeometry args={[0.2]} />
        <meshStandardMaterial color="#4a4642" metalness={0.1} roughness={0.9} />
      </mesh>
      <mesh position={[0.9, -0.2, 0.4]}>
        <dodecahedronGeometry args={[0.15]} />
        <meshStandardMaterial color="#3a3632" metalness={0.1} roughness={0.95} />
      </mesh>
    </group>
  );
};

// Floating particles for atmosphere
const Particles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 50;
  
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10;
    positions[i + 1] = (Math.random() - 0.5) * 8;
    positions[i + 2] = (Math.random() - 0.5) * 5;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#d4af37" transparent opacity={0.6} />
    </points>
  );
};

const KnightScene3D = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-60">
      <Canvas camera={{ position: [0, 0.5, 6], fov: 50 }}>
        <Suspense fallback={null}>
          {/* Ambient light for base illumination */}
          <ambientLight intensity={0.2} />
          
          {/* Main key light - warm gold tone */}
          <directionalLight 
            position={[5, 8, 5]} 
            intensity={0.8} 
            color="#d4af37"
            castShadow
          />
          
          {/* Fill light - cooler tone */}
          <directionalLight 
            position={[-5, 3, -3]} 
            intensity={0.3} 
            color="#6b7b8a"
          />
          
          {/* Rim light for silhouette */}
          <pointLight position={[0, 5, -5]} intensity={0.4} color="#d4af37" />
          
          {/* Ground reflection light */}
          <pointLight position={[0, -3, 2]} intensity={0.2} color="#4a3f35" />
          
          <Knight />
          <Particles />
          
          {/* Fog for atmosphere */}
          <fog attach="fog" args={['#0d0a08', 5, 15]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default KnightScene3D;
