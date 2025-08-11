/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-obsidian': '#0A0E1A',
        'brand-gold': '#D4AF37',
        'brand-parchment': '#F4E8D0',
        'brand-copper': '#B87333',
        'brand-ink': '#2C1810',
        'brand-dust': 'rgba(212, 175, 55, 0.1)',
      },
      fontFamily: {
        'serif-ge': ['"Noto Serif Georgian"', 'serif'],
        'serif-en': ['"Merriweather"', 'serif'],
      },
      backgroundImage: {
        'noise-texture': "url('/textures/paper-noise.png')",
        'gradient-radial-dark': 'radial-gradient(ellipse at center, #1a1a2e 0%, #0A0E1A 100%)',
      }
      ,animation: {
        'float': 'float 6s ease-in-out infinite',
        'dust': 'dust 10s infinite',
        'page-turn': 'pageTurn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'book-breathe': 'breathe 4s ease-in-out infinite',
      },
      boxShadow: {
        'book': '0 20px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(212, 175, 55, 0.2)',
        'golden-glow': '0 0 30px rgba(212, 175, 55, 0.3)',
      }
    }
  },
  plugins: [],
}
