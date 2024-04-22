import { ClassNameValue } from "tailwind-merge";
import { HTMLAttributes } from "react";

import { DisplayLabelOptions } from "../Table";

export interface LabelItemClassNames {
  container?: ClassNameValue
  label?: ClassNameValue
  value?: ClassNameValue
}

export interface LabelItemProps<T> extends DisplayLabelOptions<T>, HTMLAttributes<HTMLElement> {
  classNames?: LabelItemClassNames
  label: string
  value?: T
}
