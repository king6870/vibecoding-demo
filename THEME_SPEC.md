# Light/Dark Mode Theme System Specification

**Version:** 1.0  
**Date:** January 8, 2026  
**Status:** Feature Specification

---

## 1. Overview

Add a comprehensive theme system to the Business Details application with smooth transitions between light and dark modes. The theme toggle will be accessible from the navigation bar with animated interactions.

### 1.1 Goals
- Implement persistent theme preference using localStorage
- Create smooth, animated transitions between themes
- Add an elegant toggle switch in the top-right navigation
- Ensure all pages and components support both themes
- Maintain accessibility standards (WCAG 2.1 AA)

---

## 2. Technical Architecture

### 2.1 Theme Management Strategy

**Approach:** Next.js 14+ App Router with React Context API

**Key Components:**
- Theme Provider Context for global state
- Local storage for persistence
- CSS variables for dynamic theming
- Tailwind CSS dark mode support

### 2.2 File Structure

```
app/
├── providers/
│   └── ThemeProvider.tsx        # Theme context provider
components/
├── Navigation.tsx               # Updated with theme toggle
├── ThemeToggle.tsx              # Animated toggle button
└── ui/
    └── Button.tsx              # Reusable animated button
lib/
├── hooks/
│   └── useTheme.ts             # Custom hook for theme access
└── utils.ts                    # Updated with theme utilities
```

---

## 3. Implementation Details

### 3.1 Theme Provider Context

**Location:** `app/providers/ThemeProvider.tsx`

**Responsibilities:**
- Manage theme state (light/dark)
- Persist theme preference to localStorage
- Apply theme class to document root
- Provide theme toggle function

**TypeScript Interface:**
```typescript
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: 'light' | 'dark';
  storageKey?: string;
}
```

**Implementation Pseudocode:**
```typescript
// ThemeProvider.tsx
'use client';

export function ThemeProvider({ children, defaultTheme = 'light' }) {
  const [theme, setTheme] = useState<'light' | 'dark'>(defaultTheme);
  
  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);
  
  useEffect(() => {
    // Apply theme to document and save to localStorage
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

---

### 3.2 Custom Theme Hook

**Location:** `lib/hooks/useTheme.ts`

**Purpose:** Provide easy access to theme context

**Interface:**
```typescript
function useTheme(): {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}
```

**Usage Example:**
```typescript
const MyComponent = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
};
```

---

### 3.3 Animated Theme Toggle Button

**Location:** `components/ThemeToggle.tsx`

**Visual Design:**

**Light Mode Toggle:**
```
┌─────────────┐
│  ☀️  ◯───── │  (Sun icon on left, circle on left)
└─────────────┘
```

**Dark Mode Toggle:**
```
┌─────────────┐
│  ─────◯  🌙 │  (Moon icon on right, circle on right)
└─────────────┘
```

**Animation Specifications:**
- Toggle transition: 300ms ease-in-out
- Icon rotation: 180° on theme change
- Background color fade: 200ms
- Scale effect on hover: 1.05
- Smooth slide animation for toggle circle

**Component Structure:**
```typescript
// ThemeToggle.tsx
'use client';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full transition-all duration-300 
                 hover:scale-105 focus:outline-none focus:ring-2"
      aria-label="Toggle theme"
    >
      {/* Background track */}
      <div className={`absolute inset-0 rounded-full transition-colors ${
        isDark ? 'bg-slate-700' : 'bg-blue-200'
      }`} />
      
      {/* Sliding circle */}
      <div className={`absolute top-1 w-6 h-6 rounded-full bg-white 
                      shadow-md transition-transform duration-300 ${
        isDark ? 'translate-x-9' : 'translate-x-1'
      }`}>
        {/* Icon inside circle */}
        <span className="flex items-center justify-center h-full">
          {isDark ? '🌙' : '☀️'}
        </span>
      </div>
    </button>
  );
}
```

---

### 3.4 Animated Button Component

**Location:** `components/ui/Button.tsx`

**Purpose:** Reusable button with theme-aware styling and animations

**Variants:**
- `primary`: Main action buttons
- `secondary`: Secondary actions
- `ghost`: Transparent buttons
- `outline`: Outlined buttons

**Animation Effects:**
- Hover: Scale 1.02, shadow increase
- Active: Scale 0.98
- Focus: Ring animation
- Loading state: Spinner animation

**TypeScript Interface:**
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}
```

