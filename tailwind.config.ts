import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        text: "var(--color-text)",
      },
    },
  },
  plugins: [],
} satisfies Config;
