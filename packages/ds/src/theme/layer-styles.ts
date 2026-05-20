import { defineLayerStyles } from "@pandacss/dev";

export const layerStyles = defineLayerStyles({
  card: {
    DEFAULT: {
      value: {
        backgroundColor: "bg.surface",
        borderWidth: "1px",
        borderColor: "border.DEFAULT",
        borderRadius: "xl",
      },
    },

    raised: {
      value: {
        backgroundColor: "bg.surface",
        borderWidth: "1px",
        borderColor: "border.DEFAULT",
        borderRadius: "xl",
        boxShadow: "lg",
      },
    },

    flat: {
      value: {
        backgroundColor: "bg.subtle",
        borderRadius: "xl",
      },
    },
  },

  // overlay
  overlay: {
    DEFAULT: {
      value: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(4px)",
        borderRadius: "xl",
      },
    },

    modal: {
      value: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(4px)",
        borderRadius: "xl",
      },
    },
  },

  disabled: {
    DEFAULT: {
      value: {
        opacity: "0.6",
        cursor: "not-allowed",
        pointerEvents: "none",
      },
    },
  },

  // focus ring
  focusRing: {
    DEFAULT: {
      value: {
        outlineWidth: "1px",
        outlineStyle: "solid",
        outlineColor: "color.focus-ring",
        outlineOffset: "2px",
      },
    },

    inset: {
      value: {
        outlineWidth: "1px",
        outlineStyle: "solid",
        outlineColor: "color.focus-ring",
        outlineOffset: "-2px",
      },
    },

    inverse: {
      value: {
        outlineWidth: "1px",
        outlineStyle: "solid",
        outlineColor: "color.white",
        outlineOffset: "2px",
      },
    },
  },
});
