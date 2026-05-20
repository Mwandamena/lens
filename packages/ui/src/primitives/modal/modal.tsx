import {
  Modal as AriaModal,
  ModalOverlay,
  Dialog,
  DialogTrigger,
  Heading,
  Button,
  type DialogProps,
} from "react-aria-components";
import { X } from "lucide-react";
import {
  overlay,
  dialog,
  sheetHandle,
  modalHeader,
  modalTitle,
  modalDescription,
  modalClose,
  modalBody,
  modalFooter,
} from "./modal.css";

// ── Types ─────────────────────────────────────────────────────────────────────
type ModalPlacement =
  | "center"
  | "sheet"
  | "fullscreen"
  | "drawerLeft"
  | "drawerRight";
type ModalSize = "sm" | "md" | "lg" | "xl";
type ModalScroll = "inside" | "outside";

export interface ModalProps {
  // Trigger element — the button/element that opens the modal
  trigger: React.ReactNode;

  // Content
  title?: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;

  // Variants
  placement?: ModalPlacement;
  size?: ModalSize;
  scroll?: ModalScroll;

  // Behaviour
  isDismissable?: boolean;
  isKeyboardDismissDisabled?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}

// ── Modal ─────────────────────────────────────────────────────────────────────
export function Modal({
  trigger,
  title,
  description,
  children,
  footer,
  placement = "center",
  size = "md",
  scroll = "inside",
  isDismissable = true,
  isKeyboardDismissDisabled,
  defaultOpen,
  onOpenChange,
}: ModalProps) {
  return (
    <DialogTrigger defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {trigger}

      <ModalOverlay
        className={overlay}
        isDismissable={isDismissable}
        isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      >
        <AriaModal
          className={dialog({
            placement,
            size: placement === "center" ? size : undefined,
            scroll:
              placement === "fullscreen" ||
              placement === "drawerLeft" ||
              placement === "drawerRight"
                ? "inside"
                : scroll,
          })}
        >
          <Dialog style={{ display: "contents", outline: "none" }}>
            {({ close }) => (
              <>
                {/* Sheet drag handle */}
                {placement === "sheet" && (
                  <div className={sheetHandle} aria-hidden />
                )}

                {/* Header */}
                {(title || description) && (
                  <div className={modalHeader}>
                    <div>
                      {title && (
                        <Heading slot="title" className={modalTitle}>
                          {title}
                        </Heading>
                      )}
                      {description && (
                        <p className={modalDescription}>{description}</p>
                      )}
                    </div>

                    {isDismissable && (
                      <Button
                        onPress={close}
                        className={modalClose}
                        aria-label="Close"
                      >
                        <X size={16} />
                      </Button>
                    )}
                  </div>
                )}

                {/* Body */}
                <div className={modalBody({ scroll })}>
                  {typeof children === "function"
                    ? (children as (close: () => void) => React.ReactNode)(
                        close,
                      )
                    : children}
                </div>

                {/* Footer */}
                {footer && (
                  <div className={modalFooter}>
                    {typeof footer === "function"
                      ? (footer as (close: () => void) => React.ReactNode)(
                          close,
                        )
                      : footer}
                  </div>
                )}
              </>
            )}
          </Dialog>
        </AriaModal>
      </ModalOverlay>
    </DialogTrigger>
  );
}
