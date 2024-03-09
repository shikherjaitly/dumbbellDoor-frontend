/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dimgray: {
          "100": "#6a6a6a",
          "200": "#646464",
        },
        blueviolet: "#524ff5",
        deepskyblue: "#38b6ff",
        yellowgreen: "#7ed957",
        silver: "#bcbcbc",
        blue: "#7206ff",
        gainsboro: "#e6e6e6",
        black: "#000",
        white: "#fff",
        whitesmoke: "#f3f3f3",
      },
      spacing: {
        '-180': '-45rem', // Customize the value as needed
      },
      fontFamily: {
        lato: "Lato",
        alata: "Alata",
        rubik: ['Rubik', 'sans-serif'],
        manrope: "Manrope",
        
        'saira-stencil': ['"Saira Stencil One"', 'sans-serif'],
      },
      borderRadius: {
        "3xs": "10px",
        "6xl": "25px",
      },

    },
    
  },
  
};
