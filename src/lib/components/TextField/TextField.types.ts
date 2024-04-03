import {
  ComponentType,
  InputHTMLAttributes,
  MouseEventHandler,
  SVGProps
} from "react"

export enum InputSizeMap {
  sm = 'p-2',
  md = 'p-2.5',
  lg = 'p-4'
}

type InputSize = keyof typeof InputSizeMap;

interface TextFieldClassNames {
  container?: string
  helperText?: string
  startIconWrapper?: string
  startIcon?: string
  endIconWrapper?: string
  endIcon?: string
  wrapper?: string
  input?: string
}

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  classNames?: TextFieldClassNames
  helperText?: string
  startIcon?: ComponentType<SVGProps<SVGSVGElement>>
  endIcon?: ComponentType<SVGProps<SVGSVGElement>>
  onClickEndIcon?: MouseEventHandler<SVGSVGElement>
  prefix?: string | number
  suffix?: string | number
  sizing?: InputSize
  error?: boolean
  label?: string
}
