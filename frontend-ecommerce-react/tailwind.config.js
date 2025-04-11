/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JS/JSX/TS/TSX files in src/
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#00927c",
        "secondary-color": "#EAF0F1"
      }
    }
  },
  plugins: [],
};

