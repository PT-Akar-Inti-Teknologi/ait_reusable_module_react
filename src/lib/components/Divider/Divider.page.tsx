import {
  twMerge
} from "tailwind-merge";

import {
  DividerOrientationMapping,
  DividerProps,
  DividerVariantMapping
} from "./Divider.types";

function Divider(props: Readonly<DividerProps>) {

  const borderOrientation = DividerOrientationMapping[props.orientation];
  const borderThickness = !props.thickness ? borderOrientation : `${borderOrientation}-${props.thickness}`;

  return (
    <div
      className={twMerge(
        'border-gray-200',
        'dark:!border-gray-600',
        DividerVariantMapping[props.variant],
        borderThickness,
        props.className
      )}
    />
  );
}

Divider.defaultProps = {
  orientation: 'horizontal',
  variant: 'solid'
} as DividerProps;

export { Divider }
