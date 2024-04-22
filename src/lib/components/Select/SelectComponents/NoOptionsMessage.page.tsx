import { GroupBase, NoticeProps, components } from "react-select";

import { Typography } from "~/components/Typography";

function NoOptionsMessage<Option, IsMulti extends boolean>(props: NoticeProps<Option, IsMulti, GroupBase<Option>>) {

  return (
    <components.NoOptionsMessage {...props}>
      <Typography className="text-inherit">{props.children}</Typography>
    </components.NoOptionsMessage>
  );
}

export default NoOptionsMessage;
