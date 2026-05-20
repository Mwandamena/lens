import type { Meta, StoryObj } from "@storybook/react-vite";
import { Autocomplete } from "../primitives/autocomplete/autocomplete";

const meta: Meta<typeof Autocomplete> = {
  title: "Primitives/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
};

export default meta;

// Mock data for our stories
const zambianLanguages = [
  { id: 1, name: "Nyanja", region: "Eastern & Lusaka" },
  { id: 2, name: "Bemba", region: "Copperbelt & Northern" },
  { id: 3, name: "Tonga", region: "Southern" },
  { id: 4, name: "Lozi", region: "Western" },
  { id: 5, name: "Kaonde", region: "North-Western" },
  { id: 6, name: "Luvale", region: "North-Western" },
  { id: 7, name: "Lunda", region: "North-Western" },
];

export const Default: StoryObj<typeof Autocomplete> = {
  args: {
    label: "Primary Localization Language",
    description:
      "Select the default language for the app moderation interface.",
    placeholder: "Search languages...",
    items: zambianLanguages,
    // The render prop allows the developer to customize the internal item layout
    children: (item: any) => (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>{item.name}</span>
        <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>{item.region}</span>
      </div>
    ),
  },
};

export const Disabled: StoryObj<typeof Autocomplete> = {
  args: {
    ...Default.args,
    isDisabled: true,
  },
};
