/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'lusitana': ['Lusitana', 'serif'],
      'Inter': ['Inter', 'sans-serif'],
      'DM Sans': ['DM Sans', 'sans-serif']
    },

    extend: {
      backgroundImage: {
        'background': "url('./assets/cropped.jpg')"
      }
    },
  },
  plugins: [],
}