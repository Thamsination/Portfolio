# Deployment Guide - GitHub Pages

This guide will help you deploy your portfolio website to GitHub Pages with your custom domain `christianthams.com`.

## Prerequisites

- GitHub account (you mentioned you have one)
- Git installed (✓ already set up)
- Portfolio built successfully (✓ completed)

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right and select **New repository**
3. Repository settings:
   - **Name**: `portfolio` (or any name you prefer)
   - **Description**: "Industrial Design Portfolio Website"
   - **Visibility**: Public (required for free GitHub Pages) or Private (requires GitHub Pro)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **Create repository**

## Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
cd /home/thamsination/portfolio

# Rename branch from master to main (GitHub's default)
git branch -M main

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push your code
git push -u origin main
```

**Example** (replace `christianthams` with your actual GitHub username):
```bash
git remote add origin https://github.com/christianthams/portfolio.git
git push -u origin main
```

You'll be prompted for your GitHub credentials. If you have 2FA enabled, you'll need to use a Personal Access Token instead of your password.

### Creating a Personal Access Token (if needed):

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Give it a name like "Portfolio Deployment"
4. Select scopes: `repo` (full control of private repositories)
5. Generate token and copy it
6. Use this token as your password when pushing

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
   - This will use the workflow file we created at `.github/workflows/deploy.yml`
5. Click **Save**

## Step 4: Verify Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow run called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, your site will be live at: `https://YOUR_USERNAME.github.io/portfolio/`

## Step 5: Configure Custom Domain (christianthams.com)

### A. In GitHub:

1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter: `christianthams.com`
3. Click **Save**
4. Wait for DNS check (may show pending initially)

### B. In one.com (Your Domain Registrar):

You need to update DNS records at one.com:

#### Option 1: Using A Records (Recommended)

1. Log in to your one.com account
2. Go to DNS settings for `christianthams.com`
3. Delete or disable the existing A record pointing to WordPress
4. Add these 4 A records pointing to GitHub Pages:

```
Type: A    Host: @    Value: 185.199.108.153    TTL: 3600
Type: A    Host: @    Value: 185.199.109.153    TTL: 3600
Type: A    Host: @    Value: 185.199.110.153    TTL: 3600
Type: A    Host: @    Value: 185.199.111.153    TTL: 3600
```

5. Add a CNAME record for www subdomain:

```
Type: CNAME    Host: www    Value: YOUR_USERNAME.github.io    TTL: 3600
```

#### Option 2: Using CNAME Record (Alternative)

If one.com doesn't allow multiple A records at the apex:

```
Type: CNAME    Host: @    Value: YOUR_USERNAME.github.io    TTL: 3600
Type: CNAME    Host: www    Value: YOUR_USERNAME.github.io    TTL: 3600
```

### C. Wait for DNS Propagation

- DNS changes can take 1-48 hours to propagate worldwide
- Usually takes 15 minutes to a few hours
- Check status: https://dnschecker.org/

### D. Enable HTTPS

1. After DNS propagates, go back to GitHub repository **Settings** → **Pages**
2. Check **Enforce HTTPS** (may take a few minutes to become available)
3. GitHub will automatically provision an SSL certificate

## Step 6: Verify Everything Works

1. Visit `https://christianthams.com` in your browser
2. Verify your portfolio loads correctly
3. Check that HTTPS is working (padlock icon in browser)
4. Test all pages: Home, Projects, About, Contact
5. Test navigation and animations

## Future Updates

To update your portfolio:

1. Make changes to your code locally
2. Test with `npm run dev`
3. Commit changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
4. Push to GitHub:
   ```bash
   git push
   ```
5. GitHub Actions will automatically rebuild and deploy (2-3 minutes)

## Troubleshooting

### Site not loading after DNS change:
- Wait longer (DNS can take up to 48 hours)
- Clear your browser cache
- Try in incognito/private mode
- Check DNS propagation: https://dnschecker.org/

### GitHub Actions workflow failing:
- Check the Actions tab for error messages
- Ensure all dependencies are in package.json
- Verify next.config.js has `output: 'export'`

### Images not loading:
- Ensure images are in the `public/` directory
- Check that paths start with `/` (e.g., `/projects/...`)
- Verify images were committed to git

### Custom domain not working:
- Verify CNAME file exists in `public/CNAME` with your domain
- Check DNS records are correct at one.com
- Wait for DNS propagation
- Ensure "Enforce HTTPS" is checked in GitHub Pages settings

## Need Help?

If you encounter issues:
1. Check the GitHub Actions logs in the Actions tab
2. Verify DNS settings at one.com
3. Check GitHub Pages documentation: https://docs.github.com/en/pages

---

## Quick Reference Commands

```bash
# Check git status
git status

# View commit history
git log --oneline

# Create a new branch for experiments
git checkout -b feature-name

# Switch back to main branch
git checkout main

# Pull latest changes (if working from multiple computers)
git pull

# View remote repository
git remote -v
```

## What's Already Configured

✅ Next.js configured for static export
✅ GitHub Actions workflow created
✅ CNAME file with your domain
✅ .nojekyll file for GitHub Pages
✅ Responsive design
✅ SEO metadata
✅ All pages built and tested

You're ready to deploy! 🚀

