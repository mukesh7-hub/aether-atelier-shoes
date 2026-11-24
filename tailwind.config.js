/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#030712',
          900: '#070b18',
          850: '#0a1024',
          800: '#0e1731',
        },
        navy: {
          950: '#050c1f',
          900: '#09132d',
          800: '#0e1d44',
          700: '#152b61',
        },
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Cinzel', 'Playfair Display', 'serif'],
      },
      backgroundImage: {
        'radial-gradient-navy': 'radial-gradient(circle at top, rgba(14, 29, 68, 0.45) 0%, rgba(3, 7, 18, 0.98) 75%)',
        'radial-accent': 'radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.15) 0%, rgba(5, 12, 31, 0) 65%)',
        'gold-shimmer': 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 50%, #d97706 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-gold': '0 0 25px -5px rgba(245, 158, 11, 0.3)',
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
