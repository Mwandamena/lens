import { forwardRef, type HTMLAttributes } from "react";
import { cx } from "../../../styled-system/css";
import { group } from "../../../styled-system/recipes";

type GroupVariants = Parameters<typeof group>[0];

export interface GroupProps
  extends HTMLAttributes<HTMLDivElement>, GroupVariants {}

export const Group = forwardRef<HTMLDivElement, GroupProps>(
  ({ className, ...props }, ref) => {
    const [variantProps, localProps] = group.splitVariantProps(props);

    return (
      <div
        ref={ref}
        className={cx(group(variantProps), className)}
        {...localProps}
      />
    );
  },
);

Group.displayName = "Group";
