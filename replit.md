# Portfolio Website for Priya Dhurve

## Overview

This is a professional portfolio website for Priya Dhurve, a fashion influencer and medical professional. The application is built as a full-stack web application with a React frontend and Express.js backend, designed to showcase her fashion, lifestyle, and exploration content in an elegant, modern interface.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: Radix UI primitives with custom styling
- **Fonts**: Google Fonts (DM Serif Display, Lora, Poppins) for elegant typography
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **API Design**: RESTful endpoints for contact form submissions
- **Session Storage**: In-memory storage with PostgreSQL fallback

## Key Components

### Frontend Components
1. **Navigation**: Sticky navigation bar with smooth scrolling to sections
2. **Hero Section**: Image carousel showcasing featured photos
3. **About Section**: Professional bio and location information
4. **Editorial Section**: Magazine-style layout for featured fashion content
5. **Polaroids Section**: Instagram-style circular highlights
6. **Gallery Section**: Masonry-style image gallery with lightbox functionality
7. **Contact Section**: Contact form with email and social media links
8. **Lightbox**: Full-screen image viewer for gallery interactions

### Backend Services
1. **Contact API**: Handles form submissions and stores messages
2. **Storage Layer**: Abstracted storage interface with memory and database implementations
3. **Middleware**: Request logging and error handling

## Data Flow

1. **Static Content**: Images and content are served as static assets
2. **Contact Form**: Form submissions flow through React Hook Form validation, TanStack Query mutation, Express API endpoint, and database storage
3. **Image Gallery**: Static images are displayed with client-side lightbox interactions
4. **Navigation**: Smooth scrolling implemented via DOM manipulation and intersection observers

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, React DOM
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **UI Components**: Radix UI component primitives
- **Form Handling**: React Hook Form with Zod validation
- **HTTP Client**: TanStack Query for API calls
- **Icons**: Lucide React
- **Date Handling**: date-fns

### Backend Dependencies
- **Server**: Express.js
- **Database**: Drizzle ORM, Neon serverless PostgreSQL
- **Validation**: Zod for schema validation
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **Replit Integration**: Cartographer and runtime error modal plugins

## Deployment Strategy

### Development
- Vite dev server with hot module replacement
- Express server runs concurrently in development mode
- Static assets served through Vite's asset handling

### Production Build
1. Frontend: Vite builds optimized React application to `dist/public`
2. Backend: esbuild bundles Express server to `dist/index.js`
3. Static serving: Production Express server serves built frontend assets
4. Database: PostgreSQL connection via environment variable

### Vercel Deployment
- **Configuration**: `vercel.json` for serverless functions and routing
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Contact Form**: Automatic fallback to mailto functionality when API unavailable
- **Static Assets**: Optimized serving with Vercel CDN
- **Environment**: Serverless functions for API endpoints

### Environment Configuration
- **Development**: NODE_ENV=development with tsx for server execution
- **Production**: NODE_ENV=production with bundled JavaScript execution
- **Database**: DATABASE_URL environment variable for PostgreSQL connection
- **Vercel**: Automatic environment detection with serverless optimization

## Recent Changes
- **June 29, 2025**: Initial portfolio setup with complete image galleries
- **June 29, 2025**: Added blush pink + beige gradient background with enhanced color palette
- **June 29, 2025**: Updated Instagram links to provided URL with tracking parameters
- **June 29, 2025**: Added all 28 provided images to complete gallery section
- **June 29, 2025**: Implemented glassmorphism design with backdrop blur effects
- **June 29, 2025**: Enhanced navigation with blush pink accents and hover animations
- **June 29, 2025**: Added Vercel deployment configuration with vercel.json and README
- **June 29, 2025**: Implemented contact form with mailto fallback for Vercel deployment
- **June 29, 2025**: Fixed Vercel deployment configuration to resolve 'functions' vs 'builds' property conflict

## User Preferences

Preferred communication style: Simple, everyday language.