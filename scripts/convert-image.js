const sharp = require('sharp');
const path = require('path');

async function convertImage() {
  const inputPath = path.join(process.cwd(), 'public/images/host.jpg');
  const outputPath = path.join(process.cwd(), 'public/images/host-converted.jpg');

  try {
    await sharp(inputPath)
      .jpeg()
      .toFile(outputPath);
    
    console.log('Konverze dokončena!');
  } catch (error) {
    console.error('Chyba při konverzi:', error);
  }
}

convertImage(); 