import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../tokens/vars.css";

export const button = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: vars.space[2],
    flexShrink: 0,
    whiteSpace: "nowrap",
    userSelect: "none",
    fontFamily: vars.font.sans,
    fontWeight: vars.font.weight.bold,
    borderRadius: vars.radius.md,
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    transition: `background-color ${vars.duration.fast} ${vars.ease.default},
                 box-shadow ${vars.duration.fast} ${vars.ease.default},
                 opacity ${vars.duration.fast} ${vars.ease.default}`,

    ":focus-visible": {
      outline: `2px solid ${vars.color.border.focus}`,
      outlineOffset: "2px",
    },

    selectors: {
      "&[data-disabled]": {
        opacity: "0.45",
        cursor: "not-allowed",
        pointerEvents: "none",
      },
    },
  },

  variants: {
    // ── Color scheme ──────────────────────────────────────────
    colorScheme: {
      brand: {
        background: vars.color.brand.hover,
        color: vars.color.text.onBrand,
        selectors: {
          "&[data-hovered]": {
            background: vars.color.brand.hover,
          },
          "&[data-pressed]": {
            background: vars.color.brand.active,
          },
        },
      },
      neutral: {
        background: vars.color.bg.sunken,
        color: vars.color.text.primary,
        selectors: {
          "&[data-hovered]": { background: vars.color.border.default },
          "&[data-pressed]": { background: vars.color.border.strong },
        },
      },
      danger: {
        background: vars.color.error.default,
        color: vars.color.text.onBrand,
        selectors: {
          "&[data-hovered]": { background: "#dc2626" },
          "&[data-pressed]": { background: "#b91c1c" },
        },
      },
    },

    // ── Visual variant ────────────────────────────────────────
    variant: {
      solid: {},
      outline: {
        background: "transparent",
        border: `1px solid currentColor`,
      },
      subtle: {
        background: vars.color.brand.subtle,
        color: vars.color.brand.text,
        selectors: {
          "&[data-hovered]": { filter: "brightness(0.95)" },
          "&[data-pressed]": { filter: "brightness(0.90)" },
        },
      },
      ghost: {
        background: "transparent",
        color: "black",
        selectors: {
          "&[data-hovered]": {
            background: vars.color.brand.subtle,
            color: vars.color.brand.hover,
            textDecoration: "underline",
            textDecorationThickness: "2px",
            textDecorationColor: vars.color.brand.hover,
            textDecorationOffset: "2px",
          },
          "&[data-pressed]": {
            background: vars.color.brand.subtle,
            filter: "brightness(0.95)",
          },
        },
      },
      bordered: {
        background: "transparent",
        border: `2px solid ${vars.color.border.default}`,
        color: vars.color.text.primary,
        fontWeight: vars.font.weight.medium,
        selectors: {
          "&[data-hovered]": { background: vars.color.bg.sunken },
          "&[data-pressed]": { background: vars.color.border.default },
        },
      },
    },

    // ── Size ──────────────────────────────────────────────────
    size: {
      sm: {
        paddingLeft: vars.space[3],
        paddingRight: vars.space[3],
        paddingTop: vars.space[2],
        paddingBottom: vars.space[2],
        fontSize: vars.font.size.sm,
      },
      md: {
        paddingLeft: vars.space[4],
        paddingRight: vars.space[4],
        paddingTop: vars.space[2],
        paddingBottom: vars.space[2],
        fontSize: vars.font.size.sm,
      },
      lg: {
        paddingLeft: vars.space[6],
        paddingRight: vars.space[6],
        paddingTop: vars.space[3],
        paddingBottom: vars.space[3],
        fontSize: vars.font.size.base,
      },
    },

    // ── Shape ─────────────────────────────────────────────────
    rounded: {
      true: { borderRadius: vars.radius.full },
      false: { borderRadius: vars.radius.md },
    },

    // ── Full width ────────────────────────────────────────────
    fullWidth: {
      true: { width: "100%" },
    },
  },

  // ── Compound variants ─────────────────────────────────────
  compoundVariants: [
    // Outline + brand
    {
      variants: { variant: "outline", colorScheme: "brand" },
      style: {
        borderColor: vars.color.brand.default,
        color: vars.color.brand.text,
        selectors: {
          "&[data-hovered]": { background: vars.color.brand.subtle },
        },
      },
    },
    // Outline + neutral
    {
      variants: { variant: "outline", colorScheme: "neutral" },
      style: {
        borderColor: vars.color.border.strong,
        color: vars.color.text.primary,
        selectors: {
          "&[data-hovered]": { background: vars.color.bg.sunken },
        },
      },
    },
    // Outline + danger
    {
      variants: { variant: "outline", colorScheme: "danger" },
      style: {
        borderColor: vars.color.error.default,
        color: vars.color.error.text,
        selectors: {
          "&[data-hovered]": { background: vars.color.error.bg },
        },
      },
    },
  ],

  defaultVariants: {
    colorScheme: "brand",
    variant: "solid",
    size: "md",
    rounded: true,
  },
});
