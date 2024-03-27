import {
  twMerge
} from "tailwind-merge";
import {
  Children,
  Ref,
  createElement,
  forwardRef,
  isValidElement
} from "react";

import {
  TableRowProps
} from "./TableRow.types";
import {
  Theme
} from "./TableRow.theme";

function _TableRow(
  {
    parentelement,
    className,
    children,
    ...props
  }: TableRowProps,
  forwardedRef: Ref<HTMLTableRowElement>
) {

  const isHead = parentelement === 'thead';

  return (
    <tr className={twMerge(isHead ? Theme.header : Theme.bordered, className)} ref={forwardedRef} {...props}>
      {Children.map(children, (child) => isValidElement(child) ? createElement(child.type, { ...child.props, parentelement }) : child)}
    </tr>
  )
}

export const TableRow = forwardRef(_TableRow);
