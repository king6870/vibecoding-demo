# Business Details Application - Technical Specification

**Version:** 1.0  
**Date:** January 5, 2026  
**Status:** Initial Specification

---

## 1. Project Overview

A modern Next.js web application to display comprehensive business information including team members, company overview, and contact details. The application is designed with future scalability in mind for Google Authentication integration and Vercel deployment.

### 1.1 Goals
- Provide an intuitive interface for showcasing business information
- Maintain clean, maintainable TypeScript codebase
- Support future authentication and deployment requirements
- Enable easy content updates and management

---

## 2. Technology Stack

### 2.1 Frontend
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript 5+
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (optional)
- **Package Manager:** npm or pnpm

### 2.2 Backend/API
- **Language:** Python 3.11+
- **Framework:** FastAPI (for future API endpoints)
- **Environment:** Virtual environment (venv)

### 2.3 Future Integrations
- **Authentication:** Google OAuth 2.0 (NextAuth.js)
- **Deployment:** Vercel
- **Database:** (TBD - Vercel Postgres or MongoDB)

---

## 3. Application Architecture

### 3.1 Directory Structure

```
vibecoding/
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Homepage
│   ├── people/
│   │   └── page.tsx              # People/Team page
│   ├── contact/
│   │   └── page.tsx              # Contact & Info page
│   └── globals.css               # Global styles
├── components/
│   ├── Navigation.tsx            # Main navigation component
│   ├── Footer.tsx                # Footer component
│   └── ui/                       # Reusable UI components
├── lib/
│   ├── types.ts                  # TypeScript type definitions
│   └── utils.ts                  # Utility functions
├── public/
│   └── images/                   # Static assets
├── api/                          # Python FastAPI backend
│   ├── main.py                   # FastAPI app entry point
│   ├── routes/                   # API route handlers
│   └── models/                   # Data models
├── .env.local                    # Environment variables
├── .gitignore
├── next.config.js
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── req.txt                       # Python requirements
└── README.md
```

---

## 4. Page Specifications

### 4.1 Homepage (`/`)

**Purpose:** Landing page showcasing business overview and value proposition

**Layout:**
- Hero section with company name and tagline
- Brief description of business
- Key highlights or statistics
- Call-to-action buttons

**TypeScript Interface:**
```typescript
interface HomePageData {
  companyName: string;
  tagline: string;
  description: string;
  highlights: Highlight[];
  ctaButtons: CTAButton[];
}

interface Highlight {
  id: string;
  title: string;
  value: string;
  icon?: string;
}

interface CTAButton {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}
```

**Component Example:**
```typescript
// app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="hero-section">
        {/* Hero content */}
      </section>
      <section className="highlights-section">
        {/* Business highlights */}
      </section>
    </main>
  );
}
```

---

### 4.2 People Page (`/people`)

**Purpose:** Display team members, leadership, and key personnel

**Layout:**
- Grid layout of team member cards
- Filterable by department/role
- Individual profiles with photo, name, title, bio

**TypeScript Interface:**
```typescript                
interface TeamMember {                
  id: string;                
  name: string;                
  title: string;                
  department: string;                
  bio: string;                
  photo?: string;                
  email?: string;                
  linkedin?: string;                
}

interface PeoplePageData {
  departments: string[];
  teamMembers: TeamMember[];
}
```

**Component Example:**
```typescript            
// app/people/page.tsx            
export default function PeoplePage() {            
  return (            
    <main className="container mx-auto py-12">            
      <h1 className="text-4xl font-bold mb-8">Our Team</h1>            
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">            
        {/* Team member cards */}            
      </div>            
    </main>            
  );            
}            
```

---

### 4.3 Contact & Info Page (`/contact`)

**Purpose:** Provide contact information, location, business hours, and additional details

**Layout:**
- Contact form
- Business address and map
- Phone, email, social media links
- Business hours
- Additional business information

**TypeScript Interface:**
```typescript
interface ContactInfo {
  address: Address;
  phone: string;
  email: string;
  socialMedia: SocialMediaLinks;
  businessHours: BusinessHours[];
}

interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface SocialMediaLinks {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

interface BusinessHours {
  day: string;
  hours: string;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
```

**Component Example:**
```typescript
// app/contact/page.tsx
export default function ContactPage() {
  return (
    <main className="container mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <section>
          {/* Contact form */}
        </section>
        <section>
          {/* Contact information */}
        </section>
      </div>
    </main>
  );
}
```

---

## 5. Shared Components

### 5.1 Navigation Component

```typescript
// components/Navigation.tsx
import Link from 'next/link';

export default function Navigation() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/people', label: 'Our Team' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Business Name
          </Link>
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-blue-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
```

### 5.2 Footer Component

```typescript
// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2026 Business Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
```

