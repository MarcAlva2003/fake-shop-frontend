/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          cyan50: "#ecfeff",
          cyan100: "#cffafe",
          cyan200: "#a5f3fc",
          cyan300: "#67e8f9",
          cyan400: "#22d3ee",
          cyan500: "#06b6d4",
          cyan600: "#0891b2",
          cyan700: "#0e7490",
          cyan800: "#155e75",
          cyan900: "#164e63",
          cyan950: "#083344",
        },
        gray: {
          gray50: "#f9fafb",
          gray100: "#f3f4f6",
          gray200: "#e5e7eb",
          gray300: "#d1d5db",
          gray400: "#9ca3af",
          gray500: "#6b7280",
          gray600: "#4b5563",
          gray700: "#374151",
          gray800: "#1f2937",
          gray900: "#111827",
          gray950: "#030712",
        },
        danger: {
          danger50: "#fef2f2",
          danger100: "#fee2e2",
          danger200: "#fecaca",
          danger300: "#fca5a5",
          danger400: "#f87171",
          danger500: "#ef4444",
          danger600: "#dc2626",
          danger700: "#b91c1c",
          danger800: "#991b1b",
          danger900: "#7f1d1d",
          danger950: "#450a0a",
        },
        success: {
          success50: "#f0fdf4",
          success100: "#dcfce7",
          success200: "#bbf7d0",
          success300: "#86efac",
          success400: "#4ade80",
          success500: "#22c55e",
          success600: "#16a34a",
          success700: "#15803d",
          success800: "#166534",
          success900: "#14532d",
          success950: "#052e16",
        },
        warning: {
          warning50: "#fffbeb",
          warning100: "#fef3c7",
          warning200: "#fde68a",
          warning300: "#fcd34d",
          warning400: "#fbbf24",
          warning500: "#f59e0b",
          warning600: "#d97706",
          warning700: "#b45309",
          warning800: "#92400e",
          warning900: "#78350f",
          warning950: "#451a03",
        },
      },
    },
  },
  plugins: [],
}

