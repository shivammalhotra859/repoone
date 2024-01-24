/** @type {import('tailwindcss').Config} */

import { colors } from "./src/utils/theme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        primarBg: colors.primarBg,
        success: colors.success,
        error: colors.error,
      },
    },
  },
  plugins: [],
};
