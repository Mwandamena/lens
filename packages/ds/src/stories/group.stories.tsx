import type { Meta, StoryObj } from "@storybook/react-vite";
import { Group } from "../components/data-display/group";
import type { ComponentProps } from "react";
import { Button } from "../components/inputs/Button";

const meta: Meta<typeof Group> = {
  title: "Layout/Group",
  component: Group,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    attached: {
      control: "boolean",
    },
    grow: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Group>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Button variant={"solid"}>Save Changes</Button>
        <Button variant={"ghost"}>Cancel</Button>
      </>
    ),
  },
};

export const Variants: Story = {
  render: (props: ComponentProps<typeof Group>) => {
    return (
      <div style={{ display: "flex", flexDirection: "row", gap: "12px" }}>
        <Group orientation="horizontal" attached>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </Group>
      </div>
    );
  },
};
