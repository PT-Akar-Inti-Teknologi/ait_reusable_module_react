import {
  twMerge
} from 'tailwind-merge'
import {
  Ref,
  createElement,
  forwardRef,
  useState
} from "react";

import {
  InputSizeMap,
  TextFieldProps
} from "./TextField.types";
import {
  Theme
} from './TextField.theme';
import {
  EyeClose,
  EyeOpen
} from './Icons';
import {
  Label
} from '../Label';
import {
  Typography
} from '../Typography';
import {
  HelperText
} from '../HelperText';

function _TextField(
  {
    helperText,
    classNames,
    className,
    startIcon,
    endIcon,
    prefix,
    suffix,
    sizing,
    error,
    label,
    type,
    onClickEndIcon,
    ...props
  }: Readonly<TextFieldProps>,
  forwardedRef: Ref<HTMLInputElement>
) {

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const isInputPassword = type === 'password';
  const hasStartIcon = !!startIcon;
  const hasEndIcon = !!endIcon;
  const hasPrefix = !!prefix;
  const hasSuffix = !!suffix;

  return (
    <div className={twMerge(Theme.container, classNames?.container, className)}>
      {(!!label) && <Label required={props.required} {...{ error }}>{label}</Label>}
      <div className={twMerge(Theme.wrapper, classNames?.wrapper)}>
        {(hasStartIcon || hasPrefix) && (
          <div className={twMerge(Theme.startIconWrapper, classNames?.startIconWrapper)}>
            {hasStartIcon && createElement(startIcon, {
              className: twMerge(Theme.svgIcon, classNames?.startIcon),
            })}
            {(hasPrefix) && <Typography>{prefix}</Typography>}
          </div>
        )}
        {(isInputPassword) ? (
          <div onClick={() => setPasswordVisible((_) => !_)} className={twMerge(Theme.endIconPasswordWrapper, classNames?.endIconWrapper)}>
            {createElement(isPasswordVisible ? EyeOpen : EyeClose, {
              className: twMerge(Theme.svgIcon, classNames?.endIcon),
            })}
          </div>
        ) : (hasEndIcon || hasSuffix) && (
          <div className={twMerge(Theme.endIconWrapper, classNames?.endIconWrapper)}>
            {hasEndIcon && createElement(endIcon, {
              className: twMerge(Theme.svgIcon, classNames?.endIcon),
              onClick: onClickEndIcon
            })}
            {hasSuffix && <Typography>{suffix}</Typography>}
          </div>
        )}
        <input
          type={isPasswordVisible ? "text" : type}
          ref={forwardedRef}
          className={twMerge(
            Theme.input,
            (hasStartIcon || hasPrefix) && "ps-12",
            (hasEndIcon || hasSuffix) && "pe-10",
            (hasStartIcon && hasPrefix) && "ps-20",
            (hasEndIcon && hasSuffix) && "pe-20",
            !!sizing && InputSizeMap[sizing],
            error && Theme.inputError,
            classNames?.input
          )}
          {...props}
        />
      </div>
      {(!!helperText) && <HelperText {...{ error }}>{helperText}</HelperText>}
    </div>
  );
}

export const TextField = forwardRef(_TextField);
