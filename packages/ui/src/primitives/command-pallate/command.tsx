import {
  Modal,
  ModalOverlay,
  Dialog,
  ListBox,
  ListBoxItem,
  ListBoxSection,
  Header,
  Input,
  SearchField,
  Text,
  type ListBoxItemProps,
  type Key,
} from "react-aria-components";
import {
  Search,
  CornerDownLeft,
  ArrowUp,
  ArrowDown,
  SearchX,
} from "lucide-react";
import * as styles from "./command.css";

// ── Types ─────────────────────────────────────────────────────────────────────
export interface CommandItemConfig {
  id: Key;
  label: string;
  subtitle?: string;
  icon?: React.ReactNode;
  shortcut?: string[];
  intent?: "default" | "danger";
  onAction?: () => void;
}

export interface CommandSectionConfig {
  id: Key;
  title?: string;
  items: CommandItemConfig[];
}

export interface CommandPaletteProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  label?: string;
  placeholder?: string;
  // Flat items
  items?: CommandItemConfig[];
  // Sectioned items
  sections?: CommandSectionConfig[];
  // Search
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  // Callbacks
  onAction?: (key: Key) => void;
  // Show footer hints
  showFooter?: boolean;
}

// ── Kbd ───────────────────────────────────────────────────────────────────────
function Kbd({ keys }: { keys: string[] }) {
  return (
    <span className={styles.itemShortcut}>
      {keys.map((k) => (
        <kbd key={k} className={styles.kbd}>
          {k}
        </kbd>
      ))}
    </span>
  );
}

// ── Item ──────────────────────────────────────────────────────────────────────
function CommandItem({ config }: { config: CommandItemConfig }) {
  return (
    <ListBoxItem
      id={config.id}
      textValue={config.label}
      className={styles.item({ intent: config.intent ?? "default" })}
      onAction={config.onAction}
    >
      {config.icon && <span className={styles.itemIcon}>{config.icon}</span>}

      <span className={styles.itemLabel}>
        {config.label}
        {config.subtitle && (
          <span className={styles.itemSubtitle}> — {config.subtitle}</span>
        )}
      </span>

      {config.shortcut && <Kbd keys={config.shortcut} />}
    </ListBoxItem>
  );
}

// ── Empty state ───────────────────────────────────────────────────────────────
function EmptyState({ query }: { query?: string }) {
  return (
    <div className={styles.emptyState}>
      <SearchX size={24} className={styles.emptyStateIcon} />
      <span>
        {query ? `No results for "${query}"` : "No commands available"}
      </span>
    </div>
  );
}

// ── Command Palette ───────────────────────────────────────────────────────────
export function CommandPalette({
  isOpen,
  onOpenChange,
  label = "Command Palette",
  placeholder = "Type a command or search...",
  items,
  sections,
  searchValue,
  onSearchChange,
  onAction,
  showFooter = true,
}: CommandPaletteProps) {
  const hasItems =
    (items && items.length > 0) || (sections && sections.length > 0);

  return (
    <ModalOverlay
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className={styles.overlay}
      isDismissable
    >
      <Modal className={styles.content}>
        <Dialog
          aria-label={label}
          style={{ display: "contents", outline: "none" }}
        >
          {/* Search bar */}
          <SearchField
            className={styles.searchContainer}
            value={searchValue}
            onChange={onSearchChange}
            autoFocus
            aria-label="Search commands"
          >
            <span className={styles.searchIcon}>
              <Search size={18} />
            </span>
            <Input placeholder={placeholder} className={styles.searchInput} />
            <span className={styles.searchShortcut}>
              <kbd className={styles.kbd}>Esc</kbd>
            </span>
          </SearchField>

          {/* List */}
          {hasItems ? (
            <ListBox
              className={styles.listbox}
              aria-label="Commands"
              onAction={(key) => {
                onAction?.(key);
                // Also run item-level action if defined
                const allItems = sections
                  ? sections.flatMap((s) => s.items)
                  : (items ?? []);
                allItems.find((i) => i.id === key)?.onAction?.();
              }}
            >
              {/* Flat items */}
              {items?.map((config) => (
                <CommandItem key={String(config.id)} config={config} />
              ))}

              {/* Sectioned items */}
              {sections?.map((section) => (
                <ListBoxSection
                  key={String(section.id)}
                  className={styles.section}
                >
                  {section.title && (
                    <Header className={styles.sectionHeading}>
                      {section.title}
                    </Header>
                  )}
                  {section.items.map((config) => (
                    <CommandItem key={String(config.id)} config={config} />
                  ))}
                </ListBoxSection>
              ))}
            </ListBox>
          ) : (
            <EmptyState query={searchValue} />
          )}

          {/* Footer hints */}
          {showFooter && (
            <div className={styles.footer}>
              <span className={styles.footerHint}>
                <kbd className={styles.kbd}>
                  <ArrowUp size={10} />
                </kbd>
                <kbd className={styles.kbd}>
                  <ArrowDown size={10} />
                </kbd>
                Navigate
              </span>
              <span className={styles.footerHint}>
                <kbd className={styles.kbd}>
                  <CornerDownLeft size={10} />
                </kbd>
                Select
              </span>
              <span className={styles.footerHint}>
                <kbd className={styles.kbd}>Esc</kbd>
                Close
              </span>
            </div>
          )}
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
}
