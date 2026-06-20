/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0E14",
          elevated: "#11151D",
          deep: "#070910",
        },
        glass: {
          DEFAULT: "rgba(255,255,255,0.045)",
          border: "rgba(255,255,255,0.09)",
          hover: "rgba(255,255,255,0.07)",
        },
        ash: {
          DEFAULT: "#ECEFF3",
          muted: "#8B93A3",
          faint: "#5A6072",
        },
        teal: {
          DEFAULT: "#6FE3C4",
          dim: "rgba(111,227,196,0.14)",
          line: "rgba(111,227,196,0.35)",
        },
        amber: {
          DEFAULT: "#E8A857",
          dim: "rgba(232,168,87,0.14)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.35)",
        glow: "0 0 40px rgba(111,227,196,0.12)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
