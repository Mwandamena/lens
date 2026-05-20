import { defineConfig } from "@pandacss/dev";
import { dsPreset } from "./src/index";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // presets
  presets: [dsPreset],

  // framework
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
