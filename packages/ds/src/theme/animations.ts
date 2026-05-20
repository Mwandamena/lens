import { defineAnimationStyles, type Preset } from "@pandacss/dev";

type Tokens = NonNullable<NonNullable<Preset["theme"]>["tokens"]>;

export const durations: Tokens["durations"] = {
  instant: { value: "50ms" },
  fast: { value: "100ms" },
  base: { value: "150ms" },
  moderate: { value: "200ms" },
  deliberate: { value: "300ms" },
  slow: { value: "400ms" },
  lazy: { value: "500ms" },
};

export const easings: Tokens["easings"] = {
  linear: { value: "linear" },
  in: { value: "cubic-bezier(0.4, 0, 1, 1)" },
  out: { value: "cubic-bezier(0, 0, 0.2, 1)" },
  "in-out": { value: "cubic-bezier(0.4, 0, 0.2, 1)" },
  bounce: { value: "cubic-bezier(0.34, 1.56, 0.64, 1)" },
  spring: { value: "cubic-bezier(0.175, 0.885, 0.32, 1.275)" },
};

export const keyframes: NonNullable<NonNullable<Preset["theme"]>["keyframes"]> =
  {
    fadeIn: {
      from: { opacity: "0" },
      to: { opacity: "1" },
    },
    fadeOut: {
      from: { opacity: "1" },
      to: { opacity: "0" },
    },
    slideInFromTop: {
      from: { transform: "translateY(-8px)", opacity: "0" },
      to: { transform: "translateY(0)", opacity: "1" },
    },
    slideInFromBottom: {
      from: { transform: "translateY(8px)", opacity: "0" },
      to: { transform: "translateY(0)", opacity: "1" },
    },
    slideInFromLeft: {
      from: { transform: "translateX(-8px)", opacity: "0" },
      to: { transform: "translateX(0)", opacity: "1" },
    },
    slideInFromRight: {
      from: { transform: "translateX(8px)", opacity: "0" },
      to: { transform: "translateX(0)", opacity: "1" },
    },
    scaleIn: {
      from: { transform: "scale(0.95)", opacity: "0" },
      to: { transform: "scale(1)", opacity: "1" },
    },
    scaleOut: {
      from: { transform: "scale(1)", opacity: "1" },
      to: { transform: "scale(0.95)", opacity: "0" },
    },
    spin: {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(360deg)" },
    },
    pulse: {
      "0%, 100%": { opacity: "1" },
      "50%": { opacity: "0.5" },
    },
    ping: {
      "75%, 100%": { transform: "scale(2)", opacity: "0" },
    },
    bounce: {
      "0%, 100%": {
        transform: "translateY(-25%)",
        animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
      },
      "50%": {
        transform: "none",
        animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  };

// animation styles
export const animationStyles = defineAnimationStyles({
  "slide-fade-in": {
    value: {
      transformOrigin: "var(--transform-origin)",
      "&[data-placement^=top]": {
        animationName: "slide-from-bottom, fade-in",
      },
      "&[data-placement^=bottom]": {
        animationName: "slide-from-top, fade-in",
      },
      "&[data-placement^=left]": {
        animationName: "slide-from-right, fade-in",
      },
      "&[data-placement^=right]": {
        animationName: "slide-from-left, fade-in",
      },
    },
  },
  "slide-fade-out": {
    value: {
      transformOrigin: "var(--transform-origin)",
      "&[data-placement^=top]": {
        animationName: "slide-to-bottom, fade-out",
      },
      "&[data-placement^=bottom]": {
        animationName: "slide-to-top, fade-out",
      },
      "&[data-placement^=left]": {
        animationName: "slide-to-right, fade-out",
      },
      "&[data-placement^=right]": {
        animationName: "slide-to-left, fade-out",
      },
    },
  },
  "scale-fade-in": {
    value: {
      transformOrigin: "var(--transform-origin)",
      animationName: "scale-in, fade-in",
    },
  },
  "scale-fade-out": {
    value: {
      transformOrigin: "var(--transform-origin)",
      animationName: "scale-out, fade-out",
    },
  },
});
