import React from "react";
import {
  ComboBox,
  Label,
  Group,
  Input,
  Button,
  Popover,
  ListBox,
  ListBoxItem,
  ComboBoxProps,
} from "react-aria-components";
import { ChevronDown, Check } from "lucide-react";
import * as styles from "./autocomplete.css";

export interface AutocompleteProps<T extends object> extends Omit<
  ComboBoxProps<T>,
  "children"
> {
  label: string;
  description?: string;
  placeholder?: string;
  items: Iterable<T>;
  children: (item: T) => React.ReactNode;
}

export function Autocomplete<T extends object>({
  label,
  description,
  placeholder,
  items,
  children,
  ...props
}: AutocompleteProps<T>) {
  return (
    <ComboBox {...props} className={styles.root}>
      <Label className={styles.label}>{label}</Label>

      <Group className={styles.group}>
        <Input className={styles.input} placeholder={placeholder} />
        <Button className={styles.button}>
          <ChevronDown size={16} />
        </Button>
      </Group>

      {description && <span className={styles.description}>{description}</span>}

      <Popover className={styles.popover} offset={4}>
        <ListBox className={styles.listbox} items={items}>
          {(item) => (
            <ListBoxItem
              className={styles.item}
              textValue={item.name as string}
            >
              {({ isSelected }) => (
                <>
                  {/* Let the user dictate the rendering via the children function */}
                  <span>{children(item)}</span>

                  {/* Render a checkmark if selected */}
                  {isSelected && <Check size={16} />}
                </>
              )}
            </ListBoxItem>
          )}
        </ListBox>
      </Popover>
    </ComboBox>
  );
}
