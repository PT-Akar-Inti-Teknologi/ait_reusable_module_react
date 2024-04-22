import {
  useNavigate
} from "react-router-dom";
import {
  twMerge
} from "tailwind-merge";
import {
  MouseEvent,
  createElement
} from "react";

import {
  LoadingIcon
} from "../Button/Icons";
import {
  ActionButtonProps
} from "./ActionButton.types";
import {
  ButtonSize,
  ButtonVariants,
  Theme
} from "./ActionButton.theme";
import {
  DeleteIcon,
  DetailIcon,
  EditIcon
} from "./Icons";

const iconEl = {
  detail: DetailIcon,
  edit: EditIcon,
  delete: DeleteIcon
};

function ActionButton({
  className,
  children,
  disabled,
  onClick,
  loading,
  variant,
  size,
  to,
  ...props
}: Readonly<ActionButtonProps>) {

  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!to) {
      onClick?.(event);
    } else {
      navigate(to);
    }
  };

  return (
    <button
      disabled={disabled || loading}
      onClick={handleClick}
      className={twMerge(
        Theme.button,
        ButtonVariants[variant],
        ButtonSize[size],
        loading && "disabled:cursor-wait",
        className
      )}
      {...props}
    >
      {(loading) ?
        createElement(LoadingIcon, { className: twMerge(Theme.loadingIcon) }) :
        createElement(iconEl[variant])
      }
    </button>
  );
}

ActionButton.defaultProps = {
  variant: 'detail',
  size: 'md'
} as ActionButtonProps;

export { ActionButton }
