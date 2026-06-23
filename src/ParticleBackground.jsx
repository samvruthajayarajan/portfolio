import React, { useRef, useEffect } from 'react';

// Module-level configuration
const PARTICLE_COUNT = 20;
const CONNECTION_DISTANCE = 120;
const SPEED_MIN = 0.08;
const SPEED_MAX = 0.25;
const MOUSE_RADIUS = 140;

const COLORS = [
  [99, 102, 241],   // Indigo
  [139, 92, 246],   // Violet
  [168, 85, 247],   // Purple
  [79, 70, 229],    // Deep indigo
  [124, 58, 237],   // Vivid purple
  [59, 130, 246],   // Blue
];

function makeParticle(w, h) {
  const c = COLORS[Math.floor(Math.random() * COLORS.length)];
  const angle = Math.random() * Math.PI * 2;
  const speed = SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN);
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    r: 1.2 + Math.random() * 1.8,
    color: c,
    alpha: 0.5 + Math.random() * 0.4,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.012 + Math.random() * 0.018,
  };
}

function buildParticles(w, h) {
  const count = Math.min(PARTICLE_COUNT, Math.floor((w * h) / 10000));
  const pairs = Math.floor(count / 2);
  const arr = [];
  for (let i = 0; i < pairs; i++) {
    const p = makeParticle(w / 2, h);
    arr.push({ ...p });
    arr.push({ ...p, x: w - p.x, vx: -p.vx, pulse: p.pulse + Math.PI });
  }
  if (count % 2 !== 0) arr.push(makeParticle(w, h));
  return arr;
}

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const stateRef = useRef({ particles: [], raf: null, mouse: { x: -9999, y: -9999 }, time: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const state = stateRef.current;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      state.particles = buildParticles(w, h);
    }

    resize();

    function onMouseMove(e) { state.mouse.x = e.clientX; state.mouse.y = e.clientY; }
    function onMouseLeave() { state.mouse.x = -9999; state.mouse.y = -9999; }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    function draw() {
      const W = window.innerWidth;
      const H = window.innerHeight;
      state.time++;

      ctx.clearRect(0, 0, W, H);

      // Dark background
      ctx.fillStyle = '#030014';
      ctx.fillRect(0, 0, W, H);

      const pts = state.particles;

      // Update
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0)  { p.x = 0;  p.vx =  Math.abs(p.vx); }
        if (p.x > W)  { p.x = W;  p.vx = -Math.abs(p.vx); }
        if (p.y < 0)  { p.y = 0;  p.vy =  Math.abs(p.vy); }
        if (p.y > H)  { p.y = H;  p.vy = -Math.abs(p.vy); }

        // Mouse repulsion
        const mdx = p.x - state.mouse.x;
        const mdy = p.y - state.mouse.y;
        const md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < MOUSE_RADIUS && md > 0) {
          const f = ((MOUSE_RADIUS - md) / MOUSE_RADIUS) * 0.018;
          p.vx += (mdx / md) * f;
          p.vy += (mdy / md) * f;
        }

        // Speed cap
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > SPEED_MAX * 1.5) { p.vx = (p.vx / spd) * SPEED_MAX * 1.5; p.vy = (p.vy / spd) * SPEED_MAX * 1.5; }
      }

      // Draw lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECTION_DISTANCE) {
            // Calculate distance from mouse to line
            const mx = state.mouse.x;
            const my = state.mouse.y;
            const lineX = (a.x + b.x) / 2;
            const lineY = (a.y + b.y) / 2;
            const distToMouse = Math.sqrt((mx - lineX) * (mx - lineX) + (my - lineY) * (my - lineY));
            const hoverDistance = 100;
            const isNearMouse = distToMouse < hoverDistance;
            
            // Adjust opacity and color based on mouse proximity
            let op = (1 - d / CONNECTION_DISTANCE) * 0.25;
            if (isNearMouse) {
              op = Math.min(0.7, op + (1 - distToMouse / hoverDistance) * 0.4);
            }
            
            const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            if (isNearMouse) {
              // Brighter cyan/white color on hover
              g.addColorStop(0, `rgba(100, 255, 218, ${op})`);
              g.addColorStop(1, `rgba(147, 197, 253, ${op})`);
            } else {
              g.addColorStop(0, `rgba(${a.color[0]},${a.color[1]},${a.color[2]},${op})`);
              g.addColorStop(1, `rgba(${b.color[0]},${b.color[1]},${b.color[2]},${op})`);
            }
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = g;
            ctx.lineWidth = isNearMouse ? 2 : 1;
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.pulse += p.pulseSpeed;
        const pulse = Math.sin(p.pulse);
        const alpha = p.alpha + pulse * 0.12;
        const r = p.r + pulse * 0.35;
        const [cr, cg, cb] = p.color;

        // Glow halo
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4);
        glow.addColorStop(0,   `rgba(${cr},${cg},${cb},${alpha * 0.12})`);
        glow.addColorStop(0.5, `rgba(${cr},${cg},${cb},${alpha * 0.03})`);
        glow.addColorStop(1,   `rgba(${cr},${cg},${cb},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core
        const core = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        core.addColorStop(0,   `rgba(255,255,255,${alpha * 0.7})`);
        core.addColorStop(0.5, `rgba(${cr},${cg},${cb},${alpha * 0.7})`);
        core.addColorStop(1,   `rgba(${cr},${cg},${cb},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = core;
        ctx.fill();
      }

      state.raf = requestAnimationFrame(draw);
    }

    state.raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(state.raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particle-background"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticleBackground;
