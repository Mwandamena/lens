import { defineSlotRecipe } from "@pandacss/dev";

export const accordion = defineSlotRecipe({
  className: "accordion",
  slots: [
    "root",
    "item",
    "itemTrigger",
    "itemContent",
    "itemIndicator",
    "itemBody",
  ],
  base: {
    root: {
      width: "100%",
      "--accordion-radius": "full",
    },
    item: {
      overflowAnchor: "none",
    },
    itemTrigger: {
      alignItems: "center",
      borderRadius: "var(--accordion-radius)",
      color: "fg",
      cursor: "pointer",
      display: "flex",
      fontWeight: "semibold",
      gap: "2",
      justifyContent: "space-between",
      textAlign: "start",
      textStyle: "heading.md",
      width: "container.full",
      _focusVisible: {
        outline: "2px solid",
        outlineColor: "brand.500",
      },
      _disabled: {
        layerStyle: "disabled",
      },
    },
    itemIndicator: {
      transition: "rotate 0.2s",
      transformOrigin: "center",
      color: "fg.muted",
      _open: {
        rotate: "180deg",
      },
      _svg: {
        width: "icon.md",
        height: "icon.md",
      },
    },
    itemBody: {
      pb: "calc(var(--accordion-padding-y) * 2)",
      color: "fg.muted",
    },
    itemContent: {
      overflow: "hidden",
      borderRadius: "var(--accordion-radius)",
      _open: {
        animationName: "expand-height, fade-in",
        animationDuration: "normal",
      },
      _closed: {
        animationName: "collapse-height, fade-out",
        animationDuration: "normal",
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
  variants: {
    variant: {
      outline: {
        item: {
          borderBottom: "1.5px solid",
        },
      },
      plain: {},
    },
    size: {
      md: {
        root: {
          "--accordion-padding-x": "spacing.1",
          "--accordion-padding-y": "spacing.2.5",
        },
        itemTrigger: {
          textStyle: "md",
          py: "var(--accordion-padding-y)",
        },
      },
    },
  },
});
