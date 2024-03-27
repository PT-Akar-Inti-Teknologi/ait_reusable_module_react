import { twMerge } from "tailwind-merge";
import { Theme } from "./HelperText.theme";
import { HelperTextProps } from "./HelperText.types";

export function HelperText({
  className,
  error,
  ...props
}: HelperTextProps) {

  return (
    <p
      className={twMerge(
        Theme.helperText,
        error && Theme.helperTextError,
        className
      )}
      {...props}
    />
  )
}
