/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF6',
          100: '#F8F2E6',
          200: '#F4EBDD',
          300: '#EADBC8',
          400: '#DFCDB8',
          500: '#D4BFA7',
        },
        espresso: {
          50: '#F5EBE6',
          100: '#E6D3CB',
          200: '#C7A89B',
          700: '#5A3826',
          800: '#3D2216',
          900: '#23140E',
          950: '#140B07',
        },
        caramel: {
          300: '#E2A97B',
          400: '#D5965E',
          500: '#C88647',
          600: '#B27135',
        }
      },
      fontFamily: {
        sans: ['var(--font-cairo)', 'var(--font-outfit)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'var(--font-amiri)', 'serif'],
      }
    },
  },
  plugins: [],
};
