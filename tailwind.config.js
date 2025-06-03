/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        seance: {
          50: '#fcf3ff',
          100: '#f8e6ff',
          200: '#f1cbff',
          300: '#e9a2ff',
          400: '#dd6bff',
          500: '#ca34ff',
          600: '#b113e6',
          700: '#960cbf',
          800: '#790c97',
          900: '#6a107f',
          950: '#450056',
        },
        black: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4f4f4f',
          800: '#454545',
          900: '#3d3d3d',
          950: '#000000',
        },
        white: {
          50: '#ffffff',
          100: '#f9f9f9',
          200: '#f2f2f2',
          300: '#e6e6e6',
          400: '#d9d9d9',
          500: '#cccccc',
          600: '#bfbfbf',
          700: '#b3b3b3',
          800: '#a6a6a6',
          900: '#999999',
          950: '#808080',
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        slideUp: "slideUp 1s ease-out forwards"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      }
    }
  },
  plugins: [],
}

