import {
  MenuTrigger,
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuSection as AriaMenuSection,
  Separator,
  Popover,
  Header,
  type MenuProps,
  type MenuItemProps,
  type MenuSectionProps,
  type Key,
} from "react-aria-components";
import { Check } from "lucide-react";
import {
  menuPopover,
  menuList,
  menuItem,
  menuItemIcon,
  menuItemLabel,
  menuItemShortcut,
  menuItemCheckmark,
  menuSection,
  menuSectionHeader,
  menuSeparator,
} from "./menu.css";

// ── Types ─────────────────────────────────────────────────────────────────────
export interface MenuItemConfig {
  id: Key;
  label: string;
  icon?: React.ReactNode;
  shortcut?: string;
  intent?: "default" | "danger";
  disabled?: boolean;
}

export interface MenuSectionConfig {
  id: Key;
  title?: string;
  items: MenuItemConfig[];
}

export interface MenuProps2 {
  trigger: React.ReactNode;
  sections?: MenuSectionConfig[];
  items?: MenuItemConfig[];
  onAction?: (key: Key) => void;
  placement?:
    | "bottom"
    | "bottom left"
    | "bottom right"
    | "top"
    | "top left"
    | "top right";
}

// ── MenuItem ──────────────────────────────────────────────────────────────────
export function MenuItem({ item }: { item: MenuItemConfig }) {
  return (
    <AriaMenuItem
      id={item.id}
      isDisabled={item.disabled}
      className={menuItem({ intent: item.intent ?? "default" })}
      textValue={item.label}
    >
      {({ isSelected }) => (
        <>
          {item.icon && <span className={menuItemIcon}>{item.icon}</span>}
          <span className={menuItemLabel}>{item.label}</span>
          {item.shortcut && (
            <kbd className={menuItemShortcut}>{item.shortcut}</kbd>
          )}
          <Check size={14} className={menuItemCheckmark} />
        </>
      )}
    </AriaMenuItem>
  );
}

// ── Menu ──────────────────────────────────────────────────────────────────────
export function Menu({
  trigger,
  sections,
  items,
  onAction,
  placement = "bottom left",
}: MenuProps2) {
  return (
    <MenuTrigger>
      {trigger}
      <Popover placement={placement} className={menuPopover}>
        <AriaMenu className={menuList} onAction={onAction}>
          {/* Flat items list */}
          {items?.map((item, index) => (
            <MenuItem key={item.id} item={item} />
          ))}

          {/* Sectioned items */}
          {sections?.map((section, sectionIndex) => (
            <>
              {sectionIndex > 0 && <Separator className={menuSeparator} />}
              <AriaMenuSection key={section.id} className={menuSection}>
                {section.title && (
                  <Header className={menuSectionHeader}>{section.title}</Header>
                )}
                {section.items.map((item) => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </AriaMenuSection>
            </>
          ))}
        </AriaMenu>
      </Popover>
    </MenuTrigger>
  );
}

// Re-export separator for custom compositions
export { Separator as MenuSeparator };
