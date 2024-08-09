/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        'serif-custom': ['Georgia', 'Times New Roman', 'Times', 'serif'],
      },
      fontSize: {
        '3rem': '3rem',
      },
      colors: {
        'custom-color': '#170f4ed5',
      },
    },
  },
  plugins: [],
}


