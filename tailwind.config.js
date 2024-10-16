/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: "#008542",
        primary: "#DAA625",
        light_green: "#28941E",
        fb: "#3B5897",
        footer: "#6B7280",
        footer_bg: "#F2F2F2",
      },
      fontFamily: {
        primary: "Raleway",
      },
    },
  },
  plugins: [],
};

