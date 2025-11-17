/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'SF Pro Text', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
