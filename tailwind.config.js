/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./sites/**/*.{js,jsx,ts,tsx}",  // ← ADD THIS (your components are here)
  ],
  theme: {
    extend: {
      // Add your custom colors from the HTML design
      colors: {
        "surface": "#faf8ff",
        "primary": "#001f3f",
        "secondary": "#7f5600",
        "secondary-container": "#fdbe54",
        "primary-container": "#013463",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f3f3ff",
        "surface-container-high": "#e7e7f3",
        "on-surface-variant": "#43474f",
        "outline-variant": "#c3c6d0",
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
  },
  plugins: [],
}