import {
  Children,
  createElement
} from "react";

import {
  TableBodyProps
} from "./TableBody.types";

export function TableBody({
  children,
  ...props
}: Readonly<TableBodyProps>) {

  return (
    <tbody {...props}>
      {Children.map(children, (child: any) => createElement(child.type, { ...child.props, parentelement: 'tbody' }))}
    </tbody>
  );
}
