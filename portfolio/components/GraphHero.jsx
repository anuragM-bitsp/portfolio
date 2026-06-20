"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Loose 3D lattice of nodes + edges — doubles as a stand-in for both
// a molecular structure and an agent/retrieval graph, the two worlds
// this portfolio sits between.
function generateGraph() {
  const nodes = [
    [0, 0, 0],
    [1.4, 0.6, -0.3],
    [-1.2, 0.9, 0.4],
    [0.6, -1.1, 0.6],
    [-0.8, -0.7, -0.5],
    [1.8, -0.4, 0.8],
    [-1.9, 0.1, -0.7],
    [0.2, 1.6, 0.2],
    [2.2, 1.0, -0.5],
    [-0.3, -1.8, 0.3],
    [1.1, 1.7, -0.9],
    [-1.6, -1.3, 0.7],
    [2.0, -1.4, -0.2],
    [-2.1, 1.2, 0.6],
  ];
  const edges = [
    [0, 1], [0, 2], [0, 3], [0, 4],
    [1, 5], [1, 7], [2, 6], [2, 7],
    [3, 5], [3, 9], [4, 6], [4, 9],
    [5, 8], [5, 12], [6, 11], [6, 13],
    [7, 8], [7, 10], [9, 11], [9, 12],
    [1, 8], [2, 13], [3, 12], [4, 11],
  ];
  return { nodes, edges };
}

function Edge({ start, end, color }) {
  const { position, rotation, length } = useMemo(() => {
    const startV = new THREE.Vector3(...start);
    const endV = new THREE.Vector3(...end);
    const dir = new THREE.Vector3().subVectors(endV, startV);
    const len = dir.length();
    const mid = new THREE.Vector3().addVectors(startV, endV).multiplyScalar(0.5);
    const quaternion = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.clone().normalize()
    );
    const euler = new THREE.Euler().setFromQuaternion(quaternion);
    return { position: mid.toArray(), rotation: [euler.x, euler.y, euler.z], length: len };
  }, [start, end]);

  return (
    <mesh position={position} rotation={rotation}>
      <cylinderGeometry args={[0.008, 0.008, length, 6]} />
      <meshBasicMaterial color={color} transparent opacity={0.28} />
    </mesh>
  );
}

function Node({ position, color, delay }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pulse = 0.65 + Math.sin(t * 1.3 + delay) * 0.35;
    if (ref.current) {
      ref.current.material.emissiveIntensity = pulse;
      const s = 1 + Math.sin(t * 1.3 + delay) * 0.08;
      ref.current.scale.setScalar(s);
    }
  });
  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={[0.075, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} toneMapped={false} />
    </mesh>
  );
}

function Graph() {
  const group = useRef();
  const { nodes, edges } = useMemo(() => generateGraph(), []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.1;
    const targetX = state.pointer.y * 0.15;
    const targetZ = state.pointer.x * 0.1;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.03;
    group.current.rotation.z += (targetZ - group.current.rotation.z) * 0.03;
  });

  return (
    <group ref={group}>
      {edges.map(([a, b], i) => (
        <Edge key={i} start={nodes[a]} end={nodes[b]} color="#6FE3C4" />
      ))}
      {nodes.map((pos, i) => (
        <Node key={i} position={pos} color={i % 4 === 0 ? "#E8A857" : "#6FE3C4"} delay={i * 0.7} />
      ))}
    </group>
  );
}

export default function GraphHero() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.7} color="#6FE3C4" />
      <pointLight position={[-5, -3, -5]} intensity={0.3} color="#E8A857" />
      <Graph />
    </Canvas>
  );
}
