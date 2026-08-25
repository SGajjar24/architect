import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { MapPin, Navigation, Building, CheckCircle2 } from 'lucide-react';

export interface CityNodeData {
  name: string;
  count: number;
  coords: { x: number; z: number };
  color: number;
  description: string;
}

export const GUJARAT_CITY_NODES: CityNodeData[] = [
  { name: 'Ahmedabad', count: 34, coords: { x: -1, z: 1 }, color: 0xd4af37, description: 'Core Metro & High-Rise Corridor' },
  { name: 'Gandhinagar', count: 8, coords: { x: 3, z: -4 }, color: 0x38bdf8, description: 'GIFT City & Administrative Capital' },
  { name: 'Palanpur', count: 3, coords: { x: 1, z: -14 }, color: 0xa855f7, description: 'North Gujarat Commercial Gateway' },
  { name: 'Mehsana', count: 1, coords: { x: -3, z: -8 }, color: 0xec4899, description: 'Industrial & Trade Center' },
  { name: 'Surendranagar', count: 1, coords: { x: -12, z: 3 }, color: 0x10b981, description: 'Commercial Retail Hub' },
  { name: 'Surat', count: 1, coords: { x: 7, z: 16 }, color: 0xf59e0b, description: 'South Gujarat Diamond & Textile Hub' },
];

interface ThreeCityMap3DProps {
  onSelectCity: (cityName: string) => void;
  selectedCity: string;
  className?: string;
}

export const ThreeCityMap3D: React.FC<ThreeCityMap3DProps> = ({
  onSelectCity,
  selectedCity,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredCity, setHoveredCity] = useState<CityNodeData | null>(null);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const nodeMeshesRef = useRef<{ mesh: THREE.Mesh; data: CityNodeData }[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 500);
    camera.position.set(0, 32, 28);
    camera.lookAt(0, 0, 2);
    cameraRef.current = camera;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 3. Holographic Ground Grid & Contour Map Lines
    const grid = new THREE.GridHelper(50, 25, 0xd4af37, 0x1e293b);
    grid.position.y = 0;
    scene.add(grid);

    // Glowing Concentric Range Rings
    for (let r = 5; r <= 25; r += 7) {
      const ringGeo = new THREE.RingGeometry(r - 0.05, r, 64);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x334155,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.35,
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI / 2;
      ringMesh.position.y = 0.05;
      scene.add(ringMesh);
    }

    // 4. Create 3D City Beacon Nodes
    const nodeMeshes: { mesh: THREE.Mesh; data: CityNodeData }[] = [];
    const pulses: { ring: THREE.Mesh; scale: number }[] = [];

    GUJARAT_CITY_NODES.forEach((city) => {
      // Beacon Pillar Cylinder
      const pillarHeight = Math.max(3, (city.count / 34) * 12);
      const pillarGeo = new THREE.CylinderGeometry(0.5, 0.5, pillarHeight, 16);
      const pillarMat = new THREE.MeshStandardMaterial({
        color: city.color,
        emissive: city.color,
        emissiveIntensity: 0.4,
        roughness: 0.2,
        metalness: 0.8,
      });
      const pillar = new THREE.Mesh(pillarGeo, pillarMat);
      pillar.position.set(city.coords.x, pillarHeight / 2, city.coords.z);
      scene.add(pillar);

      // Node Top Sphere
      const sphereGeo = new THREE.SphereGeometry(0.9, 16, 16);
      const sphereMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: city.color,
        emissiveIntensity: 0.8,
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      sphere.position.set(city.coords.x, pillarHeight + 0.5, city.coords.z);
      scene.add(sphere);

      // Radar Pulse Ring
      const pulseGeo = new THREE.RingGeometry(0.8, 1.2, 32);
      const pulseMat = new THREE.MeshBasicMaterial({
        color: city.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6,
      });
      const pulseRing = new THREE.Mesh(pulseGeo, pulseMat);
      pulseRing.rotation.x = Math.PI / 2;
      pulseRing.position.set(city.coords.x, 0.1, city.coords.z);
      scene.add(pulseRing);
      pulses.push({ ring: pulseRing, scale: 1 });

      nodeMeshes.push({ mesh: sphere, data: city });
    });

    nodeMeshesRef.current = nodeMeshes;

    // Connect Nodes with Corridor Lines
    const lineMat = new THREE.LineBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.35 });
    const ahmedabad = GUJARAT_CITY_NODES[0].coords;

    GUJARAT_CITY_NODES.slice(1).forEach((other) => {
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(ahmedabad.x, 0.2, ahmedabad.z),
        new THREE.Vector3(other.coords.x, 0.2, other.coords.z),
      ]);
      const line = new THREE.Line(lineGeo, lineMat);
      scene.add(line);
    });

    // 5. Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xd4af37, 1.5);
    dirLight.position.set(10, 20, 10);
    scene.add(dirLight);

    // 6. Animation
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Animate pulses
      pulses.forEach((p) => {
        p.scale += 0.02;
        if (p.scale > 3.5) p.scale = 1;
        p.ring.scale.set(p.scale, p.scale, p.scale);
        (p.ring.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.7 - (p.scale / 3.5) * 0.7);
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[380px] bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl ${className}`}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Floating Map HUD */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md">
          <Navigation className="w-4 h-4 text-amber-400 animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
            3D Gujarat Project Cluster GIS
          </span>
        </div>

        <div className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-3 py-1 rounded-lg border border-white/5">
          48 Statutory Sites Active
        </div>
      </div>

      {/* Interactive City Selector Pills */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2 pointer-events-auto">
        <button
          onClick={() => onSelectCity('All')}
          className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all backdrop-blur-md ${
            selectedCity === 'All'
              ? 'bg-amber-600 text-white shadow-lg border border-amber-400'
              : 'bg-slate-900/80 text-slate-300 hover:text-white border border-white/10'
          }`}
        >
          All Gujarat (48)
        </button>

        {GUJARAT_CITY_NODES.map((city) => (
          <button
            key={city.name}
            onClick={() => onSelectCity(city.name)}
            onMouseEnter={() => setHoveredCity(city)}
            onMouseLeave={() => setHoveredCity(null)}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all backdrop-blur-md flex items-center gap-1.5 ${
              selectedCity.toLowerCase() === city.name.toLowerCase()
                ? 'bg-amber-600 text-white shadow-lg border border-amber-400'
                : 'bg-slate-900/80 text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: `#${city.color.toString(16).padStart(6, '0')}` }}
            />
            <span>{city.name}</span>
            <span className="opacity-70 text-[10px]">({city.count})</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThreeCityMap3D;
