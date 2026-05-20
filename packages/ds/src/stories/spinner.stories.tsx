import type { Meta, StoryObj } from "@storybook/react-vite";
import { Loader } from "../components/feedback/loader";

const meta: Meta<typeof Loader> = {
  title: "Feedback/Loader",
  component: Loader,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Loader>;

// Interactive individual testing story
export const Default: Story = {
  render: (args) => <Loader {...args} />,
};

// Layout grid showcasing all mapped recipe token scales side-by-side
export const AllSizes: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Loader {...args} />
      <Loader {...args} />
      <Loader {...args} />
      <Loader {...args} />
      <Loader {...args} />
      <Loader {...args} />
    </div>
  ),
};
