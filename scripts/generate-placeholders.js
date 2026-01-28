const fs = require('fs');
const path = require('path');

// SVG placeholder template
const createPlaceholderSVG = (text, width = 800, height = 600, bgColor = '#e5e7eb', textColor = '#6b7280') => `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bgColor}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="20" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
</svg>
`;

// Project configurations based on real portfolio
const projects = [
  { id: 'soundboks-3', name: 'SOUNDBOKS 3', images: 3 },
  { id: 'beoremote-halo', name: 'Beoremote Halo', images: 2 },
  { id: 'beocreate', name: 'Beocreate', images: 2 },
  { id: 'pippi-baby-monitor', name: 'Pippi Baby Monitor', images: 3 },
  { id: 'concept-kitchen-2025', name: 'Concept Kitchen 2025', images: 2 },
  { id: 'pedral-watches', name: 'Pedral Watches', images: 2 },
  { id: 'wall-lamp', name: 'Wall Lamp', images: 1 },
  { id: 'uvisa-medical-device', name: 'UVISA Medical Device', images: 2 },
  { id: 'opennext', name: 'OpenNext', images: 1 },
];

const publicDir = path.join(__dirname, '..', 'public', 'projects');

projects.forEach(project => {
  const projectDir = path.join(publicDir, project.id);
  
  // Ensure directory exists
  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir, { recursive: true });
  }
  
  // Create thumbnail
  const thumbnailSVG = createPlaceholderSVG(`${project.name} - Add thumbnail`);
  fs.writeFileSync(path.join(projectDir, 'thumbnail.jpg'), thumbnailSVG);
  
  // Create project images
  for (let i = 1; i <= project.images; i++) {
    const imageSVG = createPlaceholderSVG(`${project.name} - Image ${i}`);
    fs.writeFileSync(path.join(projectDir, `image${i}.jpg`), imageSVG);
  }
  
  console.log(`✓ ${project.name}`);
});

console.log('\n✅ All placeholder images created!');
console.log('\nTo add your real images from CVPORT-ChristianThams-2024.pdf:');
console.log('1. Export images from your PDF');
console.log('2. Navigate to public/projects/[project-name]/');
console.log('3. Replace thumbnail.jpg and image1.jpg, image2.jpg, etc.');
console.log('4. Recommended size: 1600x1200px or similar 4:3 ratio');
