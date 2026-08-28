import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useStudio, Render3DMode } from '../context/StudioContext';
import { Box, Eye, Grid, RefreshCw, Sparkles, Layers } from 'lucide-react';

interface ThreeArchitectureSceneProps {
  className?: string;
  height?: string;
}

export const ThreeArchitectureScene: React.FC<ThreeArchitectureSceneProps> = ({
  className = '',
  height = '100%',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { render3DMode, setRender3DMode, isBlueprintMode } = useStudio();
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [activeStory, setActiveStory] = useState<number>(0);

  // References for mutable Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const buildingGroupRef = useRef<THREE.Group | null>(null);
  const floorPlatesRef = useRef<THREE.Mesh[]>([]);
  const wireframesRef = useRef<THREE.LineSegments[]>([]);
  const coreRef = useRef<THREE.Mesh | null>(null);
  const isDraggingRef = useRef<boolean>(false);
  const previousMousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const width = container.clientWidth;
    const heightPx = container.clientHeight;

    // 1. SCENE & CAMERA
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / heightPx, 0.1, 1000);
    camera.position.set(24, 28, 38);
    camera.lookAt(0, 5, 0);
    cameraRef.current = camera;

    // 2. RENDERER
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    rendererRef.current = renderer;

    // 3. LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff5db, 2.2);
    sunLight.position.set(30, 50, 25);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    scene.add(sunLight);

    const accentPointLight = new THREE.PointLight(0x0ea5e9, 3, 50);
    accentPointLight.position.set(-15, 20, -10);
    scene.add(accentPointLight);

    const goldPointLight = new THREE.PointLight(0xd4af37, 2.5, 40);
    goldPointLight.position.set(15, 10, 15);
    scene.add(goldPointLight);

    // 4. ARCHITECTURAL BUILDING MASSING GROUP
    const buildingGroup = new THREE.Group();
    buildingGroupRef.current = buildingGroup;
    scene.add(buildingGroup);

    // Structural Concrete Core
    const coreGeo = new THREE.BoxGeometry(4, 28, 4);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.4,
      metalness: 0.3,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.y = 14;
    coreMesh.castShadow = true;
    coreMesh.receiveShadow = true;
    coreRef.current = coreMesh;
    buildingGroup.add(coreMesh);

    // Parametric Cantilever Floor Plates (12 Levels)
    const floorPlates: THREE.Mesh[] = [];
    const wireframes: THREE.LineSegments[] = [];
    const numFloors = 10;
    const baseSize = 16;
    const floorHeight = 2.6;

    for (let i = 0; i < numFloors; i++) {
      const angle = (i / numFloors) * (Math.PI / 3); // Organic twist
      const taper = 1 - (i / numFloors) * 0.35;
      const w = baseSize * taper;
      const d = baseSize * taper;

      const floorGeo = new THREE.BoxGeometry(w, 0.45, d);
      
      // Materials
      const solidMat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0xd4af37 : 0x0f172a,
        metalness: 0.75,
        roughness: 0.25,
      });

      const floorMesh = new THREE.Mesh(floorGeo, solidMat);
      floorMesh.position.y = (i + 1) * floorHeight;
      floorMesh.rotation.y = angle;
      floorMesh.castShadow = true;
      floorMesh.receiveShadow = true;
      buildingGroup.add(floorMesh);
      floorPlates.push(floorMesh);

      // Wireframe geometry
      const wireGeo = new THREE.WireframeGeometry(floorGeo);
      const wireMat = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        linewidth: 1,
        transparent: true,
        opacity: 0.7,
      });
      const wireLine = new THREE.LineSegments(wireGeo, wireMat);
      wireLine.position.copy(floorMesh.position);
      wireLine.rotation.copy(floorMesh.rotation);
      wireLine.visible = false;
      buildingGroup.add(wireLine);
      wireframes.push(wireLine);

      // Glass Curtain Wall Facade Ribs
      if (i < numFloors - 1) {
        const facadeGeo = new THREE.CylinderGeometry(0.08, 0.08, floorHeight, 8);
        const facadeMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.1 });
        
        // 4 Corner structural mullions
        const corners = [
          { x: w / 2 - 0.5, z: d / 2 - 0.5 },
          { x: -w / 2 + 0.5, z: d / 2 - 0.5 },
          { x: w / 2 - 0.5, z: -d / 2 + 0.5 },
          { x: -w / 2 + 0.5, z: -d / 2 + 0.5 },
        ];

        corners.forEach((c) => {
          const colMesh = new THREE.Mesh(facadeGeo, facadeMat);
          colMesh.position.set(c.x, floorMesh.position.y + floorHeight / 2, c.z);
          colMesh.rotation.y = angle;
          buildingGroup.add(colMesh);
        });
      }
    }

    floorPlatesRef.current = floorPlates;
    wireframesRef.current = wireframes;

    // 5. ISOMETRIC ARCHITECTURAL GROUND GRID
    const gridHelper = new THREE.GridHelper(60, 30, 0xd4af37, 0x334155);
    gridHelper.position.y = 0;
    scene.add(gridHelper);

    // 6. AMBIENT PARTICLES
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let p = 0; p < particleCount * 3; p += 3) {
      positions[p] = (Math.random() - 0.5) * 80;
      positions[p + 1] = Math.random() * 40;
      positions[p + 2] = (Math.random() - 0.5) * 80;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.25,
      transparent: true,
      opacity: 0.6,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 7. ANIMATION LOOP
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (autoRotate && buildingGroup) {
        buildingGroup.rotation.y += 0.0035;
      }

      particleSystem.rotation.y += 0.0008;

      renderer.render(scene, camera);
    };

    animate();

    // 8. RESIZE HANDLER
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [autoRotate]);

  // Apply Render Mode Changes in real time
  useEffect(() => {
    const floorPlates = floorPlatesRef.current;
    const wireframes = wireframesRef.current;
    const core = coreRef.current;

    floorPlates.forEach((mesh, idx) => {
      if (render3DMode === 'wireframe' || isBlueprintMode) {
        mesh.visible = false;
        if (wireframes[idx]) wireframes[idx].visible = true;
      } else if (render3DMode === 'xray') {
        mesh.visible = true;
        (mesh.material as THREE.MeshStandardMaterial).transparent = true;
        (mesh.material as THREE.MeshStandardMaterial).opacity = 0.35;
        (mesh.material as THREE.MeshStandardMaterial).color.setHex(0x38bdf8);
        if (wireframes[idx]) wireframes[idx].visible = true;
      } else {
        // Solid Mode
        mesh.visible = true;
        (mesh.material as THREE.MeshStandardMaterial).transparent = false;
        (mesh.material as THREE.MeshStandardMaterial).opacity = 1.0;
        (mesh.material as THREE.MeshStandardMaterial).color.setHex(idx % 2 === 0 ? 0xd4af37 : 0x0f172a);
        if (wireframes[idx]) wireframes[idx].visible = false;
      }
    });

    if (core) {
      if (render3DMode === 'wireframe' || isBlueprintMode) {
        (core.material as THREE.MeshStandardMaterial).wireframe = true;
      } else {
        (core.material as THREE.MeshStandardMaterial).wireframe = false;
      }
    }
  }, [render3DMode, isBlueprintMode]);

  // Mouse Orbit Drag Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    previousMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !buildingGroupRef.current) return;
    const deltaX = e.clientX - previousMousePosition.current.x;
    const deltaY = e.clientY - previousMousePosition.current.y;

    buildingGroupRef.current.rotation.y += deltaX * 0.008;
    if (cameraRef.current) {
      cameraRef.current.position.y = Math.max(10, Math.min(50, cameraRef.current.position.y + deltaY * 0.1));
      cameraRef.current.lookAt(0, 5, 0);
    }

    previousMousePosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={`relative w-full overflow-hidden select-none cursor-grab active:cursor-grabbing ${className}`}
      style={{ height }}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Interactive 3D HUD Controller Toolbar */}
      <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-3 pointer-events-auto">
        
        {/* Left: 3D Render Shaders Controller */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-xl">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 px-2 flex items-center gap-1">
            <Layers className="w-3 h-3 text-amber-400" />
            3D Shader:
          </span>
          <button
            onClick={() => setRender3DMode('solid')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              render3DMode === 'solid' && !isBlueprintMode
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Box className="w-3.5 h-3.5 inline mr-1" />
            Solid
          </button>
          <button
            onClick={() => setRender3DMode('wireframe')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              render3DMode === 'wireframe' || isBlueprintMode
                ? 'bg-sky-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Grid className="w-3.5 h-3.5 inline mr-1" />
            CAD Wire
          </button>
          <button
            onClick={() => setRender3DMode('xray')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
              render3DMode === 'xray'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5 inline mr-1" />
            X-Ray
          </button>
        </div>

        {/* Right: Orbit Rotation & Instructions */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all border backdrop-blur-md ${
              autoRotate
                ? 'bg-slate-900/80 border-amber-500/30 text-amber-300'
                : 'bg-slate-900/80 border-white/10 text-slate-400'
            }`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
            <span>{autoRotate ? 'Auto Orbit: ON' : 'Auto Orbit: OFF'}</span>
          </button>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/60 border border-white/5 text-[11px] font-mono text-slate-400 backdrop-blur-md">
            <span>🖱️ Drag to Orbit 3D Model</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeArchitectureScene;
