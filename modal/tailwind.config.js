/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-shade" : "rgba(0,164,228,0.5)"
      }
    },
  },
  plugins: [],
}

