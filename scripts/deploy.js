#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment process...\n');

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

function checkGitStatus() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    if (status.trim()) {
      log('📝 Changes detected:', 'yellow');
      log(status, 'blue');
      return true;
    } else {
      log('✅ No changes to commit', 'green');
      return false;
    }
  } catch (error) {
    log('❌ Error checking git status', 'red');
    return false;
  }
}

function formatVideoConfig() {
  try {
    const configPath = path.join(process.cwd(), 'video-config.json');
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    
    // Format the JSON with proper indentation
    const formattedConfig = JSON.stringify(config, null, 2);
    fs.writeFileSync(configPath, formattedConfig + '\n');
    
    log('✅ Video config formatted successfully', 'green');
  } catch (error) {
    log('❌ Error formatting video config', 'red');
    console.error(error);
  }
}

function deploy() {
  try {
    // Step 1: Format video config
    log('\n📋 Step 1: Formatting video configuration...', 'blue');
    formatVideoConfig();
    
    // Step 2: Check for changes
    log('\n📋 Step 2: Checking for changes...', 'blue');
    const hasChanges = checkGitStatus();
    
    if (!hasChanges) {
      log('\n🎉 No changes detected. Deployment skipped.', 'green');
      return;
    }
    
    // Step 3: Add all changes
    log('\n📋 Step 3: Adding changes to git...', 'blue');
    execSync('git add .', { stdio: 'inherit' });
    log('✅ Changes added successfully', 'green');
    
    // Step 4: Commit changes
    log('\n📋 Step 4: Committing changes...', 'blue');
    const commitMessage = process.argv[2] || '🎬 Update videos and content';
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
    log('✅ Changes committed successfully', 'green');
    
    // Step 5: Push to GitHub
    log('\n📋 Step 5: Pushing to GitHub...', 'blue');
    execSync('git push origin main', { stdio: 'inherit' });
    log('✅ Changes pushed successfully', 'green');
    
    // Step 6: Trigger deployment
    log('\n📋 Step 6: Triggering deployment...', 'blue');
    log('🔄 GitHub Actions will automatically deploy your site', 'yellow');
    log('⏱️  Deployment usually takes 2-3 minutes', 'yellow');
    
    log('\n🎉 Deployment process completed!', 'green');
    log('🌐 Your site will be updated at: https://[your-username].github.io/[repo-name]', 'blue');
    
  } catch (error) {
    log('\n❌ Deployment failed!', 'red');
    console.error(error);
    process.exit(1);
  }
}

// Run deployment
deploy();
