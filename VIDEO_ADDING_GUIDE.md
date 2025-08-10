# 🎬 ვიდეო დამატების გზამკვლევი

## 📋 მარტივი პროტოკოლი ვიდეო ლინკების დამატებისთვის

### 🎯 **1. იპოვეთ ფაილი:**
```
data/historicalFigures.ts
```

### 🎯 **2. იპოვეთ სასურველი პიროვნება:**

**პიროვნებები:**
- **ილია ჭავჭავაძე** → `id: '1'`
- **ვაჟა-ფშაველა** → `id: '2'`
- **ნიკო ნიკოლაძე** → `id: '3'`
- **შოთა რუსთაველი** → `id: 'shota-rustaveli'`
- **დავით აღმაშენებელი** → `id: 'david-agmashenebeli'`

### 🎯 **3. იპოვეთ videoUrls მასივი:**

თითოეულ პიროვნებას აქვს:
```typescript
videoUrls: [
  'Video #1 ლინკი',
  'Video #2 ლინკი', 
  'Video #3 ლინკი',
  'Video #4 ლინკი'
]
```

### 🎯 **4. YouTube ლინკის გადაკეთება:**

**თქვენი ლინკი:** `https://www.youtube.com/watch?v=VIDEO_ID`
**გადააკეთეთ:** `https://www.youtube.com/embed/VIDEO_ID`

### 🎯 **5. მაგალითი:**

```typescript
// ნიკო ნიკოლაძე - Video #1
videoUrls: [
  'https://www.youtube.com/embed/ohfFiz-Tm_U', // ← აქ ჩასვით თქვენი ლინკი
  'https://www.youtube.com/embed/dQw4w9WgXcQ?v=1',
  'https://www.youtube.com/embed/dQw4w9WgXcQ?v=2',
  'https://www.youtube.com/embed/dQw4w9WgXcQ?v=3',
]
```

### 🎯 **6. ორივე ენაზე ჩამატება:**

**მნიშვნელოვანი:** ყოველთვის ჩამატეთ ორივე ენაზე:
- `ge` (ქართული)
- `en` (ინგლისური)

### 🎯 **7. შემოწმება:**

1. შეინახეთ ფაილი
2. გახსენით ვებსაიტი: `http://localhost:5175/EQO-/`
3. წადით Library გვერდზე
4. იპოვეთ პიროვნება
5. დააჭირეთ "Video #1" ღილაკს

---

## 🚀 **სწრაფი მაგალითი:**

**თქვენი YouTube ლინკი:** `https://www.youtube.com/watch?v=abc123`

**გადააკეთეთ:** `https://www.youtube.com/embed/abc123`

**ჩასვით ფაილში:**
```typescript
videoUrls: [
  'https://www.youtube.com/embed/abc123', // ← თქვენი ვიდეო
  'https://www.youtube.com/embed/dQw4w9WgXcQ?v=1',
  'https://www.youtube.com/embed/dQw4w9WgXcQ?v=2',
  'https://www.youtube.com/embed/dQw4w9WgXcQ?v=3',
]
```

**მზადაა!** 🎬✨
