import { twMerge } from "tailwind-merge";
import { HTMLAttributes } from "react";

import { Theme } from "./Content.theme";

export function Content({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {

  return (
    <div className={twMerge(Theme.content, className)} {...props} />
  );
}
