import React, { useEffect, useRef } from 'react';
import { useTheme } from '../utils/ThemeContext';

export const CelestialCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme, activeChakra } = useTheme();

  // Color Palette mapping from Cosmic Ember & Celestial Starlight
  // Velvet Void: #120E18, Nebula Plum: #3B2A3F, Smoky Amethyst: #7A6D7F, Solar Flare: #E07A2E, Ember Glow: #F4A883, Stardust Mist: #F6ECDD
  // Charcoal: #1E293B, Golden Ochre: #CFAF83, Sage: #9D886B, Plum: #475368
  const chakraColors = [
    { r: 224, g: 122, b: 46 },   // 0: Root -> Solar Flare (#E07A2E)
    { r: 244, g: 168, b: 131 },  // 1: Sacral -> Ember Glow (#F4A883)
    { r: 207, g: 175, b: 131 },  // 2: Solar Plexus -> Golden Ochre (#CFAF83)
    { r: 157, g: 136, b: 107 },  // 3: Heart -> Sage (#9D886B)
    { r: 71, g: 83, b: 104 },    // 4: Throat -> Plum Slate (#475368)
    { r: 122, g: 109, b: 127 },  // 5: Third Eye -> Smoky Amethyst (#7A6D7F)
    { r: 59, g: 42, b: 63 },     // 6: Crown -> Nebula Plum (#3B2A3F)
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    let mouse = { x: width / 2, y: height / 2, radius: 150 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    interface Star {
      x: number;
      y: number;
      size: number;
      baseAlpha: number;
      alpha: number;
      vx: number;
      vy: number;
      origX: number;
      origY: number;
      color: string;
    }

    const starCount = window.innerWidth < 768 ? 90 : 240;
    const stars: Star[] = [];
    const starColors = ['#F6ECDD', '#CFAF83', '#F4A883', '#E07A2E'];

    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      stars.push({
        x,
        y,
        origX: x,
        origY: y,
        size: Math.random() * 1.8 + 0.6,
        baseAlpha: Math.random() * 0.75 + 0.25,
        alpha: Math.random() * 0.75 + 0.25,
        vx: 0,
        vy: 0,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      });
    }

    let time = 0;

    const render = () => {
      time += 0.012;
      ctx.clearRect(0, 0, width, height);

      const chakra = chakraColors[activeChakra] || chakraColors[0];
      const isDark = theme === 'dark';

      // 1. Layered Radial Nebula Gradient
      const grad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.35,
        40,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.9
      );

      if (isDark) {
        grad.addColorStop(0, `rgba(${chakra.r}, ${chakra.g}, ${chakra.b}, 0.18)`);
        grad.addColorStop(0.45, 'rgba(30, 41, 59, 0.75)'); // Charcoal #1E293B
        grad.addColorStop(0.85, 'rgba(59, 42, 63, 0.85)'); // Nebula Plum #3B2A3F
        grad.addColorStop(1, '#120E18'); // Velvet Void #120E18
      } else {
        grad.addColorStop(0, `rgba(${chakra.r}, ${chakra.g}, ${chakra.b}, 0.14)`);
        grad.addColorStop(0.5, 'rgba(244, 168, 131, 0.4)'); // Ember Glow #F4A883
        grad.addColorStop(1, '#F6ECDD'); // Stardust Mist #F6ECDD
      }

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // 2. Constellation Lines using Golden Ochre #CFAF83
      ctx.strokeStyle = isDark
        ? 'rgba(207, 175, 131, 0.12)'
        : 'rgba(157, 136, 107, 0.15)';
      ctx.lineWidth = 1;

      for (let i = 0; i < stars.length; i += 3) {
        const s1 = stars[i];
        const s2 = stars[(i + 1) % stars.length];
        const dx = s1.x - s2.x;
        const dy = s1.y - s2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(s1.x, s1.y);
          ctx.lineTo(s2.x, s2.y);
          ctx.stroke();
        }
      }

      // 3. Stardust particles with water-parting cursor physics
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        const dx = mouse.x - s.x;
        const dy = mouse.y - s.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          s.vx -= Math.cos(angle) * force * 1.6;
          s.vy -= Math.sin(angle) * force * 1.6;
        }

        s.vx += (s.origX - s.x) * 0.02;
        s.vy += (s.origY - s.y) * 0.02;

        s.vx *= 0.88;
        s.vy *= 0.88;

        s.x += s.vx;
        s.y += s.vy;

        s.alpha = s.baseAlpha + Math.sin(time * 2.2 + i) * 0.25;
        if (s.alpha < 0.12) s.alpha = 0.12;

        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme, activeChakra]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
      style={{ opacity: 0.98 }}
    />
  );
};
