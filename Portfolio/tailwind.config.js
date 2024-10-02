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
      colors: {
        lightblue: '#ADD8E6',
        cream: '#FFFDD0',
      },
      fontSize: {
        '3rem': '3rem',
      },
    },
  },
  plugins: [],
}


