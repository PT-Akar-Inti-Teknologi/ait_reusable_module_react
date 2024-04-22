import { HelperText } from "../HelperText";
import { Label } from "../Label";
import { InputGroupProps } from "./InputGroup.types";

export function InputGroup({
  className,
  children,
  helperText,
  inputProps,
  required,
  error,
  label,
  rule,
  ...props
}: Readonly<InputGroupProps>) {

  return (
    <div className="flex gap-1">
      {(!!label) && <Label {...{ required, error }}>{label}</Label>}
      <div className="flex flex-row gap-1" {...props}>{children}</div>
      {(!!helperText) && <HelperText {...{ error }}>{helperText}</HelperText>}
    </div>
  );
}
