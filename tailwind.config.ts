import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "1": "4px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "midnight-blue": "#0D0E43",
        lavender: "#F2F0FF",
        "soft-lilac": "rgba(236, 210, 250, 0.35)",
        "custom-pink": "#FB2E86",
        "custom-gray": "#8A8FB9",
        "custom-light": "#F6F7FB",
        "deep-blue": "#151875",
        "light-gray": "#F7F7F7",
        "deep-purple": "#2F1AC4",
        "custom-lighter": "#EEEFFB",
        "muted-indigo": "rgba(26, 11, 91, 0.30)",
        "lavender-mist": "#F1F0FF",
        "cool-lilac": "#ACABC3",
        "cloud-white": "#F5F6F8",
        "fresh-green": "#08D15F",
        "light-lavender": "#FFF6FB",
      },
      boxShadow: {
        primary: "0px 0px 25px 0px rgba(0, 0, 0, 0.10)",
        secondary: "0px 8px 40px 0px rgba(49, 32, 138, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
