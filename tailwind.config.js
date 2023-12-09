/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // Set your custom default color here
      default: '#4ade80', // Replace with your desired color value
      // ... (other color definitions)
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
};
