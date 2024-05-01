/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        blue: "#5349c3",
        background: "#f6f8fa",
        white: "#ffffff",
        todo: "#d99f61",
        complete: "#2b9975",
        onprogress: "#4ca3e1",
        navbar: "#f9f9f9",
        more: "#a2b0cb",
        active: "#5dd827",
        grey: "#a2a0a7",
        noti: "#e43739",
        shadow: "#efeef9",
        completeBg: "#edf9f5",
        onprogressBg: "#ecf4f9",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [flowbite.content()],
};
