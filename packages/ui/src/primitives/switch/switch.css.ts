import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "../../theme/tokens/vars.css";

// The root `<label>` element
export const root = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space[3],
  cursor: "pointer",
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.medium,
  color: vars.color.text.primary,
  WebkitTapHighlightColor: "transparent",
  selectors: {
    "&[data-disabled]": {
      cursor: "not-allowed",
      opacity: 0.5,
    },
  },
});

// The track background
export const track = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    backgroundColor: vars.color.bg.sunken,
    border: `1px solid ${vars.color.border.default}`,
    borderRadius: vars.radius.full,
    padding: "2px",
    boxSizing: "border-box",
    transition: `background-color ${vars.duration.fast} ${vars.ease.default}, border-color ${vars.duration.fast} ${vars.ease.default}`,
    selectors: {
      // Apply brand color when selected
      [`${root}[data-selected] &`]: {
        backgroundColor: vars.color.brand.default,
        borderColor: vars.color.brand.default,
      },
      // Apply focus ring when navigating via keyboard
      [`${root}[data-focus-visible] &`]: {
        outline: `2px solid ${vars.color.border.focus}`,
        outlineOffset: "2px",
      },
    },
  },
  variants: {
    size: {
      sm: { width: "32px", height: "20px" },
      md: { width: "44px", height: "24px" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

// The moving knob
export const thumb = recipe({
  base: {
    backgroundColor: vars.color.bg.surface,
    borderRadius: vars.radius.full,
    boxShadow: vars.shadow.sm,
    transition: `transform ${vars.duration.fast} ${vars.ease.default}`,
  },
  variants: {
    size: {
      sm: {
        width: "14px",
        height: "14px",
        selectors: {
          [`${root}[data-selected] &`]: { transform: "translateX(12px)" },
        },
      },
      md: {
        width: "18px",
        height: "18px",
        selectors: {
          [`${root}[data-selected] &`]: { transform: "translateX(20px)" },
        },
      },
    },
    colorScheme: {
      brand: {},  // thumb stays white — default base handles it
      mono: {
        selectors: {
          // Thumb flips to black when track is dark (selected + mono)
          [`${root}[data-selected] &`]: {
            backgroundColor: vars.color.bg.surface,
          },
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    colorScheme: "brand"
  },
});

export type SwitchVariants = RecipeVariants<typeof track>;
