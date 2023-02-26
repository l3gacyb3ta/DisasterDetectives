/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'pastel-red': '#eb7c85',
      'pastel-orange': '#FFB7B2',
      'pastel-yellow': '#FFDAC1',
      'pastel-green': '#E2F0CB',
      'pastel-blue': '#B5EAD7',
      'pastel-purple': '#C7CEEA',
      'pastel-beige': '#F3E1CE',
      'perpetual-pink': '#f5dce0',
    },
  },
  plugins: [],
}