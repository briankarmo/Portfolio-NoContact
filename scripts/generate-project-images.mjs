import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { promises as fs } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');
const portfolioDir = join(rootDir, 'public', 'assets', 'portfolio');

// Project image configurations
const imageConfigs = [
  { width: 800, height: 450, suffix: '-800x450' },
  { width: 1200, height: 675, suffix: '-1200x675' },
];

async function generateProjectImages() {
  console.log('🖼️  Starting project image optimization...\n');

  try {
    // Read all PNG files in the portfolio directory
    const files = await fs.readdir(portfolioDir);
    const pngFiles = files.filter(file => 
      file.endsWith('.png') && 
      !file.includes('-800x450') && 
      !file.includes('-1200x675')
    );

    if (pngFiles.length === 0) {
      console.log('⚠️  No PNG files found to process.');
      return;
    }

    console.log(`📁 Found ${pngFiles.length} project image(s) to optimize\n`);

    for (const file of pngFiles) {
      const inputPath = join(portfolioDir, file);
      const baseName = file.replace('.png', '');
      
      console.log(`\n🔄 Processing: ${file}`);
      
      // Get original image metadata
      const metadata = await sharp(inputPath).metadata();
      console.log(`   Original: ${metadata.width}x${metadata.height}`);

      // Generate WebP versions at different sizes
      for (const config of imageConfigs) {
        const outputPath = join(portfolioDir, `${baseName}${config.suffix}.webp`);
        
        await sharp(inputPath)
          .resize(config.width, config.height, {
            fit: 'contain',
            background: { r: 0, g: 0, b: 0, alpha: 0 }
          })
          .webp({ quality: 90 })
          .toFile(outputPath);
        
        console.log(`   ✅ Created: ${baseName}${config.suffix}.webp (${config.width}x${config.height})`);
      }
    }

    console.log('\n\n🎉 Project image optimization complete!');
    console.log('\n📊 Summary:');
    console.log(`   - Processed ${pngFiles.length} project image(s)`);
    console.log(`   - Generated WebP versions at 800x450 and 1200x675`);
    console.log(`   - Optimized for web performance\n`);

  } catch (error) {
    console.error('❌ Error generating project images:', error.message);
    console.error(error);
    process.exit(1);
  }
}

generateProjectImages();

