// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Monochromatic palette
        gray: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717", // Near black for text
          950: "#0a0a0a",
        },
        // Strategic accent colors
        accent: {
          blue: "#2563eb", // Subtle blue
          gray: "#6b7280", // Muted gray
          indigo: "#6366f1",
          purple: "#8b5cf6",
        },
      },
      fontFamily: {
        display: ["var(--font-clash)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: [
          "clamp(3rem, 8vw, 5.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        h1: [
          "clamp(2.5rem, 6vw, 4rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        h2: [
          "clamp(2rem, 5vw, 3.5rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
        h3: ["clamp(1.5rem, 4vw, 2.5rem)", { lineHeight: "1.3" }],
        "body-lg": ["1.25rem", { lineHeight: "1.7" }],
        body: ["1.125rem", { lineHeight: "1.7" }],
        caption: ["0.875rem", { lineHeight: "1.4" }],
      },
      spacing: {
        // 8px baseline grid system
        0: "0px",
        1: "8px",
        2: "16px",
        3: "24px",
        4: "32px",
        5: "40px",
        6: "48px",
        7: "64px",
        8: "80px",
        9: "96px",
        10: "128px",
        11: "160px",
        12: "192px",
      },
      screens: {
        // Mobile-first breakpoints
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px", // Add ultra-wide breakpoint
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out",
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        stagger: "stagger 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
