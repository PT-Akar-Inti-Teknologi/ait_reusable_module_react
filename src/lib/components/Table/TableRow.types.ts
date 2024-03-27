import { TableHTMLAttributes } from "react";

export interface TableRowProps extends TableHTMLAttributes<HTMLTableRowElement> {
  parentelement?: 'tbody' | 'thead'
}