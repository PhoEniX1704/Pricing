/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        custom: ['Inter', 'sans-serif']
      },
      colors: {
        'custom-border': '#334155',
        'custom-dark-blue': '#1e293b',
        'custom-heading': '#a5b4fc',
        'custom-para': '#e2e8f0',
        'custom-table-heading': '#6366f1',
      },
    },
  },
  plugins: [],
}
