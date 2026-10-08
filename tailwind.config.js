/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    container: false,  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary, #1E60F2)',
          hover: 'var(--color-primary-hover, #1651D0)',
        },
        dark: {
          DEFAULT: 'var(--color-dark, #0A0D14)',
          card: 'var(--color-dark-card, #111622)',
        },
        surface: {
          light: 'var(--color-light-surface, #F8FAFC)',
          border: 'var(--color-border, #E2E8F0)',
        },
        typography: {
          main: 'var(--color-text-main, #0F172A)',
          muted: 'var(--color-text-muted, #64748B)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
