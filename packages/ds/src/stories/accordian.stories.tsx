import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  AccordionRoot,
  AccordionItem,
} from "../components/data-display/accordian";

const meta: Meta<typeof AccordionRoot> = {
  title: "Data Display/Accordion",
  component: AccordionRoot,
  tags: ["autodocs"],
  args: {
    type: "single",
    collapsible: true,
  },
  argTypes: {
    type: {
      control: "radio",
      options: ["single", "multiple"],
      description:
        "Determines whether one or multiple items can be opened at the same time.",
    },
    collapsible: {
      control: "boolean",
      description:
        "When type is 'single', allows closing the active item by clicking it again.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof AccordionRoot>;

export const Default: Story = {
  render: (args) => (
    <AccordionRoot {...args} defaultValue="item-1">
      <AccordionItem value="item-1" title="What is Panda CSS?">
        Panda CSS is a build-time CSS-in-JS engine that generates atomic CSS
        based on your design tokens, providing excellent performance and type
        safety.
      </AccordionItem>

      <AccordionItem value="item-2" title="Is Ark UI accessible?">
        Yes! Ark UI is built with fully accessible, headless primitives
        following WAI-ARIA design guidelines, leaving visual design entirely up
        to you.
      </AccordionItem>

      <AccordionItem
        value="item-3"
        title="Can I pass rich components into the title?"
      >
        Absolutely! Because the title property accepts a ReactNode, you can pass
        custom text arrangements, badges, or layouts directly into it.
      </AccordionItem>
    </AccordionRoot>
  ),
};

// Story demonstrating multiple item selection active simultaneously
export const AllowMultiple: Story = {
  args: {
    type: "multiple",
  },
  render: (args) => (
    <AccordionRoot {...args}>
      <AccordionItem value="section-1" title="Section One">
        This accordion section can remain open while clicking on other blocks
        below.
      </AccordionItem>
      <AccordionItem value="section-2" title="Section Two">
        Great for FAQ pages where users might want to reference multiple answers
        at once.
      </AccordionItem>
    </AccordionRoot>
  ),
};
