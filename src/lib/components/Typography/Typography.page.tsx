import {
  twMerge
} from "tailwind-merge";
import {
  createElement
} from "react";

import {
  TypographyProps,
  TypographyVariantType
} from "./Typography.types";
import {
  Theme,
  TypographyVariants
} from "./Typography.theme";

function getTypographyEl(variant: TypographyVariantType) {
  return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant)
    ? variant
    : 'p';
}

function Typography({
  variant,
  type,
  ...props
}: TypographyProps) {

  return createElement(getTypographyEl(variant), {
    ...props,
    className: twMerge(
      Theme.typography,
      TypographyVariants[variant],
      !!type && `font-${type}`,
      props.className
    )
  });
}

Typography.defaultProps = {
  variant: 'body1'
} as TypographyProps;

export { Typography }
