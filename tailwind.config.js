/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "p-primary": "#1b6392",
        "p-secondary": "#f3de6d",
      },
    },
  },
  plugins: [],
}