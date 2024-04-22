import { HTMLAttributes } from "react";

export interface ControlLabelProps extends HTMLAttributes<HTMLElement> {
  helperText?: string;
  required?: boolean;
  label: string;
  name?: string;
}
