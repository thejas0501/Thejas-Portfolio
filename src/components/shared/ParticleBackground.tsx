"use client";

import { useRef, useEffect } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
  speed: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationId: number;
    let stars: Star[] = [];
    const STAR_COUNT = 200;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function initStars() {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          z: Math.random() * 3 + 0.5, // depth
          size: Math.random() * 1.8 + 0.3,
          opacity: Math.random() * 0.6 + 0.1,
          speed: Math.random() * 0.15 + 0.02,
        });
      }
    }

    function draw() {
      const w = canvas!.width;
      const h = canvas!.height;

      // Deep black space
      ctx!.fillStyle = "#000000";
      ctx!.fillRect(0, 0, w, h);

      // Subtle nebula gradients
      const g1 = ctx!.createRadialGradient(w * 0.25, h * 0.3, 0, w * 0.25, h * 0.3, w * 0.4);
      g1.addColorStop(0, "rgba(0, 243, 255, 0.012)");
      g1.addColorStop(1, "transparent");
      ctx!.fillStyle = g1;
      ctx!.fillRect(0, 0, w, h);

      const g2 = ctx!.createRadialGradient(w * 0.75, h * 0.7, 0, w * 0.75, h * 0.7, w * 0.35);
      g2.addColorStop(0, "rgba(176, 38, 255, 0.01)");
      g2.addColorStop(1, "transparent");
      ctx!.fillStyle = g2;
      ctx!.fillRect(0, 0, w, h);

      // Draw stars
      for (const star of stars) {
        // Slow drift upward (parallax by depth)
        star.y -= star.speed * star.z;

        // Wrap around
        if (star.y < -2) {
          star.y = h + 2;
          star.x = Math.random() * w;
        }

        // Twinkle effect
        const twinkle = 0.7 + Math.sin(Date.now() * 0.001 * star.speed * 10 + star.x) * 0.3;
        const alpha = star.opacity * twinkle;

        // Glow
        if (star.size > 1.2) {
          ctx!.beginPath();
          ctx!.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(0, 243, 255, ${alpha * 0.05})`;
          ctx!.fill();
        }

        // Star dot
        ctx!.beginPath();
        ctx!.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(200, 220, 255, ${alpha})`;
        ctx!.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    initStars();
    draw();

    window.addEventListener("resize", () => {
      resize();
      initStars();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" />
      {/* Animated grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-10" />
    </div>
  );
}
