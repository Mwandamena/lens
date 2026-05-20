"use client";

import {
  createContext,
  useContext,
  useMemo,
  forwardRef,
  type ComponentProps,
} from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
} from "react-aria-components";
import { styled } from "../../../styled-system/jsx";
import {
  type BtnRecipeVariantProps,
  btnRecipe,
} from "../../../styled-system/recipes";
import { Group, type GroupProps } from "../data-display/group";
import { Loader } from "../feedback/loader";

interface ButtonLoadingProps {
  /**
   * If `true`, the button will show a loading spinner.
   * @default false
   */
  loading?: boolean | undefined;
  /**
   * The text to show while loading.
   */
  loadingText?: React.ReactNode | undefined;
  /**
   * The spinner to show while loading.
   */
  spinner?: React.ReactNode | undefined;
  /**
   * The placement of the spinner
   * @default "start"
   */
  spinnerPlacement?: "start" | "end" | undefined;
}

// 1. Wrap React Aria's Button component with Panda's JSX Factory
const StyledAriaButton = styled(AriaButton, btnRecipe);

// Extract the base properties from our factory wrapper
type BaseButtonProps = ComponentProps<typeof StyledAriaButton>;

export interface ButtonProps extends BaseButtonProps, ButtonLoadingProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const propsContext = useContext(ButtonPropsContext);

    // 2. Merge context variants with incoming button properties safely
    const buttonProps = useMemo(
      () => ({ ...propsContext, ...props }),
      [propsContext, props],
    );

    const {
      loading,
      loadingText,
      children,
      spinner,
      spinnerPlacement,
      ...rest
    } = buttonProps;

    return (
      <StyledAriaButton
        ref={ref}
        {...rest}
        // React Aria injects standard states; we can pass custom data selectors cleanly
        data-loading={loading ? "true" : undefined}
        isDisabled={loading || rest.isDisabled}
      >
        {/* 
        React Aria manages child cloning via render props internally. 
        If custom structural injection isn't active, execute normal loading layout calculations.
      */}
        {typeof children !== "function" && loading ? (
          <Loader
            spinner={spinner}
            text={loadingText}
            spinnerPlacement={spinnerPlacement}
          >
            {children}
          </Loader>
        ) : (
          children
        )}
      </StyledAriaButton>
    );
  },
);

// --- Button Group Implementation ---
export interface ButtonGroupProps extends GroupProps, BtnRecipeVariantProps {}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  function ButtonGroup(props, ref) {
    const [variantProps, otherProps] = useMemo(
      () => btnRecipe.splitVariantProps(props),
      [props],
    );

    return (
      <ButtonPropsContext.Provider value={variantProps}>
        <Group ref={ref} {...otherProps} />
      </ButtonPropsContext.Provider>
    );
  },
);

// Standard React Context replacing the specialized Ark UI framework helper utilities
const ButtonPropsContext = createContext<BtnRecipeVariantProps | undefined>(
  undefined,
);
