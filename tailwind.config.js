/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C0C0C',
        secondary: '#9333EA',
        accent: '#FBBF24',
      },
    },
  },
  plugins: [],
}