**Implementation:**
```typescript
// Button.tsx
export function Button({ 
  variant = 'primary', 
  size = 'md', 
  isLoading,
  children,
  className,
  ...props 
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center rounded-lg font-medium
    transition-all duration-200 ease-in-out
    hover:scale-[1.02] active:scale-[0.98]
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;
  
  const variants = {
    primary: `
      bg-blue-600 text-white hover:bg-blue-700
      dark:bg-blue-500 dark:hover:bg-blue-600
      focus:ring-blue-500
    `,
    secondary: `
      bg-gray-200 text-gray-900 hover:bg-gray-300
      dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600
      focus:ring-gray-500
    `,
    // ... other variants
  };
  
  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {isLoading && <Spinner />}
      {children}
    </button>
  );
}
```

---

## 4. Theme Color Palette

### 4.1 Light Mode Colors

```css
:root {
  /* Backgrounds */
  --background: #ffffff;
  --background-secondary: #f9fafb;
  --background-tertiary: #f3f4f6;
  
  /* Foregrounds */
  --foreground: #111827;
  --foreground-secondary: #6b7280;
  --foreground-tertiary: #9ca3af;
  
  /* Borders */
  --border: #e5e7eb;
  --border-hover: #d1d5db;
  
  /* Primary */
  --primary: #3b82f6;
  --primary-hover: #2563eb;
  --primary-foreground: #ffffff;
  
  /* Accent */
  --accent: #8b5cf6;
  --accent-hover: #7c3aed;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}
```

### 4.2 Dark Mode Colors

```css
.dark {
  /* Backgrounds */
  --background: #0f172a;
  --background-secondary: #1e293b;
  --background-tertiary: #334155;
  
  /* Foregrounds */
  --foreground: #f1f5f9;
  --foreground-secondary: #cbd5e1;
  --foreground-tertiary: #94a3b8;
  
  /* Borders */
  --border: #334155;
  --border-hover: #475569;
  
  /* Primary */
  --primary: #60a5fa;
  --primary-hover: #3b82f6;
  --primary-foreground: #0f172a;
  
  /* Accent */
  --accent: #a78bfa;
  --accent-hover: #8b5cf6;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.3);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.2);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.3);
}
```

---

## 5. Tailwind CSS Configuration

### 5.1 Update tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          hover: 'var(--primary-hover)',
          foreground: 'var(--primary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
        },
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-in': 'fadeIn 0.2s ease-in',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
```

---

## 6. Global Styles Update

### 6.1 Update app/globals.css

Add CSS variables and smooth transitions:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Light mode colors */
  --background: #ffffff;
  --foreground: #111827;
  /* ... other variables */
  
  /* Transition timing */
  --transition-speed: 200ms;
}

.dark {
  /* Dark mode colors */
  --background: #0f172a;
  --foreground: #f1f5f9;
  /* ... other variables */
}

/* Smooth theme transitions */
* {
  @apply transition-colors;
  transition-duration: var(--transition-speed);
}

/* Prevent transition on page load */
.no-transition * {
  transition: none !important;
}

body {
  @apply bg-background text-foreground;
}

/* Custom scrollbar for dark mode */
.dark::-webkit-scrollbar {
  width: 12px;
}

.dark::-webkit-scrollbar-track {
  @apply bg-gray-800;
}

.dark::-webkit-scrollbar-thumb {
  @apply bg-gray-600 rounded-lg;
}

.dark::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-500;
}
```

---

## 7. Component Updates

### 7.1 Navigation Component

**Update:** Add ThemeToggle to the right side of navigation

```typescript
// components/Navigation.tsx
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  return (
    <nav className="bg-background border-b border-border shadow-sm 
                    dark:bg-background dark:border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Business Name
          </Link>
          
          <ul className="flex items-center space-x-8">
            {/* Navigation links */}
            <li><Link href="/">Home</Link></li>
            <li><Link href="/people">Our Team</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            
            {/* Theme toggle */}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
```

