import { ReactNode, TableHTMLAttributes } from "react";

export enum Sort {
  ASC = 'ASC',
  DESC = 'DESC'
}

export interface GetParamKey {
  page: string;
  limit: string;
  sort: string;
  order: string;
}

export interface DisplayLabelOptions<T> {
  renderValue?: (value: T) => ReactNode,
  placeholder?: string
  validate?: (value: any) => boolean
}

export interface TableCellChildrenProps<T> {
  displayLabeloptions: DisplayLabelOptions<T>
  children?: ReactNode
  isHead?: boolean
  action?: boolean
  index?: number | boolean
  value?: T
}

export interface TableCellProps<T> extends DisplayLabelOptions<T>, Omit<TableCellChildrenProps<T>, 'displayLabeloptions' | 'isHead'>, TableHTMLAttributes<HTMLTableCellElement> {
  parentelement?: 'tbody' | 'thead'
  orderPrefix?: string
  order?: string
}
