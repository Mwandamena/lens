import type { SemanticTokens } from "@pandacss/dev";

export const semanticTokens: SemanticTokens = {
  colors: {
    // Backgrounds
    bg: {
      canvas: {
        value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.950}" },
      },
      surface: {
        value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.900}" },
      },
      subtle: {
        value: { base: "{colors.neutral.100}", _dark: "{colors.neutral.800}" },
      },
      muted: {
        value: { base: "{colors.neutral.200}", _dark: "{colors.neutral.700}" },
      },
    },

    // text color
    text: {
      base: {
        value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.50}" },
      },
      muted: {
        value: { base: "{colors.neutral.500}", _dark: "{colors.neutral.400}" },
      },
      subtle: {
        value: { base: "{colors.neutral.400}", _dark: "{colors.neutral.600}" },
      },
      onBrand: { value: { base: "{colors.white}", _dark: "{colors.white}" } },
    },

    // Foregrounds
    fg: {
      DEFAULT: {
        value: { base: "{colors.neutral.900}", _dark: "{colors.neutral.50}" },
      },
      muted: {
        value: { base: "{colors.neutral.500}", _dark: "{colors.neutral.400}" },
      },
      subtle: {
        value: { base: "{colors.neutral.400}", _dark: "{colors.neutral.600}" },
      },
      inverted: {
        value: { base: "{colors.neutral.50}", _dark: "{colors.neutral.900}" },
      },
    },

    // Border
    border: {
      DEFAULT: {
        value: { base: "{colors.neutral.200}", _dark: "{colors.neutral.700}" },
      },
      strong: {
        value: { base: "{colors.neutral.300}", _dark: "{colors.neutral.600}" },
      },
      focus: {
        value: { base: "{colors.brand.500}", _dark: "{colors.brand.400}" },
      },
    },

    // Brand semantic
    brand: {
      solid: {
        value: { base: "{colors.brand.500}", _dark: "{colors.brand.500}" },
      },
      subtle: {
        value: { base: "{colors.brand.50}", _dark: "{colors.brand.950}" },
      },
      fg: {
        value: { base: "{colors.brand.700}", _dark: "{colors.brand.300}" },
      },
      "solid-fg": {
        value: { base: "{colors.neutral.950}", _dark: "{colors.neutral.950}" },
      },
      hover: {
        value: {
          base: "{colors.brand.600}",
          _dark: "{colors.brand.600}",
        },
      },
    },

    // Feedback semantic
    success: {
      solid: {
        value: { base: "{colors.success.500}", _dark: "{colors.success.500}" },
      },
      subtle: {
        value: { base: "{colors.success.50}", _dark: "{colors.success.900}" },
      },
      fg: {
        value: { base: "{colors.success.700}", _dark: "{colors.success.300}" },
      },
    },
    warning: {
      solid: {
        value: { base: "{colors.warning.500}", _dark: "{colors.warning.500}" },
      },
      subtle: {
        value: { base: "{colors.warning.50}", _dark: "{colors.warning.900}" },
      },
      fg: {
        value: { base: "{colors.warning.700}", _dark: "{colors.warning.300}" },
      },
    },
    error: {
      solid: {
        value: { base: "{colors.error.500}", _dark: "{colors.error.500}" },
      },
      subtle: {
        value: { base: "{colors.error.50}", _dark: "{colors.error.900}" },
      },
      fg: {
        value: { base: "{colors.error.700}", _dark: "{colors.error.300}" },
      },
    },
    info: {
      solid: {
        value: { base: "{colors.info.500}", _dark: "{colors.info.500}" },
      },
      subtle: {
        value: { base: "{colors.info.50}", _dark: "{colors.info.900}" },
      },
      fg: {
        value: { base: "{colors.info.700}", _dark: "{colors.info.300}" },
      },
    },
  },
};
