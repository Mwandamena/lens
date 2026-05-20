import { defineConfig } from "@pandacss/dev";
import baseConfig from "@social-lens/ui/panda.config";

export default defineConfig({
  ...baseConfig,

  preflight: true,

  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/src/**/*.{js,jsx,ts,tsx}",
  ],

  exclude: [],

  outdir: "styled-system",
});
