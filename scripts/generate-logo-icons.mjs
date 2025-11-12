import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.join(__dirname, '..');
const INPUT_LOGO = path.join(ROOT_DIR, 'public', 'bkinclogo.png');
const OUTPUT_DIR = path.join(ROOT_DIR, 'public', 'assets', 'icons');
const BACKUP_PATH = path.join(ROOT_DIR, 'public', 'assets', 'bkinclogo-original.png');
const TRANSPARENT_PATH = path.join(ROOT_DIR, 'public', 'assets', 'bkinclogo.png');

// Icon sizes needed for mobile devices
const ICON_SIZES = [
  72,    // Android ldpi
  96,    // Android mdpi
  120,   // iOS 2x
  128,   // Android hdpi
  144,   // Android xhdpi
  152,   // iOS iPad
  167,   // iOS iPad Pro
  180,   // iOS 3x
  192,   // Android xxhdpi / PWA manifest
  384,   // Android xxxhdpi
  512,   // PWA standard
];

async function makeTransparent(inputPath) {
  console.log('📸 Processing logo to remove background...');
  
  // Read the image
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  
  // Get raw pixel data
  const { data, info } = await image
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  
  // Process pixels to make white/light backgrounds transparent
  const pixelArray = new Uint8ClampedArray(data.length);
  
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];
    
    // If pixel is very light (close to white), make it transparent
    // Adjust threshold (240) if needed - higher = more aggressive
    if (r > 240 && g > 240 && b > 240) {
      pixelArray[i] = r;
      pixelArray[i + 1] = g;
      pixelArray[i + 2] = b;
      pixelArray[i + 3] = 0; // Make transparent
    } else {
      pixelArray[i] = r;
      pixelArray[i + 1] = g;
      pixelArray[i + 2] = b;
      pixelArray[i + 3] = a;
    }
  }
  
  // Create sharp image from processed buffer
  return sharp(pixelArray, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4
    }
  }).png();
}

async function generateIconSizes(transparentImage) {
  console.log('\n🎨 Generating mobile icon sizes...');
  
  // Create output directory
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  
  const results = [];
  
  for (const size of ICON_SIZES) {
    const outputPath = path.join(OUTPUT_DIR, `bkinclogo-${size}x${size}.png`);
    
    await transparentImage
      .clone()
      .resize(size, size, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png({ quality: 100, compressionLevel: 9 })
      .toFile(outputPath);
    
    console.log(`  ✓ Generated ${size}x${size}`);
    results.push(`bkinclogo-${size}x${size}.png`);
  }
  
  return results;
}

async function main() {
  try {
    console.log('🚀 Starting logo icon generation for mobile devices...\n');
    
    // Check if input file exists
    try {
      await fs.access(INPUT_LOGO);
    } catch {
      console.error(`❌ Error: Logo file not found at ${INPUT_LOGO}`);
      process.exit(1);
    }
    
    // Step 1: Create backup of original
    console.log('💾 Creating backup of original logo...');
    try {
      await fs.copyFile(INPUT_LOGO, BACKUP_PATH);
      console.log(`  ✓ Backup saved to: bkinclogo-original.png\n`);
    } catch (err) {
      console.log(`  ℹ️  Backup already exists or couldn't create backup\n`);
    }
    
    // Step 2: Make background transparent
    const transparentImage = await makeTransparent(INPUT_LOGO);
    console.log('  ✓ Background removed successfully\n');
    
    // Step 3: Save transparent version as main logo
    await transparentImage.clone().toFile(TRANSPARENT_PATH);
    console.log(`  ✓ Saved transparent logo: bkinclogo.png\n`);
    
    // Step 4: Generate all icon sizes
    const generatedIcons = await generateIconSizes(transparentImage);
    
    console.log(`\n✅ Success! Generated ${generatedIcons.length} icon sizes.`);
    console.log(`\n📁 All icons saved to: public/assets/icons/`);
    console.log(`\n🎯 Your logo now has a transparent background and is ready for Samsung and all mobile devices!`);
    
    // Print manifest snippet
    console.log('\n📱 Add these to your manifest.json or meta tags:');
    console.log('```json');
    console.log(JSON.stringify({
      icons: [
        { src: '/assets/icons/bkinclogo-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: '/assets/icons/bkinclogo-512x512.png', sizes: '512x512', type: 'image/png' }
      ]
    }, null, 2));
    console.log('```');
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

main();

