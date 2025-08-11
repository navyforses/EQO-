import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Building for GitHub Pages...');

// Build the project
execSync('npm run build', { stdio: 'inherit' });

// Read the built index.html
const indexPath = path.join(process.cwd(), 'dist', 'index.html');
let htmlContent = fs.readFileSync(indexPath, 'utf8');

// Replace relative paths with GitHub Pages paths
htmlContent = htmlContent.replace(/src="\.\//g, 'src="/EQO-/');
htmlContent = htmlContent.replace(/href="\.\//g, 'href="/EQO-/');

// Write back the modified index.html
fs.writeFileSync(indexPath, htmlContent);

console.log('✅ Build completed and optimized for GitHub Pages!');
console.log('📁 Files are ready in the dist/ directory');
console.log('🌐 Deploy to GitHub Pages using: npm run deploy');
