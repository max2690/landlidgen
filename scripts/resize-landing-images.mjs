import sharp from "sharp";
import { readdir, unlink } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "../public/start");

const PHONE_IMAGES = ["cabinet-task", "social-status", "antifraud-qr"];
const WIDE_IMAGES = [
  "cabinet-stats",
  "task-feed",
  "level-cards",
  "live-people-hero",
  "main-hero-visual",
];

const WIDE_CUSTOM = {
  "live-people-hero": { width: 1200, height: 630 },
  "main-hero-visual": { width: 1400, height: 600 },
};

const PHONE_SIZE = { width: 540, height: 1140 }; // 9:19
const WIDE_SIZE = { width: 960, height: 540 }; // 16:9

const assetsDir = path.join(
  process.env.HOME || process.env.USERPROFILE,
  ".cursor/projects/c-Users-Moderator-Projects-lidgen/assets",
);

async function resolveInput(name) {
  const local = path.join(dir, `${name}.png`);
  const assets = path.join(assetsDir, `${name}.png`);
  const { access } = await import("fs/promises");
  for (const candidate of [local, assets]) {
    try {
      await access(candidate);
      return candidate;
    } catch {
      /* try next */
    }
  }
  return null;
}

async function processImage(name, size) {
  const input = await resolveInput(name);
  if (!input) {
    console.log(`skip ${name} — no source PNG`);
    return;
  }
  const output = path.join(dir, `${name}.webp`);

  await sharp(input)
    .resize(size.width, size.height, {
      fit: "cover",
      position: "centre",
    })
    .webp({ quality: 82 })
    .toFile(output);

  const meta = await sharp(output).metadata();
  const { size: bytes } = await import("fs").then((fs) =>
    fs.promises.stat(output),
  );

  console.log(`${name}.webp → ${meta.width}x${meta.height}, ${Math.round(bytes / 1024)} KB`);
}

for (const name of PHONE_IMAGES) {
  await processImage(name, PHONE_SIZE);
}

for (const name of WIDE_IMAGES) {
  await processImage(name, WIDE_CUSTOM[name] ?? WIDE_SIZE);
}

console.log("Done.");
