/**
 * Seeded random number generator (Mulberry32)
 * Ensures deterministic procedural drawings between renders
 */
export function createRNG(seed = 123456789) {
  let s = seed >>> 0;
  return function () {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type Point = [number, number];

/**
 * Subdivides each segment every ~step units and jitters each point ±jitter
 * Perfect for straight lines that look hand-drawn with crisp corners
 */
export function lines(
  points: Point[],
  jitter = 0.5,
  step = 26,
  rng = createRNG(42)
): string {
  if (points.length < 2) return "";
  let d = `M ${points[0][0].toFixed(2)} ${points[0][1].toFixed(2)}`;

  for (let i = 0; i < points.length - 1; i++) {
    const p1 = points[i];
    const p2 = points[i + 1];
    const dx = p2[0] - p1[0];
    const dy = p2[1] - p1[1];
    const dist = Math.hypot(dx, dy);
    const steps = Math.max(1, Math.round(dist / step));

    for (let s = 1; s <= steps; s++) {
      const t = s / steps;
      let x = p1[0] + dx * t;
      let y = p1[1] + dy * t;
      if (s < steps) {
        x += (rng() - 0.5) * jitter * 2;
        y += (rng() - 0.5) * jitter * 2;
      }
      d += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
    }
  }

  return d;
}

/**
 * Quadratic smoothing through midpoints with jitter for organic curves
 */
export function curve(
  points: Point[],
  jitter = 0.6,
  rng = createRNG(88)
): string {
  if (points.length < 2) return "";
  const pts = points.map(([x, y]) => [
    x + (rng() - 0.5) * jitter * 2,
    y + (rng() - 0.5) * jitter * 2,
  ]);

  let d = `M ${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)}`;
  if (pts.length === 2) {
    return `${d} L ${pts[1][0].toFixed(2)} ${pts[1][1].toFixed(2)}`;
  }

  for (let i = 1; i < pts.length - 1; i++) {
    const xc = (pts[i][0] + pts[i + 1][0]) / 2;
    const yc = (pts[i][1] + pts[i + 1][1]) / 2;
    d += ` Q ${pts[i][0].toFixed(2)} ${pts[i][1].toFixed(2)}, ${xc.toFixed(2)} ${yc.toFixed(2)}`;
  }

  const last = pts[pts.length - 1];
  d += ` L ${last[0].toFixed(2)} ${last[1].toFixed(2)}`;
  return d;
}

/**
 * Almond-shaped leaf with slight control-point jitter
 * M base Q (mid + perp) tip Q (mid - perp) base Z
 */
export function leaf(
  x: number,
  y: number,
  length: number,
  angleRad: number,
  widthRatio = 0.3,
  rng = createRNG(101)
): string {
  const cos = Math.cos(angleRad);
  const sin = Math.sin(angleRad);

  const tipX = x + cos * length;
  const tipY = y + sin * length;

  const midX = x + cos * (length * 0.5);
  const midY = y + sin * (length * 0.5);

  const perpX = -sin * (length * widthRatio);
  const perpY = cos * (length * widthRatio);

  const cp1X = midX + perpX + (rng() - 0.5) * 1.2;
  const cp1Y = midY + perpY + (rng() - 0.5) * 1.2;

  const cp2X = midX - perpX + (rng() - 0.5) * 1.2;
  const cp2Y = midY - perpY + (rng() - 0.5) * 1.2;

  return `M ${x.toFixed(2)} ${y.toFixed(2)} Q ${cp1X.toFixed(2)} ${cp1Y.toFixed(2)}, ${tipX.toFixed(2)} ${tipY.toFixed(2)} Q ${cp2X.toFixed(2)} ${cp2Y.toFixed(2)}, ${x.toFixed(2)} ${y.toFixed(2)} Z`;
}

export interface EllipseBlob {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
}

/**
 * Tree canopy: scatters `count` small leaf outlines inside ellipse blobs
 */
export function canopy(
  blobs: EllipseBlob[],
  count: number,
  rng = createRNG(777)
): string[] {
  const leaves: string[] = [];

  for (let i = 0; i < count; i++) {
    const blob = blobs[Math.floor(rng() * blobs.length)];
    const r = Math.sqrt(rng());
    const theta = rng() * Math.PI * 2;
    const x = blob.cx + r * blob.rx * Math.cos(theta);
    const y = blob.cy + r * blob.ry * Math.sin(theta);
    const len = 11 + rng() * 8;
    const angle = rng() * Math.PI * 2;
    leaves.push(leaf(x, y, len, angle, 0.32, rng));
  }

  return leaves;
}

/**
 * Mangalore tile scallops row
 */
export function scallopRow(
  startX: number,
  endX: number,
  y: number,
  scallopWidth = 15,
  bulge = 5.5
): string {
  let d = `M ${startX.toFixed(2)} ${y.toFixed(2)}`;
  let curX = startX;

  while (curX < endX) {
    const nextX = Math.min(curX + scallopWidth, endX);
    const midX = (curX + nextX) / 2;
    const cpY = y + bulge;
    d += ` Q ${midX.toFixed(2)} ${cpY.toFixed(2)}, ${nextX.toFixed(2)} ${y.toFixed(2)}`;
    curX = nextX;
  }

  return d;
}

/**
 * Sun with 12 short rays
 */
export function sun(
  cx: number,
  cy: number,
  radius = 24,
  rayLen = 8,
  rayGap = 6
): { circle: { cx: number; cy: number; r: number }; rays: Point[][] } {
  const rays: Point[][] = [];
  for (let i = 0; i < 12; i++) {
    const angle = (i * Math.PI * 2) / 12;
    const r1 = radius + rayGap;
    const r2 = r1 + rayLen;
    rays.push([
      [cx + Math.cos(angle) * r1, cy + Math.sin(angle) * r1],
      [cx + Math.cos(angle) * r2, cy + Math.sin(angle) * r2],
    ]);
  }
  return { circle: { cx, cy, r: radius }, rays };
}

/**
 * Bird path (two small connected arcs)
 */
export function bird(cx: number, cy: number, span = 14): string {
  const half = span / 2;
  return `M ${(cx - span).toFixed(2)} ${cy.toFixed(2)} Q ${(cx - half).toFixed(2)} ${(cy - 5).toFixed(2)}, ${cx.toFixed(2)} ${cy.toFixed(2)} Q ${(cx + half).toFixed(2)} ${(cy - 5).toFixed(2)}, ${(cx + span).toFixed(2)} ${cy.toFixed(2)}`;
}

/**
 * Grass tuft
 */
export function grassTuft(x: number, y: number): string {
  return `M ${(x - 4).toFixed(2)} ${y.toFixed(2)} Q ${(x - 6).toFixed(2)} ${(y - 10).toFixed(2)}, ${(x - 7).toFixed(2)} ${(y - 12).toFixed(2)} M ${x.toFixed(2)} ${y.toFixed(2)} L ${x.toFixed(2)} ${(y - 15).toFixed(2)} M ${(x + 4).toFixed(2)} ${y.toFixed(2)} Q ${(x + 6).toFixed(2)} ${(y - 9).toFixed(2)}, ${(x + 8).toFixed(2)} ${(y - 11).toFixed(2)}`;
}
