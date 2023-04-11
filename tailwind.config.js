/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope"],
      },
    },
  },
  daisyui: {
    themes: false,
  },
 
  plugins: [require("daisyui")],
};
