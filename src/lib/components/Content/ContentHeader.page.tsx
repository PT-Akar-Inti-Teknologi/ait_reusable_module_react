import { twMerge } from "tailwind-merge";
import { ContentHeaderProps } from "./ContentHeader.types";
import { Typography } from "../Typography";
import { Theme } from "./ContentHeader.theme";

export function ContentHeader({
  className,
  children,
  title,
  ...props
}: ContentHeaderProps) {

  return (
    <div
      className={twMerge(Theme.conteiner, className)} {...props}>
      <Typography variant="h5" className="flex-1">
        {title}
      </Typography>
      {children}
    </div>
  );
}
