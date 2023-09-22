/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        live: "0 0 0 10px #fff ,0 0 50px #FFFFF7, 0 0 100px #fff",
      },
    },
  },
  plugins: [],
};
