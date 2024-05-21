import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontSize: {
      "eighteen": "18px",
      "ninetySix": "64px",
      "sixteen": "16px",
      "fourtyEight": "48px",
      "twentyFour": "24px",
      "fiftySix": "56px"
    },
    colors: {
      "primary": "#FFFFFF",
      "secondary": "#EB5017"
    },
    backgroundColor: {
      "primary": "#AF1313",
      "secondary": ""
    },
    fontWeight: {
      "sevenHundred": "700",
      "eightHundred": "800",
      "sixHundrend": "600",
      "fourHundrend": "400"
    }
  },
  plugins: [],
};
export default config;
