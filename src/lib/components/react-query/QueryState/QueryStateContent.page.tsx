import { twMerge } from "tailwind-merge";

import { Typography } from "~/components/Typography";

import { QueryStateContentProps } from "./QueryStateContent.types";
import { Theme } from "./QueryStateContent.theme";
import { QueryStateProvider } from "./QueryState.context";

export function QueryStateContent<T>({
  description,
  className,
  children,
  query,
  title,
  ...props
}: Readonly<QueryStateContentProps<T>>) {

  return (
    <QueryStateProvider {...{ query }}>
      <div className={twMerge(Theme.emptyState, className)} {...props}>
        {(!!title) && <Typography variant="h4" className="font-bold">{title}</Typography>}
        {(!!description) && <Typography className={twMerge(Theme.description)}>{description}</Typography>}
        {children}
      </div>
    </QueryStateProvider>
  );
}
