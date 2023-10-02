/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 7px 5px rgba(255, 0, 0, 0.25)', // blur 7, spread 5, kolor #FF0000, przezroczystość 25%
      },
      fontFamily: {
        'monda': ['Monda', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        'signika': ['Signika', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

