/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px", // Custom breakpoint for small screens
        md: "768px", // Custom breakpoint for medium screens
        lg: "1024px", // Custom breakpoint for large screens
        xl: "1280px", // Custom breakpoint for extra-large screens
        "2xl": "1536px", // Custom breakpoint for 2x extra-large screens
        // Add your custom breakpoints
        "custom-md": "900px", // Example of a custom breakpoint
        "custom-lg": "1200px", // Example of another custom breakpoint
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
