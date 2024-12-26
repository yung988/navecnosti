const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeImages() {
  const inputDir = path.join(process.cwd(), 'public/images');
  const outputDir = path.join(process.cwd(), 'public/images/optimized');

  try {
    // Vytvoř output složku, pokud neexistuje
    await fs.mkdir(outputDir, { recursive: true });

    // Načti všechny soubory
    const files = await fs.readdir(inputDir);

    // Filtruj jen obrázky
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file) && !file.includes('DS_Store')
    );

    // Zpracuj každý obrázek
    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);

      console.log(`Optimalizuji: ${file}`);

      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);
    }

    console.log('Optimalizace dokončena!');
  } catch (error) {
    console.error('Chyba při optimalizaci:', error);
  }
}

optimizeImages(); 