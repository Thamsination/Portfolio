const fs = require('fs');
const path = require('path');

// SVG placeholder template
const createPlaceholderSVG = (text, width = 800, height = 600, bgColor = '#e5e7eb', textColor = '#6b7280') => `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bgColor}"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
</svg>
`;

// Project configurations
const projects = [
  { id: 'sample-project-1', name: 'Sample Project 1', images: 3 },
  { id: 'sample-project-2', name: 'Sample Project 2', images: 2 },
  { id: 'sample-project-3', name: 'Sample Project 3', images: 1 },
];

const publicDir = path.join(__dirname, '..', 'public', 'projects');

projects.forEach(project => {
  const projectDir = path.join(publicDir, project.id);
  
  // Create thumbnail
  const thumbnailSVG = createPlaceholderSVG(`${project.name} Thumbnail`);
  fs.writeFileSync(path.join(projectDir, 'thumbnail.jpg'), thumbnailSVG);
  
  // Create project images
  for (let i = 1; i <= project.images; i++) {
    const imageSVG = createPlaceholderSVG(`${project.name} - Image ${i}`);
    fs.writeFileSync(path.join(projectDir, `image${i}.jpg`), imageSVG);
  }
  
  console.log(`✓ Created placeholders for ${project.id}`);
});

console.log('\nPlaceholder images created successfully!');
console.log('Replace these with your actual project images.');

