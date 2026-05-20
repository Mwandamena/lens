import type { Preset } from "@pandacss/dev";

export const conditions: NonNullable<Preset["conditions"]> = {
  // Interaction
  hover: "&:is(:hover, [data-hover])",
  focus: "&:is(:focus, [data-focus])",
  focusVisible: "&:is(:focus-visible, [data-focus-visible])",
  active: "&:is(:active, [data-active])",
  disabled: "&:is(:disabled, [disabled], [data-disabled])",
  loading: "&[data-loading]",
  visited: "&:visited",

  // State
  checked: "&:is(:checked, [aria-checked=true], [data-checked])",
  indeterminate: "&:is([data-indeterminate], [aria-checked=mixed])",
  invalid: "&:is([data-invalid], [aria-invalid=true])",
  valid: "&[data-valid]",
  readonly: "&:is([readonly], [data-readonly])",
  required: "&[required]",
  expanded: "&[aria-expanded=true]",
  selected: "&:is([aria-selected=true], [data-selected])",
  pressed: "&[aria-pressed=true]",
  open: "&[data-open], [data-state=open]",
  closed: "&[data-closed], [data-state=closed]",

  // Group
  groupHover: "[role=group]:hover &",
  groupFocus: "[role=group]:focus &",
  groupDisabled: "[role=group][disabled] &, [role=group][data-disabled] &",

  // Peer
  peerChecked: ".peer:checked ~ &",
  peerDisabled: ".peer:disabled ~ &",
  peerFocus: ".peer:focus ~ &",

  // Responsive (overrides panda defaults with explicit breakpoints)
  sm: "@media (min-width: 640px)",
  md: "@media (min-width: 768px)",
  lg: "@media (min-width: 1024px)",
  xl: "@media (min-width: 1280px)",
  "2xl": "@media (min-width: 1536px)",

  // Motion
  motionSafe: "@media (prefers-reduced-motion: no-preference)",
  motionReduce: "@media (prefers-reduced-motion: reduce)",

  // Print
  print: "@media print",

  // Color scheme
  dark: "[data-theme=dark] &, .dark &",

  // svg
  svg: "& svg",

  // icons
  icon: "& svg",

  // State
  on: "&:is([data-state=on])",
  pinned: "&:is([data-pinned])",
};
