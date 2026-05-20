import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";
import { button } from "../../theme/recipes/button.css";

type ButtonVariants = NonNullable<Parameters<typeof button>[0]>;

export interface ButtonProps extends AriaButtonProps, ButtonVariants {
  className?: string;
}

export function Button({
  colorScheme,
  variant,
  size,
  rounded,
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  return (
    <AriaButton
      className={[
        button({ colorScheme, variant, size, rounded, fullWidth }),
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}
