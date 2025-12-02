# Deploying to Cloudflare Pages

This guide will help you deploy your React website to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account (free tier works)
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Method 1: Deploy via Cloudflare Dashboard (Recommended)

### Step 1: Build Your Project Locally (Test First)

```bash
cd frontend
yarn install
yarn build
```

This creates a `build` folder with your production-ready files.

### Step 2: Connect to Cloudflare Pages

1. **Go to Cloudflare Dashboard**
   - Visit [dash.cloudflare.com](https://dash.cloudflare.com)
   - Log in to your account

2. **Navigate to Pages**
   - Click on "Workers & Pages" in the sidebar
   - Click "Create application"
   - Select "Pages" → "Connect to Git"

3. **Connect Your Repository**
   - Choose your Git provider (GitHub, GitLab, or Bitbucket)
   - Authorize Cloudflare to access your repositories
   - Select your repository: `sriharitha-website`
   - Click "Begin setup"

### Step 3: Configure Build Settings

**Project name:** `sriharitha-website` (or your preferred name)

**Production branch:** `main` (or `master`)

**Build command:**
```bash
cd frontend && npm install && npm run build
```

**OR if you prefer Yarn (requires Yarn 1.x):**
```bash
cd frontend && npm install -g yarn@1.22.19 && yarn install && yarn build
```

**Build output directory:**
```
frontend/build
```

**Root directory (if your repo has frontend folder):**
```
/
```

**Environment variables:** (Optional - add if needed)
- `NODE_VERSION`: `18` or `20` (recommended)
- `DISABLE_ESLINT_PLUGIN`: `true` (to ignore ESLint errors - already configured in package.json build script)

### Step 4: Deploy

1. Click "Save and Deploy"
2. Cloudflare will build and deploy your site
3. Your site will be available at: `https://your-project-name.pages.dev`

### Step 5: Custom Domain (Optional)

1. In your Cloudflare Pages project, go to "Custom domains"
2. Click "Set up a custom domain"
3. Enter your domain name
4. Follow the DNS configuration instructions

## Method 2: Deploy via Wrangler CLI

### Step 1: Install Wrangler

```bash
npm install -g wrangler
# or
yarn global add wrangler
```

### Step 2: Login to Cloudflare

```bash
wrangler login
```

### Step 3: Build Your Project

```bash
cd frontend
yarn build
```

### Step 4: Deploy

```bash
wrangler pages deploy frontend/build --project-name=sriharitha-website
```

## Important Notes

### React Router Configuration

Since you're using React Router, you need to handle client-side routing. Create a `_redirects` file in your `public` folder:

```bash
# Create this file: frontend/public/_redirects
```

Add this content:
```
/*    /index.html   200
```

This ensures all routes are handled by React Router.

### Build Output

- React Scripts builds to `build/` folder
- Cloudflare Pages serves static files from the build directory
- Make sure `build` folder is in `.gitignore` (it should be by default)

### Environment Variables

If you need environment variables:
1. Go to your Cloudflare Pages project
2. Navigate to "Settings" → "Environment variables"
3. Add your variables (e.g., EmailJS keys)

Access them in your code with `process.env.REACT_APP_VARIABLE_NAME`

## Troubleshooting

### Build Fails - ESLint Errors

**If you see "Treating warnings as errors" or ESLint errors:**

The build script is already configured to disable ESLint by setting `DISABLE_ESLINT_PLUGIN=true` in the build command. If you still see errors:

1. **Check package.json build script:**
   - Should be: `"build": "DISABLE_ESLINT_PLUGIN=true react-scripts build"`

2. **Or add environment variable in Cloudflare (if script doesn't work):**
   - Go to Settings → Environment variables
   - Add: `DISABLE_ESLINT_PLUGIN` = `true`

3. **Alternative: Set CI=false in Cloudflare:**
   - Go to Settings → Environment variables
   - Add: `CI` = `false`
   - This prevents warnings from being treated as errors

### Build Fails - Yarn Version Issue

**If you see "The lockfile would have been modified" error:**

This happens when Cloudflare uses Yarn 4.x but your project uses Yarn 1.x. Solutions:

1. **Use npm instead (Recommended):**
   - Change build command to: `cd frontend && npm install && npm run build`

2. **Or force Yarn 1.x:**
   - Add environment variable: `YARN_VERSION=1.22.19`
   - Or use build command: `cd frontend && npm install -g yarn@1.22.19 && yarn install && yarn build`

3. **Or use npm in package.json:**
   - Add `"packageManager": "npm@9.0.0"` to package.json

### Other Build Issues

- Check Node.js version (Cloudflare uses Node 18 by default)
- Ensure all dependencies are in `package.json`
- Check build logs in Cloudflare dashboard

### 404 Errors on Routes

- Make sure `_redirects` file exists in `public/` folder
- Verify the file is copied to `build/` during build

### Assets Not Loading

- Check that all image paths are correct
- Ensure public assets are in the `public/` folder

## Quick Deploy Checklist

- [ ] Code pushed to Git repository
- [ ] `_redirects` file created in `public/` folder
- [ ] Build works locally (`yarn build`)
- [ ] Cloudflare Pages project created
- [ ] Build settings configured correctly
- [ ] Custom domain configured (if needed)

## Post-Deployment

1. Test all pages and routes
2. Verify forms work (EmailJS)
3. Check mobile responsiveness
4. Test performance (Lighthouse)
5. Set up custom domain if needed

Your site will auto-deploy on every push to the main branch!

