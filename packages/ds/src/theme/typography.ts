import type { Preset } from "@pandacss/dev";

type Tokens = NonNullable<NonNullable<Preset["theme"]>["tokens"]>;

export const fonts: Tokens["fonts"] = {
  sans: { value: ["Onest", "ui-sans-serif", "system-ui", "sans-serif"] },
  serif: { value: ["Georgia", "ui-serif", "serif"] },
  mono: {
    value: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
  },
};

export const fontSizes: Tokens["fontSizes"] = {
  "2xs": { value: "0.625rem" }, // 10px
  xs: { value: "0.75rem" }, // 12px
  sm: { value: "0.875rem" }, // 14px
  md: { value: "1rem" }, // 16px  (base)
  lg: { value: "1.125rem" }, // 18px
  xl: { value: "1.25rem" }, // 20px
  "2xl": { value: "1.5rem" }, // 24px
  "3xl": { value: "1.875rem" }, // 30px
  "4xl": { value: "2.25rem" }, // 36px
  "5xl": { value: "3rem" }, // 48px
  "6xl": { value: "3.75rem" }, // 60px
  "7xl": { value: "4.5rem" }, // 72px
};

export const fontWeights: Tokens["fontWeights"] = {
  thin: { value: "100" },
  extralight: { value: "200" },
  light: { value: "300" },
  normal: { value: "400" },
  medium: { value: "500" },
  semibold: { value: "600" },
  bold: { value: "700" },
  extrabold: { value: "800" },
  black: { value: "900" },
};

export const lineHeights: Tokens["lineHeights"] = {
  none: { value: "1" },
  tight: { value: "1.25" },
  snug: { value: "1.375" },
  normal: { value: "1.5" },
  relaxed: { value: "1.625" },
  loose: { value: "2" },
};

export const letterSpacings: Tokens["letterSpacings"] = {
  tighter: { value: "-0.05em" },
  tight: { value: "-0.025em" },
  normal: { value: "0em" },
  wide: { value: "0.025em" },
  wider: { value: "0.05em" },
  widest: { value: "0.1em" },
};
