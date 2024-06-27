/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#1E1E1E',

        customBlue: "#013B7A",
        customGrey: "#B6B6B6",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'oleo': ['"Oleo Script Swash Caps"', 'cursive'],
      },
      fontSize: {
        '80px': '80px',
        "60px": "60px"
      },
    },
  },
  plugins: [],
};
