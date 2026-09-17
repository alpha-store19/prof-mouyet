import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// ---------- minimal PNG encoder (RGBA, no external deps) ----------

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    table[n] = c;
  }
  return table;
})();

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return ~c >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, "ascii");
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([length, typeBuf, data, crc]);
}

function encodePng(width, height, rgba) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;

  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // filter: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  const idat = deflateSync(raw, { level: 9 });

  return Buffer.concat([
    sig,
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

// ---------- icon rendering ----------

const CHARCOAL = [22, 18, 12];
const GOLD = [180, 134, 58];

function roundedRectTest(x, y, size, radius) {
  const ex = Math.max(Math.abs(x - size / 2) - (size / 2 - radius), 0);
  const ey = Math.max(Math.abs(y - size / 2) - (size / 2 - radius), 0);
  return Math.sqrt(ex * ex + ey * ey) <= radius;
}

function ringTest(x, y, size) {
  const cx = size * 0.5;
  const cy = size * 0.5;
  const r = size * 0.31;
  const t = size * 0.065;
  const d = Math.abs(Math.hypot(x - cx, y - cy) - r);
  return d <= t;
}

function curvePoints(size, n = 400) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const x0 = size * 0.2;
    const y0 = size * 0.78;
    const x1 = size * 0.5;
    const y1 = size * 0.42;
    const x2 = size * 0.84;
    const y2 = size * 0.3;
    const px = (1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * x1 + t * t * x2;
    const py = (1 - t) * (1 - t) * y0 + 2 * (1 - t) * t * y1 + t * t * y2;
    pts.push([px, py]);
  }
  return pts;
}

function curveTest(x, y, pts, thickness) {
  const t = thickness / 2;
  for (let i = 0; i < pts.length; i++) {
    const dx = x - pts[i][0];
    const dy = y - pts[i][1];
    if (dx * dx + dy * dy <= t * t) return true;
  }
  return false;
}

function renderIcon(size) {
  const pixels = Buffer.alloc(size * size * 4);
  const half = 0.25; // supersampling inverse factor (2x2)
  const radius = size * 0.22;
  const pts = curvePoints(size);
  const curveHalf = size * 0.018;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let inside = 0;
      let goldHit = 0;
      for (let sy = 0; sy < 2; sy++) {
        for (let sx = 0; sx < 2; sx++) {
          const px = x + 0.25 + sx * half;
          const py = y + 0.25 + sy * half;
          if (!roundedRectTest(px, py, size, radius)) continue;
          inside++;
          if (ringTest(px, py, size) || curveTest(px, py, pts, curveHalf)) {
            goldHit++;
          }
        }
      }
      const idx = (y * size + x) * 4;
      const alpha = Math.round((inside / 4) * 255);
      if (alpha === 0) {
        pixels[idx + 3] = 0;
        continue;
      }
      const goldRatio = goldHit / inside;
      const r = Math.round(CHARCOAL[0] * (1 - goldRatio) + GOLD[0] * goldRatio);
      const g = Math.round(CHARCOAL[1] * (1 - goldRatio) + GOLD[1] * goldRatio);
      const b = Math.round(CHARCOAL[2] * (1 - goldRatio) + GOLD[2] * goldRatio);
      pixels[idx] = r;
      pixels[idx + 1] = g;
      pixels[idx + 2] = b;
      pixels[idx + 3] = alpha;
    }
  }
  return encodePng(size, size, pixels);
}

const targets = [
  { path: join(root, "src/app/icon.png"), size: 64 },
  { path: join(root, "src/app/apple-icon.png"), size: 180 },
  { path: join(root, "public/icon-192.png"), size: 192 },
  { path: join(root, "public/icon-512.png"), size: 512 },
];

for (const target of targets) {
  mkdirSync(dirname(target.path), { recursive: true });
  writeFileSync(target.path, renderIcon(target.size));
  console.log(`generated ${target.path} (${target.size}x${target.size})`);
}

// ---------- social share card (1200x630, textless to stay glyph-safe) ----------

function mix(a, b, t) {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ];
}

function landscapeCurve(width, height, n = 600) {
  const pts = [];
  const x0 = width * 0.06;
  const y0 = height * 0.84;
  const x1 = width * 0.32;
  const y1 = height * 0.26;
  const x2 = width * 0.56;
  const y2 = height * 0.62;
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const px = (1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * x1 + t * t * x2;
    const py = (1 - t) * (1 - t) * y0 + 2 * (1 - t) * t * y1 + t * t * y2;
    pts.push([px, py]);
  }
  return pts;
}

function renderOg(width, height) {
  const steps = 2;
  const pixels = Buffer.alloc(width * height * 4);
  const cx = width * 0.74;
  const cy = height * 0.5;
  const ringR = height * 0.3;
  const ringT = height * 0.02;
  const glowR = height * 1.05;
  const glowA = 0.22;
  const pts = landscapeCurve(width, height);
  const curveT = height * 0.026;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let r = 0;
      let g = 0;
      let b = 0;
      for (let sy = 0; sy < steps; sy++) {
        for (let sx = 0; sx < steps; sx++) {
          const px = x + (sx + 0.5) / steps;
          const py = y + (sy + 0.5) / steps;
          const d = Math.hypot(px - cx, py - cy);
          const glow = Math.max(0, 1 - d / glowR) * glowA;
          let col = mix(CHARCOAL, GOLD, glow);
          if (Math.abs(d - ringR) <= ringT || curveTest(px, py, pts, curveT)) {
            col = GOLD;
          }
          r += col[0];
          g += col[1];
          b += col[2];
        }
      }
      const n = steps * steps;
      const idx = (y * width + x) * 4;
      pixels[idx] = Math.round(r / n);
      pixels[idx + 1] = Math.round(g / n);
      pixels[idx + 2] = Math.round(b / n);
      pixels[idx + 3] = 255;
    }
  }
  return encodePng(width, height, pixels);
}

const ogPath = join(root, "public/og.png");
writeFileSync(ogPath, renderOg(1200, 630));
console.log(`generated ${ogPath} (1200x630)`);