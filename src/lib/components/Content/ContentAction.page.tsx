import {
  useNavigate
} from "react-router-dom";
import {
  twMerge
} from "tailwind-merge";
import {
  Children,
  createElement,
  isValidElement
} from "react";

import {
  ContentActionProps
} from "./ContentAction.types";
import {
  Theme
} from "./ContentAction.theme";

export function ContentAction({
  className,
  children,
  loading,
  action,
  ...props
}: Readonly<ContentActionProps>) {

  const navigate = useNavigate();

  const [cancelEl, submitEl] = Children.toArray(children);

  return (
    <div className={twMerge(Theme.container, className)} {...props}>
      {isValidElement(cancelEl) && createElement(cancelEl.type, {
        disabled: loading,
        onClick: () => navigate(-1),
        color: "primary",
        ...cancelEl.props,
        className: twMerge("min-w-[128px]", cancelEl.props?.className),
        variant: "outlined",
      }, cancelEl.props?.children ?? "Cancel")}
      {isValidElement(submitEl) && createElement(submitEl.type, {
        loading: loading,
        color: "primary",
        ...submitEl.props,
        className: twMerge("min-w-[128px]", submitEl.props?.className),
        variant: "contained",
      }, submitEl.props?.children ?? "Submit")}
    </div>
  );
}
