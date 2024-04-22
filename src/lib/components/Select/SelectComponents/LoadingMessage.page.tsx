import { GroupBase, NoticeProps, components } from "react-select";

import { Typography } from "~/components/Typography";

function LoadingMessage<Option, IsMulti extends boolean>(props: NoticeProps<Option, IsMulti, GroupBase<Option>>) {

  return (
    <components.LoadingMessage {...props}>
      <Typography className="text-inherit">{props.children}</Typography>
    </components.LoadingMessage>
  );
}

export default LoadingMessage;
