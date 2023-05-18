/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.{md,js,ts,jsx,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    borderColor: theme => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.300", "currentColor"),
    }),
    borderRadius: {
      DEFAULT: "8px",
    },
    extend: {
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      colors: {
        primary: "hsl(0, 0%, 17%)",
        "primary-l": "hsl(0, 0%, 59%)",
      },
    },
  },
  plugins: [],
};
