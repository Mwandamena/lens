import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Copy,
  Trash2,
  Edit,
  Share,
  Download,
  Settings,
  LogOut,
  User,
} from "lucide-react";
import { Menu } from "../primitives/menu/menu";
import { Button } from "../primitives/button/button";

const meta: Meta<typeof Menu> = {
  component: Menu,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Menu>;

// ── Flat list ─────────────────────────────────────────────────────────────────
export const Default: Story = {
  render: () => (
    <Menu
      trigger={
        <Button variant="outline" colorScheme="neutral">
          Options
        </Button>
      }
      items={[
        { id: "edit", label: "Edit", icon: <Edit size={14} /> },
        { id: "copy", label: "Copy", icon: <Copy size={14} />, shortcut: "⌘C" },
        { id: "share", label: "Share", icon: <Share size={14} /> },
        {
          id: "download",
          label: "Download",
          icon: <Download size={14} />,
          shortcut: "⌘D",
        },
        {
          id: "delete",
          label: "Delete",
          icon: <Trash2 size={14} />,
          intent: "danger",
        },
      ]}
      onAction={(key) => console.log("action:", key)}
    />
  ),
};

// ── Sectioned ─────────────────────────────────────────────────────────────────
export const Sectioned: Story = {
  render: () => (
    <Menu
      trigger={
        <Button variant="solid" colorScheme="brand">
          Account
        </Button>
      }
      sections={[
        {
          id: "account",
          title: "My Account",
          items: [
            { id: "profile", label: "Profile", icon: <User size={14} /> },
            {
              id: "settings",
              label: "Settings",
              icon: <Settings size={14} />,
              shortcut: "⌘,",
            },
          ],
        },
        {
          id: "danger",
          items: [
            {
              id: "logout",
              label: "Log out",
              icon: <LogOut size={14} />,
              intent: "danger",
            },
          ],
        },
      ]}
      onAction={(key) => console.log("action:", key)}
    />
  ),
};

// ── With disabled items ───────────────────────────────────────────────────────
export const WithDisabled: Story = {
  render: () => (
    <Menu
      trigger={
        <Button variant="outline" colorScheme="neutral">
          More
        </Button>
      }
      items={[
        { id: "edit", label: "Edit", icon: <Edit size={14} /> },
        {
          id: "share",
          label: "Share",
          icon: <Share size={14} />,
          disabled: true,
        },
        {
          id: "delete",
          label: "Delete",
          icon: <Trash2 size={14} />,
          intent: "danger",
        },
      ]}
    />
  ),
};
