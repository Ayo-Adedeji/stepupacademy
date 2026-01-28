/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6B21A8',
          light: '#9D7FEA',
          dark: '#4C1D95',
        },
        black: {
          DEFAULT: '#000000',
          light: '#1F1F1F',
        },
        white: {
          DEFAULT: '#FFFFFF',
          light: '#F9F9F9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        card: '0 4px 12px rgba(0,0,0,0.1)',
        hover: '0 6px 20px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '1rem',
      },
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.2' },
          '50%': { transform: 'scale(1.1)', opacity: '0.25' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 15px #9B21A8, 0 0 30px #9B21A880' },
          '50%': { boxShadow: '0 0 25px #9B21A8, 0 0 40px #9B21A8AA' },
        },
        
      },
      animation: {
        'pulse-slow': 'pulseSlow 8s ease-in-out infinite',
        'glow': 'glow 2s infinite alternate',
        
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
