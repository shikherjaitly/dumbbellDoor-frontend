/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'saira-stencil': ['"Saira Stencil One"', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        inter: "Inter",
      },
      spacing: {
        '-180': '-45rem', // Customize the value as needed
      },
    },
  },
  plugins: [],
}

