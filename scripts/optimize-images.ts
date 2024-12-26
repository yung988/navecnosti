import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IMAGES_DIR = join(process.cwd(), 'public', 'images');
const OUTPUT_DIR = join(process.cwd(), 'public', 'images', 'optimized');

// Create output directory if it doesn't exist
if (!existsSync(OUTPUT_DIR)) {
  await mkdir(OUTPUT_DIR, { recursive: true });
}

async function optimizeImage(inputPath: string, filename: string) {
  const outputPath = join(OUTPUT_DIR, filename.replace(/\.[^/.]+$/, '.webp'));
  
  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .resize({
        width: 1920,
        height: 1080,
        fit: 'inside',
        withoutEnlargement: true
      })
      .toFile(outputPath);
    
    console.log(`✅ Optimized: ${filename}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${filename}:`, error);
  }
}

async function optimizeImages() {
  const files = await readdir(IMAGES_DIR);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = join(IMAGES_DIR, file);
      await optimizeImage(inputPath, file);
    }
  }
}

optimizeImages().then(() => {
  console.log('🎉 Image optimization complete!');
}).catch(console.error); 