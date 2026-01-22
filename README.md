# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS.

## ✨ Features

- 🎨 Modern and responsive design with beautiful animations
- 📱 Mobile-first approach
- 🚀 Fast performance with Next.js 15
- 📧 Contact form with EmailJS integration
- 🔍 Project filtering and search
- 📖 Detailed project pages
- 🎛️ Built-in Admin Panel - Edit your portfolio content directly from the website
- 🔑 Multiple access methods - Keyboard shortcuts, secret codes, or direct links
- 📤 Import/Export functionality for easy data management
- 🚀 First-time setup wizard for quick customization

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🛠️ Technologies

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **EmailJS** - Contact form handling

## 📦 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Prerequisites

1. Push your code to a GitHub repository
2. Ensure your default branch is `master` (or update the workflow file if using `main`)

### Setup Steps

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
   - Save the settings

2. **Configure Base Path (if needed):**
   - If deploying to a **project repository** (e.g., `username.github.io/Portfolio`):
     - Open `next.config.ts`
     - Uncomment the `basePath` line and set it to your repository name:
     ```typescript
     basePath: '/Portfolio',
     ```
   - If deploying to a **user/organization page** (e.g., `username.github.io`):
     - Leave the `basePath` commented out in `next.config.ts`

3. **Push to trigger deployment:**
   - Push your code to the `master` branch
   - GitHub Actions will automatically build and deploy your site
   - Check the **Actions** tab in your repository to monitor the deployment

4. **Access your site:**
   - Your site will be available at:
     - Project repository: `https://username.github.io/Portfolio`
     - User/Organization page: `https://username.github.io`

### Manual Deployment

You can also manually trigger a deployment:
- Go to **Actions** tab in your repository
- Select **Deploy to GitHub Pages** workflow
- Click **Run workflow**

### Troubleshooting

- If images aren't loading, ensure `images.unoptimized: true` is set in `next.config.ts` (already configured)
- If routes aren't working, check that `trailingSlash: true` is set (already configured)
- Make sure GitHub Actions has the necessary permissions (configured in the workflow file)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
