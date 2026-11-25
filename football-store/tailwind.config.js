/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rf: {
          pitch: '#0B3B24',       // Deep forest pitch green
          emerald: '#107C41',     // Primary green
          neon: '#00FF66',        // Electric neon green accent
          lime: '#70FF00',        // Vibrant lime
          gold: '#FFD700',        // Champion Gold
          darkGold: '#C5A028',
          black: '#0A0A0A',       // Core pitch black
          dark: '#121212',        // Surface dark
          surface: '#18181B',     // Card surface
          card: '#1F1F23',        // Elevated card
          border: '#27272A',      // Subtle border
          muted: '#94A3B8',       // Secondary text
          light: '#F8FAFC',       // Pure contrast white
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Teko', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px -3px rgba(0, 255, 102, 0.35)',
        'neon-strong': '0 0 35px 2px rgba(0, 255, 102, 0.55)',
        'gold': '0 0 25px -3px rgba(255, 215, 0, 0.4)',
        'pitch': '0 10px 30px -5px rgba(11, 59, 36, 0.5)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.4)',
        'elevated': '0 20px 40px -10px rgba(0, 0, 0, 0.7)'
      },
      backgroundImage: {
        'pitch-pattern': "radial-gradient(circle at 50% 50%, rgba(16, 124, 65, 0.15) 0%, transparent 60%)",
        'stadium-gradient': "linear-gradient(180deg, rgba(10, 10, 10, 0.7) 0%, rgba(10, 10, 10, 0.95) 100%)",
      }
    },
  },
  plugins: [],
}
