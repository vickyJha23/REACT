/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        animation: {
            "jump" : "bounce 1.5s linear infinite"
        },
        keyframes: {
            "bounce": {
               "0%, 100%" : {
                    transform: "scale(1)"
               },
               "50%": {
                   transform: "scale(1.5)"
               }
            }
        }
    },
  },
  plugins: [],
}

