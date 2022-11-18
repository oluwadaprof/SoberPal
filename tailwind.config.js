/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#FFD700",
        black: {
          200: "#1E1E1E",
        },
        blue: "#204e65",
      },
      screens: {
        mobile: "360px",
        tablet: "480px",
        laptop: "780px",
        desktop: "1020px",
        xl: "1400px",
      },
    },
  },
  plugins: [],
}
