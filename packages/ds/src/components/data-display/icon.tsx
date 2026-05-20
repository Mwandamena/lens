import type { ComponentProps, ComponentType } from "react";
import { styled } from "../../../styled-system/jsx";
import { icon } from "../../../styled-system/recipes";

const StyledSvg = styled("svg", icon, {
  defaultProps: {
    size: "md",
  },
});

type StyledSvgProps = ComponentProps<typeof StyledSvg>;

export interface IconProps extends Omit<StyledSvgProps, "as"> {
  as: ComponentType<any>;
}

export function Icon({ as: Component, ...props }: IconProps) {
  return <StyledSvg as={Component} {...props} />;
}
