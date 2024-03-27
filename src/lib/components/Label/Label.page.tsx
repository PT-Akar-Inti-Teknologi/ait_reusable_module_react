import { twMerge } from 'tailwind-merge'

import { LabelProps } from "./Label.types";
import { Theme } from './Label.theme';

export function Label({
  className,
  required,
  children,
  error,
  ...props
}: LabelProps) {

  return (
    <label className={twMerge(Theme.label, error && Theme.labelError, className)} {...props}>
      {children}{(required) && <span className="ml-1 text-danger">*</span>}
    </label>
  );
}
