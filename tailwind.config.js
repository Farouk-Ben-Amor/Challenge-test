/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Open Sans", "sans-serif"],
      },
      colors: {
        bgPrimary: "#F6FAFF",
        primaryDark: "#111111",
        secondaryLightGrey: "#E6E7E9",
        secondaryDarkGrey: "#9AA0A8",
        accent: "",
      },
    },
  },
  plugins: [],
};
