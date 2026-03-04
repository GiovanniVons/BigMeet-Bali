/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C41E24',
          'red-dark': '#9A161B',
          'red-light': '#E63946',
          black: '#0A0A0A',
          charcoal: '#1A1A1A',
          dark: '#222222',
          steel: '#2C2C2C',
          cream: '#F5F0EB',
          'cream-dark': '#E8E0D8',
          warm: '#D4C5B5',
        },
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
