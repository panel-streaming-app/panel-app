import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        "primary-100": "#161D2F",
        "secondary-100": "#FC4747",
        "tertiary-100": "#10141E",
        "tertiary-50": "#5A698F",
      },
    },
  },
  plugins: [],
} satisfies Config;
