import type { Preview } from "@storybook/react-vite";
import type { PartialStoryFn } from "@storybook/types";
import "../src/theme/theme.css";
import { darkTheme } from "../src/theme/theme.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#f5f5f5" },
        { name: "dark", value: "#121212" },
      ],
    },
    layout: "centered",
  },
  decorators: [
    (Story, context) => {
      const isDark = context.globals.backgrounds?.value === "#121212";
      document.documentElement.classList.toggle(darkTheme, isDark);
      return <Story />;
    },
  ],
};

export default preview;
