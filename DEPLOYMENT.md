# Deploying to Vercel – Step-by-Step Guide

This guide walks you through deploying your scholarship pitch app to Vercel in 5 minutes.

## Step 1: Prepare Your Repository

```bash
# Navigate to your project folder
cd scholarship-pitch

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial scholarship pitch app"
```

## Step 2: Create a GitHub Account (if you don't have one)

1. Go to [github.com](https://github.com)
2. Sign up for a free account
3. Create a new repository called `scholarship-pitch`

## Step 3: Push to GitHub

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/scholarship-pitch.git

# Rename branch to main (if on master)
git branch -M main

# Push your code
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 4: Deploy to Vercel

### Method A: Using Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** and authorize Vercel
4. Click **"Import Project"**
5. Select your `scholarship-pitch` repository
6. Click **"Import"** (default settings are fine)
7. Click **"Deploy"**

Done! Your app will be live in ~1-2 minutes.

### Method B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to your Vercel account
vercel login

# Deploy from your project directory
vercel
```

Follow the prompts (say yes to defaults).

## Step 5: View Your Live Site

Vercel will give you a URL like: `https://scholarship-pitch-abc123.vercel.app`

- Share this link with admissions teams
- Test on mobile and desktop
- It will auto-update whenever you push changes to GitHub

## Custom Domain (Optional)

To use your own domain:

1. Go to your Vercel project settings
2. Navigate to **"Domains"**
3. Add your domain
4. Follow DNS configuration steps

## Making Updates

Every time you update your code and push to GitHub:

```bash
git add .
git commit -m "Your change description"
git push origin main
```

Vercel auto-deploys within seconds.

## Quick Edits

To make quick edits without Git:

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Find your `scholarship-pitch` project
3. Click **"Code"** → **"Repository"** → edit files in GitHub's web editor
4. Vercel auto-deploys

## Troubleshooting

### Build fails after deployment

Check the build logs in Vercel dashboard:
1. Click your project
2. Go to **"Deployments"** tab
3. Click the failed deployment
4. Scroll to see error messages

Common issues:
- Missing `package.json` – Verify all files copied correctly
- Node version mismatch – Vercel auto-detects; usually fine
- Environment variables – Not needed for this project

### Domain not working

- Verify DNS settings are correct (check Vercel's instructions)
- Wait 24-48 hours for DNS propagation
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Want to make the site private?

In Vercel Dashboard:
1. Go to **"Settings"** for your project
2. Scroll to **"Privacy"**
3. Enable **"Password Protection"** if desired

## Updating Contact Info

Your contact email and LinkedIn are hardcoded in `pages/index.js`:

1. Edit the file locally
2. Search for `mailto:anjali@example.com`
3. Replace with your actual email
4. Search for LinkedIn URL and update
5. Push changes: `git add . && git commit -m "Update contact info" && git push origin main`
6. Vercel auto-deploys (1-2 minutes)

## Next Steps

✅ Deployed? Congrats! Now:
- Share the link with program directors
- Test the interactive elements
- Update your email/LinkedIn before sending to admissions
- Consider sharing on LinkedIn/Twitter with a thoughtful caption

## Support

- Vercel docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- GitHub guides: [docs.github.com](https://docs.github.com)
