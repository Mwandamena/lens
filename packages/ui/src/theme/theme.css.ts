import {
  createGlobalTheme,
  globalStyle,
  createTheme,
} from "@vanilla-extract/css";
import { vars } from "./tokens/vars.css";

const primitive = {
  red50: "#fff0f3",
  red400: "#ff4d6a",
  red500: "#fe2c55",
  red600: "#e0173a",
  red950: "#2a0a10",
  slate50: "#f5f5f5",
  slate100: "#e8e8e8",
  slate200: "#d4d4d4",
  slate300: "#b0b0b0",
  slate400: "#8a8a8a",
  slate600: "#545454",
  slate700: "#3d3d3d",
  slate800: "#2a2a2a",
  slate900: "#1c1c1c",
  slate950: "#121212",
  white: "#ffffff",
  green50: "#f0fdf4",
  green500: "#22c55e",
  green950: "#0d2e1a",
  amber50: "#fffbeb",
  amber500: "#f59e0b",
  amber950: "#2e1e05",
  error50: "#fef2f2",
  error500: "#ef4444",
  error950: "#2e0a0a",
  blue50: "#eff6ff",
  blue500: "#3b82f6",
  blue950: "#0a1628",
  overlay: "rgba(0,0,0,0.45)",
};

// ── Light theme on :root ──────────────────────────────────────────────────────
createGlobalTheme(":root", vars, {
  color: {
    bg: {
      page: primitive.slate50,
      surface: primitive.white,
      elevated: primitive.white,
      sunken: primitive.slate100,
      overlay: primitive.overlay,
    },
    text: {
      primary: primitive.slate950,
      secondary: primitive.slate600,
      muted: primitive.slate400,
      disabled: primitive.slate300,
      inverse: primitive.white,
      onBrand: primitive.white,
    },
    border: {
      default: primitive.slate200,
      strong: primitive.slate300,
      focus: primitive.red500,
      error: primitive.error500,
    },
    brand: {
      default: primitive.red500,
      hover: primitive.red600,
      active: primitive.red400,
      subtle: primitive.red50,
      text: primitive.red500,
    },
    success: {
      default: primitive.green500,
      bg: primitive.green50,
      text: primitive.green500,
    },
    warning: {
      default: primitive.amber500,
      bg: primitive.amber50,
      text: primitive.amber500,
    },
    error: {
      default: primitive.error500,
      bg: primitive.error50,
      text: primitive.error500,
    },
    info: {
      default: primitive.blue500,
      bg: primitive.blue50,
      text: primitive.blue500,
    },
  },
  font: {
    sans: '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: '"DM Mono", "Fira Code", "Cascadia Code", monospace',
    size: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
    weight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    leading: {
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
    },
  },
  space: {
    "0": "0rem",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
  },
  radius: {
    none: "0",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },
  shadow: {
    sm: "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",
    md: "0 4px 16px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.06)",
    lg: "0 8px 32px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.08)",
    xl: "0 16px 48px rgba(0,0,0,0.16), 0 8px 16px rgba(0,0,0,0.1)",
    brand: "0 4px 16px rgba(254,44,85,0.3)",
    none: "none",
  },
  duration: {
    instant: "80ms",
    fast: "120ms",
    base: "180ms",
    deliberate: "280ms",
    slow: "400ms",
  },
  ease: {
    default: "cubic-bezier(0.16, 1, 0.3, 1)",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
  size: {
    btnSm: "2rem",
    btnMd: "2.25rem",
    btnLg: "2.75rem",
    inputMd: "2.375rem",
    header: "3.5rem",
    sidebar: "15rem",
  },
  zIndex: {
    dropdown: "20",
    modal: "1000",
    popover: "100",
    tooltip: "2000",
    overlay: "900",
  },
});

// ── Dark theme on .dark class ─────────────────────────────────────────────────
export const darkTheme = createTheme(vars, {
  color: {
    bg: {
      page: primitive.slate950,
      surface: primitive.slate900,
      elevated: primitive.slate800,
      sunken: primitive.slate800,
      overlay: primitive.overlay,
    },
    text: {
      primary: primitive.white,
      secondary: primitive.slate300,
      muted: primitive.slate400,
      disabled: primitive.slate700,
      inverse: primitive.slate950,
      onBrand: primitive.white,
    },
    border: {
      default: primitive.slate800,
      strong: primitive.slate700,
      focus: primitive.red500,
      error: primitive.error500,
    },
    brand: {
      default: primitive.red500,
      hover: primitive.red400,
      active: primitive.red600,
      subtle: primitive.red950,
      text: primitive.red400,
    },
    success: {
      default: primitive.green500,
      bg: primitive.green950,
      text: primitive.green500,
    },
    warning: {
      default: primitive.amber500,
      bg: primitive.amber950,
      text: primitive.amber500,
    },
    error: {
      default: primitive.error500,
      bg: primitive.error950,
      text: primitive.error500,
    },
    info: {
      default: primitive.blue500,
      bg: primitive.blue950,
      text: primitive.blue500,
    },
  },
  font: {
    sans: '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    mono: '"DM Mono", "Fira Code", "Cascadia Code", monospace',
    size: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
    },
    weight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    leading: {
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
    },
  },
  space: {
    "0": "0rem",
    "1": "0.25rem",
    "2": "0.5rem",
    "3": "0.75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "8": "2rem",
    "10": "2.5rem",
    "12": "3rem",
    "16": "4rem",
  },
  radius: {
    none: "0",
    sm: "0.25rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    full: "9999px",
  },
  shadow: {
    sm: "0 1px 3px rgba(0,0,0,0.35)",
    md: "0 4px 16px rgba(0,0,0,0.55)",
    lg: "0 8px 32px rgba(0,0,0,0.65)",
    xl: "0 16px 48px rgba(0,0,0,0.75)",
    brand: "0 4px 16px rgba(254,44,85,0.3)",
    none: "none",
  },
  duration: {
    instant: "80ms",
    fast: "120ms",
    base: "180ms",
    deliberate: "280ms",
    slow: "400ms",
  },
  ease: {
    default: "cubic-bezier(0.16, 1, 0.3, 1)",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
  size: {
    btnSm: "2rem",
    btnMd: "2.25rem",
    btnLg: "2.75rem",
    inputMd: "2.375rem",
    header: "3.5rem",
    sidebar: "15rem",
  },
  zIndex: {
    dropdown: "20",
    modal: "1000",
    popover: "100",
    tooltip: "2000",
    overlay: "900",
  },
});

// ── Base resets ───────────────────────────────────────────────────────────────
globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("html", {
  fontFamily: vars.font.sans,
  fontSize: "16px",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  scrollBehavior: "smooth",
});

globalStyle("body", {
  backgroundColor: vars.color.bg.page,
  color: vars.color.text.primary,
  lineHeight: vars.font.leading.normal,
  minHeight: "100vh",
  margin: 0,
});

globalStyle(":focus-visible", {
  outline: `2px solid ${vars.color.border.focus}`,
  outlineOffset: "2px",
});

globalStyle(":focus:not(:focus-visible)", {
  outline: "none",
});

globalStyle("::selection", {
  backgroundColor: vars.color.brand.subtle,
  color: vars.color.text.primary,
});

globalStyle("@media (prefers-reduced-motion: reduce)", {
  animationDuration: "0.01ms !important",
  transitionDuration: "0.01ms !important",
});
