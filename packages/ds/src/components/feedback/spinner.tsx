import { cx } from "../../../styled-system/css";
import {
  spinner,
  type SpinnerVariantProps,
} from "../../../styled-system/recipes";

export interface SpinnerProps extends SpinnerVariantProps {
  className?: string;
}

export const Spinner = ({ className, size, ...props }: SpinnerProps) => (
  <span
    className={cx(spinner({ size }), className)}
    {...props}
    role="status"
    aria-busy="true"
  />
);
