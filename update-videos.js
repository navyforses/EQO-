#!/usr/bin/env node

/**
 * 🎬 ვიდეო ლინკების ავტომატური განახლების სკრიპტი
 * 
 * გამოყენება:
 * node update-videos.js
 */

import fs from 'fs';
import path from 'path';

// ფაილების ბილიკები
const CONFIG_FILE = './video-config.json';
const DATA_FILE = './data/historicalFigures.ts';

// ვიდეო კონფიგურაციის წაკითხვა
function readVideoConfig() {
  try {
    const configData = fs.readFileSync(CONFIG_FILE, 'utf8');
    return JSON.parse(configData);
  } catch (error) {
    console.error('❌ ვერ წავიკითხე video-config.json ფაილი:', error.message);
    return null;
  }
}

// ძირითადი მონაცემების ფაილის წაკითხვა
function readDataFile() {
  try {
    return fs.readFileSync(DATA_FILE, 'utf8');
  } catch (error) {
    console.error('❌ ვერ წავიკითხე data/historicalFigures.ts ფაილი:', error.message);
    return null;
  }
}

// ვიდეო ლინკების განახლება
function updateVideoLinks(config, dataContent) {
  let updatedContent = dataContent;
  
  Object.keys(config.videos).forEach(figureId => {
    const videos = config.videos[figureId];
    const videoUrls = [
      videos.video1,
      videos.video2,
      videos.video3,
      videos.video4
    ];
    
    // ვიდეო ლინკების მასივის შექმნა
    const videoUrlsString = `[\n        '${videoUrls.join("',\n        '")}'\n      ]`;
    
    // ძებნა და ჩანაცვლება ორივე ენაზე
    const gePattern = new RegExp(`(id: '${figureId}',[\\s\\S]*?ge: \\{[\\s\\S]*?videoUrls: \\[)[\\s\\S]*?(\\][\\s\\S]*?\\},)`, 'g');
    const enPattern = new RegExp(`(en: \\{[\\s\\S]*?videoUrls: \\[)[\\s\\S]*?(\\][\\s\\S]*?\\})`, 'g');
    
    updatedContent = updatedContent.replace(gePattern, `$1${videoUrlsString}$2`);
    updatedContent = updatedContent.replace(enPattern, `$1${videoUrlsString}$2`);
    
    console.log(`✅ განახლდა ${videos.name} ვიდეოები`);
  });
  
  return updatedContent;
}

// ფაილის შენახვა
function saveDataFile(content) {
  try {
    fs.writeFileSync(DATA_FILE, content, 'utf8');
    console.log('✅ წარმატებით შეინახა data/historicalFigures.ts');
    return true;
  } catch (error) {
    console.error('❌ ვერ შევინახე ფაილი:', error.message);
    return false;
  }
}

// მთავარი ფუნქცია
function main() {
  console.log('🎬 ვიდეო ლინკების განახლება...\n');
  
  // კონფიგურაციის წაკითხვა
  const config = readVideoConfig();
  if (!config) return;
  
  // მონაცემების ფაილის წაკითხვა
  const dataContent = readDataFile();
  if (!dataContent) return;
  
  // ვიდეო ლინკების განახლება
  const updatedContent = updateVideoLinks(config, dataContent);
  
  // ფაილის შენახვა
  if (saveDataFile(updatedContent)) {
    console.log('\n🎉 ყველა ვიდეო ლინკი წარმატებით განახლდა!');
    console.log('📝 ახლა შეგიძლიათ შეცვალოთ video-config.json ფაილი და ხელახლა გაუშვათ ეს სკრიპტი.');
  }
}

// სკრიპტის გაშვება
main();
