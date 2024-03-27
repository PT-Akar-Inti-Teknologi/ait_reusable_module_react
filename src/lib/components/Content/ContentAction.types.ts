import { HTMLAttributes } from "react";

export interface ContentActionProps extends HTMLAttributes<HTMLDivElement> {
  loading?: boolean
  action?: string
}
