import { style } from "@vanilla-extract/css";
import { vars } from "../../theme/tokens/vars.css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[1],
  fontFamily: vars.font.sans,
});

export const label = style({
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.medium,
  color: vars.color.text.primary,
});

export const group = style({
  display: "flex",
  alignItems: "center",
  position: "relative",
  backgroundColor: vars.color.bg.surface,
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: vars.radius.md,
  transition: `border-color ${vars.duration.fast} ${vars.ease.default}`,
  selectors: {
    "&[data-focus-within]": {
      borderColor: vars.color.border.focus,
      outline: `2px solid ${vars.color.border.focus}`,
      outlineOffset: "1px",
    },
    "&[data-disabled]": {
      backgroundColor: vars.color.bg.sunken,
      opacity: 0.6,
      cursor: "not-allowed",
    },
  },
});

export const input = style({
  flex: 1,
  appearance: "none",
  border: "none",
  background: "transparent",
  padding: `${vars.space[2]} ${vars.space[3]}`,
  fontSize: vars.font.size.base,
  color: vars.color.text.primary,
  outline: "none",
  minWidth: 0,
  selectors: {
    "&::placeholder": {
      color: vars.color.text.muted,
    },
  },
});

export const button = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: vars.space[2],
  background: "transparent",
  border: "none",
  color: vars.color.text.secondary,
  cursor: "pointer",
  transition: `color ${vars.duration.fast}`,
  selectors: {
    "&[data-hovered]": {
      color: vars.color.text.primary,
    },
    "&[data-pressed]": {
      color: vars.color.brand.default,
    },
  },
});

export const popover = style({
  backgroundColor: vars.color.bg.surface,
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: vars.radius.md,
  boxShadow: vars.shadow.md,
  marginTop: vars.space[1],
  minWidth: "var(--trigger-width)", // React Aria provides this CSS variable!
  zIndex: vars.zIndex.popover,
  overflow: "hidden",
});

export const listbox = style({
  maxHeight: "300px",
  overflowY: "auto",
  padding: vars.space[1],
  margin: 0,
  listStyle: "none",
  outline: "none",
});

export const item = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${vars.space[2]} ${vars.space[3]}`,
  borderRadius: vars.radius.sm,
  fontSize: vars.font.size.sm,
  color: vars.color.text.primary,
  cursor: "pointer",
  outline: "none",
  transition: `background-color ${vars.duration.instant}`,
  selectors: {
    "&[data-focused]": {
      backgroundColor: vars.color.bg.sunken,
      color: vars.color.text.primary,
    },
    "&[data-hovered]": {
      backgroundColor: vars.color.bg.sunken,
    },
    "&[data-selected]": {
      backgroundColor: vars.color.brand.subtle,
      color: vars.color.brand.default,
      fontWeight: vars.font.weight.medium,
    },
  },
});

export const description = style({
  fontSize: vars.font.size.xs,
  color: vars.color.text.muted,
});
