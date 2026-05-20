import type { Preset } from "@pandacss/dev";

export const colors = {
  brand: {
    50: { value: "#ffecee" },
    100: { value: "#ffd9dc" },
    200: { value: "#ffb2b8" },
    300: { value: "#ff8c97" },
    400: { value: "#ff576d" },
    500: { value: "#f20043" },
    600: { value: "#c30034" },
    700: { value: "#960026" },
    800: { value: "#680017" },
    900: { value: "#40000b" },
    950: { value: "#2c0005" },
  },

  neutral: {
    50: { value: "#f1f1f1" },
    100: { value: "#e2e2e2" },
    200: { value: "#c6c6c6" },
    300: { value: "#a8a8a8" },
    400: { value: "#8e8e8e" },
    500: { value: "#747474" },
    600: { value: "#5c5c5c" },
    700: { value: "#444444" },
    800: { value: "#303030" },
    900: { value: "#1b1b1b" },
    950: { value: "#111111" },
  },

  success: {
    50: { value: "#deffe4" },
    100: { value: "#b7fec6" },
    200: { value: "#2ffd7b" },
    300: { value: "#2aea71" },
    400: { value: "#26d767" },
    500: { value: "#22c55e" },
    600: { value: "#189a48" },
    700: { value: "#0f7334" },
    800: { value: "#074d21" },
    900: { value: "#022a0f" },
    950: { value: "#011a07" },
  },

  warning: {
    50: { value: "#fff5ee" },
    100: { value: "#ffeadc" },
    200: { value: "#ffd8bd" },
    300: { value: "#ffc390" },
    400: { value: "#ffb15b" },
    500: { value: "#f59e0b" },
    600: { value: "#c27c07" },
    700: { value: "#8f5a03" },
    800: { value: "#623c01" },
    900: { value: "#351f00" },
    950: { value: "#221200" },
  },

  error: {
    50: { value: "#FCEDED" },
    100: { value: "#FADFDF" },
    200: { value: "#F6BEBE" },
    300: { value: "#F39C9C" },
    400: { value: "#F17676" },
    500: { value: "#EF4444" },
    600: { value: "#C52B2B" },
    700: { value: "#961E1E" },
    800: { value: "#691212" },
    900: { value: "#400707" },
    950: { value: "#290303" },
  },

  info: {
    50: { value: "#F0F3FE" },
    100: { value: "#DEE5FD" },
    200: { value: "#BCCBFC" },
    300: { value: "#97B2FA" },
    400: { value: "#739BF8" },
    500: { value: "#3B82F6" },
    600: { value: "#2168CD" },
    700: { value: "#164B99" },
    800: { value: "#0C336B" },
    900: { value: "#041C41" },
    950: { value: "#02122F" },
  },

  // Base colors without specific scale levels
  white: { value: "#ffffff" },
  overlay: { value: "rgba(0,0,0,0.45)" },
} satisfies Preset["theme"] extends { tokens?: infer T }
  ? T extends { colors?: infer C }
    ? C
    : never
  : never;
