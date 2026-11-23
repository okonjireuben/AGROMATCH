/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agro: {
          forest: '#14532D',
          green: '#16A34A',
          lime: '#84CC16',
          cream: '#F8FAF5',
          dark: '#17251B',
          accent: '#EAB308',
          sand: '#F3F4ED',
          border: '#E2E8F0',
          muted: '#64748B'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(20, 83, 45, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'elevated': '0 12px 30px -4px rgba(20, 83, 45, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 25px rgba(22, 163, 74, 0.25)',
      }
    },
  },
  plugins: [],
}
