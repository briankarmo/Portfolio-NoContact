import sharp from "sharp";
import fs from "fs";

// Source image
const inputImage = "public/heroImage.png";

// Background color for padding (change if needed)
const backgroundColor = { r: 0, g: 0, b: 0, alpha: 1 }; // Black

// Output images & sizes
const sizes = [
  { width: 1200, height: 630, name: "public/heroImage-1200x630.png" }, // Open Graph
  { width: 600, height: 315, name: "public/heroImage-600x315.png" }, // General thumbnail
  { width: 180, height: 180, name: "public/heroImage-180x180.png" }, // Apple Touch Icon
  { width: 32, height: 32, name: "public/heroImage-32x32.png" }, // Favicon Large
  { width: 16, height: 16, name: "public/heroImage-16x16.png" }, // Favicon Small
];

// Function to process images
const processImages = async () => {
  try {
    await Promise.all(
      sizes.map((size) =>
        sharp(inputImage)
          .resize(size.width, size.height, {
            fit: "contain", // Ensures the whole image is visible
            background: backgroundColor, // Adds padding if needed
          })
          .toFile(size.name)
      )
    );

    // Convert PNG to ICO for favicon
    await sharp(inputImage)
      .resize(32, 32)
      .toFile("public/heroImage.ico");

    console.log("✅ Images successfully resized without cropping!");
  } catch (error) {
    console.error("❌ Error resizing images:", error);
  }
};

// Run the image processing function
processImages();
