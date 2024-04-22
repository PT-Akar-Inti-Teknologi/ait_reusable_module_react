import {
  ButtonHTMLAttributes,
  ComponentType,
  SVGProps
} from "react";

import {
  ButtonSize, ButtonVariants
} from "./Button.theme";

export enum ButtonSizeMap {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl'
}

interface ButtonClassNames {
  startIcon?: string | string[]
  endIcon?: string | string[]
  button?: string | string[]
}

export type ButtonVariantType = keyof typeof ButtonVariants;
export type ButtonSizeType = keyof typeof ButtonSize;
export type ButtonColorType = keyof typeof ButtonVariants.contained;

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: ComponentType<SVGProps<SVGSVGElement>>
  endIcon?: ComponentType<SVGProps<SVGSVGElement>>
  classNames?: ButtonClassNames
  loading?: boolean
  variant: ButtonVariantType
  color: ButtonColorType
  size: ButtonSizeType
  pill?: boolean
  to?: string
}
