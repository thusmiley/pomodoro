/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#F87070",
        blue: "#70F3F8",
        purple: "#D881F8",
        darkNavy: "#1E213F",
        textColor: "#D7E0FF",
      },
    },
    fontFamily: {
      kumbh: ["Kumbh Sans'", "sans serif"],
      slab: ["Roboto Slab'", "serif"],
      space: ["Space Mono", "monospace"],
    },
  },
  plugins: [],
};
