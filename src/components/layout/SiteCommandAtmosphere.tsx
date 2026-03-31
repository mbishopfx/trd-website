'use client';

import { useEffect, useMemo, useRef } from 'react';
import styles from './SiteCommandAtmosphere.module.css';

type MistParticle = {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  color: string;
};

const tickerMessages = [
  '[JARVIS_AGENT]: Initializing local search anomaly scan... RESOLVED',
  '[ENTITY_SYNC]: Propagating knowledge graph signals... ACTIVE',
  '[COMPETITOR_AUDIT]: Identifying market vulnerabilities... EXECUTING',
  '[RAG_INJECTION]: Overwriting LLM context confines... SUCCESS',
  '[ORCHESTRATION]: Shielding brand entity against multi-agent erosion... SECURE',
];

function createParticle(width: number, height: number): MistParticle {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 180 + 120,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    color: Math.random() > 0.5 ? 'rgba(0, 240, 255, 0.025)' : 'rgba(0, 100, 255, 0.015)',
  };
}

type SiteCommandAtmosphereProps = {
  disableMist?: boolean;
};

export default function SiteCommandAtmosphere({ disableMist = false }: SiteCommandAtmosphereProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const tickerContent = useMemo(() => [...tickerMessages, ...tickerMessages], []);

  useEffect(() => {
    if (disableMist) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    let animationFrameId = 0;
    let particles: MistParticle[] = [];
    let lastFrameTime = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const particleCount = mobileQuery.matches ? 10 : 18;
      particles = Array.from({ length: particleCount }, () => createParticle(canvas.width, canvas.height));
    };

    const drawFrame = (timestamp: number) => {
      if (document.hidden) {
        animationFrameId = window.requestAnimationFrame(drawFrame);
        return;
      }

      if (timestamp - lastFrameTime < 33) {
        animationFrameId = window.requestAnimationFrame(drawFrame);
        return;
      }
      lastFrameTime = timestamp;

      context.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -particle.radius) particle.x = canvas.width + particle.radius;
        if (particle.x > canvas.width + particle.radius) particle.x = -particle.radius;
        if (particle.y < -particle.radius) particle.y = canvas.height + particle.radius;
        if (particle.y > canvas.height + particle.radius) particle.y = -particle.radius;

        const gradient = context.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius
        );

        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        context.beginPath();
        context.fillStyle = gradient;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }

      animationFrameId = window.requestAnimationFrame(drawFrame);
    };

    const drawStaticFrame = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (const particle of particles) {
        const gradient = context.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        context.beginPath();
        context.fillStyle = gradient;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }
    };

    resizeCanvas();

    if (mediaQuery.matches) {
      drawStaticFrame();
    } else {
      animationFrameId = window.requestAnimationFrame(drawFrame);
    }

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [disableMist]);

  return (
    <div className={styles.atmosphere} aria-hidden="true">
      {!disableMist && <canvas ref={canvasRef} className={styles.mistCanvas} />}

      <div className={styles.tickerWrap}>
        <div className={styles.tickerTrack}>
          {tickerContent.map((message, index) => (
            <span key={`${message}-${index}`} className={styles.tickerItem}>
              <span className={styles.tickerLead}>&gt;</span>
              <span>{message.replace(/(RESOLVED|ACTIVE|EXECUTING|SUCCESS|SECURE)/g, '')}</span>
              <span className={styles.tickerStatus}>
                {message.match(/(RESOLVED|ACTIVE|EXECUTING|SUCCESS|SECURE)/)?.[0] ?? ''}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
