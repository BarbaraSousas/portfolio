/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0F0F14',
        'accent-neon': '#FF4F9A',
        'accent-blush': '#FFD1E6',
        'text-secondary': '#B4B4C2',
        'text-primary': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      borderRadius: {
        'card': '12px',
      },
      boxShadow: {
        'neon': '0 0 20px rgba(255, 79, 154, 0.3)',
        'neon-lg': '0 0 30px rgba(255, 79, 154, 0.5)',
      },
    },
  },
  plugins: [],
}
