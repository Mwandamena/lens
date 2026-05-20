import type { Meta, StoryObj } from "@storybook/react-vite";
import { parseDate } from "@internationalized/date";
import { Calendar } from "../primitives/calender/calender";

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: parseDate("2025-04-10"),
  },
};

export const MinMax: Story = {
  args: {
    minValue: parseDate("2025-04-01"),
    maxValue: parseDate("2025-04-30"),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      <Calendar calenderVariant="default" />
      <Calendar calenderVariant="outlined" />
      <Calendar calenderVariant="surface" />
      <Calendar value={parseDate("2025-04-10")} />
    </div>
  ),
};

// elevations
export const Elevations: Story = {
  args: {
    calenderVariant: "outlined",
  },
  render: () => (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      <Calendar calenderVariant="outlined" elevation="none" />
      <Calendar calenderVariant="outlined" elevation="sm" />
      <Calendar calenderVariant="outlined" elevation="md" />
      <Calendar calenderVariant="outlined" elevation="lg" />
      <Calendar calenderVariant="outlined" elevation="xl" />
    </div>
  ),
};
