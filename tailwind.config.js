/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/**/*.html", "./src/**/*.ts"],
  theme: {
    extend: {
      colors: {
        brand: "hsl(var(--brand))",
        brandFg: "hsl(var(--brand-foreground))",
        primary: "hsl(var(--primary))",
        primaryFg: "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        secondaryFg: "hsl(var(--secondary-foreground))",
        accent: "hsl(var(--accent))",
        accentFg: "hsl(var(--accent-foreground))",
        background: "hsl(var(--bg))",
        foreground: "hsl(var(--fg))",
      },
      borderRadius: {
        xl: "var(--radius)",
      },
      boxShadow: {
        focus: "0 0 0 3px hsl(var(--ring) / 0.4)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
