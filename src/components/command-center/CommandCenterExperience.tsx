'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState, type MouseEvent } from 'react';
import { Bolt } from 'lucide-react';
import styles from './CommandCenterExperience.module.css';

type CommandCenterExperienceProps = {
  className?: string;
};

type MistParticle = {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  color: string;
};

const decryptionChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*<>[]{}';

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
    radius: Math.random() * 300 + 150,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    color: Math.random() > 0.5 ? 'rgba(0, 240, 255, 0.025)' : 'rgba(0, 100, 255, 0.015)',
  };
}

export default function CommandCenterExperience({ className }: CommandCenterExperienceProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [decryptedText, setDecryptedText] = useState('Processing...');
  const [buttonTransform, setButtonTransform] = useState('translate(0px, 0px)');
  const [snapBack, setSnapBack] = useState(true);
  const finalDecryptedText = 'Dictate the AI.';

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setDecryptedText(finalDecryptedText);
      return;
    }

    const startTimeout = window.setTimeout(() => {
      let iteration = 0;
      const interval = window.setInterval(() => {
        const nextText = finalDecryptedText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return finalDecryptedText[index];
            }

            return decryptionChars[Math.floor(Math.random() * decryptionChars.length)];
          })
          .join('');

        setDecryptedText(nextText);
        iteration += 1 / 3;

        if (iteration >= finalDecryptedText.length) {
          window.clearInterval(interval);
          setDecryptedText(finalDecryptedText);
        }
      }, 30);
    }, 600);

    return () => {
      window.clearTimeout(startTimeout);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let animationFrameId = 0;
    let particles: MistParticle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: 30 }, () => createParticle(canvas.width, canvas.height));
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -particle.radius) particle.x = canvas.width + particle.radius;
        if (particle.x > canvas.width + particle.radius) particle.x = -particle.radius;
        if (particle.y < -particle.radius) particle.y = canvas.height + particle.radius;
        if (particle.y > canvas.height + particle.radius) particle.y = -particle.radius;

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius
        );

        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = window.requestAnimationFrame(drawFrame);
    };

    const renderStillFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const particle of particles) {
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    resizeCanvas();

    if (mediaQuery.matches) {
      renderStillFrame();
    } else {
      drawFrame();
    }

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const handleMagneticMove = (event: MouseEvent<HTMLDivElement>) => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    setSnapBack(false);
    setButtonTransform(`translate(${x * 0.3}px, ${y * 0.3}px)`);
  };

  const handleMagneticLeave = () => {
    setSnapBack(true);
    setButtonTransform('translate(0px, 0px)');
  };

  const tickerContent = useMemo(() => [...tickerMessages, ...tickerMessages], []);

  return (
    <div className={`${styles.shell} ${className || ''}`}>
      <style jsx global>{`
        .animated-bg {
          animation: none !important;
          background: #030508 !important;
        }

        .floating-elements {
          display: none !important;
        }
      `}</style>

      <canvas ref={canvasRef} className={styles.mistCanvas} />

      <div className={styles.tickerWrap} aria-live="polite">
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

      <div className={styles.uiLayer}>
        <div className={styles.content}>
          <nav className={styles.nav}>
            <div className={styles.brandGroup}>
              <div className={styles.brandMark}>
                <div className={styles.brandMarkPulse} />
                <Bolt className="w-6 h-6 text-[#00F0FF]" aria-hidden="true" />
              </div>
              <div className={styles.brandLabel}>
                TRUE RANK <span className={styles.glowText}>DIGITAL</span>
              </div>
            </div>
            <Link href="/support" className={styles.portalBtn}>
              Client_Portal
            </Link>
          </nav>

          <main className={styles.hero}>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              Empire-Level Orchestration Active
            </div>

            <h1 className={styles.heading}>
              Stop Chasing Clicks.
              <br />
              <span className={`${styles.headingAccent} ${styles.glowText}`}>{decryptedText}</span>
            </h1>

            <p className={styles.subcopy}>
              Archaic search marketing is dead. True Rank Digital deploys proprietary agentic
              infrastructure that hardcodes your brand into the core logic of generative engines.
              <strong>
                {' '}
                We engineer the foundational data that forces AI to choose you as the undisputed
                authority.
              </strong>
            </p>

            <div className={styles.ctaRow}>
              <div
                className={styles.magneticWrap}
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
              >
                <Link
                  href="/contact"
                  className={styles.btnLethal}
                  style={{
                    transform: buttonTransform,
                    transition: snapBack
                      ? 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease, background 0.3s ease'
                      : 'none',
                  }}
                >
                  Initiate Entity Audit
                </Link>
              </div>

              <Link href="/services/ai-seo" className={styles.btnSecondary}>
                <span className="mr-2 text-[#00F0FF] font-black">[]</span>
                Install Infrastructure
              </Link>
            </div>
          </main>

          <section className={styles.statsGrid} aria-label="Command center outcomes">
            <div>
              <div className={`${styles.statValue} ${styles.glowText} text-[#00F0FF]`}>98%</div>
              <div className={styles.statLabel}>AI Visibility</div>
            </div>
            <div>
              <div className={`${styles.statValue} text-white`}>24/7</div>
              <div className={styles.statLabel}>Entity Dominance</div>
            </div>
            <div>
              <div className={`${styles.statValue} ${styles.glowText} text-[#00F0FF]`}>Active</div>
              <div className={styles.statLabel}>Multi-Agent Workflows</div>
            </div>
            <div>
              <div className={`${styles.statValue} text-white`}>Zero</div>
              <div className={styles.statLabel}>Market Erosion</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
