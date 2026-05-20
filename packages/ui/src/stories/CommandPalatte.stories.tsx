import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState, useEffect } from "react";
import {
  FilePlus,
  FolderPlus,
  Settings,
  LogOut,
  Search,
  User,
  Home,
  Bell,
  Trash2,
  Copy,
  ExternalLink,
} from "lucide-react";
import { CommandPalette } from "../primitives/command-pallate/command";
import { Button } from "../primitives/button/button";

const meta: Meta<typeof CommandPalette> = {
  title: "Components/CommandPalette",
  component: CommandPalette,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;

// ── Flat items ────────────────────────────────────────────────────────────────
export const Default: StoryObj = {
  render: () => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key === "k") {
          e.preventDefault();
          setOpen((v) => !v);
        }
      };
      window.addEventListener("keydown", handler);
      return () => window.removeEventListener("keydown", handler);
    }, []);

    return (
      <>
        <Button onClick={() => setOpen(true)}>
          Open Palette
          <kbd style={{ marginLeft: 8, opacity: 0.6, fontSize: "0.75rem" }}>
            ⌘K
          </kbd>
        </Button>
        <CommandPalette
          isOpen={isOpen}
          onOpenChange={setOpen}
          items={[
            {
              id: "new-file",
              label: "New File",
              icon: <FilePlus size={14} />,
              shortcut: ["⌘", "N"],
            },
            {
              id: "new-folder",
              label: "New Folder",
              icon: <FolderPlus size={14} />,
              shortcut: ["⌘", "⇧", "N"],
            },
            {
              id: "settings",
              label: "Settings",
              icon: <Settings size={14} />,
              shortcut: ["⌘", ","],
            },
            {
              id: "logout",
              label: "Log out",
              icon: <LogOut size={14} />,
              intent: "danger",
            },
          ]}
          onAction={(key) => {
            console.log("action:", key);
            setOpen(false);
          }}
        />
      </>
    );
  },
};

// ── Sectioned ─────────────────────────────────────────────────────────────────
export const Sectioned: StoryObj = {
  render: () => {
    const [isOpen, setOpen] = useState(true);

    return (
      <CommandPalette
        isOpen={isOpen}
        onOpenChange={setOpen}
        sections={[
          {
            id: "navigation",
            title: "Navigation",
            items: [
              { id: "home", label: "Go to Home", icon: <Home size={14} /> },
              {
                id: "profile",
                label: "View Profile",
                icon: <User size={14} />,
              },
              {
                id: "notifs",
                label: "Notifications",
                icon: <Bell size={14} />,
              },
            ],
          },
          {
            id: "actions",
            title: "Actions",
            items: [
              {
                id: "copy",
                label: "Copy Link",
                icon: <Copy size={14} />,
                shortcut: ["⌘", "C"],
              },
              {
                id: "open",
                label: "Open in New Tab",
                icon: <ExternalLink size={14} />,
                shortcut: ["⌘", "⇧", "O"],
              },
            ],
          },
          {
            id: "danger",
            title: "Danger Zone",
            items: [
              {
                id: "delete",
                label: "Delete Post",
                icon: <Trash2 size={14} />,
                intent: "danger",
              },
            ],
          },
        ]}
        onAction={(key) => console.log("action:", key)}
      />
    );
  },
};

// ── With search filtering ─────────────────────────────────────────────────────
export const WithSearch: StoryObj = {
  render: () => {
    const [isOpen, setOpen] = useState(true);
    const [query, setQuery] = useState("");

    const allItems = [
      { id: "new-file", label: "New File", icon: <FilePlus size={14} /> },
      { id: "settings", label: "Settings", icon: <Settings size={14} /> },
      { id: "profile", label: "View Profile", icon: <User size={14} /> },
      {
        id: "logout",
        label: "Log out",
        icon: <LogOut size={14} />,
        intent: "danger" as const,
      },
    ];

    const filtered = allItems.filter((i) =>
      i.label.toLowerCase().includes(query.toLowerCase()),
    );

    return (
      <CommandPalette
        isOpen={isOpen}
        onOpenChange={setOpen}
        searchValue={query}
        onSearchChange={setQuery}
        items={filtered}
        onAction={(key) => console.log("action:", key)}
      />
    );
  },
};

// ── Empty state ───────────────────────────────────────────────────────────────
export const EmptyState: StoryObj = {
  render: () => {
    const [isOpen, setOpen] = useState(true);
    return (
      <CommandPalette
        isOpen={isOpen}
        onOpenChange={setOpen}
        searchValue="xyznotfound"
        items={[]}
      />
    );
  },
};

// ── No footer ─────────────────────────────────────────────────────────────────
export const NoFooter: StoryObj = {
  render: () => {
    const [isOpen, setOpen] = useState(true);
    return (
      <CommandPalette
        isOpen={isOpen}
        onOpenChange={setOpen}
        showFooter={false}
        items={[
          { id: "settings", label: "Settings", icon: <Settings size={14} /> },
          {
            id: "logout",
            label: "Log out",
            icon: <LogOut size={14} />,
            intent: "danger",
          },
        ]}
      />
    );
  },
};
