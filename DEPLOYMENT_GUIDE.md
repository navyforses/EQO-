# 🚀 GitHub Pages Deployment Guide / GitHub Pages-ის ატვირთვის გზამკვლევი

## 🇬🇪 English | 🇬🇪 ქართული

---

## 🇬🇪 English

### Quick Start / სწრაფი დაწყება

1. **Enable GitHub Pages** / GitHub Pages-ის ჩართვა
   - Go to your repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Save

2. **First Deployment** / პირველი ატვირთვა
   ```bash
   npm run deploy
   ```

3. **Add Videos** / ვიდეოების დამატება
   - Edit `video-config.json`
   - Run `npm run deploy:quick`

### How It Works / როგორ მუშაობს

✅ **Simple** - Just edit JSON file  
✅ **Fast** - One command update  
✅ **Safe** - Automatic formatting  
✅ **Bilingual** - Both languages simultaneously  

### Video Adding Process / ვიდეოების დამატების პროცესი

1. **Find the person** in `video-config.json`
2. **Convert YouTube link**: `https://www.youtube.com/watch?v=VIDEO_ID` → `https://www.youtube.com/embed/VIDEO_ID`
3. **Save and deploy**: `npm run deploy:quick`

### Available Commands / ხელმისაწვდომი ბრძანებები

```bash
npm run deploy          # Full deployment with custom message
npm run deploy:quick    # Quick deployment with default message
```

---

## 🇬🇪 ქართული

### სწრაფი დაწყება

1. **GitHub Pages-ის ჩართვა**
   - გადადით repository-ის Settings → Pages
   - აირჩიეთ "Deploy from a branch"
   - აირჩიეთ "gh-pages" ბრენჩი
   - შეინახეთ

2. **პირველი ატვირთვა**
   ```bash
   npm run deploy
   ```

3. **ვიდეოების დამატება**
   - შეცვალეთ `video-config.json`
   - გაუშვით `npm run deploy:quick`

### როგორ მუშაობს

✅ **მარტივი** - მხოლოდ JSON ფაილის შეცვლა  
✅ **სწრაფი** - ერთი ბრძანებით განახლება  
✅ **უსაფრთხო** - ავტომატური ფორმატირება  
✅ **ორენოვანი** - ორივე ენაზე ერთდროულად  

### ვიდეოების დამატების პროცესი

1. **იპოვეთ პიროვნება** `video-config.json`-ში
2. **YouTube ლინკის კონვერტაცია**: `https://www.youtube.com/watch?v=VIDEO_ID` → `https://www.youtube.com/embed/VIDEO_ID`
3. **შეინახეთ და ატვირთეთ**: `npm run deploy:quick`

### ხელმისაწვდომი ბრძანებები

```bash
npm run deploy          # სრული ატვირთვა მორგებული შეტყობინებით
npm run deploy:quick    # სწრაფი ატვირთვა ნაგულისხმევი შეტყობინებით
```

---

## 📋 Example / მაგალითი

### Adding a new video / ახალი ვიდეოს დამატება

**Before / ადრე:**
```json
{
  "name": "ილია ჭავჭავაძე / Ilia Chavchavadze",
  "video1": "https://www.youtube.com/embed/ehI2ceiuhnM"
}
```

**After / შემდეგ:**
```json
{
  "name": "ილია ჭავჭავაძე / Ilia Chavchavadze",
  "video1": "https://www.youtube.com/embed/ehI2ceiuhnM",
  "video2": "https://www.youtube.com/embed/NEW_VIDEO_ID"
}
```

**Deploy / ატვირთვა:**
```bash
npm run deploy:quick
```

---

## 🎯 Benefits / უპირატესობები

- **No manual git commands** / ხელით git ბრძანებების გარეშე
- **Automatic formatting** / ავტომატური ფორმატირება
- **Error handling** / შეცდომების დამუშავება
- **Progress tracking** / პროგრესის თვალთვალი
- **Bilingual support** / ორენოვანი მხარდაჭერა

---

## 🔧 Troubleshooting / პრობლემების მოგვარება

### Common Issues / ხშირი პრობლემები

1. **Git not configured** / Git არ არის კონფიგურირებული
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

2. **Permission denied** / ნებართვა უარყოფილია
   - Check GitHub token permissions
   - Ensure repository access

3. **Build fails** / აწყობა ვერ მოხერხდა
   - Check `npm install` works
   - Verify all dependencies

---

## 📞 Support / მხარდაჭერა

If you encounter issues, check:
- GitHub Actions tab for deployment logs
- Repository settings for Pages configuration
- Network connectivity for push operations

პრობლემების შემთხვევაში შეამოწმეთ:
- GitHub Actions ჩანართი ატვირთვის ლოგებისთვის
- Repository-ის პარამეტრები Pages კონფიგურაციისთვის
- ქსელის კავშირი push ოპერაციებისთვის
