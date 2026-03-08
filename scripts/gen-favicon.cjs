const { Jimp } = require("jimp");
const path = require("path");

const src = path.join(__dirname, "../public/profile.png");
const dest = path.join(__dirname, "../public/favicon.png");

const SIZE = 128;
const SCALE = 1.38;

async function main() {
  const img = await Jimp.read(src);

  const scaledW = Math.round(img.bitmap.width * SCALE);
  const scaledH = Math.round(img.bitmap.height * SCALE);
  img.resize({ w: scaledW, h: scaledH });

  const cropSize = Math.min(scaledW, scaledH);
  const cropX = Math.floor((scaledW - cropSize) / 2);
  const cropY = Math.floor((scaledH - cropSize) / 2);
  img.crop({ x: cropX, y: cropY, w: cropSize, h: cropSize });

  img.resize({ w: SIZE, h: SIZE });

  // Dark background
  const bg = new Jimp({ width: SIZE, height: SIZE, color: 0x0f172aff });
  bg.composite(img, 0, 0);

  // Circular mask
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      const cx = x - SIZE / 2;
      const cy = y - SIZE / 2;
      if (cx * cx + cy * cy > (SIZE / 2) * (SIZE / 2)) {
        bg.setPixelColor(0x00000000, x, y);
      }
    }
  }

  await bg.write(dest);
  console.log("favicon.png written to public/");
}

main().catch(console.error);
