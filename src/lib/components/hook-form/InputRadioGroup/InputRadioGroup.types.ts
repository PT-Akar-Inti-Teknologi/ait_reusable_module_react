import { RegisterOptions } from "react-hook-form";

import { InputGroupProps } from "~/components/InputGroup";

export interface InputRadioGroupProps extends InputGroupProps {
  rule?: RegisterOptions<any, string>;
  name: string;
}
