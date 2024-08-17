/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #B28D2B, #F7EF8A, #E7C45E)',
        'custom-gradient2': 'linear-gradient(90deg, rgba(178, 141, 43, 0.2), rgba(247, 239, 138, 0.2) , rgba(231, 196, 94, 0.2))',
      },
    },
  },
  plugins: [],
}

