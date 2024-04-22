import {
  Controller,
  useFormContext
} from "react-hook-form";
import {
  GroupBase,
  Props
} from "react-select";

import {
  OmitSelectProps,
  Select
} from "~/components/Select";
import {
  InputSelectProps
} from "./InputSelect.types";
import {
  defaultRule
} from "./InputSelect.utils";
import {
  useDisabledField
} from "../HookForm/HookForm.context";

export function InputSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  onChangeValue,
  disabled,
  rule,
  name,
  ...props
}: InputSelectProps<Option> & Omit<Props<Option, IsMulti, Group>, OmitSelectProps>) {

  const isDisabled = useDisabledField(name);
  const form = useFormContext();

  return (
    <Controller
      disabled={isDisabled || disabled}
      control={form.control}
      rules={defaultRule(rule, props.isMulti)}
      name={name}
      render={({ field, fieldState }) => {

        const isError = !!fieldState.error;
        return (
          <Select
            {...props}
            helperText={isError ? fieldState.error?.message?.toString() : props.helperText}
            required={!!rule?.required}
            disabled={field.disabled}
            error={isError}
            value={field.value}
            selectRef={field.ref}
            onChangeValue={(_: any) => {
              field.onChange(_);
              field.onBlur();
              onChangeValue?.(_);
            }}
            menuPlacement="auto"
          />
        );
      }}
    />
  );
}
