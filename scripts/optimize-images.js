import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function ensureDirectoryExists(filePath) {
  const directory = path.dirname(filePath);
  try {
    await fs.access(directory);
  } catch {
    await fs.mkdir(directory, { recursive: true });
  }
}

async function optimizeHeroImage() {
  const rootDir = path.resolve(__dirname, '..');
  const inputPath = path.join(rootDir, 'src', 'assets', 'heroImage.png');
  const outputWebP = path.join(rootDir, 'src', 'assets', 'heroImage.webp');
  const outputAvif = path.join(rootDir, 'src', 'assets', 'heroImage.avif');

  try {
    // Ensure the assets directory exists
    await ensureDirectoryExists(outputWebP);

    // Create WebP version
    await sharp(inputPath)
      .webp({ quality: 80 })
      .resize({
        width: 1000,
        height: 1000,
        fit: 'cover',
        position: 'center'
      })
      .toFile(outputWebP);

    // Create AVIF version
    await sharp(inputPath)
      .avif({ quality: 80 })
      .resize({
        width: 1000,
        height: 1000,
        fit: 'cover',
        position: 'center'
      })
      .toFile(outputAvif);

    console.log('✅ Hero image optimized successfully!');
  } catch (error) {
    console.error('Error optimizing hero image:', error);
    console.error('Make sure heroImage.png exists in src/assets directory');
    process.exit(1);
  }
}

optimizeHeroImage(); 