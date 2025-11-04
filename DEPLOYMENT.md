# Vercel Deployment Guide for MAIA

## Quick Deploy

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

### Option 2: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Import this repository
5. Vercel will auto-detect the Vite framework
6. Click "Deploy"

## Configuration

The project is pre-configured with `vercel.json`:
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Framework**: Vite
- **SPA Routing**: Configured with rewrites for client-side routing

## Environment Variables

No environment variables are currently required for this static site.

## Build Output

The production build creates optimized assets in the `dist/` directory:
- HTML, CSS, and JavaScript are minified
- React vendor code is code-split for better caching
- Assets are hashed for cache busting

## Post-Deployment

After deployment, Vercel will provide:
- **Production URL**: Your live site URL
- **Preview URLs**: Unique URLs for each branch/PR
- **Auto-deployments**: Automatic deployments on git push

## Custom Domain (Optional)

To add a custom domain:
1. Go to your project in Vercel dashboard
2. Navigate to Settings → Domains
3. Add your domain and follow DNS configuration instructions

## Performance

The site is optimized for:
- ✅ Fast initial load (<3s)
- ✅ Optimized images
- ✅ Code splitting
- ✅ CSS minification
- ✅ Gzip compression

## Troubleshooting

If deployment fails:
1. Verify `npm run build` works locally
2. Check the Vercel build logs
3. Ensure all dependencies are in `package.json`
4. Clear Vercel build cache and redeploy

## Local Preview

To preview the production build locally:
```bash
npm run preview
```

This serves the `dist/` folder to test the production build.
