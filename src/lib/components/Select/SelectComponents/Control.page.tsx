import {
  twMerge
} from "tailwind-merge";
import {
  ControlProps,
  GroupBase,
  components
} from "react-select";

import {
  Theme
} from "../Select.theme";

function Control<Option, IsMulti extends boolean>(props: ControlProps<Option, IsMulti, GroupBase<Option>>) {
  return (
    <components.Control
      {...props}
      className={twMerge(
        Theme.control,
        props.isDisabled && Theme.controlDisabled,
        props.isFocused && Theme.controlFocus
      )}
    />
  );
}

export default Control;
