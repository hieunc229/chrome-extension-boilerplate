const {
  scopedPreflightStyles,
  isolateInsideOfContainer,
} = require("tailwindcss-scoped-preflight");

/** @type {import('tailwindcss').Config} */
module.exports = {
  important: "#myExtensionId",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    // Prevent tailwind override page's styles
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer("#myExtensionId"),
    }),
  ],
};
