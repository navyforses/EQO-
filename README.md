# EQO+ - Echo of Ages: Georgian History Chat

A bilingual (Georgian/English) interactive platform for exploring Georgian historical figures through AI-powered conversations and educational videos.

## 🚀 Quick Deployment

### One-Command Video Updates

```bash
# Add videos to video-config.json, then:
npm run deploy:quick
```

### Full Deployment

```bash
npm run deploy
```

## 🎬 Video Management

### Easy Video Addition

1. **Edit** `video-config.json`
2. **Convert** YouTube links: `https://www.youtube.com/watch?v=VIDEO_ID` → `https://www.youtube.com/embed/VIDEO_ID`
3. **Deploy**: `npm run deploy:quick`

### Auto-Format Videos

```bash
npm run format:videos
```

## 📋 Features

- ✅ **Simple** - Just edit JSON file
- ✅ **Fast** - One command update  
- ✅ **Safe** - Automatic formatting
- ✅ **Bilingual** - Both languages simultaneously
- 🎬 **Video Integration** - YouTube embed support
- 🤖 **AI Chat** - Gemini-powered conversations
- 📱 **Responsive** - Mobile-friendly design

## 🛠️ Development

```bash
npm install
npm run dev
```

## 📚 Documentation

- [Deployment Guide](DEPLOYMENT_GUIDE.md) - Complete setup instructions
- [Video Adding Guide](VIDEO_ADDING_GUIDE.md) - How to add videos
- [Quick Video Guide](QUICK_VIDEO_GUIDE.md) - Fast video updates

## 🌐 Live Demo

Visit: `https://[your-username].github.io/[repo-name]`

---

*Built with React, TypeScript, and Vite*
