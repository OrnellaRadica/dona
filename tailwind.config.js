/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satisfy: ["Satisfy"],
      },
      fontSize: {
        logo: ["40px", "60px"],
      },
      colors: {
        primary: "#2196F3",
        "primary-light": "#E3F2FD",
        "primary-dark": "#1E88E5",
        "primary-border": "#90CAF975",
        secondary: "#7ed957",
        "secondary-light": "#90DD6E",
        "secondary-dark": "#5DDB27",
        "input-border-hover": "#B3B3B3",
        "input-border-focus": "#2684FF",
      },
      boxShadow: {
        "input-focus": "0 0 0 1px #2684FF",
      },
    },
  },
  plugins: [],
};
