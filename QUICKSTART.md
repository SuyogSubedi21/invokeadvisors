# Quick Start Guide

## 🚀 Get Your Website Live in 5 Minutes

### Step 1: Verify Files
Make sure you have these files in your website folder:
- ✅ `index.html`
- ✅ `styles.css`
- ✅ `script.js`
- ✅ `config.json`
- ✅ `README.md`
- ✅ `QUICKSTART.md` (this file)

### Step 2: Open Locally
**Easiest Method:**
1. Double-click `index.html` to open in browser
2. Website will display immediately

**Better Method (With Live Reload):**
- VSCode: Install "Live Server" extension → Right-click `index.html` → "Open with Live Server"
- Or run: `python -m http.server 8000` then visit `http://localhost:8000`

### Step 3: Update Your Information
Edit `index.html` and update:
- [ ] Company phone numbers (currently: +977-1-xxxxxx)
- [ ] Email addresses (currently: info@invokeadvisory.com)
- [ ] Office address
- [ ] Business hours

### Step 4: Customize Branding
Edit `config.json` and update:
- [ ] Company name and description
- [ ] Contact information
- [ ] Team member details
- [ ] Services list

### Step 5: Deploy Online

**Option A: GitHub Pages (Free, Easy)**
1. Create a GitHub account if you don't have one
2. Create a new repository named `[your-username].github.io`
3. Upload all website files
4. Your site will be live at `https://[your-username].github.io`

**Option B: Netlify (Free, Very Easy)**
1. Go to netlify.com
2. Drag and drop your website folder
3. Site goes live immediately with a temporary URL
4. Connect your own domain (optional)

**Option C: Traditional Hosting**
1. Choose a hosting provider (Namecheap, Bluehost, etc.)
2. Upload files via FTP/File Manager
3. Point your domain to the hosting
4. Website is live!

---

## 📋 Essential Updates Checklist

### Before Going Live:
- [ ] Update all phone numbers
- [ ] Update all email addresses
- [ ] Update office address and location
- [ ] Update team member information
- [ ] Verify all service descriptions
- [ ] Test contact form
- [ ] Check all links work
- [ ] Test on mobile phone
- [ ] Update favicon (if desired)
- [ ] Setup Google Analytics (optional)

### Recommended:
- [ ] Add professional logo
- [ ] Upload team photos
- [ ] Add testimonials/reviews
- [ ] Setup email service for contact form
- [ ] Add your business license/certifications
- [ ] Setup Google My Business listing

---

## 🎨 Quick Customizations

### Change Primary Color
Edit `styles.css` line 3:
```css
--primary: #1e40af;  /* Change this hex color */
```

### Update Hero Headline
Edit `index.html` line ~50:
```html
<h1>Professional Financial Expertise</h1>
<!-- Change to your headline -->
```

### Add Your Logo
Add before `<h2>` in navbar (around line 13):
```html
<img src="your-logo.png" alt="Logo" style="height: 40px;">
```

### Change Accent Color
Edit `styles.css` line 6:
```css
--accent: #f59e0b;  /* Change this hex color */
```

---

## 🔗 Useful Resources

**Design Tools:**
- Color picker: https://coolors.co
- Icons: https://fontawesome.com
- Logo maker: https://looka.com

**Development:**
- HTML reference: https://developer.mozilla.org/en-US/docs/Web/HTML
- CSS guide: https://css-tricks.com
- JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript

**Deployment:**
- GitHub Pages: https://pages.github.com
- Netlify: https://netlify.com
- Vercel: https://vercel.com

**Email Services:**
- Formspree: https://formspree.io
- EmailJS: https://www.emailjs.com
- Mailchimp: https://mailchimp.com

---

## ❓ Troubleshooting

### Website looks broken / styles not loading
- **Solution:** Clear browser cache (Ctrl+Shift+Delete)
- Make sure all files are in the same folder

### Contact form not working
- **Current:** Uses email client (clicking button opens default email)
- **To send automatically:** Follow "Contact Form Integration" in README.md

### Links not working
- Check that links point to correct section IDs
- Example: `<a href="#services">` needs `<section id="services">`

### Not showing on mobile
- Check that viewport meta tag is in `<head>` (line 4)
- Test in Chrome DevTools (Ctrl+Shift+I → Toggle device toolbar)

### Forms submitting but email not received
- If using free plan, check spam folder
- Integrate with EmailJS or Formspree for reliability

---

## 📞 Getting Help

**For Website Issues:**
1. Check the README.md file
2. Search online for the specific error
3. Test in different browser

**For Content Updates:**
- Edit config.json for easy changes
- Or directly edit HTML for more control

**For Advanced Features:**
- Contact a web developer
- Or explore HTML/CSS/JS tutorials

---

## 🎯 Next Steps

1. ✅ Get website working locally
2. ✅ Update all business information
3. ✅ Deploy to live server
4. ✅ Add to Google My Business
5. ✅ Setup email forwarding
6. ✅ Add team photos (optional)
7. ✅ Promote on social media

---

**Good luck with your website! 🚀**

For more help, visit:
- https://www.w3schools.com (Learn web development)
- https://stack overflow.com (Ask questions)
- https://github.com (Share code)

---

**Version:** 1.0  
**Last Updated:** June 2024
