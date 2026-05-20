import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "../components/data-display/icon";
import { Search, Settings, Plus, Trash2 } from "lucide-react";
import { IconButton } from "../components/inputs/icon.button";

const meta: Meta<typeof IconButton> = {
  title: "Atoms/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  args: {
    variant: "solid",
    size: "md",
    radius: "full",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost", "destructive", "link"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    radius: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  render: (args) => (
    <IconButton {...args} aria-label="Search settings">
      <Icon as={Search} />
    </IconButton>
  ),
};

export const CommonActions: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "center",
      }}
    >
      <IconButton {...args} variant="solid" aria-label="Add item">
        <Icon as={Plus} />
      </IconButton>

      <IconButton {...args} variant="outline" aria-label="Open settings">
        <Icon as={Settings} />
      </IconButton>

      <IconButton {...args} variant="destructive" aria-label="Delete item">
        <Icon as={Trash2} />
      </IconButton>
    </div>
  ),
};
