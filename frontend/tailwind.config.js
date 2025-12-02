/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B7A3D",
          dark: "#155A2E",
          light: "#2D8650",
          lighter: "#3FA05F",
        },
        secondary: {
          DEFAULT: "#F4E8D3",
          dark: "#E8D4B8",
        },
        accent: {
          DEFAULT: "#FFD700",
          warm: "#5A3E2B",
          gold: "#FFC107",
        },
        background: {
          DEFAULT: "#FAF7F2",
          white: "#FFFFFF",
        },
        text: {
          DEFAULT: "#2C2C2C",
        },
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        xl: "20px",
      },
      boxShadow: {
        card: "0 4px 20px rgba(27, 122, 61, 0.08)",
        "card-hover": "0 8px 30px rgba(27, 122, 61, 0.12)",
        modern: "0 2px 8px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.06)",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
    },
  },
  plugins: [],
};
