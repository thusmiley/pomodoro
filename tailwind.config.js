/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /font-(sans|slab|mono)/,
      variants: ["lg", "hover", "focus", "lg:hover"],
    },
    {
      pattern: /text-(red|purple|blue)/,
      variants: ["lg", "hover", "focus", "lg:hover"],
    },
  ],
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
      sans: ["Kumbh Sans", "sans serif"],
      slab: ["Roboto Slab", "serif"],
      mono: ["Space Mono", "monospace"],
    },
  },
  plugins: [],
};
