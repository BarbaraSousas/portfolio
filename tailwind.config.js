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
        // Light mode - notebook paper and ink (names kept so every page picks up the palette)
        cream: '#F1F2ED',
        beige: '#F8F8F4',
        'brown-light': '#C9CFC6',
        brown: '#566070',
        'brown-dark': '#1C2330',
        brick: '#BE3E2B',
        'brick-light': '#E2725F',

        // Dark mode - ink page
        'dark-bg': '#13171D',
        'dark-surface': '#191E25',
        'dark-border': '#2E3640',
        'dark-text': '#E3E5DF',
        'dark-text-secondary': '#9AA3AE',

        // Verdict colors for the model / code / human lanes
        hold: '#A6720F',
        'hold-light': '#D9A747',
        ok: '#3B7650',
        'ok-light': '#7DBB8F',
      },
      fontFamily: {
        sans: ['"Instrument Sans"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        display: ['Newsreader', 'Georgia', 'serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      borderRadius: {
        'card': '2px',
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
