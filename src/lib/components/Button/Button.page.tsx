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
  ButtonProps
} from "./Button.types";
import {
  ButtonColors,
  ButtonSize,
  ButtonVariants,
  IconSize,
  Theme
} from "./Button.theme";
import {
  LoadingIcon
} from "./Icons";

function Button({
  classNames,
  startIcon,
  className,
  children,
  disabled,
  onClick,
  endIcon,
  loading,
  variant,
  color,
  pill,
  size,
  to,
  ...props
}: Readonly<ButtonProps>) {

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
      type="button"
      className={twMerge(
        Theme.button,
        disabled ? ButtonVariants[variant]["disabled"] : ButtonVariants[variant][color],
        disabled ? ButtonColors["disabled"] : ButtonColors[color],
        disabled && "cursor-not-allowed",
        loading && Theme.loadingButton,
        ButtonSize[size],
        pill && "rounded-full",
        classNames?.button,
        className
      )}
      {...props}
    >
      {(!!loading) ? createElement(LoadingIcon, {
        className: twMerge(
          Theme.loadingIcon,
          IconSize[size],
          classNames?.startIcon,
          "fill-inherit"
        )
      }) : (!!startIcon) && createElement(startIcon, {
        className: twMerge(
          Theme.startIcon,
          IconSize[size],
          classNames?.startIcon
        )
      })}
      {children}
      {(!!endIcon) && createElement(endIcon, {
        className: twMerge(
          Theme.endIcon,
          IconSize[size],
          classNames?.endIcon
        )
      })}
    </button>
  );
}

Button.defaultProps = {
  variant: 'contained',
  color: 'primary',
  size: 'md'
} as ButtonProps;

export { Button }
