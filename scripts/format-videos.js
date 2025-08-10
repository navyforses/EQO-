#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🎬 Video Link Formatter\n');

// Colors for console output
const colors = {
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function convertYouTubeLink(url) {
  // Convert watch URLs to embed URLs
  const watchPattern = /https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/;
  const match = url.match(watchPattern);
  
  if (match) {
    const videoId = match[1];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  
  // If already embed format, return as is
  if (url.includes('/embed/')) {
    return url;
  }
  
  return url;
}

function formatVideoConfig() {
  try {
    const configPath = path.join(process.cwd(), 'video-config.json');
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    
    let hasChanges = false;
    
    // Process each person's videos
    Object.keys(config.videos).forEach(personKey => {
      const person = config.videos[personKey];
      
      Object.keys(person).forEach(key => {
        if (key.startsWith('video') && typeof person[key] === 'string') {
          const originalUrl = person[key];
          const convertedUrl = convertYouTubeLink(originalUrl);
          
          if (originalUrl !== convertedUrl) {
            log(`🔄 Converting: ${personKey} - ${key}`, 'yellow');
            log(`   ${originalUrl}`, 'blue');
            log(`   → ${convertedUrl}`, 'green');
            person[key] = convertedUrl;
            hasChanges = true;
          }
        }
      });
    });
    
    if (hasChanges) {
      // Format the JSON with proper indentation
      const formattedConfig = JSON.stringify(config, null, 2);
      fs.writeFileSync(configPath, formattedConfig + '\n');
      log('\n✅ Video config updated and formatted successfully!', 'green');
    } else {
      log('\n✅ All video links are already in correct format!', 'green');
    }
    
    return hasChanges;
    
  } catch (error) {
    log('\n❌ Error processing video config', 'red');
    console.error(error);
    return false;
  }
}

function showUsage() {
  log('\n📖 Usage Examples:', 'blue');
  log('  node scripts/format-videos.js', 'yellow');
  log('  npm run format:videos', 'yellow');
  
  log('\n🔗 Link Conversion Examples:', 'blue');
  log('  Watch URL: https://www.youtube.com/watch?v=abc123', 'yellow');
  log('  Embed URL: https://www.youtube.com/embed/abc123', 'green');
  
  log('\n📋 Available People in config:', 'blue');
  try {
    const configPath = path.join(process.cwd(), 'video-config.json');
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    
    Object.keys(config.videos).forEach((key, index) => {
      const person = config.videos[key];
      log(`  ${index + 1}. ${key} - ${person.name}`, 'green');
    });
  } catch (error) {
    log('  ❌ Could not read video config', 'red');
  }
}

// Main execution
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  showUsage();
} else {
  const hasChanges = formatVideoConfig();
  
  if (hasChanges) {
    log('\n💡 Next steps:', 'blue');
    log('  1. Review the changes in video-config.json', 'yellow');
    log('  2. Run: npm run deploy:quick', 'green');
  }
}
