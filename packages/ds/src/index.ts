import { definePreset } from "@pandacss/dev";
import { colors } from "./theme/colors";
import { semanticTokens } from "./theme/semantic-tokens";
import { spacing, sizes, radii, zIndex } from "./theme/tokens";
import { shadowTokens, semanticShadows } from "./theme/shadows";
import {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
} from "./theme/typography";
import { durations, easings, keyframes } from "./theme/animations";
import { textStyles } from "./theme/text-styles";
import { layerStyles } from "./theme/layer-styles";
import { conditions } from "./theme/conditions";
import { globalCss } from "./theme/globalCss";
import { recipes } from "./recipes";

export const dsPreset = definePreset({
  name: "social-lens-ui",

  conditions,

  globalCss,

  theme: {
    tokens: {
      colors,
      spacing,
      sizes,
      radii,
      zIndex,
      shadows: shadowTokens,
      fonts,
      fontSizes,
      fontWeights,
      lineHeights,
      letterSpacings,
      durations,
      easings,
    },

    semanticTokens: {
      ...semanticTokens,
      shadows: semanticShadows,
    },

    textStyles,
    layerStyles,
    keyframes,

    recipes,
  },
});
