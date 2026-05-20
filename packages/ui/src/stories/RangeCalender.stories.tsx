import type { Meta, StoryObj } from "@storybook/react-vite";
import { parseDate, getLocalTimeZone, today } from "@internationalized/date";
import { RangeCalendar } from "../primitives/calender/calender.range";

const meta: Meta<typeof RangeCalendar> = {
  component: RangeCalendar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RangeCalendar>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: {
      start: parseDate("2025-04-07"),
      end: parseDate("2025-04-18"),
    },
  },
};

export const MinMax: Story = {
  args: {
    minValue: today(getLocalTimeZone()),
    value: {
      start: today(getLocalTimeZone()),
      end: today(getLocalTimeZone()).add({ days: 7 }),
    },
  },
};
