
export type OmitSelectProps = 'name' | 'form' | 'onChange'

export type SelectVariant = 'primary' | 'outlined'

export interface SelectOption {
  label: string
  value: any
}

export interface SelectProps<T> {
  onChangeValue?: (data: T | T[]) => void
  selectOption?: (data: T, index?: number) => SelectOption
  helperText?: string
  className?: string
  required?: boolean
  disabled?: boolean
  selectRef?: any
  error?: boolean
  label?: string
  name?: string
  selectKey?: string
  variant?: SelectVariant
}
