import fs from 'fs';
import path from 'path';

const distDir = path.resolve(process.cwd(), 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('dist/index.html not found! Build Vite first.');
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

const routes = [
  'about',
  'courses',
  'teachers',
  'campus',
  'events',
  'events/sa-cup-season-3',
  'events/indoor-event-season-2',
  'events/cambridge-masterclass',
  'events/open-house-orientation',
  'contact',
  'payment',
];

console.log('Generating static route HTML files for robust hosting...');

routes.forEach((route) => {
  const targetDir = path.join(distDir, route);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, indexHtml, 'utf-8');
  console.log(`  ✓ Generated ${route}/index.html`);
});

// Also ensure 404.html exists in dist
const dist404Path = path.join(distDir, '404.html');
const public404Path = path.resolve(process.cwd(), 'public', '404.html');

if (fs.existsSync(public404Path)) {
  fs.copyFileSync(public404Path, dist404Path);
  console.log('  ✓ Synced 404.html to dist');
} else {
  fs.writeFileSync(dist404Path, indexHtml, 'utf-8');
  console.log('  ✓ Fallback 404.html created');
}

// Copy vercel.json if not present in dist
const vercelJsonPath = path.resolve(process.cwd(), 'vercel.json');
if (fs.existsSync(vercelJsonPath)) {
  fs.copyFileSync(vercelJsonPath, path.join(distDir, 'vercel.json'));
}

console.log('Static route generation complete. App is fully prepared for all static and cloud hosts.');
