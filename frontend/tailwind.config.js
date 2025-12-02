/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E7D32',
          dark: '#1B5E20',
          light: '#4CAF50',
        },
        secondary: {
          DEFAULT: '#F4E8D3',
          dark: '#E8D4B8',
        },
        accent: {
          DEFAULT: '#D9C8A0',
          warm: '#5A3E2B',
          gold: '#E8B04A',
        },
        background: {
          DEFAULT: '#FAF7F2',
          white: '#FFFFFF',
        },
        text: {
          DEFAULT: '#2C2C2C',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'card': '12px',
      },
      boxShadow: {
        'card': '0 10px 25px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}
