import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { vars } from "../../theme/tokens/vars.css";

const sizes = {
  xs: { box: "1.5rem", font: vars.font.size.xs, indicator: "0.45rem" },
  sm: { box: "2rem", font: vars.font.size.xs, indicator: "0.55rem" },
  md: { box: "2.5rem", font: vars.font.size.sm, indicator: "0.65rem" },
  lg: { box: "3rem", font: vars.font.size.base, indicator: "0.75rem" },
  xl: { box: "3.75rem", font: vars.font.size.lg, indicator: "0.85rem" },
  "2xl": { box: "5rem", font: vars.font.size["2xl"], indicator: "1rem" },
} as const;

export const avatarRoot = recipe({
  base: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    borderRadius: vars.radius.full,
    overflow: "hidden",
    userSelect: "none",
    verticalAlign: "middle",
  },
  variants: {
    size: {
      xs: { width: sizes.xs.box, height: sizes.xs.box },
      sm: { width: sizes.sm.box, height: sizes.sm.box },
      md: { width: sizes.md.box, height: sizes.md.box },
      lg: { width: sizes.lg.box, height: sizes.lg.box },
      xl: { width: sizes.xl.box, height: sizes.xl.box },
      "2xl": { width: sizes["2xl"].box, height: sizes["2xl"].box },
    },
    ring: {
      none: {},
      default: {
        outline: `2px solid ${vars.color.border.default}`,
        outlineOffset: "1px",
      },
      brand: {
        outline: `2px solid ${vars.color.brand.default}`,
        outlineOffset: "2px",
      },
      gradient: {
        boxShadow: `0 0 0 2px ${vars.color.bg.surface}, 0 0 0 4px ${vars.color.brand.default}`,
      },
      white: {
        outline: `2px solid ${vars.color.bg.surface}`,
        outlineOffset: "0px",
      },
    },
    clickable: {
      true: {
        cursor: "pointer",
        transition: `transform ${vars.duration.fast} ${vars.ease.default}, opacity ${vars.duration.fast} ${vars.ease.default}`,
        selectors: {
          "&:hover": { opacity: 0.88, transform: "scale(1.04)" },
          "&:active": { transform: "scale(0.96)" },
        },
        "&:focus-visible": {
          outline: `2px solid ${vars.color.border.focus}`,
          outlineOffset: "2px",
        },
      },
    },
  },
  defaultVariants: { size: "md", ring: "none", clickable: false },
});

export const avatarImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: vars.radius.full,
});

export const avatarFallback = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    borderRadius: vars.radius.full,
    fontFamily: vars.font.sans,
    fontWeight: vars.font.weight.semibold,
    color: vars.color.text.inverse,
    lineHeight: 1,
  },
  variants: {
    size: {
      xs: { fontSize: sizes.xs.font },
      sm: { fontSize: sizes.sm.font },
      md: { fontSize: sizes.md.font },
      lg: { fontSize: sizes.lg.font },
      xl: { fontSize: sizes.xl.font },
      "2xl": { fontSize: sizes["2xl"].font },
    },
    colorScheme: {
      brand: { background: vars.color.brand.default },
      neutral: { background: vars.color.text.secondary },
      success: { background: vars.color.success.default },
      warning: { background: vars.color.warning.default },
      danger: { background: vars.color.error.default },
    },
  },
  defaultVariants: { size: "md", colorScheme: "neutral" },
});

export const avatarIndicator = recipe({
  base: {
    position: "absolute",
    bottom: "0",
    right: "0",
    borderRadius: vars.radius.full,
    border: `2px solid ${vars.color.bg.surface}`,
    flexShrink: 0,
    overflow: "hidden",
  },
  variants: {
    status: {
      online: { background: vars.color.success.default },
      offline: { background: vars.color.text.muted },
      busy: { background: vars.color.error.default },
      away: { background: vars.color.warning.default },
    },
    size: {
      xs: { width: sizes.xs.indicator, height: sizes.xs.indicator },
      sm: { width: sizes.sm.indicator, height: sizes.sm.indicator },
      md: { width: sizes.md.indicator, height: sizes.md.indicator },
      lg: { width: sizes.lg.indicator, height: sizes.lg.indicator },
      xl: { width: sizes.xl.indicator, height: sizes.xl.indicator },
      "2xl": { width: sizes["2xl"].indicator, height: sizes["2xl"].indicator },
    },
  },
  defaultVariants: { status: "online", size: "md" },
});

export const avatarGroup = style({
  display: "inline-flex",
  flexDirection: "row",
  selectors: {
    // "& > * + *": { marginLeft: "-0.625rem" },
  },
});

export const avatarGroupCount = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: vars.radius.full,
    background: vars.color.bg.sunken,
    color: vars.color.text.secondary,
    fontFamily: vars.font.sans,
    fontWeight: vars.font.weight.semibold,
    fontSize: vars.font.size.xs,
    border: `2px solid ${vars.color.bg.surface}`,
    marginLeft: "-0.625rem",
    flexShrink: 0,
  },
  variants: {
    size: {
      xs: { width: sizes.xs.box, height: sizes.xs.box },
      sm: { width: sizes.sm.box, height: sizes.sm.box },
      md: { width: sizes.md.box, height: sizes.md.box },
      lg: { width: sizes.lg.box, height: sizes.lg.box },
      xl: { width: sizes.xl.box, height: sizes.xl.box },
      "2xl": { width: sizes["2xl"].box, height: sizes["2xl"].box },
    },
  },
  defaultVariants: { size: "md" },
});
