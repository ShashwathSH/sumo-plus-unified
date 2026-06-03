import { useEffect, useRef } from "react";

/** Animated road network with glowing vehicle particles. */
export function TrafficNetwork() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
    };
    resize();
    window.addEventListener("resize", resize);

    type Road = { x1: number; y1: number; x2: number; y2: number };
    type Vehicle = { road: number; t: number; speed: number; color: string };

    const buildRoads = (): Road[] => {
      const w = canvas.width;
      const h = canvas.height;
      const roads: Road[] = [];
      const cols = 6;
      const rows = 5;
      for (let i = 1; i < cols; i++) {
        const x = (w / cols) * i;
        roads.push({ x1: x, y1: 0, x2: x, y2: h });
      }
      for (let i = 1; i < rows; i++) {
        const y = (h / rows) * i;
        roads.push({ x1: 0, y1: y, x2: w, y2: y });
      }
      // diagonals
      roads.push({ x1: 0, y1: 0, x2: w, y2: h });
      roads.push({ x1: w, y1: 0, x2: 0, y2: h });
      return roads;
    };

    let roads = buildRoads();
    const colors = ["#22d3ee", "#60a5fa", "#38bdf8", "#7dd3fc"];
    const vehicles: Vehicle[] = Array.from({ length: 80 }, () => ({
      road: Math.floor(Math.random() * roads.length),
      t: Math.random(),
      speed: 0.0008 + Math.random() * 0.0018,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    const onResize = () => {
      resize();
      roads = buildRoads();
    };
    window.addEventListener("resize", onResize);

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // roads
      ctx.lineWidth = 1 * dpr;
      ctx.strokeStyle = "rgba(125,211,252,0.10)";
      roads.forEach((r) => {
        ctx.beginPath();
        ctx.moveTo(r.x1, r.y1);
        ctx.lineTo(r.x2, r.y2);
        ctx.stroke();
      });
      // intersections
      const intersections: [number, number][] = [];
      const w = canvas.width;
      const h = canvas.height;
      for (let i = 1; i < 6; i++)
        for (let j = 1; j < 5; j++) intersections.push([(w / 6) * i, (h / 5) * j]);
      intersections.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.fillStyle = "rgba(56,189,248,0.5)";
        ctx.arc(x, y, 2 * dpr, 0, Math.PI * 2);
        ctx.fill();
      });
      // vehicles
      vehicles.forEach((v) => {
        const r = roads[v.road];
        if (!r) return;
        v.t += v.speed;
        if (v.t > 1) v.t = 0;
        const x = r.x1 + (r.x2 - r.x1) * v.t;
        const y = r.y1 + (r.y2 - r.y1) * v.t;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, 14 * dpr);
        grad.addColorStop(0, v.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, 14 * dpr, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = v.color;
        ctx.beginPath();
        ctx.arc(x, y, 1.8 * dpr, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}