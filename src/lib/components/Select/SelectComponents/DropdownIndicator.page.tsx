import {
  twMerge
} from "tailwind-merge";
import {
  DropdownIndicatorProps,
  GroupBase
} from "react-select";

import {
  CaretIcon
} from "../Icons";


function DropdownIndicator<Option, IsMulti extends boolean>(props: DropdownIndicatorProps<Option, IsMulti, GroupBase<Option>>) {
  return (
    <CaretIcon className={twMerge('transition-transform w-4 h-4 stroke-current', props.isFocused && '-rotate-180')} />
  );
}

export default DropdownIndicator;
