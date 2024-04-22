import { InputHTMLAttributes } from "react";
import { ClassNameValue } from "tailwind-merge";

export interface CheckboxClassNames {
  container?: ClassNameValue
  input?: ClassNameValue
  label?: ClassNameValue
}

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> {
  checkedAsValue?: boolean
  classNames?: CheckboxClassNames
  value?: string | number | boolean
  label?: string
}
