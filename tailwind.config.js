/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      keyframes: {
        slideDownAndFade: {
          from: { height: 0, opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        slideUpAndFade: {
          from: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          to: { height: 0, opacity: "0" },
        },
        scaleUp: {
          from: {
            transform: "scale(1.2)",
          },
          to: {
            transform: "scale(1)",
          },
        },
      },
      animation: {
        slideDownAndFade:
          "slideDownAndFade 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        slideUpAndFade: "slideUpAndFade 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        scaleUp: "scaleUp 300ms cubic-bezier(0.68,-0.55,0.27,1.55)",
      },
    },
  },

  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
