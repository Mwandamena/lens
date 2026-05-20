import {
  TextField,
  Input as AriaInput,
  Label,
  FieldError,
  Text,
  type TextFieldProps,
} from "react-aria-components";
import { useState } from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import {
  inputFieldRoot,
  inputWrapper,
  inputField,
  floatingLabel,
  inputIconLeading,
  inputIconTrailing,
  passwordToggle,
  inputHelperText,
  inputErrorText,
} from "./input.css";

type InputSize = "sm" | "md" | "lg";

interface BaseInputProps extends Omit<TextFieldProps, "children"> {
  label: string;
  helperText?: string;
  size?: InputSize;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  placeholder?: string;
}

// ── Input ─────────────────────────────────────────────────────────────────────
export function Input({
  label,
  helperText,
  size = "md",
  leadingIcon,
  trailingIcon,
  placeholder,
  ...props
}: BaseInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(
    Boolean(props.value ?? props.defaultValue ?? ""),
  );
  const isFloated = isFocused || hasValue;

  return (
    <TextField
      {...props}
      className={inputFieldRoot}
      onChange={(val) => {
        setHasValue(Boolean(val));
        props.onChange?.(val);
      }}
    >
      {({ isInvalid }) => (
        <>
          <div className={inputWrapper}>
            {leadingIcon && (
              <span className={inputIconLeading}>{leadingIcon}</span>
            )}

            <AriaInput
              placeholder={placeholder ?? label}
              className={inputField({
                size,
                hasLeadingIcon: Boolean(leadingIcon),
                hasTrailingIcon: Boolean(trailingIcon) || isInvalid,
              })}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />

            <Label
              className={floatingLabel({
                floated: isFloated,
                invalid: isInvalid,
                hasLeadingIcon: Boolean(leadingIcon),
              })}
            >
              {label}
            </Label>

            {trailingIcon && !isInvalid && (
              <span className={inputIconTrailing}>{trailingIcon}</span>
            )}
            {isInvalid && (
              <span className={inputIconTrailing}>
                <AlertCircle size={16} />
              </span>
            )}
          </div>

          {helperText && !isInvalid && (
            <Text slot="description" className={inputHelperText}>
              {helperText}
            </Text>
          )}
          <FieldError className={inputErrorText} />
        </>
      )}
    </TextField>
  );
}

// ── PasswordInput ─────────────────────────────────────────────────────────────
export function PasswordInput({
  label = "Password",
  helperText,
  size = "md",
  leadingIcon,
  placeholder,
  ...props
}: Omit<BaseInputProps, "trailingIcon">) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(
    Boolean(props.value ?? props.defaultValue ?? ""),
  );
  const [isVisible, setIsVisible] = useState(false);
  const isFloated = isFocused || hasValue;

  return (
    <TextField
      {...props}
      className={inputFieldRoot}
      onChange={(val) => {
        setHasValue(Boolean(val));
        props.onChange?.(val);
      }}
    >
      {({ isInvalid }) => (
        <>
          <div className={inputWrapper}>
            {leadingIcon && (
              <span className={inputIconLeading}>{leadingIcon}</span>
            )}

            <AriaInput
              type={isVisible ? "text" : "password"}
              placeholder={placeholder ?? label}
              className={inputField({
                size,
                hasLeadingIcon: Boolean(leadingIcon),
                hasTrailingIcon: true,
              })}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />

            <Label
              className={floatingLabel({
                floated: isFloated,
                invalid: isInvalid,
                hasLeadingIcon: Boolean(leadingIcon),
              })}
            >
              {label}
            </Label>

            <button
              type="button"
              className={passwordToggle}
              onMouseDown={(e) => {
                e.preventDefault();
                setIsVisible((v) => !v);
              }}
              aria-label={isVisible ? "Hide password" : "Show password"}
            >
              {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {helperText && !isInvalid && (
            <Text slot="description" className={inputHelperText}>
              {helperText}
            </Text>
          )}
          <FieldError className={inputErrorText} />
        </>
      )}
    </TextField>
  );
}
