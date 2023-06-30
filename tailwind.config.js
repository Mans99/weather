/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
  'picton-blue': '#37A3D2', 
      },
      backgroundImage: {
        'rainSun':"url(/Assets/rain-sun.png)"
      }
    },
  },
  plugins: [],
}

