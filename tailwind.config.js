/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        primary: {
          50: '#E6FFFD',
          100: '#B3FFF8',
          200: '#80FFF4',
          300: '#4DFFF0',
          400: '#1AFFEC',
          500: '#00E6D4', // Main turquoise
          600: '#00B3A6',
          700: '#008078',
          800: '#004D49',
          900: '#001A1B',
        },
        dark: {
          100: '#262626',
          200: '#1E1E1E',
          300: '#171717',
          400: '#121212',
          500: '#0A0A0A', // Main black
          600: '#080808',
          700: '#050505',
          800: '#030303',
          900: '#000000',
        },
        light: {
          100: '#FFFFFF',
          200: '#F2F2F2',
          300: '#E6E6E6',
          400: '#D9D9D9',
          500: '#CCCCCC',
          600: '#BFBFBF',
          700: '#B3B3B3',
          800: '#A6A6A6',
          900: '#999999',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Lato', 'sans-serif'],
      },
      animation: {
        'cursor-blink': 'blink 1s step-start infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};