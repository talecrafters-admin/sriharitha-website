/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#025F38", // Rich green
          dark: "#014029", // Darker green
          light: "#037A4A", // Lighter green
        },
        earth: {
          DEFAULT: "#3D2817", // Dark rich chocolate brown
          light: "#5A3E2B", // Lighter chocolate
          dark: "#2A1A0F", // Darker chocolate
        },
        terracotta: {
          DEFAULT: "#C97D60", // Warm terracotta
          light: "#D99A82", // Light terracotta
        },
        secondary: {
          DEFAULT: "#F5F1E8", // Warm cream
          dark: "#E8E0D1", // Slightly darker cream
        },
        accent: {
          DEFAULT: "#D4A574", // Warm golden beige
          dark: "#B8905F", // Darker accent
        },
        background: {
          DEFAULT: "#FBF9F5", // Warm off-white
          white: "#FFFFFF",
        },
        text: {
          DEFAULT: "#2C2416", // Warm dark brown
          light: "#5C4E3A", // Lighter text
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
        card: "0 2px 12px rgba(2, 95, 56, 0.06)",
        "card-hover": "0 4px 20px rgba(2, 95, 56, 0.1)",
        modern: "0 1px 4px rgba(0, 0, 0, 0.03), 0 4px 16px rgba(0, 0, 0, 0.05)",
        earthy: "0 2px 8px rgba(2, 95, 56, 0.08)",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
    },
  },
  plugins: [],
};
