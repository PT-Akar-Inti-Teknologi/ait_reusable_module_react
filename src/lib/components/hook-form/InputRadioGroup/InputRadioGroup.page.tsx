import {
  useFormContext
} from "react-hook-form";
import {
  ChangeEvent,
  Children,
  createElement,
  isValidElement,
} from "react";

import {
  InputGroup
} from "~/components/InputGroup";

import {
  useDisabledField
} from "../HookForm/HookForm.context";
import {
  InputRadioGroupProps
} from "./InputRadioGroup.types";

export function InputRadioGroup({
  helperText,
  children,
  name,
  rule,
  ...props
}: Readonly<InputRadioGroupProps>) {

  const isDisabled = useDisabledField(name);
  const form = useFormContext();
  const fieldState = form.getFieldState(name);
  const value = form.watch(name)?.toString();
  // bypass boolean value
  const isInputRequired = rule?.required ? !value : false;
  const error = form.formState.errors;

  const errorMessage = rule?.required === true
    ? 'Field cannot be empty'
    : error?.message?.toString();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    form.setValue(name, event.target.value);
    form.clearErrors(name);
  };

  const setValueAs = (value?: string) => {
    if (value === 'true') {
      return (true);
    }
    if (value === 'false') {
      return (false);
    }
    return (value);
  };

  return (
    <InputGroup
      helperText={fieldState.invalid ? errorMessage : helperText}
      required={!!rule?.required}
      error={fieldState.invalid}
      {...props}
    >
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return createElement(child.type, {
            ...child.props,
            ...form.register(name, { ...rule, required: isInputRequired, setValueAs }),
            onChange: handleInputChange,
            checked: value === child.props.value,
            key: child.key,
            disabled: isDisabled,
            onBlur: () => { }
          });
        }
        return (child);
      })}
    </InputGroup>
  );
}
