import { recipe } from "@vanilla-extract/recipes";
import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "../../theme/tokens/vars.css";

// ── Animations ────────────────────────────────────────────────────────────────
const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const scaleIn = keyframes({
  from: { opacity: 0, transform: "translate(-50%, -50%) scale(0.95)" },
  to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const scaleOut = keyframes({
  from: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
  to: { opacity: 0, transform: "translate(-50%, -50%) scale(0.95)" },
});

const sheetIn = keyframes({
  from: { transform: "translateY(100%)" },
  to: { transform: "translateY(0)" },
});

const sheetOut = keyframes({
  from: { transform: "translateY(0)" },
  to: { transform: "translateY(100%)" },
});

const drawerLeftIn = keyframes({
  from: { transform: "translateX(-100%)" },
  to: { transform: "translateX(0)" },
});

const drawerLeftOut = keyframes({
  from: { transform: "translateX(0)" },
  to: { transform: "translateX(-100%)" },
});

const drawerRightIn = keyframes({
  from: { transform: "translateX(100%)" },
  to: { transform: "translateX(0)" },
});

const drawerRightOut = keyframes({
  from: { transform: "translateX(0)" },
  to: { transform: "translateX(100%)" },
});

// ── Overlay (backdrop) ────────────────────────────────────────────────────────
export const overlay = style({
  position: "fixed",
  inset: 0,
  background: vars.color.bg.overlay,
  zIndex: vars.zIndex?.overlay ?? "40",

  selectors: {
    "&[data-entering]": {
      animation: `${fadeIn} ${vars.duration.base} ${vars.ease.out} forwards`,
    },
    "&[data-exiting]": {
      animation: `${fadeOut} ${vars.duration.fast} ${vars.ease.in} forwards`,
    },
  },
});

// ── Dialog container ──────────────────────────────────────────────────────────
export const dialog = recipe({
  base: {
    position: "fixed",
    zIndex: vars.zIndex?.modal ?? "50",
    background: vars.color.bg.surface,
    outline: "none",
    display: "flex",
    flexDirection: "column",
  },

  variants: {
    // ── Placement ───────────────────────────────────────────────────────────
    placement: {
      // Centered modal
      center: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: vars.radius.xl,
        boxShadow: vars.shadow.none,
        width: "100%",
        maxHeight: "85vh",

        selectors: {
          "&[data-entering]": {
            animation: `${scaleIn} ${vars.duration.base} ${vars.ease.out} forwards`,
          },
          "&[data-exiting]": {
            animation: `${scaleOut} ${vars.duration.fast} ${vars.ease.in} forwards`,
          },
        },
      },

      // Bottom sheet
      sheet: {
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: `${vars.radius.xl} ${vars.radius.xl} 0 0`,
        boxShadow: vars.shadow.xl,
        maxHeight: "90vh",

        selectors: {
          "&[data-entering]": {
            animation: `${sheetIn} ${vars.duration.deliberate} ${vars.ease.out} forwards`,
          },
          "&[data-exiting]": {
            animation: `${sheetOut} ${vars.duration.base} ${vars.ease.in} forwards`,
          },
        },
      },

      // Fullscreen
      fullscreen: {
        inset: 0,
        borderRadius: 0,
        maxHeight: "100vh",
        width: "100vw",

        selectors: {
          "&[data-entering]": {
            animation: `${fadeIn} ${vars.duration.base} ${vars.ease.out} forwards`,
          },
          "&[data-exiting]": {
            animation: `${fadeOut} ${vars.duration.fast} ${vars.ease.in} forwards`,
          },
        },
      },

      // Left drawer
      drawerLeft: {
        top: 0,
        left: 0,
        bottom: 0,
        borderRadius: `0 ${vars.radius.xl} ${vars.radius.xl} 0`,
        boxShadow: vars.shadow.xl,
        width: "min(80vw, 400px)",
        maxHeight: "100vh",

        selectors: {
          "&[data-entering]": {
            animation: `${drawerLeftIn} ${vars.duration.deliberate} ${vars.ease.out} forwards`,
          },
          "&[data-exiting]": {
            animation: `${drawerLeftOut} ${vars.duration.base} ${vars.ease.in} forwards`,
          },
        },
      },

      // Right drawer
      drawerRight: {
        top: 0,
        right: 0,
        bottom: 0,
        borderRadius: `${vars.radius.xl} 0 0 ${vars.radius.xl}`,
        boxShadow: vars.shadow.xl,
        width: "min(80vw, 400px)",
        maxHeight: "100vh",

        selectors: {
          "&[data-entering]": {
            animation: `${drawerRightIn} ${vars.duration.deliberate} ${vars.ease.out} forwards`,
          },
          "&[data-exiting]": {
            animation: `${drawerRightOut} ${vars.duration.base} ${vars.ease.in} forwards`,
          },
        },
      },
    },

    // ── Size (center placement only) ───────────────────────────────────────
    size: {
      sm: { maxWidth: "30rem" },
      md: { maxWidth: "40rem" },
      lg: { maxWidth: "50rem" },
      xl: { maxWidth: "56rem" },
    },

    // ── Scroll behavior ────────────────────────────────────────────────────
    scroll: {
      // Body scrolls inside the modal
      inside: {
        overflow: "hidden", // children handle scrolling
      },
      // Modal grows to content, page scrolls
      outside: {
        maxHeight: "none",
        overflow: "visible",
      },
    },
  },

  defaultVariants: {
    placement: "center",
    size: "md",
    scroll: "inside",
  },
});

// ── Drag handle (sheet only) ──────────────────────────────────────────────────
export const sheetHandle = style({
  width: "2.5rem",
  height: "4px",
  borderRadius: vars.radius.full,
  background: vars.color.border.strong,
  margin: `${vars.space[3]} auto ${vars.space[1]}`,
  flexShrink: 0,
});

// ── Header ────────────────────────────────────────────────────────────────────
export const modalHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: vars.space[4],
  padding: `${vars.space[5]} ${vars.space[6]}`,
  borderBottom: `1px solid ${vars.color.border.default}`,
  flexShrink: 0,
});

