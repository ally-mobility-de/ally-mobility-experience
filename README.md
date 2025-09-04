# ally-mobility Website

A modern, responsive website for ally-mobility's heavy-duty electric bicycle trailers with modular components.

## Features

- **Product Showcase**: Interactive product preview with hotspots for detailed specifications
- **Modular Design**: Three trailer types - Flatbed, Box, and Swap Container
- **Use Cases**: Comprehensive coverage of delivery, logistics, trades, and municipal applications
- **Community Content**: Dynamic carousel of articles and press coverage
- **Contact Integration**: Direct email integration for inquiries and test ride bookings
- **Dealer Program**: Information and signup for dealer partnerships

## Design System

- **Colors**: Custom brand palette with primary green (#007744) and aqua accents (#68C3A2)
- **Typography**: Inter font family for modern, readable text
- **Components**: Fully styled with Tailwind CSS and custom component variants
- **Responsive**: Mobile-first design optimized for all screen sizes
- **Animations**: Smooth transitions and hover effects throughout

## Technology Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **shadcn/ui** components
- **Lucide React** for icons

## Performance & SEO

- **Optimized Images**: Modern formats with lazy loading
- **SEO Ready**: Proper meta tags, structured data, and semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation, and high contrast
- **Fast Loading**: Optimized assets and efficient code splitting

## Deployment

This website is designed for GitHub Pages deployment:

1. Push to your GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main` or `gh-pages`)
4. Your site will be available at `https://yourusername.github.io/repository-name`

### Custom Domain Setup

To use a custom domain:

1. Add a `CNAME` file to the `public` directory with your domain name
2. Configure DNS records with your domain provider
3. Enable HTTPS in GitHub Pages settings

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
/
├── public/                 # Static assets
│   ├── robots.txt         # SEO robot instructions
│   ├── sitemap.xml        # SEO sitemap
│   └── favicon.ico        # Site favicon
├── src/
│   ├── assets/           # Images and media
│   ├── components/       # React components
│   │   ├── ui/          # Reusable UI components
│   │   ├── Header.tsx   # Navigation header
│   │   ├── HeroSection.tsx
│   │   ├── ProductPreview.tsx
│   │   ├── ValuesBanner.tsx
│   │   ├── ProductRange.tsx
│   │   ├── CTABanner.tsx
│   │   ├── Community.tsx
│   │   ├── UseCases.tsx
│   │   ├── TestRideBanner.tsx
│   │   ├── DealerCTA.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   └── Index.tsx     # Main page
│   ├── index.css         # Global styles & design system
│   └── main.tsx          # App entry point
├── tailwind.config.ts    # Tailwind configuration
├── index.html            # HTML template
└── README.md            # This file
```

## Contact

For questions about this website or ally-mobility products:
- Email: contact@ally-mobility.com
- Website: https://ally-mobility.com

## License

© 2024 ally-mobility. All rights reserved.