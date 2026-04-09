/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
       fontFamily: {
        sans: ['DM Sans', 'Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        primary: 'var(--color-primary)',
        'text-main': 'var(--color-text)',
        border: 'var(--color-border)',
      }
    },
  },
  plugins: [],
}