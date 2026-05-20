import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, AvatarGroup } from "../primitives/avator/avator";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;

// ── Sizes ─────────────────────────────────────────────────────────────────────
export const Sizes: StoryObj<typeof Avatar> = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Avatar name="John Doe" size="xs" />
      <Avatar name="John Doe" size="sm" />
      <Avatar name="John Doe" size="md" />
      <Avatar name="John Doe" size="lg" />
      <Avatar name="John Doe" size="xl" />
      <Avatar name="John Doe" size="2xl" />
    </div>
  ),
};

// ── With image ────────────────────────────────────────────────────────────────
export const WithImage: StoryObj<typeof Avatar> = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Avatar src="https://i.pravatar.cc/150?img=1" name="Alice" size="md" />
      <Avatar src="https://i.pravatar.cc/150?img=2" name="Bob" size="lg" />
      <Avatar src="broken-url.jpg" name="Carol" size="md" />
    </div>
  ),
};

// ── Fallback colors ───────────────────────────────────────────────────────────
export const FallbackColors: StoryObj<typeof Avatar> = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Avatar name="Alice Kim" colorScheme="brand" size="md" />
      <Avatar name="Bob Smith" colorScheme="neutral" size="md" />
      <Avatar name="Carol White" colorScheme="success" size="md" />
      <Avatar name="Dan Brown" colorScheme="warning" size="md" />
      <Avatar name="Eve Johnson" colorScheme="danger" size="md" />
    </div>
  ),
};

// ── Ring variants ─────────────────────────────────────────────────────────────
export const Rings: StoryObj<typeof Avatar> = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <Avatar name="No Ring" size="lg" ring="none" />
      <Avatar name="Default Ring" size="lg" ring="default" />
      <Avatar name="Brand Ring" size="lg" ring="brand" />
      <Avatar name="Gradient Ring" size="lg" ring="gradient" />
      <Avatar name="White Ring" size="lg" ring="white" />
    </div>
  ),
};

// ── Status indicators ─────────────────────────────────────────────────────────
export const StatusIndicators: StoryObj<typeof Avatar> = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      <Avatar name="Online" size="md" status="online" />
      <Avatar name="Offline" size="md" status="offline" />
      <Avatar name="Busy" size="md" status="busy" />
      <Avatar name="Away" size="md" status="away" />
    </div>
  ),
};

// ── Clickable ─────────────────────────────────────────────────────────────────
export const Clickable: StoryObj<typeof Avatar> = {
  render: () => (
    <Avatar
      src="https://i.pravatar.cc/150?img=5"
      name="Click Me"
      size="lg"
      ring="brand"
      clickable
      onClick={() => alert("Avatar clicked!")}
    />
  ),
};

// ── Group ─────────────────────────────────────────────────────────────────────
export const Group: StoryObj<typeof AvatarGroup> = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <AvatarGroup
        size="md"
        avatars={[
          { src: "https://i.pravatar.cc/150?img=1", name: "Alice" },
          { src: "https://i.pravatar.cc/150?img=2", name: "Bob" },
          { src: "https://i.pravatar.cc/150?img=3", name: "Carol" },
          { src: "https://i.pravatar.cc/150?img=4", name: "Dan" },
          { name: "Eve Johnson" },
          { name: "Frank Miller" },
        ]}
        max={4}
      />
      <AvatarGroup
        size="sm"
        avatars={[
          { name: "Alice Kim" },
          { name: "Bob Smith" },
          { name: "Carol White" },
        ]}
        max={4}
      />
    </div>
  ),
};
