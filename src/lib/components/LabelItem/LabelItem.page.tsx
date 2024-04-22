import {
  ClassNameValue,
  twMerge
} from "tailwind-merge";
import {
  ReactNode,
  createElement,
  isValidElement
} from "react";

import {
  Typography
} from "../Typography";
import {
  DisplayLabelOptions,
  displayValue
} from "../Table";
import {
  LabelItemProps
} from "./LabelItem.types";
import {
  Theme
} from "./LabelItem.theme";

interface RenderChildrenProps {
  className?: ClassNameValue;
  children?: ReactNode;
  value?: any;
}

function renderChildren(props: RenderChildrenProps, labelOptions?: DisplayLabelOptions<any>) {
  if (!props.children) {
    return (
      <Typography className={twMerge("col-span-2", props.className)}>
        {displayValue(props.value, labelOptions)}
      </Typography>
    );
  }
  if (typeof props.children === "string") {
    return (
      <Typography className={twMerge("col-span-2", props.className)}>
        {props.children}
      </Typography>
    );
  }
  if (isValidElement(props.children)) {
    return createElement(props.children.type, {
      ...props.children.props,
      className: twMerge(props.children.props?.className, "col-span-2", props.className)
    });
  }
  return props.children;
}

export function LabelItem<T>({
  placeholder,
  renderValue,
  classNames,
  className,
  children,
  validate,
  label,
  value,
  ...props
}: Readonly<LabelItemProps<T>>) {

  return (
    <div className={twMerge(Theme.container, className, classNames?.container)} {...props}>
      <Typography className={twMerge(Theme.label, classNames?.label)}>
        {label}
      </Typography>
      {renderChildren(
        {
          className: classNames?.value,
          children,
          value
        },
        {
          placeholder,
          renderValue,
          validate
        }
      )}
    </div>
  );
}
