import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "../primitives/switch/switch";

const meta: Meta<typeof Switch> = {
  title: "Primitives/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md"],
      description: "Controls the visual size of the switch",
    },
    isDisabled: {
      control: "boolean",
      description: "Disables interaction and dims the component",
    },
    defaultSelected: {
      control: "boolean",
      description: "Initial checked state (uncontrolled)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    children: "Enable Notifications",
    size: "md",
    colorScheme: "mono",
  },
};

export const Selected: Story = {
  args: {
    children: "Dark Mode",
    defaultSelected: true,
  },
};

export const Small: Story = {
  args: {
    children: "Compact Setting",
    size: "sm",
    defaultSelected: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Feature Unavailable",
    isDisabled: true,
  },
};

export const DisabledSelected: Story = {
  args: {
    children: "Mandatory Feature",
    isDisabled: true,
    defaultSelected: true,
  },
};

// Example showing how it handles being inside a form layout
export const WithoutLabel: Story = {
  args: {
    "aria-label": "Toggle setting",
    defaultSelected: false,
  },
};
