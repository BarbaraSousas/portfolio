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
        // Light mode - earthy/neutral tones
        cream: '#FAF7F0',
        beige: '#F5F1E8',
        'brown-light': '#D4C4B0',
        brown: '#8B7355',
        'brown-dark': '#5C4E3F',
        brick: '#C1554D',
        'brick-light': '#D67C75',

        // Dark mode - earthy dark tones
        'dark-bg': '#2A2520',
        'dark-surface': '#3D3935',
        'dark-border': '#564F4A',
        'dark-text': '#E8E3DC',
        'dark-text-secondary': '#B8AFA5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        'card': '12px',
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
