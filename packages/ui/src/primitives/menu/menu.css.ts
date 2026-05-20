import { recipe } from "@vanilla-extract/recipes";
import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "../../theme/tokens/vars.css";

// ── Animations ────────────────────────────────────────────────────────────────
const fadeIn = keyframes({
  from: { opacity: 0, transform: "translateY(-4px) scale(0.97)" },
  to: { opacity: 1, transform: "translateY(0) scale(1)" },
});

const fadeOut = keyframes({
  from: { opacity: 1, transform: "translateY(0) scale(1)" },
  to: { opacity: 0, transform: "translateY(-4px) scale(0.97)" },
});

// ── Popover ───────────────────────────────────────────────────────────────────
export const menuPopover = style({
  background: vars.color.bg.elevated,
  borderRadius: vars.radius.lg,
  boxShadow: vars.shadow.md,
  border: `1px solid ${vars.color.border.default}`,
  outline: "none",
  minWidth: "180px",
  maxWidth: "280px",
  overflow: "hidden",
  zIndex: vars.zIndex?.dropdown ?? "20",

  selectors: {
    "&[data-entering]": {
      animation: `${fadeIn} ${vars.duration.base} ${vars.ease.out} forwards`,
    },
    "&[data-exiting]": {
      animation: `${fadeOut} ${vars.duration.fast} ${vars.ease.in} forwards`,
    },
  },
});

// ── Menu list ─────────────────────────────────────────────────────────────────
export const menuList = style({
  outline: "none",
  padding: vars.space[0],
  display: "flex",
  flexDirection: "column",
  gap: "1px",
});

// ── Menu item ─────────────────────────────────────────────────────────────────
export const menuItem = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    gap: vars.space[2],
    padding: `${vars.space[2]} ${vars.space[3]}`,
    borderRadius: vars.radius.none,
    fontSize: vars.font.size.sm,
    fontWeight: vars.font.weight.medium,
    fontFamily: vars.font.sans,
    color: vars.color.text.primary,
    cursor: "pointer",
    outline: "none",
    border: "none",
    background: "transparent",
    width: "100%",
    textAlign: "left",
    transition: `background-color ${vars.duration.fast} ${vars.ease.default}`,
    position: "relative",

    selectors: {
      "&[data-hovered]": {
        background: vars.color.bg.sunken,
        color: vars.color.text.primary,
      },
      "&[data-focused]": {
        background: vars.color.bg.sunken,
        outline: "none",
      },
      "&[data-pressed]": {
        background: vars.color.border.default,
      },
      "&[data-focus-visible]": {
        outline: `2px solid ${vars.color.border.focus}`,
        outlineOffset: "-2px",
      },
      "&[data-disabled]": {
        color: vars.color.text.disabled,
        cursor: "not-allowed",
        pointerEvents: "none",
      },
      "&[data-selected]": {
        color: vars.color.brand.text,
        fontWeight: vars.font.weight.semibold,
      },
      "&[data-selected][data-hovered]": {
        background: vars.color.brand.subtle,
      },
    },
  },

  variants: {
    intent: {
      default: {},
      danger: {
        color: vars.color.error.text,
        selectors: {
          "&[data-hovered]": {
            background: vars.color.error.bg,
            color: vars.color.error.text,
          },
          "&[data-pressed]": {
            background: vars.color.error.bg,
            filter: "brightness(0.95)",
          },
        },
      },
    },
  },

  defaultVariants: {
    intent: "default",
  },
});

// ── Item icon slot ────────────────────────────────────────────────────────────
export const menuItemIcon = style({
  flexShrink: 0,
  width: "1rem",
  height: "1rem",
  color: "inherit",
  opacity: 0.7,
});

// ── Item label ────────────────────────────────────────────────────────────────
export const menuItemLabel = style({
  flex: 1,
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

// ── Item shortcut ─────────────────────────────────────────────────────────────
export const menuItemShortcut = style({
  marginLeft: "auto",
  fontSize: vars.font.size.xs,
  color: vars.color.text.muted,
  flexShrink: 0,
});

// ── Checkmark (for selectable items) ─────────────────────────────────────────
export const menuItemCheckmark = style({
  width: "1rem",
  height: "1rem",
  flexShrink: 0,
  color: vars.color.brand.default,
  opacity: 0,

  selectors: {
    "[data-selected] &": {
      opacity: 1,
    },
  },
});

// ── Section ───────────────────────────────────────────────────────────────────
export const menuSection = style({
  display: "flex",
  flexDirection: "column",
});

export const menuSectionHeader = style({
  fontSize: vars.font.size.xs,
  fontWeight: vars.font.weight.semibold,
  color: vars.color.text.muted,
  textTransform: "uppercase",
  letterSpacing: vars.font.leading.relaxed,
  padding: `${vars.space[2]} ${vars.space[3]} ${vars.space[1]}`,
});

// ── Separator ─────────────────────────────────────────────────────────────────
export const menuSeparator = style({
  height: "1px",
  background: vars.color.border.default,
  margin: `${vars.space[1]} 0`,
});
