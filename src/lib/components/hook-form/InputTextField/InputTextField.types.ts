import { RegisterOptions } from "react-hook-form";

import { TextFieldProps } from "~/components/TextField";

export interface InputTextFieldProps extends TextFieldProps {
  rule?: RegisterOptions<any, string>;
  name: string;
}
