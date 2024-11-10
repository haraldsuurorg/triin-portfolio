import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ECE9DF",
        primary: "#F8C894",
        heading: "#343434",
        text: "#767471",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
