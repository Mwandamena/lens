"use client";

import { Accordion } from "@ark-ui/react/accordion";
import { ark } from "@ark-ui/react/factory";
import { ChevronDownIcon } from "lucide-react";
import { forwardRef, type ComponentProps, type ReactNode } from "react";
import { createStyleContext } from "../../../styled-system/jsx";
import { accordion } from "../../../styled-system/recipes";

const { withProvider, withContext } = createStyleContext(accordion);

const StyledRoot = withProvider(Accordion.Root, "root");
const StyledItem = withContext(Accordion.Item, "item");
const StyledItemContent = withContext(Accordion.ItemContent, "itemContent");
const StyledItemIndicator = withContext(
  Accordion.ItemIndicator,
  "itemIndicator",
  {
    defaultProps: { children: <ChevronDownIcon /> },
  },
);
const StyledItemTrigger = withContext(Accordion.ItemTrigger, "itemTrigger");
const StyledItemBody = withContext(ark.div, "itemBody");

export type AccordionRootProps = ComponentProps<typeof StyledRoot>;
export const AccordionRoot = StyledRoot;

export interface AccordionItemProps extends Omit<
  ComponentProps<typeof StyledItem>,
  "title"
> {
  /** The title/label displayed on the clickable header */
  title: ReactNode;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  function AccordionItem({ title, children, ...props }, ref) {
    return (
      <StyledItem ref={ref} {...props}>
        <StyledItemTrigger>
          {title}
          <StyledItemIndicator />
        </StyledItemTrigger>
        <StyledItemContent>
          <StyledItemBody>{children}</StyledItemBody>
        </StyledItemContent>
      </StyledItem>
    );
  },
);

AccordionItem.displayName = "AccordionItem";

export { AccordionContext as Context } from "@ark-ui/react/accordion";
