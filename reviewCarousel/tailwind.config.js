/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          /* this primary is main color */
           "primaryColor-1" : "hsl(205, 78%, 60%)",
           // these grey color will be used for heading
            "grey-1" : "hsl(209, 61%, 16%)",
            "grey-2" : "hsl(211, 39%, 23%)",
            "grey-3" : "hsl(209, 34%, 30%)",
            "grey-4" : "hsl(209, 28%, 39%)",
           // for paragraph
           "grey-5" : "hsl(210, 22%, 49%)" 
        }, 
        fontFamily: {
             "roboto": ["Roboto", "sans-serif"],
             "font-awesome" : ["'Font Awesome 5 Free'", "sans-serif"]
        }, 
          
    },
  },
  plugins: [],
}

