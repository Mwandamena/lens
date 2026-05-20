import React from "react";
import {
  Switch as AriaSwitch,
  SwitchProps as AriaSwitchProps,
} from "react-aria-components";
import * as styles from "./switch.css";

export interface SwitchProps extends Omit<AriaSwitchProps, "className"> {
  /** The text label for the switch */
  children?: React.ReactNode;
  /** The size of the switch */
  size?: "sm" | "md";
  /** Custom class for the root wrapper */
  className?: string;
  colorScheme?: "brand" | "mono";
}

export const Switch = ({
  children,
  size = "md",
  className,
  colorScheme = "brand",
  ...props
}: SwitchProps) => {
  return (
    <AriaSwitch
      {...props}
      className={className ? `${styles.root} ${className}` : styles.root}
    >
      {/* React Aria handles injecting the hidden <input> automatically here */}
      <div className={styles.track({ size })}>
        <span className={styles.thumb({ size, colorScheme })} />
      </div>
      {children}
    </AriaSwitch>
  );
};
