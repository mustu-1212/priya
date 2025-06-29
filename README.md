# Priya Dhurve Portfolio

A professional portfolio website for fashion influencer and medical professional Priya Dhurve, featuring elegant blush pink and beige design with glassmorphism effects.

## Features

- Responsive design with modern glassmorphism aesthetics
- Image galleries with lightbox functionality
- Contact form with email fallback
- Smooth scrolling navigation
- Professional typography with Google Fonts
- Optimized for performance and SEO

## Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Backend**: Express.js + Node.js
- **Database**: PostgreSQL (optional)
- **Deployment**: Vercel-ready

## Deployment on Vercel

### Quick Deploy

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

### Environment Variables (Optional)

If using database features:
- `DATABASE_URL`: PostgreSQL connection string

### Build Configuration

The project is pre-configured for Vercel with:
- `vercel.json` for routing and serverless functions
- Automatic static file serving
- API routes at `/api/*`

### Contact Form

The contact form automatically falls back to `mailto:` functionality when deployed on Vercel, ensuring reliable message delivery without requiring external email services.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Color Scheme

- **Blush Pink**: Soft pink tones for accents
- **Beige**: Warm neutral backgrounds
- **Deep Blush**: Interactive elements and highlights
- **Charcoal**: Text and contrast elements

## Contact

For collaboration inquiries, visit the contact section on the website.