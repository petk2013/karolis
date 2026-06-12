/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        primary: '#0F172A',
        accent: { DEFAULT: '#0369A1', hover: '#075985', light: '#E0F2FE' },
        surface: '#F8FAFC',
        muted: '#E8ECF1',
      },
    },
  },
  plugins: [],
};
