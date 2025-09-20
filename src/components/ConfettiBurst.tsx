"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  alpha: number;
  gravity: number;
  friction: number;
}

export default function ConfettiBurst() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const particlesRef = useRef<Particle[]>([]);
  const startTimeRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles
    const createParticles = () => {
      const particles: Particle[] = [];
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      const colors = [
        "#3B82F6", // blue
        "#10B981", // emerald
        "#F59E0B", // amber
        "#EF4444", // red
        "#8B5CF6", // violet
        "#06B6D4", // cyan
      ];

      for (let i = 0; i < 180; i++) {
        const angle = (Math.PI * 2 * i) / 180;
        const velocity = 2 + Math.random() * 8;
        
        particles.push({
          x: centerX,
          y: centerY,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity - 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: 2 + Math.random() * 4,
          alpha: 1,
          gravity: 0.1,
          friction: 0.98,
        });
      }
      
      return particles;
    };

    // Animation loop
    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
        particlesRef.current = createParticles();
      }

      const elapsed = currentTime - startTimeRef.current;
      
      // Stop after 2.5 seconds
      if (elapsed > 2500) {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        return;
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += particle.gravity;
        particle.vx *= particle.friction;
        particle.vy *= particle.friction;

        // Fade out over time
        particle.alpha = Math.max(0, 1 - elapsed / 2500);

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Remove particles that are off screen or faded out
        if (particle.alpha <= 0 || particle.y > canvas.height + 50) {
          particlesRef.current.splice(index, 1);
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      aria-hidden="true"
    />
  );
}
