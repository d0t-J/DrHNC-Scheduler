import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14242B",
        "ink-soft": "#46595C",
        paper: "#F1F5F2",
        "paper-raised": "#FFFFFF",
        sage: "#3F6B5D",
        "sage-deep": "#2C4A40",
        mist: "#DCE8E2",
        honey: "#C68A3D",
        "honey-deep": "#A86F2C",
        line: "rgba(20, 36, 43, 0.12)",
        "line-soft": "rgba(20, 36, 43, 0.08)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Iowan Old Style", "Georgia", "serif"],
        body: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "SF Mono", "Menlo", "monospace"],
      },
      maxWidth: {
        content: "1080px",
      },
      spacing: {
        18: "4.5rem", // 72px — matches design reference section padding
      },
    },
  },
  plugins: [],
};

export default config;
