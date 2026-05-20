import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "../components/data-display/icon";
import { User, X } from "lucide-react";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: {
    as: User,
    size: "md",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    color: {
      control: "select",
      options: [
        "brand.500",
        "neutral.900",
        "success.500",
        "warning.500",
        "error.500",
        "info.500",
      ],
    },
    stroke: {
      control: "select",
      options: ["bold", "thin"],
    },
    as: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  render: (args) => <Icon {...args} />,
};
export const AllSizes: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Icon {...args} size="xs" />
      <Icon {...args} size="sm" />
      <Icon {...args} size="md" />
      <Icon {...args} size="lg" />
      <Icon {...args} size="xl" />
    </div>
  ),
};
