import React, { useEffect, useRef } from 'react';

interface ArchitecturalCanvas3DProps {
  className?: string;
  theme?: 'dark' | 'light';
  speed?: number;
}

export const ArchitecturalCanvas3D: React.FC<ArchitecturalCanvas3DProps> = ({
  className = '',
  theme = 'dark',
  speed = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse interactive coordinates
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // 3D Point & Mesh Structures
    interface Point3D {
      x: number;
      y: number;
      z: number;
    }

    // Generate Architectural Building Wireframes in 3D
    const createBuildingNodes = () => {
      const nodes: Point3D[] = [];
      const stories = 6;
      const baseWidth = 140;
      const baseDepth = 140;
      const storyHeight = 35;

      for (let s = 0; s <= stories; s++) {
        const y = -s * storyHeight + 60;
        const w = baseWidth * (1 - s * 0.08);
        const d = baseDepth * (1 - s * 0.08);

        nodes.push({ x: -w / 2, y, z: -d / 2 });
        nodes.push({ x: w / 2, y, z: -d / 2 });
        nodes.push({ x: w / 2, y, z: d / 2 });
        nodes.push({ x: -w / 2, y, z: d / 2 });
      }
      return nodes;
    };

    const buildingNodes = createBuildingNodes();

    // Floating Ambient Particles in 3D
    const particleCount = 45;
    const particles: (Point3D & { vx: number; vy: number; vz: number; size: number })[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 800,
        y: (Math.random() - 0.5) * 600,
        z: (Math.random() - 0.5) * 600 + 200,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
      });
    }

    let angleX = 0.2;
    let angleY = 0;

    const render = () => {
      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const normX = (mouse.x / width - 0.5) * 2;
      const normY = (mouse.y / height - 0.5) * 2;

      angleY += 0.003 * speed + normX * 0.002;
      angleX = 0.25 + normY * 0.15;

      ctx.clearRect(0, 0, width, height);

      // Camera settings
      const fov = 450;
      const cx = width / 2;
      const cy = height / 2 + 30;

      const project3D = (p: Point3D): { x: number; y: number; scale: number; visible: boolean } => {
        // Rotate Y
        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);
        let x1 = p.x * cosY + p.z * sinY;
        let z1 = -p.x * sinY + p.z * cosY;

        // Rotate X
        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = p.y * sinX + z1 * cosX + 500; // Distance from camera

        if (z2 <= 10) return { x: 0, y: 0, scale: 0, visible: false };

        const scale = fov / z2;
        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          scale,
          visible: true,
        };
      };

      // Draw Floating Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        if (Math.abs(p.x) > 400) p.vx *= -1;
        if (Math.abs(p.y) > 300) p.vy *= -1;
        if (Math.abs(p.z) > 300) p.vz *= -1;

        const proj = project3D(p);
        if (proj.visible) {
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, p.size * proj.scale, 0, Math.PI * 2);
          ctx.fillStyle = theme === 'dark' ? 'rgba(212, 175, 55, 0.4)' : 'rgba(180, 83, 9, 0.3)';
          ctx.fill();
        }
      });

      // Project Building Nodes
      const projectedBuilding = buildingNodes.map(project3D);

      // Draw Architectural Wireframe Edges
      const strokeColor = theme === 'dark' ? 'rgba(212, 175, 55, 0.35)' : 'rgba(180, 83, 9, 0.25)';
      const accentStroke = theme === 'dark' ? 'rgba(14, 165, 233, 0.45)' : 'rgba(14, 165, 233, 0.35)';

      ctx.lineWidth = 1;

      // Draw floor rectangles
      const stories = 6;
      for (let s = 0; s <= stories; s++) {
        const idx = s * 4;
        const p0 = projectedBuilding[idx];
        const p1 = projectedBuilding[idx + 1];
        const p2 = projectedBuilding[idx + 2];
        const p3 = projectedBuilding[idx + 3];

        if (p0.visible && p1.visible && p2.visible && p3.visible) {
          ctx.strokeStyle = s === 0 || s === stories ? accentStroke : strokeColor;
          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.closePath();
          ctx.stroke();
        }
      }

      // Draw vertical pillar lines
      for (let s = 0; s < stories; s++) {
        const curr = s * 4;
        const next = (s + 1) * 4;
        for (let corner = 0; corner < 4; corner++) {
          const pA = projectedBuilding[curr + corner];
          const pB = projectedBuilding[next + corner];
          if (pA.visible && pB.visible) {
            ctx.strokeStyle = strokeColor;
            ctx.beginPath();
            ctx.moveTo(pA.x, pA.y);
            ctx.lineTo(pB.x, pB.y);
            ctx.stroke();
          }
        }
      }

      // Draw Isometric Grid Ground Plane
      const gridSize = 4;
      const step = 55;
      const groundY = 60;
      ctx.strokeStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)';

      for (let gx = -gridSize; gx <= gridSize; gx++) {
        const pStart = project3D({ x: gx * step, y: groundY, z: -gridSize * step });
        const pEnd = project3D({ x: gx * step, y: groundY, z: gridSize * step });
        if (pStart.visible && pEnd.visible) {
          ctx.beginPath();
          ctx.moveTo(pStart.x, pStart.y);
          ctx.lineTo(pEnd.x, pEnd.y);
          ctx.stroke();
        }
      }

      for (let gz = -gridSize; gz <= gridSize; gz++) {
        const pStart = project3D({ x: -gridSize * step, y: groundY, z: gz * step });
        const pEnd = project3D({ x: gridSize * step, y: groundY, z: gz * step });
        if (pStart.visible && pEnd.visible) {
          ctx.beginPath();
          ctx.moveTo(pStart.x, pStart.y);
          ctx.lineTo(pEnd.x, pEnd.y);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
    />
  );
};

export default ArchitecturalCanvas3D;
