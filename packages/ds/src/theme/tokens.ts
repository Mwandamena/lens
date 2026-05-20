import type { Preset } from "@pandacss/dev";

type Tokens = NonNullable<NonNullable<Preset["theme"]>["tokens"]>;

export const spacing: Tokens["spacing"] = {
  px: { value: "1px" },
  0: { value: "0px" },
  0.5: { value: "0.125rem" }, //  2px
  1: { value: "0.25rem" }, //  4px
  1.5: { value: "0.375rem" }, //  6px
  2: { value: "0.5rem" }, //  8px
  2.5: { value: "0.625rem" }, // 10px
  3: { value: "0.75rem" }, // 12px
  3.5: { value: "0.875rem" }, // 14px
  4: { value: "1rem" }, // 16px
  5: { value: "1.25rem" }, // 20px
  6: { value: "1.5rem" }, // 24px
  7: { value: "1.75rem" }, // 28px
  8: { value: "2rem" }, // 32px
  9: { value: "2.25rem" }, // 36px
  10: { value: "2.5rem" }, // 40px
  11: { value: "2.75rem" }, // 44px
  12: { value: "3rem" }, // 48px
  14: { value: "3.5rem" }, // 56px
  16: { value: "4rem" }, // 64px
  20: { value: "5rem" }, // 80px
  24: { value: "6rem" }, // 96px
  28: { value: "7rem" }, // 112px
  32: { value: "8rem" }, // 128px
  36: { value: "9rem" }, // 144px
  40: { value: "10rem" }, // 160px
  44: { value: "11rem" }, // 176px
  48: { value: "12rem" }, // 192px
  52: { value: "13rem" }, // 208px
  56: { value: "14rem" }, // 224px
  60: { value: "15rem" }, // 240px
  64: { value: "16rem" }, // 256px
  72: { value: "18rem" }, // 288px
  80: { value: "20rem" }, // 320px
  96: { value: "24rem" }, // 384px
};

export const sizes: Tokens["sizes"] = {
  ...spacing,
  // Container widths
  "container.sm": { value: "640px" },
  "container.md": { value: "768px" },
  "container.lg": { value: "1024px" },
  "container.xl": { value: "1280px" },
  "container.2xl": { value: "1536px" },
  "container.full": { value: "100%" },
  // Icon sizes
  "icon.xs": { value: "0.75rem" }, // 12px
  "icon.sm": { value: "1rem" }, // 16px
  "icon.md": { value: "1.25rem" }, // 20px
  "icon.lg": { value: "1.5rem" }, // 24px
  "icon.xl": { value: "2rem" }, // 32px
};

export const radii: Tokens["radii"] = {
  none: { value: "0px" },
  sm: { value: "0.125rem" }, //  2px
  base: { value: "0.25rem" }, //  4px
  md: { value: "0.375rem" }, //  6px
  lg: { value: "0.5rem" }, //  8px
  xl: { value: "0.75rem" }, // 12px
  "2xl": { value: "1rem" }, // 16px
  "3xl": { value: "1.5rem" }, // 24px
  full: { value: "9999px" },
};

export const zIndex: Tokens["zIndex"] = {
  hide: { value: -1 },
  base: { value: 0 },
  raised: { value: 1 },
  dropdown: { value: 1000 },
  sticky: { value: 1100 },
  overlay: { value: 1200 },
  modal: { value: 1300 },
  popover: { value: 1400 },
  toast: { value: 1500 },
  tooltip: { value: 1600 },
};