### 7.2 Update All Pages

Add dark mode support to all page components:

**Homepage (app/page.tsx):**
- Hero section: `dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800`
- Text: `dark:text-gray-100`
- Cards: `dark:bg-gray-800 dark:border-gray-700`

**People Page (app/people/page.tsx):**
- Background: `dark:bg-gray-900`
- Cards: `dark:bg-gray-800 dark:hover:bg-gray-750`
- Text: `dark:text-gray-100`

**Contact Page (app/contact/page.tsx):**
- Form inputs: `dark:bg-gray-800 dark:border-gray-600 dark:text-white`
- Cards: `dark:bg-gray-800`

### 7.3 Footer Component

**Update:** Add dark mode styling

```typescript
// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
      {/* Footer content */}
    </footer>
  );
}
```

---

## 8. Accessibility Considerations

### 8.1 ARIA Labels

```typescript
<button
  onClick={toggleTheme}
  aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
  aria-pressed={theme === 'dark'}
  role="switch"
>
```

### 8.2 Keyboard Navigation

- Theme toggle must be keyboard accessible
- Focus states clearly visible in both themes
- Tab order maintained properly

### 8.3 Reduced Motion

Respect user's motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 8.4 Color Contrast

- Light mode: Minimum 4.5:1 contrast ratio
- Dark mode: Minimum 4.5:1 contrast ratio
- Focus indicators: 3:1 contrast ratio

---

## 9. Testing Checklist

### 9.1 Functionality
- [ ] Theme toggles between light and dark
- [ ] Theme persists after page reload
- [ ] Theme persists across navigation
- [ ] System preference detection works
- [ ] localStorage handles errors gracefully

### 9.2 Visual
- [ ] All text readable in both themes
- [ ] No flash of unstyled content (FOUC)
- [ ] Smooth transitions between themes
- [ ] Animations work in both themes
- [ ] Images/icons adapt to theme

### 9.3 Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader announces theme changes
- [ ] Focus indicators visible in both themes
- [ ] Color contrast meets WCAG AA
- [ ] Reduced motion preference respected

### 9.4 Cross-browser
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

---

## 10. Implementation Phases

### Phase 1: Foundation (Core Theme System)
1. Create ThemeProvider context
2. Create useTheme hook
3. Update root layout with ThemeProvider
4. Add CSS variables to globals.css
5. Configure Tailwind for dark mode

### Phase 2: Theme Toggle UI
1. Create ThemeToggle component with animations
2. Update Navigation component
3. Test toggle functionality
4. Add localStorage persistence

### Phase 3: Component Updates
1. Update Homepage with dark mode styles
2. Update People page with dark mode styles
3. Update Contact page with dark mode styles
4. Update Footer component

### Phase 4: Animated Button Component
1. Create reusable Button component
2. Add variants and animations
3. Replace existing buttons across pages

### Phase 5: Polish & Testing
1. Add smooth transitions
2. Test all pages and components
3. Accessibility audit
4. Performance optimization

---

## 11. Performance Considerations

### 11.1 Prevent FOUC (Flash of Unstyled Content)

Use inline script in root layout to apply theme before React hydration:

```typescript
<script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        const theme = localStorage.getItem('theme') || 'light';
        document.documentElement.classList.add(theme);
      })();
    `,
  }}
/>
```

### 11.2 Optimize Animations

- Use CSS transforms instead of position properties
- Use `will-change` for animated elements
- Debounce theme toggle to prevent rapid switches

---

## 12. Future Enhancements

### 12.1 System Preference Detection

Automatically detect user's OS theme preference:

```typescript
useEffect(() => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const handleChange = (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  };
  mediaQuery.addEventListener('change', handleChange);
  return () => mediaQuery.removeEventListener('change', handleChange);
}, []);
```

### 12.2 Multiple Theme Options

Extend beyond light/dark to include:
- Auto (follows system)
- Custom themes (blue, purple, etc.)

### 12.3 Per-Component Theme Overrides

Allow specific components to override global theme

---

**End of Theme System Specification**
