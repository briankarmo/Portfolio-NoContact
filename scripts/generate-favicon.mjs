import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { promises as fs } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const publicDir = join(rootDir, 'public');

// Source image - use BK.png (gold logo) as source for generating favicons
const sourceImage = join(publicDir, 'BK.png');

// Comprehensive favicon sizes for all platforms - optimized for BKIncLogo.png
const faviconSizes = [
  // Standard browser favicons
  { name: 'favicon-16x16.png', size: 16 },      // Small browser tabs
  { name: 'favicon-32x32.png', size: 32 },      // Standard browser tabs
  { name: 'favicon-48x48.png', size: 48 },       // High DPI tabs
  { name: 'favicon-96x96.png', size: 96 },       // Desktop bookmarks
  { name: 'favicon-128x128.png', size: 128 },    // High-res displays
  { name: 'favicon-256x256.png', size: 256 },    // Ultra high-res
  
  // Apple/iOS devices
  { name: 'apple-touch-icon.png', size: 180 },   // iOS home screen (standard)
  { name: 'apple-touch-icon-57x57.png', size: 57 },   // iOS 1x
  { name: 'apple-touch-icon-60x60.png', size: 60 },   // iOS 2x
  { name: 'apple-touch-icon-72x72.png', size: 72 },   // iPad 1x
  { name: 'apple-touch-icon-76x76.png', size: 76 },   // iPad 2x
  { name: 'apple-touch-icon-114x114.png', size: 114 }, // iPhone Retina
  { name: 'apple-touch-icon-120x120.png', size: 120 }, // iPhone 2x
  { name: 'apple-touch-icon-144x144.png', size: 144 }, // iPad Retina
  { name: 'apple-touch-icon-152x152.png', size: 152 }, // iPad Retina
  { name: 'apple-touch-icon-180x180.png', size: 180 }, // iPhone 3x
  
  // Android/Chrome
  { name: 'android-chrome-36x36.png', size: 36 },
  { name: 'android-chrome-48x48.png', size: 48 },
  { name: 'android-chrome-72x72.png', size: 72 },
  { name: 'android-chrome-96x96.png', size: 96 },
  { name: 'android-chrome-144x144.png', size: 144 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-256x256.png', size: 256 },
  { name: 'android-chrome-384x384.png', size: 384 },
  { name: 'android-chrome-512x512.png', size: 512 },
  
  // Microsoft/Windows
  { name: 'mstile-70x70.png', size: 70 },        // Small tile
  { name: 'mstile-144x144.png', size: 144 },     // Medium tile
  { name: 'mstile-150x150.png', size: 150 },     // Medium tile (standard)
  { name: 'mstile-310x150.png', width: 310, height: 150 }, // Wide tile
  { name: 'mstile-310x310.png', size: 310 },     // Large tile
];

// Social media OG images
const socialSizes = [
  { name: 'bkinc-og-1200x630.png', width: 1200, height: 630 }, // OpenGraph standard
  { name: 'bkinc-og-1200x1200.png', width: 1200, height: 1200 }, // Twitter/Square
];

async function generateFavicons() {
  console.log('🎨 Starting favicon generation...\n');

  try {
    // Check if source image exists
    const fileExists = await fs.access(sourceImage).then(() => true).catch(() => false);
    if (!fileExists) {
      throw new Error(`Source image not found: ${sourceImage}\nPlease ensure BK.png exists in the public folder.`);
    }
    
    console.log(`📸 Using source image: BK.png (gold logo)\n`);

    // Generate favicons for all platforms
    // Using 'contain' fit for ALL favicons to prevent cropping and maintain aspect ratio
    console.log('🌐 Generating favicons for all platforms (using contain fit)...\n');
    for (const favicon of faviconSizes) {
      const outputPath = join(publicDir, favicon.name);
      
      // Handle square and rectangular tiles differently
      if (favicon.width && favicon.height) {
        // Rectangular tile (e.g., mstile-310x150.png) - contain fit prevents cropping
        await sharp(sourceImage)
          .resize(favicon.width, favicon.height, {
            fit: 'contain', // Ensures entire logo is visible, no cropping
            background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
          })
          .png({ quality: 100, compressionLevel: 9 })
          .toFile(outputPath);
        console.log(`✅ Generated: ${favicon.name} (${favicon.width}x${favicon.height})`);
      } else {
        // Square favicon - contain fit maintains aspect ratio, no cropping
        await sharp(sourceImage)
          .resize(favicon.size, favicon.size, {
            fit: 'contain', // Ensures entire logo is visible, no cropping
            background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
          })
          .png({ quality: 100, compressionLevel: 9 })
          .toFile(outputPath);
        console.log(`✅ Generated: ${favicon.name} (${favicon.size}x${favicon.size})`);
      }
    }
    
    // Generate PWA/manifest icons in assets/icons folder
    // Using 'contain' fit for ALL PWA icons to prevent cropping
    const iconsDir = join(publicDir, 'assets', 'icons');
    await fs.mkdir(iconsDir, { recursive: true });
    
    const pwaIconSizes = [72, 96, 120, 128, 144, 152, 167, 180, 192, 384, 512];
    console.log('\n📱 Generating PWA/manifest icon sizes (using contain fit)...');
    for (const size of pwaIconSizes) {
      const iconPath = join(iconsDir, `bkinclogo-${size}x${size}.png`);
      await sharp(sourceImage)
        .resize(size, size, {
          fit: 'contain', // Ensures entire logo is visible, no cropping
          background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent background
        })
        .png({ quality: 100, compressionLevel: 9 })
        .toFile(iconPath);
      console.log(`✅ Generated: assets/icons/bkinclogo-${size}x${size}.png`);
    }

    // Generate social media images with black background
    for (const { name, width, height } of socialSizes) {
      const outputPath = join(publicDir, name);
      await sharp(sourceImage)
        .resize(width, height, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 1 }
        })
        .png()
        .toFile(outputPath);
      console.log(`✅ Generated: ${name} (${width}x${height})`);
    }

    // Generate ICO file (Windows favicon) - multi-size ICO for best compatibility
    console.log('\n🔄 Generating favicon.ico (multi-size for Windows)...');
    const favicon16Path = join(publicDir, 'favicon-16x16.png');
    const favicon32Path = join(publicDir, 'favicon-32x32.png');
    const favicon48Path = join(publicDir, 'favicon-48x48.png');
    const icoOutputPath = join(publicDir, 'favicon.ico');
    
    // Create multi-size ICO with 16, 32, and 48px versions
    const icoBuffer = await pngToIco([favicon16Path, favicon32Path, favicon48Path]);
    await fs.writeFile(icoOutputPath, icoBuffer);
    console.log(`✅ Generated: favicon.ico (multi-size: 16x16, 32x32, 48x48)`);

    console.log('\n🎉 All favicons generated successfully from BK.png (gold logo)!');
    console.log('\n📦 Generated files for optimal viewing on all platforms:');
    console.log('\n   🌐 Browser Favicons:');
    console.log('      - favicon.ico (multi-size Windows favicon)');
    console.log('      - favicon-16x16.png through favicon-256x256.png');
    console.log('\n   🍎 Apple/iOS:');
    console.log('      - apple-touch-icon.png (180x180 - standard)');
    console.log('      - apple-touch-icon-*.png (all iOS sizes)');
    console.log('\n   🤖 Android/Chrome:');
    console.log('      - android-chrome-*.png (36x36 through 512x512)');
    console.log('\n   🪟 Microsoft/Windows:');
    console.log('      - mstile-*.png (all tile sizes including wide)');
    console.log('\n   📱 PWA/Manifest:');
    console.log('      - assets/icons/bkinclogo-*.png (72x72 through 512x512)');
    console.log('\n   📱 Social Media:');
    console.log('      - bkinc-og-*.png (OpenGraph images)');
  } catch (error) {
    console.error('❌ Error generating favicons:', error.message);
    console.error(error);
    process.exit(1);
  }
}

generateFavicons();

