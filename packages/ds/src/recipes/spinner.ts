import { defineRecipe } from "@pandacss/dev";

export const spinner = defineRecipe({
  className: "spinner",
  base: {
    "--spinner-track-color": "transparent",
    animation: "spin",
    animationDuration: "durations.lazy",
    borderBottomColor: "var(--spinner-track-color)",
    borderColor: "currentColor",
    borderInlineStartColor: "var(--spinner-track-color)",
    borderRadius: "full",
    borderStyle: "solid",
    borderWidth: "2px",
    display: "inline-block",
    height: "var(--spinner-size)",
    width: "var(--spinner-size)",
  },
  defaultVariants: {
    size: "md",
  },
  variants: {
    size: {
      inherit: { "--spinner-size": "1" },
      xs: { "--spinner-size": "3" },
      sm: { "--spinner-size": "4" },
      md: { "--spinner-size": "5" },
      lg: { "--spinner-size": "6" },
      xl: { "--spinner-size": "7" },
      "2xl": { "--spinner-size": "8" },
    },
  },
});
