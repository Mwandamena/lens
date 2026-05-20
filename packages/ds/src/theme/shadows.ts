import type { SemanticTokens } from "@pandacss/dev";

/**
 * Shadow tokens — primitive values.
 * Use semantic shadows (below) in components.
 */
export const shadowTokens = {
  none: { value: "none" },
  sm: { value: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
  base: {
    value: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  },
  md: {
    value: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },
  lg: {
    value: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },
  xl: {
    value:
      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  },
  "2xl": { value: "0 25px 50px -12px rgb(0 0 0 / 0.25)" },
  inner: { value: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)" },
} as const;

/**
 * Semantic shadows — adapt between light and dark mode.
 */
export const semanticShadows: SemanticTokens["shadows"] = {
  xs: {
    value: {
      base: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      _dark: "0 1px 2px 0 rgb(0 0 0 / 0.4)",
    },
  },
  sm: {
    value: {
      base: "0 1px 3px 0 {colors.neutral.50}, 0 1px 2px -1px {colors.neutral.50}",
      _dark:
        "0 1px 3px 0 {colors.neutral.950}, 0 1px 2px -1px {colors.neutral.950}",
    },
  },
  md: {
    value: {
      base: "0 4px 6px -1px {colors.neutral.50}, 0 2px 4px -2px {colors.neutral.50}",
      _dark:
        "0 4px 6px -1px {colors.neutral.950}, 0 2px 4px -2px {colors.neutral.950}",
    },
  },
  lg: {
    value: {
      base: "0 10px 15px -3px {colors.neutral.50}, 0 4px 6px -4px {colors.neutral.50}",
      _dark:
        "0 10px 15px -3px {colors.neutral.950}, 0 4px 6px -4px {colors.neutral.950}",
    },
  },
  xl: {
    value: {
      base: "0 20px 25px -5px {colors.neutral.50}, 0 8px 10px -6px {colors.neutral.50}",
      _dark:
        "0 20px 25px -5px {colors.neutral.950}, 0 8px 10px -6px {colors.neutral.950}",
    },
  },
  // Component-specific
  card: {
    value: {
      base: "0 1px 3px 0 {colors.neutral.50}, 0 1px 2px -1px {colors.neutral.50}",
      _dark:
        "0 1px 3px 0 {colors.neutral.950}, 0 1px 2px -1px {colors.neutral.950}",
    },
  },
  dropdown: {
    value: {
      base: "0 10px 15px -3px {colors.neutral.50}, 0 4px 6px -4px {colors.neutral.50}",
      _dark:
        "0 10px 15px -3px {colors.neutral.950}, 0 4px 6px -4px {colors.neutral.950}",
    },
  },
  modal: {
    value: {
      base: "0 25px 50px -12px {colors.neutral.50}",
      _dark: "0 25px 50px -12px {colors.neutral.950}",
    },
  },
  focus: {
    value: {
      base: "0 0 0 3px {colors.brand.500}",
      _dark: "0 0 0 3px {colors.brand.500}",
    },
  },
};