### 5.3 Root Layout

```typescript
// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Business Details',
  description: 'Comprehensive business information and team directory',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

---

## 6. Python Backend API (Future)

### 6.1 FastAPI Application Structure

```python
# api/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Business Details API", version="1.0.0")

# CORS configuration for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Business Details API"}

@app.get("/api/team")
async def get_team_members():
    # Future: Return team members from database
    return {"team_members": []}

@app.get("/api/contact")
async def get_contact_info():
    # Future: Return contact information
    return {"contact_info": {}}
```

### 6.2 Data Models

```python
# api/models/team.py
from pydantic import BaseModel
from typing import Optional

class TeamMember(BaseModel):
    id: str
    name: str
    title: str
    department: str
    bio: str
    photo: Optional[str] = None
    email: Optional[str] = None
    linkedin: Optional[str] = None

class TeamResponse(BaseModel):
    team_members: list[TeamMember]
    total: int
```

---

## 7. Future Feature: Google Authentication

### 7.1 Implementation Plan

**Package:** NextAuth.js v5 (Auth.js)

**Configuration:**
```typescript
// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
```

**Environment Variables:**
```
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
```

### 7.2 Protected Routes Example

```typescript
// middleware.ts
export { default } from "next-auth/middleware";

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*']
};
```

---

## 8. Vercel Deployment Configuration

### 8.1 Vercel Configuration

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

### 8.2 Environment Variables Setup

1. Add environment variables in Vercel dashboard
2. Configure production, preview, and development environments
3. Set up domain and SSL certificates

### 8.3 Deployment Workflow

```bash
# Automatic deployment
git push origin main  # Deploys to production

# Preview deployment
git push origin feature-branch  # Creates preview deployment
```

---

## 9. Development Setup

### 9.1 Initial Setup Commands

```bash
# Create Next.js application
npx create-next-app@latest vibecoding --typescript --tailwind --app --no-src-dir

# Install additional dependencies
npm install next-auth
npm install -D @types/node

# Python virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r req.txt

# Run development servers
npm run dev              # Next.js on http://localhost:3000
uvicorn api.main:app --reload  # FastAPI on http://localhost:8000
```

### 9.2 Scripts

```json
// package.json scripts
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  }
}
```

---

## 10. Data Management

### 10.1 Initial Data Structure

For the initial version, data will be stored as TypeScript constants:

```typescript
// lib/data/businessData.ts
export const businessInfo = {
  companyName: "Your Business Name",
  tagline: "Your Business Tagline",
  description: "Business description goes here",
};

export const teamMembers = [
  // Team member data
];

export const contactInfo = {
  // Contact information
};
```

### 10.2 Future Database Integration

- **Option 1:** Vercel Postgres
- **Option 2:** MongoDB Atlas
- **Option 3:** Supabase

---

## 11. Testing Strategy

### 11.1 Unit Testing
- Jest for component testing
- React Testing Library
- Python pytest for API testing

### 11.2 E2E Testing
- Playwright or Cypress for end-to-end testing

---

## 12. Performance Considerations

### 12.1 Next.js Optimizations
- Server-side rendering for initial page loads
- Static generation where appropriate
- Image optimization with next/image
- Code splitting and lazy loading

### 12.2 Monitoring
- Vercel Analytics
- Error tracking (Sentry)
- Performance monitoring

---

## 13. Security Considerations

- Environment variable protection
- Input validation and sanitization
- CORS configuration
- Rate limiting for API endpoints
- HTTPS enforcement in production
- CSP (Content Security Policy) headers

---

## 14. Accessibility

- WCAG 2.1 AA compliance
- Semantic HTML
- ARIA labels where necessary
- Keyboard navigation support
- Screen reader compatibility

---

## 15. Implementation Phases

### Phase 1: Foundation (Current)
- [ ] Create Next.js application structure
- [ ] Set up TypeScript configuration
- [ ] Implement basic routing
- [ ] Create blank page templates
- [ ] Set up Tailwind CSS

### Phase 2: Content & Design
- [ ] Design system and UI components
- [ ] Populate pages with content
- [ ] Responsive design implementation
- [ ] Add images and assets

### Phase 3: Backend Integration
- [ ] Set up FastAPI backend
- [ ] Create API endpoints
- [ ] Connect frontend to backend
- [ ] Data persistence layer

### Phase 4: Authentication
- [ ] Google OAuth setup
- [ ] User session management
- [ ] Protected routes
- [ ] User profile page

### Phase 5: Deployment
- [ ] Vercel configuration
- [ ] Environment setup
- [ ] Domain configuration
- [ ] Production deployment

---

## 16. Maintenance & Updates

- Regular dependency updates
- Security patch management
- Performance monitoring and optimization
- Content updates workflow

---

**End of Specification**