export const modalTitle = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.lg,
  fontWeight: vars.font.weight.semibold,
  color: vars.color.text.primary,
  margin: 0,
  lineHeight: vars.font.leading.tight,
});

export const modalDescription = style({
  fontFamily: vars.font.sans,
  fontSize: vars.font.size.sm,
  color: vars.color.text.secondary,
  margin: `${vars.space[1]} 0 0`,
  lineHeight: vars.font.leading.normal,
});

// ── Close button ──────────────────────────────────────────────────────────────
export const modalClose = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2rem",
  height: "2rem",
  borderRadius: vars.radius.full,
  border: "none",
  background: "transparent",
  color: vars.color.text.muted,
  cursor: "pointer",
  flexShrink: 0,
  transition: `background ${vars.duration.fast} ${vars.ease.default},
               color       ${vars.duration.fast} ${vars.ease.default}`,

  selectors: {
    "&[data-hovered]": {
      background: vars.color.bg.sunken,
      color: vars.color.text.primary,
    },
    "&[data-pressed]": {
      background: vars.color.border.default,
    },
    "&[data-focus-visible]": {
      outline: `2px solid ${vars.color.border.focus}`,
      outlineOffset: "2px",
    },
  },
});

// ── Body ──────────────────────────────────────────────────────────────────────
export const modalBody = recipe({
  base: {
    padding: `${vars.space[6]} ${vars.space[6]}`,
    fontFamily: vars.font.sans,
    fontSize: vars.font.size.sm,
    color: vars.color.text.primary,
    lineHeight: vars.font.leading.relaxed,
    flex: 1,
  },
  variants: {
    scroll: {
      inside: { overflowY: "auto" },
      outside: { overflow: "visible" },
    },
  },
  defaultVariants: { scroll: "inside" },
});

// ── Footer ────────────────────────────────────────────────────────────────────
export const modalFooter = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: vars.space[3],
  padding: `${vars.space[4]} ${vars.space[6]}`,
  borderTop: `1px solid ${vars.color.border.default}`,
  flexShrink: 0,
});
