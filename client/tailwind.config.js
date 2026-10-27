/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1200px', '2xl': '1320px' },
    },
    extend: {
      fontSize: {
        '12px': '0.75rem',
        '14px': '0.875rem',
        '16px': '1rem',
        '18px': '1.125rem',
        '20px': '1.25rem',
        '24px': '1.5rem',
        '32px': '2rem',
        '48px': '3rem',
        '64px': '4rem',
      },
      fontWeight: {
        thin: 100,
        extraLight: 200,
        lightItalic: 300,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      fontFamily: {
        Outfit: ['"Outfit Variable"', 'Outfit', 'system-ui', 'sans-serif'],
        orbitron: ['Orbitron', 'system-ui', 'sans-serif'],
      },
      colors: {
        orangeL: '#FF4300',
        orangeR: '#FF6400',
        ink: '#1E1E1E',
      },
    },
  },
  plugins: [],
};
