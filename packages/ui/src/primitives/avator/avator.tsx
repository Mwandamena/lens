import * as RadixAvatar from "@radix-ui/react-avatar";
import {
  avatarRoot,
  avatarImage,
  avatarFallback,
  avatarIndicator,
  avatarGroup,
  avatarGroupCount,
} from "./avator.css";

// ── Types ─────────────────────────────────────────────────────────────────────
type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
type AvatarRing = "none" | "default" | "brand" | "gradient" | "white";
type AvatarStatus = "online" | "offline" | "busy" | "away";
type AvatarColorScheme = "brand" | "neutral" | "success" | "warning" | "danger";

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  ring?: AvatarRing;
  status?: AvatarStatus;
  colorScheme?: AvatarColorScheme;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
}

function getInitials(name?: string): string {
  if (!name?.trim()) return "?";
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

const COLOR_SCHEMES: AvatarColorScheme[] = [
  "brand",
  "neutral",
  "success",
  "warning",
  "danger",
];

function colorFromName(name?: string): AvatarColorScheme {
  if (!name?.trim()) return "neutral";
  const hash = name
    .trim()
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return COLOR_SCHEMES[hash % COLOR_SCHEMES.length] as AvatarColorScheme;
}

export function Avatar({
  src,
  alt,
  name,
  size = "md",
  ring = "none",
  status,
  colorScheme,
  clickable = false,
  onClick,
  className,
}: AvatarProps) {
  const resolvedColorScheme = colorScheme ?? colorFromName(name);
  const isClickable = clickable || Boolean(onClick);
  const Tag = onClick ? "button" : "div";

  const rootClass = [
    avatarRoot({ size, ring, clickable: isClickable }),
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      className={rootClass}
      onClick={onClick}
      aria-label={alt ?? name}
      {...(Tag === "button" ? { type: "button" as const } : {})}
    >
      <RadixAvatar.Root
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "9999px",
          overflow: "hidden",
          display: "flex",
        }}
      >
        <RadixAvatar.Image
          src={src}
          alt={alt ?? name ?? ""}
          className={avatarImage}
        />
        <RadixAvatar.Fallback
          className={avatarFallback({ size, colorScheme: resolvedColorScheme })}
          delayMs={src ? 300 : 0}
        >
          {getInitials(name)}
        </RadixAvatar.Fallback>
      </RadixAvatar.Root>

      {status && (
        <span
          className={avatarIndicator({ status, size })}
          aria-label={status}
        />
      )}
    </Tag>
  );
}

export interface AvatarGroupProps {
  avatars: AvatarProps[];
  max?: number;
  size?: AvatarSize;
  className?: string;
}

export function AvatarGroup({
  avatars,
  max = 4,
  size = "md",
  className,
}: AvatarGroupProps) {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - max;

  return (
    <div className={[avatarGroup, className].filter(Boolean).join(" ")}>
      {visible.map((avatar, i) => (
        <Avatar
          key={avatar.src ?? avatar.name ?? i}
          {...avatar}
          size={size}
          ring="white"
        />
      ))}
      {overflow > 0 && (
        <span className={avatarGroupCount({ size })}>+{overflow}</span>
      )}
    </div>
  );
}
