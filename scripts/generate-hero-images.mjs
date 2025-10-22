import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const projectRoot = path.resolve(process.cwd());
const publicDir = path.join(projectRoot, 'public');
const heroSource = path.join(publicDir, 'heroimage.png');
const bkSource = path.join(publicDir, 'BK.png');

async function ensureSourceExists() {
  const missing = [];
  for (const p of [heroSource, bkSource]) {
    try {
      await fs.access(p);
    } catch {
      missing.push(p);
    }
  }
  if (missing.length) {
    throw new Error(`Missing required source image(s):\n${missing.join('\n')}`);
  }
}

async function generateHeroImages() {
  const base = sharp(heroSource).withMetadata().toColourspace('srgb');

  // PNG icon sizes for favicon/app icons - no longer generated (BK icons are used)
  const iconPngTargets = [];

  await Promise.all(
    iconPngTargets.map(({ w, h, name }) =>
      base
        .clone()
        .resize(w, h, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toFile(path.join(publicDir, name))
    )
  );

  // Social preview images (anchor to top to avoid cutting off head)
  const socialTargets = [
    { w: 600, h: 315, name: 'heroImage-600x315.png' },
    { w: 1200, h: 630, name: 'heroImage-1200x630.png' }
  ];

  await Promise.all(
    socialTargets.map(({ w, h, name }) =>
      base
        .clone()
        .resize(w, h, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png({ compressionLevel: 9, adaptiveFiltering: true })
        .toFile(path.join(publicDir, name))
    )
  );

  // AVIF & WEBP full-size responsive exports
  const responsiveWidths = [512, 768, 1024, 1536, 2048];
  await Promise.all([
    // single full-size conversions for legacy references
    base
      .clone()
      .ensureAlpha()
      .toFormat('webp', { quality: 90, alphaQuality: 100 })
      .toFile(path.join(publicDir, 'heroimage.webp')),
    base
      .clone()
      .ensureAlpha()
      .toFormat('avif', { quality: 70, chromaSubsampling: '4:4:4', effort: 4 })
      .toFile(path.join(publicDir, 'heroimage.avif')),
    // responsive variants
    ...responsiveWidths.map((w) =>
      base
        .clone()
        .resize(w, null, { fit: 'inside', background: { r: 0, g: 0, b: 0, alpha: 0 }, kernel: 'mitchell' })
        .toFormat('webp', { quality: 90, alphaQuality: 100 })
        .toFile(path.join(publicDir, `heroimage-${w}.webp`))
    ),
    ...responsiveWidths.map((w) =>
      base
        .clone()
        .resize(w, null, { fit: 'inside', background: { r: 0, g: 0, b: 0, alpha: 0 }, kernel: 'mitchell' })
        .ensureAlpha()
        .toFormat('avif', { quality: 70, chromaSubsampling: '4:4:4', effort: 4 })
        .toFile(path.join(publicDir, `heroimage-${w}.avif`))
    )
  ]);

  // No hero .ico generated; BK favicon is the canonical icon set
}

async function run() {
  await ensureSourceExists();
  const fixAvifOnly = process.argv.includes('--fix-avif');
  if (fixAvifOnly) {
    await refineHeroAvif([512, 768]);
    console.log('Refined AVIFs generated for 512 and 768 widths');
    return;
  }
  await generateHeroImages();
  await generateBkIcons();
  await writeFaviconsFromBk();
  await generatePortfolioImages();
  console.log('Hero and BK images generated in /public');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});



// BK ICONS
async function generateBkIcons() {
  // Build alpha mask and apply as transparency using dest-in (keeps subject, removes bg)
  const maskBuffer = await sharp(bkSource)
    .greyscale()
    .threshold(12)
    .toBuffer();

  const iconPngTargets = [
    { w: 16, h: 16, name: 'bk-16x16.png' },
    { w: 32, h: 32, name: 'bk-32x32.png' },
    { w: 48, h: 48, name: 'bk-48x48.png' },
    { w: 64, h: 64, name: 'bk-64x64.png' },
    { w: 96, h: 96, name: 'bk-96x96.png' },
    { w: 180, h: 180, name: 'bk-180x180.png' },
    { w: 192, h: 192, name: 'bk-192x192.png' },
    { w: 256, h: 256, name: 'bk-256x256.png' },
    { w: 384, h: 384, name: 'bk-384x384.png' },
    { w: 512, h: 512, name: 'bk-512x512.png' }
  ];

  await Promise.all(
    iconPngTargets.map(({ w, h, name }) =>
      (async () => {
        // resize image and mask identically
        const resized = sharp(bkSource)
          .resize(w, h, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .ensureAlpha();
        const resizedMask = await sharp(maskBuffer)
          .resize(w, h, { fit: 'contain' })
          .toBuffer();
        return resized
          .composite([{ input: resizedMask, blend: 'dest-in' }])
          .toColourspace('srgb')
          .withMetadata()
          .png({ compressionLevel: 9, adaptiveFiltering: true })
          .toFile(path.join(publicDir, name));
      })()
    )
  );

  const icoBuffer = await sharp(bkSource)
    .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .ensureAlpha()
    .composite([{ input: await sharp(maskBuffer).resize(256, 256).toBuffer(), blend: 'dest-in' }])
    .png()
    .toBuffer();
  const toIco = (await import('png-to-ico')).default;
  const ico = await toIco([icoBuffer]);
  await fs.writeFile(path.join(publicDir, 'bk.ico'), ico);
}

async function writeFaviconsFromBk() {
  // Mirror BK icons to common favicon filenames used by browsers
  const fromIco = path.join(publicDir, 'bk.ico');
  const toIco = path.join(publicDir, 'favicon.ico');
  try { await fs.copyFile(fromIco, toIco); } catch {}
  try { await fs.copyFile(path.join(publicDir, 'bk-16x16.png'), path.join(publicDir, 'favicon-16x16.png')); } catch {}
  try { await fs.copyFile(path.join(publicDir, 'bk-32x32.png'), path.join(publicDir, 'favicon-32x32.png')); } catch {}
}

async function generatePortfolioImages() {
  const portfolioDir = path.join(publicDir, 'assets', 'portfolio');
  let entries = [];
  try {
    entries = await fs.readdir(portfolioDir);
  } catch {
    return; // no portfolio folder found
  }
  const imageFiles = entries.filter((f) => /\.(png|jpe?g|webp|avif)$/i.test(f));
  if (!imageFiles.length) return;

  const targets = [
    { w: 800, h: 450 },
    { w: 400, h: 225 }
  ];

  await Promise.all(
    imageFiles.flatMap((file) => {
      const inputPath = path.join(portfolioDir, file);
      const baseName = file.replace(/\.(png|jpe?g|webp|avif)$/i, '');
      return targets.flatMap(({ w, h }) => [
        sharp(inputPath)
          .ensureAlpha()
          .resize(w, h, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .png({ compressionLevel: 9, adaptiveFiltering: true })
          .toFile(path.join(portfolioDir, `${baseName}-${w}x${h}.png`)),
        sharp(inputPath)
          .ensureAlpha()
          .resize(w, h, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .toFormat('webp', { quality: 90, alphaQuality: 100 })
          .toFile(path.join(portfolioDir, `${baseName}-${w}x${h}.webp`)),
        sharp(inputPath)
          .ensureAlpha()
          .resize(w, h, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .toFormat('avif', { quality: 65, chromaSubsampling: '4:4:4', effort: 4 })
          .toFile(path.join(portfolioDir, `${baseName}-${w}x${h}.avif`))
      ]);
    })
  );
}

async function refineHeroAvif(widths) {
  const base = sharp(heroSource).withMetadata().toColourspace('srgb');
  await Promise.all(widths.map(async (w) => {
    return base
      .clone()
      .resize(w, null, { fit: 'inside', background: { r: 0, g: 0, b: 0, alpha: 0 }, kernel: 'mitchell' })
      .ensureAlpha()
      .toFormat('avif', { quality: 75, chromaSubsampling: '4:4:4', effort: 4 })
      .toFile(path.join(publicDir, `heroimage-${w}.avif`));
  }));
}
