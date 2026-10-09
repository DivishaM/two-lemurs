/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E60F2',
          hover: '#1651D0',
        },
        dark: {
          DEFAULT: '#0A0D14',
          card: '#111622',
        },
        surface: {
          light: '#F8FAFC',
          border: '#E2E8F0',
        },
        typography: {
          main: '#0F172A',
          muted: '#475569',
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        /* Avenir Next Custom Utilities */
        '.avenir-400': {
          fontFamily: "'Avenir Next', system-ui, sans-serif",
          fontWeight: '400',
        },
        '.avenir-500': {
          fontFamily: "'Avenir Next', system-ui, sans-serif",
          fontWeight: '500',
        },
        '.avenir-600': {
          fontFamily: "'Avenir Next', system-ui, sans-serif",
          fontWeight: '600',
        },
        '.avenir-700': {
          fontFamily: "'Avenir Next', system-ui, sans-serif",
          fontWeight: '700',
        },

        /* Century Gothic Custom Utilities */
        '.gothic-400': {
          fontFamily: "'Century Gothic Paneuropean', sans-serif",
          fontWeight: '400',
        },
        '.gothic-600': {
          fontFamily: "'Century Gothic Paneuropean', sans-serif",
          fontWeight: '600',
        },
        '.gothic-700': {
          fontFamily: "'Century Gothic Paneuropean', sans-serif",
          fontWeight: '700',
        },
        '.gothic-800': {
          fontFamily: "'Century Gothic Paneuropean', sans-serif",
          fontWeight: '800',
        },
        '.gothic-900': {
          fontFamily: "'Century Gothic Paneuropean', sans-serif",
          fontWeight: '900',
        },
      });
    },
  ],
}
