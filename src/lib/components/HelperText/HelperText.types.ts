import { HTMLAttributes } from "react";

export interface HelperTextProps extends HTMLAttributes<HTMLParagraphElement> {
  error?: boolean
}
