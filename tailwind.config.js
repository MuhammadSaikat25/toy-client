/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    themes: ["autumn"],
  },
  daisyui: {
    themes: ["autumn"],
  },
  plugins: [require("daisyui")],
}

