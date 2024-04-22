import { twMerge } from "tailwind-merge";
import { createElement, isValidElement } from "react";

import { ControlLabelProps } from "./ControlLabel.types";
import { Label } from "../Label/Label.page";
import { HelperText } from "../HelperText/HelperText.page";

export function ControlLabel({
  helperText,
  required,
  children,
  label,
  ...props
}: Readonly<ControlLabelProps>) {

  return (
    <div className="grid items-start grid-cols-3" {...props}>
      {isValidElement(children) ?
        <>
          <div>
            <Label {...{ required }}>{label}</Label>
            {helperText && <HelperText>{helperText}</HelperText>}
          </div>
          {createElement(children.type, {
            required,
            ...children.props,
            className: twMerge(children.props?.className, "col-span-2"),
            key: children.key
          })}
        </> :
        <>
          <Label {...{ required }}>{label}</Label>
          {children}
        </>
      }
    </div>
  );
}
