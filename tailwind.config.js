/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
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
        filter: "#575757",
      },
    },
  },
  plugins: [flowbite.content()],
});
