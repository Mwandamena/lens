import type { Preset } from "@pandacss/dev";

type TextStyles = NonNullable<NonNullable<Preset["theme"]>["textStyles"]>;

export const textStyles: TextStyles = {
  // Display
  "display.2xl": {
    value: { fontSize: "7xl", fontWeight: "bold",     lineHeight: "none",   letterSpacing: "tight"  },
  },
  "display.xl": {
    value: { fontSize: "6xl", fontWeight: "bold",     lineHeight: "none",   letterSpacing: "tight"  },
  },
  "display.lg": {
    value: { fontSize: "5xl", fontWeight: "bold",     lineHeight: "tight",  letterSpacing: "tight"  },
  },
  "display.md": {
    value: { fontSize: "4xl", fontWeight: "bold",     lineHeight: "tight",  letterSpacing: "tight"  },
  },
  "display.sm": {
    value: { fontSize: "3xl", fontWeight: "semibold", lineHeight: "tight"                           },
  },

  // Heading
  "heading.xl":  { value: { fontSize: "2xl", fontWeight: "semibold", lineHeight: "snug"  } },
  "heading.lg":  { value: { fontSize: "xl",  fontWeight: "semibold", lineHeight: "snug"  } },
  "heading.md":  { value: { fontSize: "lg",  fontWeight: "semibold", lineHeight: "snug"  } },
  "heading.sm":  { value: { fontSize: "md",  fontWeight: "semibold", lineHeight: "snug"  } },
  "heading.xs":  { value: { fontSize: "sm",  fontWeight: "semibold", lineHeight: "snug"  } },
  "heading.2xs": { value: { fontSize: "xs",  fontWeight: "semibold", lineHeight: "snug"  } },

  // Body
  "body.xl":  { value: { fontSize: "xl", fontWeight: "normal", lineHeight: "relaxed" } },
  "body.lg":  { value: { fontSize: "lg", fontWeight: "normal", lineHeight: "relaxed" } },
  "body.md":  { value: { fontSize: "md", fontWeight: "normal", lineHeight: "normal"  } },
  "body.sm":  { value: { fontSize: "sm", fontWeight: "normal", lineHeight: "normal"  } },
  "body.xs":  { value: { fontSize: "xs", fontWeight: "normal", lineHeight: "normal"  } },

  // Label
  "label.lg": { value: { fontSize: "sm", fontWeight: "medium", lineHeight: "none",   letterSpacing: "wide"   } },
  "label.md": { value: { fontSize: "xs", fontWeight: "medium", lineHeight: "none",   letterSpacing: "wide"   } },
  "label.sm": { value: { fontSize: "2xs",fontWeight: "medium", lineHeight: "none",   letterSpacing: "widest" } },

  // Code
  "code.lg":  { value: { fontFamily: "mono", fontSize: "sm", fontWeight: "normal", lineHeight: "relaxed" } },
  "code.md":  { value: { fontFamily: "mono", fontSize: "xs", fontWeight: "normal", lineHeight: "relaxed" } },
};
