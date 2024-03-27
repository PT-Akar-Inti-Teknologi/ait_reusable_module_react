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
    className,
    startIcon,
    endIcon,
    classes,
    prefix,
    suffix,
    sizing,
    error,
    label,
    type,
    onClickEndIcon,
    ...props
  }: TextFieldProps,
  forwardedRef: Ref<HTMLInputElement>
) {

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const isInputPassword = type === 'password';
  const hasStartIcon = !!startIcon;
  const hasEndIcon = !!endIcon;
  const hasPrefix = !!prefix;
  const hasSuffix = !!suffix;

  return (
    <div className={twMerge(Theme.container, classes?.container, className)}>
      {(!!label) && <Label required={props.required} {...{ error }}>{label}</Label>}
      <div className={twMerge(Theme.wrapper, classes?.wrapper)}>
        {(hasStartIcon || hasPrefix) && (
          <div className={twMerge(Theme.startIconWrapper, classes?.startIconWrapper)}>
            {hasStartIcon && createElement(startIcon, {
              className: twMerge(Theme.svgIcon, classes?.startIcon),
            })}
            {(hasPrefix) && <Typography>{prefix}</Typography>}
          </div>
        )}
        {(isInputPassword) ? (
          <div onClick={() => setPasswordVisible((_) => !_)} className={twMerge(Theme.endIconPasswordWrapper, classes?.endIconWrapper)}>
            {createElement(isPasswordVisible ? EyeOpen : EyeClose, {
              className: twMerge(Theme.svgIcon, classes?.endIcon),
            })}
          </div>
        ) : (hasEndIcon || hasSuffix) && (
          <div className={twMerge(Theme.endIconWrapper, classes?.endIconWrapper)}>
            {hasEndIcon && createElement(endIcon, {
              className: twMerge(Theme.svgIcon, classes?.endIcon),
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
            classes?.input
          )}
          {...props}
        />
      </div>
      {(!!helperText) && <HelperText {...{ error }}>{helperText}</HelperText>}
    </div>
  );
}

export const TextField = forwardRef(_TextField);
