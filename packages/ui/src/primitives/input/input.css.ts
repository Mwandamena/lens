import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../theme/tokens/vars.css";

// ── Field root (wraps input + helper text) ────────────────────────────────────
export const inputFieldRoot = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

// ── Wrapper — positions label + input + icons ─────────────────────────────────
export const inputWrapper = style({
  position: "relative",
  display: "flex",
  alignItems: "stretch",
  width: "100%",
});

// ── The actual <input> element ────────────────────────────────────────────────
export const inputField = recipe({
  base: {
    width: "100%",
    fontFamily: vars.font.sans,
    fontWeight: vars.font.weight.normal,
    color: vars.color.text.primary,
    background: vars.color.bg.surface,
    border: `1.5px solid ${vars.color.border.default}`,
    borderRadius: vars.radius.md,
    outline: "none",
    appearance: "none",
    transition: `border-color ${vars.duration.fast} ${vars.ease.default},
                 box-shadow ${vars.duration.fast} ${vars.ease.default}`,

    // Hide placeholder — floating label replaces it
    "::placeholder": { color: "transparent" },

    selectors: {
      "&[data-focused]": {
        borderColor: vars.color.brand.default,
        boxShadow: `0 0 0 3px ${vars.color.brand.subtle}`,
      },
      "&[data-hovered]:not([data-focused])": {
        borderColor: vars.color.border.strong,
      },
      "&[data-invalid]": {
        borderColor: vars.color.error.default,
        boxShadow: `0 0 0 3px ${vars.color.error.bg}`,
      },
      "&[data-disabled]": {
        opacity: "0.5",
        cursor: "not-allowed",
        background: vars.color.bg.sunken,
      },
    },
  },

  variants: {
    size: {
      sm: {
        height: vars.size.btnSm,
        paddingLeft: vars.space[3],
        paddingRight: vars.space[3],
        paddingTop: vars.space[3],
        paddingBottom: vars.space[1],
        fontSize: vars.font.size.sm,
      },
      md: {
        height: "3.5rem",
        paddingLeft: vars.space[3],
        paddingRight: vars.space[3],
        paddingTop: vars.space[5],
        paddingBottom: vars.space[1],
        fontSize: vars.font.size.sm,
      },
      lg: {
        height: "4rem",
        paddingLeft: vars.space[4],
        paddingRight: vars.space[4],
        paddingTop: vars.space[6],
        paddingBottom: vars.space[2],
        fontSize: vars.font.size.base,
      },
    },
    hasLeadingIcon: { true: {} },
    hasTrailingIcon: { true: {} },
  },

  compoundVariants: [
    {
      variants: { size: "sm", hasLeadingIcon: true },
      style: { paddingLeft: "2.25rem" },
    },
    {
      variants: { size: "sm", hasTrailingIcon: true },
      style: { paddingRight: "2.25rem" },
    },
    {
      variants: { size: "md", hasLeadingIcon: true },
      style: { paddingLeft: "2.75rem" },
    },
    {
      variants: { size: "md", hasTrailingIcon: true },
      style: { paddingRight: "2.75rem" },
    },
    {
      variants: { size: "lg", hasLeadingIcon: true },
      style: { paddingLeft: "3rem" },
    },
    {
      variants: { size: "lg", hasTrailingIcon: true },
      style: { paddingRight: "3rem" },
    },
  ],

  defaultVariants: { size: "md" },
});

// ── Floating label ────────────────────────────────────────────────────────────
export const floatingLabel = recipe({
  base: {
    position: "absolute",
    left: vars.space[3],
    top: "50%",
    transform: "translateY(-50%)",
    transformOrigin: "left top",
    fontFamily: vars.font.sans,
    fontSize: vars.font.size.sm,
    fontWeight: vars.font.weight.normal,
    color: vars.color.text.muted,
    pointerEvents: "none",
    transition: `top ${vars.duration.base} ${vars.ease.default},
                 transform ${vars.duration.base} ${vars.ease.default},
                 color ${vars.duration.base} ${vars.ease.default}`,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "calc(100% - 2rem)",
    zIndex: 1,
  },

  variants: {
    floated: {
      true: {
        top: "0.6rem",
        transform: "translateY(0) scale(0.78)",
        color: vars.color.brand.text,
        fontWeight: vars.font.weight.medium,
      },
    },
    invalid: {
      true: { color: vars.color.error.text },
    },
    hasLeadingIcon: {
      true: { left: "2.75rem" },
    },
  },

  compoundVariants: [
    {
      variants: { floated: true, invalid: true },
      style: { color: vars.color.error.text },
    },
  ],

  defaultVariants: { floated: false, invalid: false, hasLeadingIcon: false },
});

// ── Icon slots ────────────────────────────────────────────────────────────────
export const inputIconLeading = style({
  position: "absolute",
  left: vars.space[3],
  top: "50%",
  transform: "translateY(-50%)",
  color: vars.color.text.muted,
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  zIndex: 1,
});

export const inputIconTrailing = style({
  position: "absolute",
  right: vars.space[3],
  top: "50%",
  transform: "translateY(-50%)",
  color: vars.color.text.muted,
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  zIndex: 1,
});

// ── Password toggle ───────────────────────────────────────────────────────────
export const passwordToggle = style({
  position: "absolute",
  right: vars.space[3],
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1.75rem",
  height: "1.75rem",
  borderRadius: vars.radius.sm,
  border: "none",
  background: "transparent",
  color: vars.color.text.muted,
  cursor: "pointer",
  padding: 0,
  zIndex: 1,
  transition: `color ${vars.duration.fast} ${vars.ease.default},
               background ${vars.duration.fast} ${vars.ease.default}`,

  ":hover": {
    color: vars.color.text.primary,
    background: vars.color.bg.sunken,
  },
  ":focus-visible": {
    outline: `2px solid ${vars.color.border.focus}`,
    outlineOffset: "1px",
  },
});

// ── Helper / error text ───────────────────────────────────────────────────────
export const inputHelperText = style({
  marginTop: vars.space[1],
  fontSize: vars.font.size.xs,
  color: vars.color.text.muted,
  paddingLeft: vars.space[1],
});

export const inputErrorText = style({
  marginTop: vars.space[1],
  fontSize: vars.font.size.xs,
  color: vars.color.error.text,
  paddingLeft: vars.space[1],
  display: "flex",
  alignItems: "center",
  gap: vars.space[1],
});
