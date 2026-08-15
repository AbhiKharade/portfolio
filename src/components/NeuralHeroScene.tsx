import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function NeuralNetwork({ active }: { active: boolean }) {
  const parallaxGroupRef = useRef<THREE.Group>(null);
  const rotationGroupRef = useRef<THREE.Group>(null);
  const mouse = useRef({ x: 0, y: 0 });
  
  // Track mouse globally since the canvas has pointer-events: none
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Use an Icosahedron to represent the neural network structure
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(2.5, 1), []);
  
  // Extract unique vertices to place glowing nodes
  const vertices = useMemo(() => {
    const pos = geometry.attributes.position;
    const v: THREE.Vector3[] = [];
    for (let i = 0; i < pos.count; i++) {
      v.push(new THREE.Vector3().fromBufferAttribute(pos, i));
    }
    const unique: THREE.Vector3[] = [];
    const eps = 0.001;
    for (let i = 0; i < v.length; i++) {
      let isDuplicate = false;
      for (let j = 0; j < unique.length; j++) {
        if (v[i].distanceTo(unique[j]) < eps) {
          isDuplicate = true;
          break;
        }
      }
      if (!isDuplicate) unique.push(v[i]);
    }
    return unique;
  }, [geometry]);

  useFrame(() => {
    if (!active) return;
    
    // 1. Gentle continuous rotation
    if (rotationGroupRef.current) {
      rotationGroupRef.current.rotation.y += 0.002;
      rotationGroupRef.current.rotation.x += 0.001;
    }

    // 2. Mouse parallax
    if (parallaxGroupRef.current) {
      const targetX = (mouse.current.y * 0.25);
      const targetY = (mouse.current.x * 0.25);
      
      parallaxGroupRef.current.rotation.x += (targetX - parallaxGroupRef.current.rotation.x) * 0.05;
      parallaxGroupRef.current.rotation.y += (targetY - parallaxGroupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={parallaxGroupRef}>
      <group ref={rotationGroupRef}>
        {/* Network Edges */}
        <mesh geometry={geometry}>
          <meshBasicMaterial 
            color="#8b5cf6" 
            wireframe={true} 
            transparent 
            opacity={0.3} 
          />
        </mesh>
        
        {/* Network Nodes */}
        {vertices.map((v, i) => (
          <mesh key={i} position={v}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color="#3b82f6" />
          </mesh>
        ))}
        
        {/* Subtle core volume glow */}
        <mesh>
          <sphereGeometry args={[2.4, 32, 32]} />
          <meshBasicMaterial color="#8b5cf6" transparent opacity={0.03} />
        </mesh>
      </group>
    </group>
  );
}

export default function NeuralHeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  // Pause rendering when scrolled out of view to save CPU/GPU
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-primary/10 to-accent-purple/10 blur-3xl opacity-50"></div>
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <NeuralNetwork active={active} />
      </Canvas>
    </div>
  );
}
