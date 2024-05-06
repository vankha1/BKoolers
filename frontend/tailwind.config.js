/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customRegular:['Regular'],
        customLight:['Light'],
        // customMedium:['Medium'],
        // customBold:['Bold']
      }
    },
  },
  plugins: [],
}