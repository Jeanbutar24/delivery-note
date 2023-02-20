/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        r: '17px 9px 12px rgba(255, 255, 255, 0.25)',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Lato: ['Lato', 'sans-serif'],
      },
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))',
      },
      translate: {
        tr: 'translate(-50%, -50%)',
      },
    },
  },
  plugins: [],
};
