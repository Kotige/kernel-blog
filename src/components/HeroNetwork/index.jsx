import { useEffect, useRef } from "react";

/* =========================
   CONFIG
========================= */

const MAX_DISTANCE = 140;
const ANCHOR_DISTANCE = 180;
const CELL_SIZE = MAX_DISTANCE;

const LAYERS = [
  { count: 140, speed: 0.15, size: [1.2, 1.8], alpha: 0.15 },
  { count: 90, speed: 0.10, size: [1.6, 2.4], alpha: 0.25 },
  { count: 50, speed: 0.06, size: [2.2, 3.2], alpha: 0.35 },
];

const COLOR = "110,134,214";

/* =========================
   HELPERS
========================= */

function getDensityFactor() {
  if (typeof window === "undefined") return 1;
  return window.innerWidth < 768 ? 0.35 : 1;
}

/* =========================
   PARTICLE
========================= */

class Particle {
  constructor(layer, width, height, id) {
    this.layer = layer;
    this.id = id;
    this.reset(width, height);
  }

  reset(width, height) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;

    const angle = Math.random() * Math.PI * 2;
    const speed = this.layer.speed * (0.6 + Math.random());

    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed;

    const [min, max] = this.layer.size;
    this.baseRadius = min + Math.random() * (max - min);

    this.phase = Math.random() * Math.PI * 2;
  }

  update(width, height, t) {
    const noise = Math.sin(t * 0.001 + this.phase) * 0.12;

    this.x += this.vx + noise;
    this.y += this.vy + noise;

    if (this.x < 0) this.x = width;
    if (this.x > width) this.x = 0;
    if (this.y < 0) this.y = height;
    if (this.y > height) this.y = 0;
  }

  draw(ctx, t) {
    const r =
      this.baseRadius +
      Math.sin(t * 0.002 + this.phase) * 0.25;

    ctx.beginPath();
    ctx.fillStyle = `rgba(${COLOR},${this.layer.alpha})`;
    ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
    ctx.fill();
  }
}

/* =========================
   ANCHOR
========================= */

class Anchor {
  constructor(width, height) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;

    this.vx = (Math.random() - 0.5) * 0.05;
    this.vy = (Math.random() - 0.5) * 0.05;

    this.r = 3.2 + Math.random() * 1.8;
  }

  update(width, height) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }
}

/* =========================
   SPATIAL GRID
========================= */

class SpatialGrid {
  constructor(cellSize) {
    this.cellSize = cellSize;
    this.map = new Map();
  }

  clear() {
    this.map.clear();
  }

  key(x, y) {
    return x * 10000 + y;
  }

  insert(p) {
    const cx = (p.x / this.cellSize) | 0;
    const cy = (p.y / this.cellSize) | 0;

    const k = this.key(cx, cy);

    let bucket = this.map.get(k);
    if (!bucket) this.map.set(k, (bucket = []));

    bucket.push(p);
  }

  query(cx, cy) {
    const result = [];

    for (let y = -1; y <= 1; y++) {
      for (let x = -1; x <= 1; x++) {
        const bucket = this.map.get(
          this.key(cx + x, cy + y)
        );
        if (bucket) result.push(...bucket);
      }
    }

    return result;
  }
}

/* =========================
   COMPONENT
========================= */

export default function HeroNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf;

    const mouse = { x: 0, y: 0, active: false };

    const grid = new SpatialGrid(CELL_SIZE);

    let particles = [];
    let anchors = [];

    function resize() {
      dpr = window.devicePixelRatio || 1;

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = getDensityFactor();

      /* particles */
      particles = [];
      let id = 0;

      for (const layer of LAYERS) {
        const count = Math.floor(layer.count * density);

        for (let i = 0; i < count; i++) {
          particles.push(
            new Particle(layer, width, height, id++)
          );
        }
      }

      /* anchors */
      const anchorCount =
        window.innerWidth < 768 ? 4 : 35;

      anchors = [];

      for (let i = 0; i < anchorCount; i++) {
        anchors.push(new Anchor(width, height));
      }
    }

    function tick(t) {
      ctx.clearRect(0, 0, width, height);

      /* glow mouse */
      if (mouse.active) {
        const g = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          220
        );

        g.addColorStop(0, "rgba(110,134,214,0.10)");
        g.addColorStop(0.5, "rgba(110,134,214,0.04)");
        g.addColorStop(1, "rgba(110,134,214,0)");

        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);
      }

      grid.clear();

      for (const p of particles) {
        p.update(width, height, t);
        grid.insert(p);
      }

      for (const a of anchors) {
        a.update(width, height);
      }

      /* connections particles */
      for (const p of particles) {
        const cx = (p.x / CELL_SIZE) | 0;
        const cy = (p.y / CELL_SIZE) | 0;

        const near = grid.query(cx, cy);

        for (const q of near) {
          if (q.id <= p.id) continue;

          const dx = p.x - q.x;
          const dy = p.y - q.y;

          const d2 = dx * dx + dy * dy;

          if (d2 > MAX_DISTANCE * MAX_DISTANCE) continue;

          const a =
            (1 - Math.sqrt(d2) / MAX_DISTANCE) * 0.2;

          ctx.beginPath();
          ctx.strokeStyle = `rgba(${COLOR},${a})`;
          ctx.lineWidth = 1;

          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }

        /* connections anchors */
        for (const a of anchors) {
          const dx = p.x - a.x;
          const dy = p.y - a.y;

          const d2 = dx * dx + dy * dy;

          if (d2 < ANCHOR_DISTANCE * ANCHOR_DISTANCE) {
            const alpha =
              (1 - Math.sqrt(d2) / ANCHOR_DISTANCE) * 0.25;

            ctx.beginPath();
            ctx.strokeStyle = `rgba(${COLOR},${alpha})`;
            ctx.lineWidth = 1;

            ctx.moveTo(p.x, p.y);
            ctx.lineTo(a.x, a.y);
            ctx.stroke();
          }
        }
      }

      for (const a of anchors) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${COLOR},0.55)`;
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const p of particles) {
        p.draw(ctx, t);
      }

      raf = requestAnimationFrame(tick);
    }

    function onMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }

    function onLeave() {
      mouse.active = false;
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    resize();
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);

      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}