# Christian Thams - Portfolio Website

A modern, responsive portfolio website showcasing industrial design and product development projects.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Hook Form** - Form validation

## Getting Started

### Prerequisites

- Node.js 18+ (Node.js 20+ recommended for full compatibility)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── projects/          # Projects gallery and detail pages
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # Reusable React components
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer
│   └── ProjectCard.tsx   # Project card component
├── data/                  # Data files
│   └── projects.ts       # Project data
├── public/               # Static assets
│   └── projects/         # Project images
├── .github/workflows/    # GitHub Actions
└── scripts/              # Utility scripts
```

## Adding New Projects

To add a new project:

1. Add project images to `public/projects/your-project-id/`
2. Edit `data/projects.ts` and add your project:

```typescript
{
  id: 'your-project-id',
  title: 'Your Project Title',
  description: 'Brief description...',
  category: 'Product Design',
  thumbnail: '/projects/your-project-id/thumbnail.jpg',
  images: ['/projects/your-project-id/image1.jpg'],
  featured: true,
  details: {
    role: 'Your Role',
    timeline: '2024',
    tools: ['Tool1', 'Tool2'],
    overview: 'Detailed overview...',
  },
}
```

## Deployment

This site is configured for automatic deployment to GitHub Pages.

### Setup GitHub Pages

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. Go to your repository settings on GitHub
3. Navigate to **Settings > Pages**
4. Under **Build and deployment**, select **GitHub Actions** as the source
5. The site will automatically deploy on every push to main

### Custom Domain Setup

1. In your repository, ensure `public/CNAME` contains your domain (already configured with `christianthams.com`)
2. In your domain registrar (one.com), add DNS records:
   - **A Record**: Point to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or **CNAME Record**: Point to `yourusername.github.io`
3. Wait for DNS propagation (can take up to 24-48 hours)
4. In GitHub repository settings > Pages, enter your custom domain
5. Enable "Enforce HTTPS"

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

The site uses a minimal gray palette. To customize colors, edit Tailwind classes in the components or extend `tailwind.config.ts`.

### Fonts

The site uses Inter font. To change it, edit `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";
```

### Content

- **Personal info**: Update `components/Header.tsx`, `components/Footer.tsx`, and `app/about/page.tsx`
- **Projects**: Edit `data/projects.ts`
- **Contact info**: Update `app/contact/page.tsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Christian Thams. All rights reserved.

## Contact

For questions or collaboration opportunities:
- Email: hello@christianthams.com
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/christian-thams-15a302a4/)
