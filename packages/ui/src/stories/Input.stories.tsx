import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mail, Search, User, Lock } from "lucide-react";
import { Input, PasswordInput } from "../primitives/input/input";

const meta: Meta<typeof Input> = {
  component: Input,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "360px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default: StoryObj<typeof Input> = {
  args: { label: "Email address" },
};

export const WithLeadingIcon: StoryObj<typeof Input> = {
  args: { label: "Email address", leadingIcon: <Mail size={16} /> },
};

export const WithTrailingIcon: StoryObj<typeof Input> = {
  args: { label: "Search", trailingIcon: <Search size={16} /> },
};

export const WithHelperText: StoryObj<typeof Input> = {
  args: {
    label: "Username",
    helperText: "This will be your public display name.",
    leadingIcon: <User size={16} />,
  },
};

export const Invalid: StoryObj<typeof Input> = {
  args: {
    label: "Email address",
    leadingIcon: <Mail size={16} />,
    isInvalid: true,
    errorMessage: "Please enter a valid email address.",
    defaultValue: "notanemail",
  },
};

export const Disabled: StoryObj<typeof Input> = {
  args: {
    label: "Email address",
    leadingIcon: <Mail size={16} />,
    isDisabled: true,
    defaultValue: "user@example.com",
  },
};

export const Sizes: StoryObj<typeof Input> = {
  render: () => (
    <>
      <Input label="Small" size="sm" leadingIcon={<Mail size={14} />} />
      <Input label="Medium" size="md" leadingIcon={<Mail size={16} />} />
      <Input label="Large" size="lg" leadingIcon={<Mail size={18} />} />
    </>
  ),
};

export const Password: StoryObj<typeof PasswordInput> = {
  render: () => (
    <PasswordInput label="Password" leadingIcon={<Lock size={16} />} />
  ),
};

export const PasswordWithHelper: StoryObj<typeof PasswordInput> = {
  render: () => (
    <PasswordInput
      label="New password"
      leadingIcon={<Lock size={16} />}
      helperText="Must be at least 8 characters."
    />
  ),
};

export const PasswordInvalid: StoryObj<typeof PasswordInput> = {
  render: () => (
    <PasswordInput
      label="Password"
      leadingIcon={<Lock size={16} />}
      isInvalid
      errorMessage="Password must be at least 8 characters."
      defaultValue="abc"
    />
  ),
};
