# Anjali Ancy | ML in Healthcare Scholarship Pitch

An interactive web app showcasing your story, credentials, and flexible scholarship proposal for the ML in Healthcare Summer School.

## Features

- 📖 **Narrative-driven storytelling** – Smooth scrolling sections that build credibility
- 🎨 **Refined design** – Clean typography, subtle animations, professional aesthetic
- 🔄 **Interactive scholarship options** – Toggle between different financial arrangements
- 📱 **Fully responsive** – Works beautifully on desktop, tablet, and mobile
- ⚡ **Fast & optimized** – Built with Next.js and Tailwind CSS

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS + custom CSS
- **Fonts:** Crimson Text (display) + Space Mono (body)
- **Deployment:** Vercel

## Getting Started Locally

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Navigate to the project directory
cd scholarship-pitch

# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment to Vercel

### Option 1: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel
```

Follow the prompts to link your project and deploy.

### Option 2: Using GitHub Integration

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/scholarship-pitch.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

Vercel will auto-deploy on every push to main.

## Customization

### Update Contact Information
In `pages/index.js`, replace placeholder email and LinkedIn URL:
```javascript
<a href="mailto:anjali@example.com">
<a href="https://linkedin.com/in/anjaliancy">
```

### Modify Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  navy: '#0f172a',      // Primary dark color
  slate: '#64748b',     // Text color
  cream: '#faf8f3',     // Background
  accent: '#0ea5e9',    // CTA/highlight color
}
```

### Change Content
All text is in `pages/index.js`. Search and replace sections as needed.

### Add New Sections
Follow the existing pattern – wrap content in semantic HTML sections with Tailwind classes.

## Performance Tips

- Images are optimized by Next.js
- CSS is minified in production
- Font files are cached
- Animations use CSS (GPU accelerated)

## Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## License

This project is personal and not licensed for redistribution.

## Questions?

If you have issues with the build or deployment, check:
- Node version: `node --version` (should be 16+)
- Vercel docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
