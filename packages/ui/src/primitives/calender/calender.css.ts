import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { vars } from "../../theme/tokens/vars.css";

// ── Root container ────────────────────────────────────────────────────────────
export const calendarRoot = recipe({
  base: {
    display: "inline-flex",
    flexDirection: "column",
    gap: vars.space[4],
    background: vars.color.bg.surface,
    borderRadius: vars.radius.lg,
    boxShadow: vars.shadow.none,
    border: `1px solid ${vars.color.border.default}`,
    padding: vars.space[4],
    fontFamily: vars.font.sans,
    fontSize: vars.font.size.sm,
    color: vars.color.text.primary,
    userSelect: "none",
    width: "100%",
    maxWidth: "320px",
  },
  variants: {
    variant: {
      default: {
        background: vars.color.bg.surface,
        border: `1px solid ${vars.color.border.default}`,
        boxShadow: vars.shadow.md, // ← elevated, floating feel
      },
      outlined: {
        background: "transparent", // ← flat, inline feel
        border: `1px solid ${vars.color.border.strong}`,
        boxShadow: "none",
      },
      surface: {
        background: "inherit",
        border: `none`,
        boxShadow: vars.shadow.none,
        borderRadius: vars.radius.none, // ← elevated, floating feel
      },
    },

    // elevations
    elevations: {
      none: {
        boxShadow: vars.shadow.none,
      },
      sm: {
        boxShadow: vars.shadow.sm,
      },
      md: {
        boxShadow: vars.shadow.md,
      },
      lg: {
        boxShadow: vars.shadow.lg,
      },
      xl: {
        boxShadow: vars.shadow.xl,
      },
    },
  },

  defaultVariants: {
    variant: "default",
    elevations: "md",
  },
});

// export const calendarRoot = style({
//   display: "inline-flex",
//   flexDirection: "column",
//   gap: vars.space[4],
//   background: vars.color.bg.surface,
//   borderRadius: vars.radius.lg,
//   boxShadow: vars.shadow.none,
//   border: `1px solid ${vars.color.border.default}`,
//   padding: vars.space[4],
//   fontFamily: vars.font.sans,
//   fontSize: vars.font.size.sm,
//   color: vars.color.text.primary,
//   userSelect: "none",
//   width: "100%",
//   maxWidth: "320px",
// });

// ── Header (nav row) ──────────────────────────────────────────────────────────
export const calendarHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: vars.space[2],
});

export const calendarHeading = style({
  flex: 1,
  textAlign: "center",
  fontWeight: vars.font.weight.semibold,
  fontSize: vars.font.size.sm,
  color: vars.color.text.primary,
  margin: 0,
});

// ── Nav buttons (prev / next) ─────────────────────────────────────────────────
export const calendarNavButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2rem",
  height: "2rem",
  borderRadius: vars.radius.full,
  border: "none",
  background: "transparent",
  color: vars.color.text.secondary,
  cursor: "pointer",
  transition: `background-color ${vars.duration.fast} ${vars.ease.default}`,
  flexShrink: 0,

  ":focus-visible": {
    outline: `2px solid ${vars.color.border.focus}`,
    outlineOffset: "2px",
  },

  selectors: {
    "&[data-hovered]": {
      background: vars.color.bg.sunken,
      color: vars.color.text.primary,
    },
    "&[data-pressed]": {
      background: vars.color.border.default,
    },
    "&[data-disabled]": {
      opacity: "0.35",
      cursor: "not-allowed",
      pointerEvents: "none",
    },
  },
});

// ── Grid (table layout) ───────────────────────────────────────────────────────
export const calendarGrid = style({
  width: "100%",
  borderCollapse: "collapse",
});

export const calendarGridHeader = style({
  fontSize: vars.font.size.xs,
  fontWeight: vars.font.weight.semibold,
  color: vars.color.text.muted,
  textAlign: "center",
  paddingBottom: vars.space[2],
  letterSpacing: "0.05em",
  textTransform: "uppercase",
});

// ── Individual day cell ───────────────────────────────────────────────────────
export const calendarCell = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2.25rem",
    height: "2.25rem",
    borderRadius: vars.radius.full,
    fontSize: vars.font.size.sm,
    fontWeight: vars.font.weight.medium,
    cursor: "pointer",
    border: "none",
    background: "transparent",
    color: vars.color.text.primary,
    margin: "0 auto",
    transition: `background-color ${vars.duration.fast} ${vars.ease.default},
                 color ${vars.duration.fast} ${vars.ease.default}`,

    ":focus-visible": {
      outline: `2px solid ${vars.color.border.focus}`,
      outlineOffset: "2px",
    },

    selectors: {
      // Hover — only when not selected/disabled
      "&[data-hovered]": {
        background: vars.color.bg.sunken,
        color: vars.color.text.primary,
      },
      "&[data-pressed]": {
        background: vars.color.border.default,
      },
      // Selected day
      "&[data-selected]": {
        background: vars.color.brand.default,
        color: vars.color.text.onBrand,
        fontWeight: vars.font.weight.bold,
        borderRadius: vars.radius.full,
      },
      "&[data-selected][data-hovered]": {
        background: vars.color.brand.hover,
      },
      // Today
      "&[data-today]:not([data-selected])": {
        color: vars.color.brand.text,
        fontWeight: vars.font.weight.bold,
      },
      // Disabled / unavailable
      "&[data-disabled]": {
        opacity: "0.3",
        cursor: "not-allowed",
        pointerEvents: "none",
      },
      "&[data-unavailable]": {
        color: vars.color.text.muted,
        textDecoration: "line-through",
        cursor: "not-allowed",
        pointerEvents: "none",
      },
      // Outside current month
      "&[data-outside-month]": {
        color: vars.color.text.disabled,
      },
      // Range selection — start
      "&[data-selection-start]": {
        background: vars.color.brand.default,
        color: vars.color.text.onBrand,
        borderRadius: `${vars.radius.md} 0 0 ${vars.radius.md}`,
      },
      // Range selection — end
      "&[data-selection-end]": {
        background: vars.color.brand.default,
        color: vars.color.text.onBrand,
        borderRadius: `0 ${vars.radius.md} ${vars.radius.md} 0`,
      },
      // Range selection — in between
      "&[data-in-range]:not([data-selection-start]):not([data-selection-end])":
        {
          background: vars.color.brand.subtle,
          color: vars.color.brand.text,
          borderRadius: "0",
        },
    },
  },

  variants: {
    // Today indicator dot variant
    isToday: {
      true: {
        selectors: {
          "&::after": {
            content: '""',
            display: "block",
            position: "absolute",
            bottom: "3px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "4px",
            height: "4px",
            borderRadius: vars.radius.full,
            background: vars.color.brand.default,
          },
        },
        position: "relative",
      },
    },
  },
});

// ── Cell wrapper (td) ─────────────────────────────────────────────────────────
export const calendarCellWrapper = style({
  padding: "2px",
  textAlign: "center",
});
