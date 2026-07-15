import sharp from 'sharp';

const width = 128;
const r = width / 2;
const circleSvg = `<svg><circle cx="${r}" cy="${r}" r="${r}" /></svg>`;

sharp('public/profile.jpg')
  .resize(width, width)
  .composite([{
    input: Buffer.from(circleSvg),
    blend: 'dest-in'
  }])
  .png()
  .toFile('public/favicon.png')
  .then(() => console.log('Favicon generated!'))
  .catch(console.error);
