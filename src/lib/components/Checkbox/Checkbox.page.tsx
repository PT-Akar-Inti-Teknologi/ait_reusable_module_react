import { twMerge } from "tailwind-merge";
import { ChangeEvent, useId } from "react";

import { CheckboxProps } from "./Checkbox.types";
import { Theme } from "./Checkbox.theme";

export function Checkbox({
  checkedAsValue,
  classNames,
  className,
  onChange,
  label,
  value,
  ...props
}: Readonly<CheckboxProps>) {

  const isChecked = checkedAsValue ? !!value : undefined;
  const id = useId();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (checkedAsValue) {
      event.target.value = event.target.checked?.toString();
    }
    onChange?.(event);
  };

  return (
    <div className={twMerge("inline-flex", classNames?.container)}>
      <input
        className={twMerge(Theme.input, className, classNames?.input)}
        onChange={handleOnChange}
        checked={isChecked}
        value={value?.toString()}
        type="checkbox"
        id={id}
        {...props}
      />
      {(!!label) && (
        <label htmlFor={id} className={twMerge(Theme.label, classNames?.label, props.disabled && Theme.labelDisabled)}>
          {label}
        </label>
      )}
    </div>
  )
}