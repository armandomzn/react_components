/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "my-rows": "auto auto 1fr",
        "2-rows": "auto 1fr",
      },
    },
  },
  plugins: [],
};
