import {
  twMerge
} from "tailwind-merge";

import {
  DividerOrientationMapping,
  DividerProps,
  DividerVariantMapping
} from "./Divider.types";

function Divider({
  orientation = 'horizontal',
  variant = 'solid',
  ...props
}: Readonly<DividerProps>) {

  const borderOrientation = DividerOrientationMapping[orientation];
  const borderThickness = !props.thickness ? borderOrientation : `${borderOrientation}-${props.thickness}`;

  return (
    <div
      className={twMerge(
        'border-gray-200',
        'dark:!border-gray-600',
        DividerVariantMapping[variant],
        borderThickness,
        props.className
      )}
    />
  );
}

export { Divider }
