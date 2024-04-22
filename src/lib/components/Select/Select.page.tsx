import InputSelect, {
  GroupBase,
  Props,
} from "react-select";
import {
  twMerge
} from "tailwind-merge";

import {
  Label
} from "../Label";
import {
  HelperText
} from "../HelperText";
import {
  SelectVariants,
  Theme
} from "./Select.theme";
import {
  OmitSelectProps,
  SelectProps
} from "./Select.types";
import {
  SelectComponents
} from "./SelectComponents";

export function Select<
  Option,
  IsMulty extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  onChangeValue,
  selectOption,
  helperText,
  className,
  selectRef,
  disabled,
  options,
  label,
  error,
  selectKey,
  value,
  variant,
  ...props
}: SelectProps<Option> & Omit<Props<Option, IsMulty, Group>, OmitSelectProps>) {

  const remapOption = (value: any) => {
    if (typeof (value) == 'object' && typeof (selectOption) == 'function') {
      return ({ ...selectOption(value), ...value });
    }
    return value;
  }

  const getValue = () => {
    try {
      if (Array.isArray(value)) {
        return value.map(remapOption);
      } else if (!!value && Object.values(value).length > 0) {
        return remapOption(value);
      }
    } catch (error) { }
    return undefined;
  };


  const getOptions = () => {
    return options?.map(remapOption);
  };

  return (
    <div className={twMerge("relative", className)}>
      {(!!label) && <Label required={props.required} {...{ error }}>{label}</Label>}
      <InputSelect
        components={SelectComponents}
        isSearchable={true}
        hideSelectedOptions={!props.isMulti}
        closeMenuOnSelect={!props.isMulti}
        isDisabled={disabled}
        onChange={(_: any) => onChangeValue?.(_)}
        options={getOptions()}
        ref={selectRef}
        classNames={{
          placeholder: () => twMerge(
            Theme.placeholder,
            variant && SelectVariants[variant].placeholder
          ),
          control: (_) => twMerge(
            "!border-transparent",
            error && Theme.controlError,
            error && _.isFocused && Theme.controlErrorFocus,
            variant && SelectVariants[variant].control.default,
            value && variant && SelectVariants[variant].control.selected
          ),
          valueContainer: (_) => twMerge(Theme.valueContainer, _.isMulti ? 'py-0' : 'py-2.5'),
          singleValue: () => twMerge(
            Theme.singleValue,
            value && variant && SelectVariants[variant].singleValue
          ),
          multiValue: (_) => twMerge(Theme.multiValue),
          multiValueLabel: (_) => twMerge(Theme.multiValueLabel),
          input: () => twMerge(Theme.input),
          clearIndicator: () => twMerge(variant && SelectVariants[variant].clearIndicator),
          indicatorsContainer: () => twMerge(Theme.indicatorsContainer),
          option: (_) => twMerge(Theme.option, _.isFocused && Theme.optionFocus),
          menuList: () => twMerge(Theme.menuList),
          menu: () => twMerge(Theme.menu)
        }}
        menuPortalTarget={document.body}
        menuPosition="fixed"
        value={getValue()}
        styles={{
          control: ({
            backgroundColor,
            borderRadius,
            borderColor,
            borderStyle,
            boxShadow,
            outline,
            ...base
          }) => ({
            ...base,
            borderWidth: 1,
            minHeight: 40
          }),
          option: (base, state) => ({
            ...base,
            color: state.isSelected ? 'text-primary' : '',
            backgroundColor: state.isFocused ? '#EFF6FF' : '',
          }),
          menuPortal: base => ({ ...base, zIndex: 999999 })
        }}
        key={selectKey}
        {...props}
      />
      {(!!helperText) && <HelperText {...{ error }}>{helperText}</HelperText>}
    </div>
  );
}
