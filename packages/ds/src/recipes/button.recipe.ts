import { defineRecipe } from "@pandacss/dev";

export const btnRecipe = defineRecipe({
  className: "btn",
  jsx: ["IconButton", "Button", "CloseButton", "ButtonGroup"],
  base: {
    alignItems: "center",
    appearance: "none",
    borderRadius: "full",
    cursor: "pointer",
    display: "inline-flex",
    flexShrink: "0",
    fontWeight: "semibold",
    gap: "2",
    isolation: "isolate",
    justifyContent: "center",
    outline: "0",
    position: "relative",
    transition: "colors",
    userSelect: "none",
    verticalAlign: "middle",
    whiteSpace: "nowrap",
    transitionProperty:
      "color, background-color, border-color, box-shadow, transform",
    transitionDuration: "base",
    transitionTimingFunction: "in-out",
    focusVisibleRing: "outside",
    _disabled: {
      layerStyle: "disabled",
    },
    _motionSafe: {
      _active: { transform: "scale(0.98)" },
    },
  },

  variants: {
    variant: {
      solid: {
        bg: "brand.solid",
        color: "text.onBrand",
        _hover: { bg: "brand.hover" },
      },
      outline: {
        bg: "transparent",
        borderWidth: "2px",
        borderColor: "border",
        color: "brand.500",
        _hover: { bg: "brand.subtle" },
        _active: { bg: "brand.subtle" },
      },
      ghost: {
        bg: "transparent",
        color: "neutral.900",
        _hover: { bg: "bg.subtle" },
      },
      destructive: {
        bg: "error.solid",
        color: "white",
        _hover: { bg: "brand.hover" },
        focusVisibleRingColor: "error.500",
      },
      link: {
        bg: "transparent",
        color: "brand.solid",
        textDecoration: "underline",
        textUnderlineOffset: "2px",
        _hover: { color: "brand.700" },
        _active: { transform: "none" },
      },
    },

    radius: {
      none: { borderRadius: "none" },
      xs: { borderRadius: "xs" },
      sm: { borderRadius: "sm" },
      md: { borderRadius: "md" },
      lg: { borderRadius: "lg" },
      xl: { borderRadius: "xl" },
      "2xl": { borderRadius: "2xl" },
      "3xl": { borderRadius: "3xl" },
      full: { borderRadius: "full" },
    },

    size: {
      xs: {
        h: "7",
        px: "2.5",
        fontSize: "xs",
        gap: "1.5",
        _svg: { boxSize: "3.5" },
      },
      sm: {
        h: "8",
        px: "3",
        fontSize: "sm",
        gap: "1.5",
        _svg: { boxSize: "4" },
      },
      md: {
        h: "9",
        px: "4",
        fontSize: "md",
        gap: "2",
        _svg: { boxSize: "4" },
      },
      lg: {
        h: "10",
        px: "4",
        fontSize: "lg",
        gap: "2",
        _svg: { boxSize: "5" },
      },
      xl: {
        h: "11",
        px: "5",
        fontSize: "xl",
        gap: "2.5",
        _svg: { boxSize: "5" },
      },
    },

    fullWidth: {
      true: { w: "full" },
    },
  },

  defaultVariants: {
    variant: "solid",
    radius: "full",
    size: "md",
  },
});
