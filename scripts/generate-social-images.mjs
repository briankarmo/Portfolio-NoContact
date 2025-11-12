import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '..', 'public');

async function generateSocialImages() {
  try {
    console.log('Generating social sharing images from BKIncLogo.png...');
    
    // Use BKIncLogo.png as the source image (original logo)
    // We'll create a Facebook-optimized version with black background
    const { promises: fs } = await import('fs');
    const sourcePath = join(publicDir, 'BKIncLogo.png');
    const fallbackPath = join(publicDir, 'BK.png');
    const outputPath = join(publicDir, 'BKIncLogo.png');
    
    // Check if source logo exists - try BKIncLogo.png first, then BK.png
    let logoPath = sourcePath;
    let fileExists = await fs.access(sourcePath).then(() => true).catch(() => false);
    
    if (!fileExists) {
      const altExists = await fs.access(fallbackPath).then(() => true).catch(() => false);
      if (altExists) {
        logoPath = fallbackPath;
        console.log(`📁 Using source logo: BK.png`);
      } else {
        throw new Error(`Logo not found. Checked:\n  - ${sourcePath}\n  - ${fallbackPath}`);
      }
    } else {
      console.log(`📁 Using source logo: BKIncLogo.png`);
      // Backup original before we overwrite it
      const backupPath = join(publicDir, 'BKIncLogo-original.png');
      try {
        await fs.copyFile(sourcePath, backupPath);
        console.log(`💾 Backed up original to: BKIncLogo-original.png`);
      } catch (err) {
        // Backup may already exist, that's okay
        console.log(`ℹ️  Backup already exists or couldn't create backup`);
      }
    }
    
    // Get logo dimensions to calculate proper sizing
    const logoMetadata = await sharp(logoPath).metadata();
    const logoAspectRatio = logoMetadata.width / logoMetadata.height;
    
    // Facebook Open Graph image (1200x630) - CRITICAL: Must be exact size to prevent distortion
    // Add generous padding/margins to ensure logo is contained within Facebook's safe area
    // Facebook aggressively crops images, especially on mobile, so we need large safe margins
    const ogWidth = 1200;
    const ogHeight = 630;
    
    // Define safe area with generous padding/margins (25% padding on all sides for Facebook container)
    // This creates a 50% safe area in the center to prevent any cropping
    const paddingPercent = 0.25; // 25% padding on all sides (more conservative)
    const safeAreaWidth = Math.floor(ogWidth * (1 - (paddingPercent * 2))); // 50% of width
    const safeAreaHeight = Math.floor(ogHeight * (1 - (paddingPercent * 2))); // 50% of height
    
    // Make logo smaller to fit within safe area - use 65% of safe area to ensure it's well-contained
    // This results in logo using ~32.5% of canvas, leaving plenty of margin
    const maxLogoWidth = Math.floor(safeAreaWidth * 0.65);  // 65% of safe area width
    const maxLogoHeight = Math.floor(safeAreaHeight * 0.65); // 65% of safe area height
    
    // Calculate size maintaining aspect ratio - logo will be smaller and well-contained
    let logoWidth, logoHeight;
    const scale = Math.min(maxLogoWidth / logoMetadata.width, maxLogoHeight / logoMetadata.height);
    logoWidth = Math.floor(logoMetadata.width * scale);
    logoHeight = Math.floor(logoMetadata.height * scale);
    
    // Center the logo within the safe area (with padding/margins)
    const paddingX = Math.floor(ogWidth * paddingPercent);
    const paddingY = Math.floor(ogHeight * paddingPercent);
    const logoTop = paddingY + Math.round((safeAreaHeight - logoHeight) / 2);
    const logoLeft = paddingX + Math.round((safeAreaWidth - logoWidth) / 2);
    
    const logoBuffer = await sharp(logoPath)
      .resize(Math.round(logoWidth), Math.round(logoHeight), {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toBuffer();
    
    await sharp({
      create: {
        width: ogWidth,
        height: ogHeight,
        channels: 3,
        background: { r: 0, g: 0, b: 0 } // Pure BLACK background
      }
    })
    .composite([{
      input: logoBuffer,
      top: logoTop,
      left: logoLeft
    }])
    .png({
      compressionLevel: 9,
      palette: false,
      quality: 100
    })
    .removeAlpha()
    .toColorspace('srgb')
    .toFile(outputPath);
    
    console.log(`✓ Created BKIncLogo.png (${ogWidth}x${ogHeight}) - Black background, contained logo with padding/margins for Facebook`);
    
    // Create square social image (1200x1200) with BLACK background for mobile sharing
    const squareSize = 1200;
    const squarePadding = 100;
    const maxSquareLogoSize = squareSize - (squarePadding * 2);
    
    let squareLogoWidth, squareLogoHeight;
    if (logoAspectRatio > 1) {
      squareLogoWidth = Math.min(maxSquareLogoSize, maxSquareLogoSize * logoAspectRatio);
      squareLogoHeight = squareLogoWidth / logoAspectRatio;
    } else {
      squareLogoHeight = Math.min(maxSquareLogoSize, maxSquareLogoSize / logoAspectRatio);
      squareLogoWidth = squareLogoHeight * logoAspectRatio;
    }
    
    const squareLogoTop = Math.round((squareSize - squareLogoHeight) / 2);
    const squareLogoLeft = Math.round((squareSize - squareLogoWidth) / 2);
    
    const logoBufferSquare = await sharp(logoPath)
      .resize(Math.round(squareLogoWidth), Math.round(squareLogoHeight), {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toBuffer();
    
    await sharp({
      create: {
        width: squareSize,
        height: squareSize,
        channels: 3,
        background: { r: 0, g: 0, b: 0 } // Pure BLACK background
      }
    })
    .composite([{
      input: logoBufferSquare,
      top: squareLogoTop,
      left: squareLogoLeft
    }])
    .png({
      compressionLevel: 9,
      palette: false,
      quality: 100
    })
    .removeAlpha()
    .toColorspace('srgb')
    .toFile(join(publicDir, 'bkinc-social-square.png'));
    
    console.log(`✓ Created bkinc-social-square.png (${squareSize}x${squareSize}) - Black background for mobile sharing`);
    
    console.log('\n✓ All social sharing images generated successfully!');
    console.log('Images have SOLID BLACK backgrounds and are properly sized with padding/margins to prevent cropping on Facebook.');
    
  } catch (error) {
    console.error('Error generating social images:', error);
    process.exit(1);
  }
}

generateSocialImages();

