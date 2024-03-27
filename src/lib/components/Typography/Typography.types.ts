import { HTMLAttributes } from "react";

import { TypographyVariants } from "./Typography.theme";

export type TypographyType = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
export type TypographyVariantType = keyof typeof TypographyVariants;
export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant: TypographyVariantType
  type?: TypographyType
}
