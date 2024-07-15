/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      padding: {
        0.1: "1px",
      },
      colors: {
        blue: {
          1000: " #3a75e4",
          10002: "#f7fbfc",
          10003: "#e1e4f0",
          10006: "#2c3338",
        },
        white: "#ffffff",
      },
      lineHeight: {
        12: "60px",
        15: "50px",
      },
      fontSize: {
        sb: "11.5px",
        xb: "8px",
        tb: "6.5px",
        xxb: "4px",
      },
      inset: {
        45: "31%",
        46: "59%",
        55: "55%",
        90: "105%",
        60: "65.2%",
        80: "92%",
        85: "92.9%",
      },
      height: {
        60: "60%",
        26: "105px",
        46: "183px",
        50: "50vh",
        85: "85vh",
      },
      margin: {
        43: "169.5px",
        37: "153.5px",
      },
    },
  },
  plugins: [],
};
