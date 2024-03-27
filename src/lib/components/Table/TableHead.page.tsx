import {
  Children,
  TableHTMLAttributes,
  createElement
} from "react";

export function TableHead({ children, ...props }: TableHTMLAttributes<HTMLTableSectionElement>) {

  return (
    <thead {...props}>
      {Children.map(children, (child: any) => createElement(child.type, { ...child.props, parentelement: 'thead' }))}
    </thead>
  );
}
