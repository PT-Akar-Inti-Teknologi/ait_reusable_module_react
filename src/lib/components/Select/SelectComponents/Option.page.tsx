import { components } from "react-select";

import { Checkbox } from "../../Checkbox/Checkbox.page";

function Option(props: any) {

  return (
    <components.Option {...props}>
      {(props?.isMulti) ? (
        <Checkbox
          classNames={{ label: "text-inherit" }}
          onChange={() => { }}
          checked={props.isSelected}
          label={props.label}
        />
      ) : props.label}
    </components.Option>
  );
}

export default Option;
