import { TextFieldProps } from "../TextField";

export interface InputSearchProps extends Omit<TextFieldProps, 'onChange'> {
  onChangeText?: (value: string) => void;
}
