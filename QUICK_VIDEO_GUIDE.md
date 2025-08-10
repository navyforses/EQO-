# 🎬 სწრაფი ვიდეო დამატების გზამკვლევი

## 🚀 **მარტივი გზა ვიდეოების დამატებისთვის**

### **1️⃣ შეცვალეთ `video-config.json` ფაილი:**

```json
{
  "videos": {
    "3": {
      "name": "ნიკო ნიკოლაძე / Niko Nikoladze",
      "video1": "https://www.youtube.com/embed/YOUR_NEW_VIDEO_ID",
      "video2": "https://www.youtube.com/embed/dQw4w9WgXcQ?v=1",
      "video3": "https://www.youtube.com/embed/dQw4w9WgXcQ?v=2",
      "video4": "https://www.youtube.com/embed/dQw4w9WgXcQ?v=3"
    }
  }
}
```

### **2️⃣ გაუშვით სკრიპტი:**

```bash
node update-videos.js
```

### **3️⃣ მზადაა!** 🎉

---

## 📋 **პიროვნებების ID-ები:**

- `"1"` - ილია ჭავჭავაძე
- `"2"` - ვაჟა-ფშაველა  
- `"3"` - ნიკო ნიკოლაძე
- `"shota-rustaveli"` - შოთა რუსთაველი
- `"david-agmashenebeli"` - დავით აღმაშენებელი

## 🔄 **YouTube ლინკის გადაკეთება:**

```
თქვენი: https://www.youtube.com/watch?v=abc123
გადააკეთეთ: https://www.youtube.com/embed/abc123
```

## ⚡ **სწრაფი მაგალითი:**

1. **იპოვეთ თქვენი YouTube ლინკი:** `https://www.youtube.com/watch?v=xyz789`
2. **გადააკეთეთ:** `https://www.youtube.com/embed/xyz789`
3. **ჩასვით video-config.json-ში:**
   ```json
   "video1": "https://www.youtube.com/embed/xyz789"
   ```
4. **გაუშვით:** `node update-videos.js`

**ეს არის!** 🎬✨
