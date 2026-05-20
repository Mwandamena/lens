import type { Meta, StoryObj } from "@storybook/react-vite";
import { Modal } from "../primitives/modal/modal";
import { Button } from "../primitives/button/button";
import React from "react";

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;

const LoremContent = () => (
  <p style={{ margin: 0, color: "inherit" }}>
    This is the modal body. You can put any content here — forms, images,
    confirmations, or complex layouts. The modal handles focus trapping and
    keyboard dismissal automatically via React Aria.
  </p>
);

const LongContent = () => (
  <>
    {Array.from({ length: 12 }, (_, i) => (
      <p key={i} style={{ margin: "0 0 16px" }}>
        Paragraph {i + 1} — Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    ))}
  </>
);

// ── Center ────────────────────────────────────────────────────────────────────
export const Center: StoryObj<typeof Modal> = {
  render: () => (
    <Modal
      trigger={<Button>Open Modal</Button>}
      title="Modal Title"
      description="A short description of what this modal is for."
      placement="center"
      size="md"
      footer={
        <React.Fragment>
          <Button variant="outline" colorScheme="neutral" onPress={close}>
            Cancel
          </Button>
          <Button variant="solid" colorScheme="brand" onPress={close}>
            Confirm
          </Button>
        </React.Fragment>
      }
    >
      <LoremContent />
    </Modal>
  ),
};

// ── Sizes ─────────────────────────────────────────────────────────────────────
export const Sizes: StoryObj<typeof Modal> = {
  render: () => (
    <div style={{ display: "flex", gap: "12px" }}>
      {(["sm", "md", "lg", "xl"] as const).map((size) => (
        <Modal
          key={size}
          trigger={
            <Button variant="outline" colorScheme="neutral">
              {size.toUpperCase()}
            </Button>
          }
          title={`Size: ${size}`}
          placement="center"
          size={size}
        >
          <LoremContent />
        </Modal>
      ))}
    </div>
  ),
};

// ── Scroll inside ─────────────────────────────────────────────────────────────
export const ScrollInside: StoryObj<typeof Modal> = {
  render: () => (
    <Modal
      trigger={<Button>Scroll Inside</Button>}
      title="Scrollable Content"
      description="Content scrolls inside the modal, footer stays fixed."
      placement="center"
      scroll="inside"
      footer={
        <Button variant="solid" colorScheme="brand" onPress={close}>
          Done
        </Button>
      }
    >
      <LongContent />
    </Modal>
  ),
};

// ── Scroll outside ────────────────────────────────────────────────────────────
export const ScrollOutside: StoryObj<typeof Modal> = {
  render: () => (
    <Modal
      trigger={<Button>Scroll Outside</Button>}
      title="Page Scrolls"
      description="Modal grows with content, the page scrolls."
      placement="center"
      scroll="outside"
    >
      <LongContent />
    </Modal>
  ),
};

// ── Sheet ─────────────────────────────────────────────────────────────────────
export const Sheet: StoryObj<typeof Modal> = {
  render: () => (
    <Modal
      trigger={<Button>Open Sheet</Button>}
      title="Bottom Sheet"
      description="Slides up from the bottom of the screen."
      placement="sheet"
      footer={
        <>
          <Button variant="outline" colorScheme="neutral" onPress={close}>
            Cancel
          </Button>
          <Button variant="solid" colorScheme="brand" onPress={close}>
            Save
          </Button>
        </>
      }
    >
      <LoremContent />
    </Modal>
  ),
};

// ── Sheet scrollable ──────────────────────────────────────────────────────────
export const SheetScrollable: StoryObj<typeof Modal> = {
  render: () => (
    <Modal
      trigger={<Button>Scrollable Sheet</Button>}
      title="Scrollable Sheet"
      placement="sheet"
      scroll="inside"
    >
      <LongContent />
    </Modal>
  ),
};

// ── Fullscreen ────────────────────────────────────────────────────────────────
export const Fullscreen: StoryObj<typeof Modal> = {
  render: () => (
    <Modal
      trigger={<Button>Fullscreen</Button>}
      title="Fullscreen Modal"
      placement="fullscreen"
      footer={
        <Button variant="outline" colorScheme="neutral" onPress={close}>
          Close
        </Button>
      }
    >
      <LoremContent />
    </Modal>
  ),
};

// ── Drawer left ───────────────────────────────────────────────────────────────
export const DrawerLeft: StoryObj<typeof Modal> = {
  render: () => (
    <Modal
      trigger={<Button>Left Drawer</Button>}
      title="Navigation"
      placement="drawerLeft"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {["Home", "Explore", "Following", "Profile", "Settings"].map((item) => (
          <div
            key={item}
            style={{
              padding: "12px 8px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </Modal>
  ),
};

// ── Drawer right ──────────────────────────────────────────────────────────────
export const DrawerRight: StoryObj<typeof Modal> = {
  render: () => (
    <Modal
      trigger={<Button>Right Drawer</Button>}
      title="Filters"
      placement="drawerRight"
      footer={
        <>
          <Button variant="outline" colorScheme="neutral" onPress={close}>
            Reset
          </Button>
          <Button variant="solid" colorScheme="brand" onPress={close}>
            Apply
          </Button>
        </>
      }
    >
      <LoremContent />
    </Modal>
  ),
};

// ── No dismiss ────────────────────────────────────────────────────────────────
export const NoDismiss: StoryObj<typeof Modal> = {
  render: () => (
    <Modal
      trigger={<Button colorScheme="danger">Confirm Delete</Button>}
      title="Delete Account"
      description="This action cannot be undone."
      placement="center"
      size="sm"
      isDismissable={false}
      footer={
        <>
          <Button variant="outline" colorScheme="neutral" onPress={close}>
            Cancel
          </Button>
          <Button variant="solid" colorScheme="danger" onPress={close}>
            Delete
          </Button>
        </>
      }
    >
      <LoremContent />
    </Modal>
  ),
};
