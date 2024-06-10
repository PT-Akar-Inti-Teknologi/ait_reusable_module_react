import {
  ButtonHTMLAttributes
} from "react";

import {
  ButtonSize,
  ButtonVariants
} from "./ActionButton.theme";

export type ButtonVariantType = keyof typeof ButtonVariants;
export type ButtonSizeType = keyof typeof ButtonSize;

export interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType
  loading?: boolean
  size?: ButtonSizeType
  to?: string
}
