# VastuCraft AI Studio - Deployment Guide 🚀

## ✅ Deployment Status

**Successfully Deployed to Vercel!**

- 🔗 **Production URL**: https://betaversion1.vercel.app/
- 📊 **Dashboard**: https://vercel.com/sams-projects-590037c3/vastucraft-ai-studio
- 🔍 **Inspect**: https://vercel.com/sams-projects-590037c3/vastucraft-ai-studio/JDMgejMR3rVtfg7cLjep2TUaYUkd

---

## ⚠️ IMPORTANT: Environment Variables Setup

Your deployment is live, but the **AI Chatbot** and **Contact Form** will NOT work until you add the required environment variables.

### Step 1: Get Your API Keys

#### 🤖 Gemini AI API Key
1. Visit: https://aistudio.google.com/apikey
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the generated key

#### 📧 Web3Forms Access Key
1. Visit: https://web3forms.com
2. Sign up or log in
3. Create a new form
4. Copy your Access Key

---

### Step 2: Add Environment Variables to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to: https://vercel.com/sams-projects-590037c3/vastucraft-ai-studio/settings/environment-variables

2. Add the following variables:

   **Variable 1:**
   - **Key**: `API_KEY`
   - **Value**: Your Gemini API key (paste the key you got from Google AI Studio)
   - **Environment**: Production, Preview, Development (select all)

   **Variable 2:**
   - **Key**: `VITE_WEB3FORMS_ACCESS_KEY`
   - **Value**: Your Web3Forms access key
   - **Environment**: Production, Preview, Development (select all)

3. Click **"Save"** for each variable

4. **Redeploy** the project:
   - Go to: Deployments tab
   - Click the three dots on the latest deployment
   - Select **"Redeploy"**

#### Option B: Using Vercel CLI

```bash
# Navigate to project directory
cd C:\Users\sam\.gemini\antigravity\vastucraft-ai-studio

# Add environment variables
vercel env add API_KEY
# Paste your Gemini API key when prompted

vercel env add VITE_WEB3FORMS_ACCESS_KEY
# Paste your Web3Forms key when prompted

# Redeploy
vercel --prod
```

---

## 🔧 Local Development Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Create .env.local file (copy from .env.example)
cp .env.example .env.local

# Edit .env.local and add your API keys
# API_KEY=your_gemini_api_key
# VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key
```

### Running Locally

**Important**: The chatbot uses a serverless function, so you need to use Vercel Dev:

```bash
# Run with Vercel Dev (Recommended - includes serverless functions)
vercel dev

# Or regular dev server (chatbot won't work)
npm run dev
```

---

## 📋 Deployment Checklist

- [x] Git repository created and pushed to GitHub
- [x] Vercel project created and linked
- [x] Initial deployment successful
- [ ] **API_KEY** environment variable added in Vercel
- [ ] **VITE_WEB3FORMS_ACCESS_KEY** environment variable added in Vercel
- [ ] Project redeployed after adding environment variables
- [ ] Test AI Chatbot on production URL
- [ ] Test Contact Form submission
- [ ] Update contact information in `constants.ts` (if needed)
- [ ] Update team photos (add `vidhi.jpg` and `swetang.jpg` to `/public`)
- [ ] Configure custom domain (optional)

---

## 🌐 Custom Domain Setup (Optional)

### Add a Custom Domain

1. Go to: https://vercel.com/sams-projects-590037c3/vastucraft-ai-studio/settings/domains
2. Enter your domain name (e.g., `vastucraftai.com`)
3. Follow the DNS configuration instructions
4. Wait for DNS propagation (5-30 minutes)

### Recommended Domains
- `vastucraftai.com`
- `vastucraft.studio`
- `vastucraft.ai`

---

## 🔄 Continuous Deployment

Your project is now connected to GitHub. Every time you push to the `main` branch, Vercel will automatically:
1. Build your project
2. Run tests (if configured)
3. Deploy to production

### To Deploy Updates:

```bash
# Make changes to your code
git add .
git commit -m "Your update message"
git push origin main

# Vercel will automatically deploy the changes
```

---

## 📊 Monitoring & Analytics

### View Deployment Logs
- Dashboard: https://vercel.com/sams-projects-590037c3/vastucraft-ai-studio
- Click on any deployment to see build logs

### Add Analytics (Optional)

1. Go to Settings → Analytics
2. Enable Vercel Analytics
3. Add this to your site to track page views, performance, etc.

---

## 🐛 Troubleshooting

### Chatbot Not Working
- ✅ Check that `API_KEY` is set in Vercel environment variables
- ✅ Verify the API key is valid at https://aistudio.google.com/apikey
- ✅ Redeploy after adding environment variables

### Contact Form Not Sending Emails
- ✅ Check that `VITE_WEB3FORMS_ACCESS_KEY` is set in Vercel
- ✅ Verify the key at https://web3forms.com
- ✅ Check spam folder for test emails
- ✅ Redeploy after adding environment variables

### Build Failures
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- TypeScript errors will prevent deployment

### 404 Errors on Page Refresh
- This is already handled by `vercel.json` configuration
- If issues persist, check that `vercel.json` has proper SPA routing

---

## 🎨 Customization Guide

See the detailed customization guide in:
- **[docs/USER_GUIDE.md](docs/USER_GUIDE.md)**

Quick customization checklist:
1. **Logo**: Edit `components/Logo.tsx`
2. **Images**: Replace URLs in `constants.ts`
3. **Contact Info**: Update `constants.ts`
4. **Colors**: Modify `tailwind.config.js`
5. **Content**: Update page files in `/pages` directory

---

## 📞 Support

For issues or questions:
- GitHub Issues: https://github.com/SGajjar24/vastucraft-ai-studio/issues
- Vercel Support: https://vercel.com/support
- Google AI Studio: https://aistudio.google.com/

---

## 🎉 Next Steps

1. **Add Environment Variables** (CRITICAL - see above)
2. Redeploy the project
3. Test the chatbot and contact form
4. Update content and images
5. Configure custom domain (optional)
6. Share your amazing website! 🚀

---

**Deployed**: November 24, 2025  
**Platform**: Vercel  
**Framework**: React + Vite + TypeScript  
**Repository**: https://github.com/SGajjar24/vastucraft-ai-studio
