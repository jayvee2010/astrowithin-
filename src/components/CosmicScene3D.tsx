import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../utils/ThemeContext';

export const CosmicScene3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const { theme, activeChakra } = useTheme();

  // Reference colors across the 7 chakras
  const chakraHues = [
    new THREE.Color('#E07A2E'), // Root: Solar Flare
    new THREE.Color('#F4A883'), // Sacral: Ember Glow
    new THREE.Color('#CFAF83'), // Solar Plexus: Golden Ochre
    new THREE.Color('#2E7D32'), // Heart: Vedic Emerald / Sage
    new THREE.Color('#475368'), // Throat: Celestial Plum / Slate
    new THREE.Color('#7A6D7F'), // Third Eye: Smoky Amethyst
    new THREE.Color('#E07A2E'), // Crown: Radiant Violet / Solar Bloom
  ];

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xfff3e0, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffaa44, 3.5, 100);
    pointLight.position.set(0, 0, 15);
    scene.add(pointLight);

    const chakraLight = new THREE.PointLight(0xe07a2e, 4.0, 80);
    chakraLight.position.set(0, -5, 10);
    scene.add(chakraLight);

    // 1. Central Navagraha Planetary Armillary Sphere (Astrolabe Bands)
    const astrolabeGroup = new THREE.Group();
    scene.add(astrolabeGroup);

    // Brass & Gold foil armillary rings
    const ringMaterials = [
      new THREE.MeshStandardMaterial({ color: 0xcfaf83, metalness: 0.85, roughness: 0.25, wireframe: false }),
      new THREE.MeshStandardMaterial({ color: 0xe07a2e, metalness: 0.7, roughness: 0.3 }),
      new THREE.MeshStandardMaterial({ color: 0xf4a883, metalness: 0.8, roughness: 0.2 }),
    ];

    const ringGeometries = [
      new THREE.TorusGeometry(8.5, 0.08, 16, 120),
      new THREE.TorusGeometry(7.2, 0.06, 16, 100),
      new THREE.TorusGeometry(5.8, 0.07, 16, 90),
      new THREE.TorusGeometry(4.2, 0.05, 16, 80),
    ];

    const rings: THREE.Mesh[] = [];
    ringGeometries.forEach((geom, idx) => {
      const mesh = new THREE.Mesh(geom, ringMaterials[idx % ringMaterials.length]);
      mesh.rotation.x = Math.PI * 0.25 * (idx + 1);
      mesh.rotation.y = Math.PI * 0.18 * (idx + 1);
      astrolabeGroup.add(mesh);
      rings.push(mesh);
    });

    // 2. Navagraha Celestial Orbs orbiting the Armillary
    const grahaColors = [
      0xffa726, // Surya (Sun)
      0xffffff, // Chandra (Moon)
      0xe53935, // Mangal (Mars)
      0x66bb6a, // Budha (Mercury)
      0xffca28, // Guru (Jupiter)
      0xec407a, // Shukra (Venus)
      0x5c6bc0, // Shani (Saturn)
    ];

    const planets: { mesh: THREE.Mesh; orbitRadius: number; speed: number; angle: number; tilt: number }[] = [];
    grahaColors.forEach((col, i) => {
      const pGeom = new THREE.SphereGeometry(0.35 + (i % 3) * 0.12, 32, 32);
      const pMat = new THREE.MeshStandardMaterial({
        color: col,
        metalness: 0.6,
        roughness: 0.3,
        emissive: col,
        emissiveIntensity: 0.35,
      });
      const pMesh = new THREE.Mesh(pGeom, pMat);
      scene.add(pMesh);
      planets.push({
        mesh: pMesh,
        orbitRadius: 4.8 + i * 1.35,
        speed: 0.008 + (7 - i) * 0.003,
        angle: (i / 7) * Math.PI * 2,
        tilt: (i - 3) * 0.2,
      });
    });

    // 3. Central Glowing Golden Sun / Muladhara Core
    const sunGeom = new THREE.SphereGeometry(1.8, 32, 32);
    const sunMat = new THREE.MeshStandardMaterial({
      color: 0xffe082,
      emissive: 0xff9800,
      emissiveIntensity: 1.2,
      roughness: 0.1,
      metalness: 0.5,
    });
    const sunMesh = new THREE.Mesh(sunGeom, sunMat);
    astrolabeGroup.add(sunMesh);

    // 4. Stardust Particle System (Interactive Swarm)
    const particleCount = window.innerWidth < 768 ? 400 : 1200;
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 60;
      posArray[i + 1] = (Math.random() - 0.5) * 60;
      posArray[i + 2] = (Math.random() - 0.5) * 40;

      // Golden & ember stardust
      const isGold = Math.random() > 0.5;
      colorArray[i] = isGold ? 0.95 : 0.88;
      colorArray[i + 1] = isGold ? 0.78 : 0.48;
      colorArray[i + 2] = isGold ? 0.5 : 0.18;
    }

    const particlesGeom = new THREE.BufferGeometry();
    particlesGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeom.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeom, particlesMat);
    scene.add(particlesMesh);

    // Mouse Tracking for Interactive 3D Depth Tilting
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Resize Handler
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Camera parallax response to cursor
      targetX += (mouseX * 4 - targetX) * 0.05;
      targetY += (mouseY * 3 - targetY) * 0.05;
      camera.position.x = targetX;
      camera.position.y = targetY;
      camera.lookAt(0, 0, 0);

      // Rotate Armillary astrolabe rings
      astrolabeGroup.rotation.y += 0.004;
      astrolabeGroup.rotation.x = Math.sin(elapsed * 0.3) * 0.15;
      rings[0].rotation.z += 0.006;
      rings[1].rotation.x += 0.005;
      rings[2].rotation.y += 0.007;

      // Orbit Planets
      planets.forEach((p) => {
        p.angle += p.speed;
        p.mesh.position.x = Math.cos(p.angle) * p.orbitRadius;
        p.mesh.position.z = Math.sin(p.angle) * p.orbitRadius;
        p.mesh.position.y = Math.sin(p.angle + p.tilt) * (p.orbitRadius * 0.35);
        p.mesh.rotation.y += 0.02;
      });

      // Slowly rotate particle field
      particlesMesh.rotation.y = elapsed * 0.02;

      // Interpolate chakra light color
      const targetColor = chakraHues[activeChakra] || chakraHues[0];
      chakraLight.color.lerp(targetColor, 0.05);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [activeChakra]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: theme === 'dark' ? 0.95 : 0.65 }}
    />
  );
};
