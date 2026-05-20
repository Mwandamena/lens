// All CSS variables (colors, spacing, typography, shadows etc.)
import { Preview } from "@storybook/react-vite";
import "../src/theme/theme.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#f5f5f5" }, // --color-bg-page light
        { name: "dark", value: "#121212" }, // --color-bg-page dark
      ],
    },
    layout: "centered",
  },
  // Sync Storybook background toggle with .dark class so dark mode tokens work
  decorators: [
    (Story, context) => {
      const isDark = context.globals.backgrounds?.value === "#121212";
      document.documentElement.classList.toggle("dark", isDark);
      return <Story />;
    },
  ],
};

export default preview;
