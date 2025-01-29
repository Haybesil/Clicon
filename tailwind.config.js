const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        "p-primary": "#000066",
        "p-black": "#2A2E34",
        "p-primary-text": "#808080",
        "p-secondary": "#4F5762",
        "p-secondary-black": "#656F7D",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}