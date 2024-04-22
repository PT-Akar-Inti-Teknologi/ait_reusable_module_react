import { RegisterOptions } from "react-hook-form";

import { SelectProps } from "~/components/Select";

export interface InputSelectProps<T> extends SelectProps<T> {
  rule?: RegisterOptions<any, string>
  name: string
}
