import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../theme/tokens/vars.css";

// ── Animations ────────────────────────────────────────────────────────────────
const overlayIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const overlayOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const contentIn = keyframes({
  from: { opacity: 0, transform: "translateY(-8px) scale(0.97)" },
  to: { opacity: 1, transform: "translateY(0) scale(1)" },
});

const contentOut = keyframes({
  from: { opacity: 1, transform: "translateY(0) scale(1)" },
  to: { opacity: 0, transform: "translateY(-8px) scale(0.97)" },
});

// ── Overlay ───────────────────────────────────────────────────────────────────
export const overlay = style({
  position: "fixed",
  inset: 0,
  zIndex: vars.zIndex.overlay,
  backgroundColor: vars.color.bg.overlay,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  paddingTop: "12vh",
  backdropFilter: "blur(4px)",

  selectors: {
    "&[data-entering]": {
      animation: `${overlayIn} ${vars.duration.base} ${vars.ease.out} forwards`,
    },
    "&[data-exiting]": {
      animation: `${overlayOut} ${vars.duration.fast} ${vars.ease.in} forwards`,
    },
  },
});

// ── Content panel ─────────────────────────────────────────────────────────────
export const content = style({
  width: "100%",
  maxWidth: "580px",
  backgroundColor: vars.color.bg.surface,
  borderRadius: vars.radius.xl,
  boxShadow: vars.shadow.xl,
  border: `1px solid ${vars.color.border.default}`,
  overflow: "hidden",
  outline: "none",
  display: "flex",
  flexDirection: "column",

  selectors: {
    "&[data-entering]": {
      animation: `${contentIn} ${vars.duration.base} ${vars.ease.out} forwards`,
    },
    "&[data-exiting]": {
      animation: `${contentOut} ${vars.duration.fast} ${vars.ease.in} forwards`,
    },
  },
});

// ── Search bar ────────────────────────────────────────────────────────────────
export const searchContainer = style({
  display: "flex",
  alignItems: "center",
  padding: `0 ${vars.space[4]}`,
  borderBottom: `1px solid ${vars.color.border.default}`,
  gap: vars.space[3],
  height: "3.25rem",
  flexShrink: 0,
});

export const searchIcon = style({
  color: vars.color.text.muted,
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
});

export const searchInput = style({
  flex: 1,
  background: "transparent",
  border: "none",
  color: vars.color.text.primary,
  fontSize: vars.font.size.base,
  fontFamily: vars.font.sans,
  fontWeight: vars.font.weight.normal,
  outline: "none",
  lineHeight: vars.font.leading.normal,

  selectors: {
    "&::placeholder": {
      color: vars.color.text.muted,
    },
  },
});

// ── Keyboard shortcut badge (inside search bar) ───────────────────────────────
export const searchShortcut = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space[1],
  flexShrink: 0,
});

export const kbd = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: "1.375rem",
  minWidth: "1.375rem",
  padding: `0 ${vars.space[1]}`,
  borderRadius: vars.radius.sm,
  border: `1px solid ${vars.color.border.strong}`,
  background: vars.color.bg.sunken,
  color: vars.color.text.disabled,
  fontFamily: vars.font.mono,
  fontSize: vars.font.size.xs,
  fontWeight: vars.font.weight.bold,
  lineHeight: 1,
});

// ── List ──────────────────────────────────────────────────────────────────────
export const listbox = style({
  maxHeight: "380px",
  overflowY: "auto",
  padding: vars.space[2],
  outline: "none",

  // Scrollbar styling
  "::-webkit-scrollbar": { width: "4px" },
  "::-webkit-scrollbar-track": { background: "transparent" },
  "::-webkit-scrollbar-thumb": {
    background: vars.color.border.default,
    borderRadius: vars.radius.full,
  },
});

// ── Section ───────────────────────────────────────────────────────────────────
export const section = style({
  display: "flex",
  flexDirection: "column",

  selectors: {
    "& + &": {
      borderTop: `1px solid ${vars.color.border.default}`,
      marginTop: vars.space[1],
      paddingTop: vars.space[1],
    },
  },
});

export const sectionHeading = style({
  padding: `${vars.space[2]} ${vars.space[3]} ${vars.space[1]}`,
  fontSize: vars.font.size.xs,
  fontWeight: vars.font.weight.semibold,
  fontFamily: vars.font.sans,
  color: vars.color.text.muted,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
});

// ── Item ──────────────────────────────────────────────────────────────────────
export const item = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    gap: vars.space[3],
    padding: `${vars.space[2]} ${vars.space[3]}`,
    borderRadius: vars.radius.md,
    fontSize: vars.font.size.sm,
    fontFamily: vars.font.sans,
    fontWeight: vars.font.weight.medium,
    color: vars.color.text.secondary,
    cursor: "pointer",
    outline: "none",
    transition: `background-color ${vars.duration.instant} ${vars.ease.default},
                 color             ${vars.duration.instant} ${vars.ease.default}`,

    selectors: {
      "&[data-focused]": {
        backgroundColor: vars.color.bg.sunken,
        color: vars.color.text.primary,
      },
      "&[data-hovered]": {
        backgroundColor: vars.color.bg.sunken,
        color: vars.color.text.primary,
      },
      "&[data-pressed]": {
        backgroundColor: vars.color.border.default,
      },
    },
  },

  variants: {
    intent: {
      default: {},
      danger: {
        selectors: {
          "&[data-focused]": {
            backgroundColor: vars.color.error.bg,
            color: vars.color.error.text,
          },
          "&[data-hovered]": {
            backgroundColor: vars.color.error.bg,
            color: vars.color.error.text,
          },
        },
      },
    },
  },

  defaultVariants: { intent: "default" },
});

// ── Item icon slot ────────────────────────────────────────────────────────────
export const itemIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "1.5rem",
  height: "1.5rem",
  borderRadius: vars.radius.sm,
  background: vars.color.bg.sunken,
  color: vars.color.text.secondary,
  flexShrink: 0,
  fontSize: vars.font.size.xs,
});

// ── Item label ────────────────────────────────────────────────────────────────
export const itemLabel = style({
  flex: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

// ── Item subtitle ─────────────────────────────────────────────────────────────
export const itemSubtitle = style({
  fontSize: vars.font.size.xs,
  color: vars.color.text.muted,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  flex: 1,
});

// ── Item shortcut ─────────────────────────────────────────────────────────────
export const itemShortcut = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "2px",
  marginLeft: "auto",
  flexShrink: 0,
});

// ── Empty state ───────────────────────────────────────────────────────────────
export const emptyState = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: `${vars.space[10]} ${vars.space[6]}`,
  gap: vars.space[2],
  color: vars.color.text.muted,
  fontSize: vars.font.size.sm,
  fontFamily: vars.font.sans,
});

export const emptyStateIcon = style({
  opacity: 0.4,
  marginBottom: vars.space[1],
});

// ── Footer ────────────────────────────────────────────────────────────────────
export const footer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: vars.space[4],
  padding: `${vars.space[2]} ${vars.space[4]}`,
  borderTop: `1px solid ${vars.color.border.default}`,
  flexShrink: 0,
});

export const footerHint = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space[1],
  fontSize: vars.font.size.xs,
  color: vars.color.text.muted,
  fontFamily: vars.font.sans,
});
