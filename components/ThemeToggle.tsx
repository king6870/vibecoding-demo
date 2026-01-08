'use client';

import { useTheme } from '@/lib/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 rounded-full transition-all duration-300 
                 hover:scale-105 active:scale-95
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-900"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
      role="switch"
    >
      {/* Background track */}
      <div 
        className={`absolute inset-0 rounded-full transition-colors duration-300 ${
          isDark 
            ? 'bg-gradient-to-r from-slate-700 to-slate-800' 
            : 'bg-gradient-to-r from-blue-200 to-blue-300'
        }`} 
      />
      
      {/* Sliding circle */}
      <div 
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white 
                    shadow-lg transition-all duration-300 ease-in-out
                    flex items-center justify-center ${
          isDark ? 'translate-x-8' : 'translate-x-0'
        }`}
      >
        {/* Icon with rotation animation */}
        <span 
          className={`text-sm transition-transform duration-300 ${
            isDark ? 'rotate-0' : 'rotate-180'
          }`}
        >
          {isDark ? '🌙' : '☀️'}
        </span>
      </div>
      
      {/* Optional: Add glow effect */}
      <div 
        className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
          isDark ? 'opacity-20' : 'opacity-0'
        }`}
        style={{
          boxShadow: isDark ? '0 0 20px rgba(96, 165, 250, 0.5)' : 'none'
        }}
      />
    </button>
  );
}
