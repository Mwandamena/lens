import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  "*": {
    border: "inherit",
    boxSizing: "border-box",
    "--global-color-border": "colors.border",
    "--global-color-placeholder": "colors.fg.subtle",
    "--global-color-selection": "colors.colorPalette.subtle.bg",
    "--global-color-focus-ring": "colors.colorPalette.solid.bg",
  },
  // Base HTML/body resets (similar to Tailwind's base)
  html: {
    fontFamily: "sans", // Default to sans font
    lineHeight: "normal",
    color: "fg.DEFAULT",
    bgColor: "bg.canvas",
    minH: "100vh",
    fontSmoothing: "antialiased",
    textRendering: "optimizeLegibility",
  },
  body: {
    margin: "0",
  },

  "button, a, input, select, textarea": {
    _focusVisible: {
      outlineWidth: "2px",
      outlineStyle: "solid",
      outlineColor: "brand.500",
      outlineOffset: "2px",
    },
  },
});
