/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#5349c3",
        background: "#f6f8fa",
        white: "#ffffff",
        todo: "#d99f61",
        complete: "#58b092",
        onprogress: "#a8d1ef",
        navbar: "#f9f9f9",
        more: "#a2b0cb",
        notification: "#5dd827",
        grey: "#646f80",
      },
    },
  },
  plugins: [],
};
