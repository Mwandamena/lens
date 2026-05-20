// button storybook
import { Settings } from "lucide-react";
import { Button } from "../primitives/button/button";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    size: "lg",
    fullWidth: true,
    isDisabled: true,
    rounded: false,
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "outline",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Button",
    variant: "outline",
    colorScheme: "danger",
  },
  render: () => (
    <div style={{ display: "flex", gap: "12px" }}>
      <Button>
        Button <Settings />
      </Button>
      <Button size="lg" variant="solid">
        <Settings size={24} />
      </Button>
    </div>
  ),
};

export const Text: Story = {
  args: {
    children: "Button",
    variant: "ghost",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button>Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="subtle">Button</Button>
      <Button variant="ghost">Button</Button>
      <Button variant="bordered" size="lg">
        Button
      </Button>
    </div>
  ),
};
