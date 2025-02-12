module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
        extrabold: 800, // Custom weight name
      },
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        orangeL: "#FF4300",
        orangeR: "#FF6400",
      

      },
    },
  },
  plugins: [],
}
