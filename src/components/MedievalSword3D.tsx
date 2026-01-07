import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

const Sword = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.3, 0, 0.1]} position={[0, 0, 0]}>
      {/* Blade */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[0.15, 3, 0.05]} />
        <meshStandardMaterial 
          color="#a8a8a8" 
          metalness={0.9} 
          roughness={0.2}
        />
      </mesh>
      
      {/* Blade Edge Glow */}
      <mesh position={[0, 2, 0]}>
        <boxGeometry args={[0.16, 3, 0.02]} />
        <meshBasicMaterial color="#d4af37" transparent opacity={0.3} />
      </mesh>

      {/* Blade Tip */}
      <mesh position={[0, 3.7, 0]} rotation={[0, 0, Math.PI / 4]}>
        <coneGeometry args={[0.12, 0.4, 4]} />
        <meshStandardMaterial 
          color="#c0c0c0" 
          metalness={0.9} 
          roughness={0.2}
        />
      </mesh>

      {/* Guard */}
      <mesh position={[0, 0.3, 0]}>
        <boxGeometry args={[0.8, 0.1, 0.15]} />
        <meshStandardMaterial 
          color="#d4af37" 
          metalness={0.8} 
          roughness={0.3}
        />
      </mesh>

      {/* Guard Decorations */}
      <mesh position={[-0.35, 0.3, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial 
          color="#d4af37" 
          metalness={0.8} 
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0.35, 0.3, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial 
          color="#d4af37" 
          metalness={0.8} 
          roughness={0.3}
        />
      </mesh>

      {/* Handle */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.06, 0.07, 0.8, 16]} />
        <meshStandardMaterial 
          color="#4a3728" 
          metalness={0.2} 
          roughness={0.8}
        />
      </mesh>

      {/* Handle Wrap */}
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[0, -0.2 - i * 0.15, 0]}>
          <torusGeometry args={[0.08, 0.02, 8, 16]} />
          <meshStandardMaterial 
            color="#d4af37" 
            metalness={0.7} 
            roughness={0.4}
          />
        </mesh>
      ))}

      {/* Pommel */}
      <mesh position={[0, -0.9, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial 
          color="#d4af37" 
          metalness={0.8} 
          roughness={0.3}
        />
      </mesh>

      {/* Gem in Pommel */}
      <mesh position={[0, -0.9, 0.1]}>
        <octahedronGeometry args={[0.05]} />
        <meshStandardMaterial 
          color="#8b0000" 
          metalness={0.5} 
          roughness={0.1}
          emissive="#8b0000"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
};

const MedievalSword3D = () => {
  return (
    <div className="absolute right-0 top-1/4 w-[300px] h-[500px] pointer-events-none opacity-40 hidden lg:block">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#d4af37" />
          <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#ffffff" />
          <pointLight position={[0, 2, 2]} intensity={0.5} color="#d4af37" />
          <Sword />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MedievalSword3D;
