# 🚀 Vercel Deployment Guide - Trinovexa Labs

## ✅ Pre-Deployment Checklist

- ✅ Repository pushed to GitHub: `https://github.com/Ruwanima/Trinovexa-Labs`
- ✅ Code compiled successfully
- ✅ All dependencies installed
- ✅ Environment variables configured

---

## 📋 Step-by-Step Deployment Instructions

### **Step 1: Go to Vercel**
Open browser: [vercel.com](https://vercel.com)

### **Step 2: Sign Up / Login**
- Click **"Sign Up"** (if new user)
- Select **"Continue with GitHub"**
- GitHub will ask permission → Click **"Authorize vercel"**

### **Step 3: Import Your Project**
1. After login, click **"Add New..."** (top right)
2. Select **"Project"**
3. Under "Import Git Repository", paste:
   ```
   https://github.com/Ruwanima/Trinovexa-Labs
   ```
4. Click **"Import"**

### **Step 4: Configure Project**
Vercel auto-detects Next.js settings. Leave defaults:
- **Framework Preset:** Next.js ✓
- **Build Command:** (auto) ✓
- **Output Directory:** (auto) ✓
- Click **"Deploy"** ✨

### **Step 5: Wait for Deployment**
- Building phase: ~1-2 minutes
- Vercel assigns domain: `https://trinovexa-labs-xxxx.vercel.app`
- Deployment complete! 🎉

---

## 🎯 After Deployment

### **Auto-Redeploy on Git Push**
Every time you push to GitHub:
```powershell
git add .
git commit -m "your message"
git push origin main
```
→ Vercel automatically redeploys! ✨

### **Custom Domain (Optional)**
1. In Vercel dashboard → Settings → Domains
2. Add your domain (e.g., trinovexa.com)
3. Follow DNS configuration

### **Environment Variables (If Needed)**
1. Vercel dashboard → Settings → Environment Variables
2. Add any .env values
3. Redeploy

---

## 🔧 Troubleshooting

**Build Failed?**
- Check logs in Vercel dashboard
- Run `npm run build` locally to test
- Verify all dependencies in package.json

**Domain Not Working?**
- DNS propagation takes 24-48 hours
- Check DNS records in Vercel

**Performance Issues?**
- Vercel automatic optimizations apply
- Check Network tab in DevTools

---

## 📞 Need Help?

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- GitHub Issues: Check your repository

---

**Your Website Will Be Live At:**
```
https://trinovexa-labs-[random].vercel.app
```

🎉 **Congratulations! Trinovexa Labs is now LIVE!**
