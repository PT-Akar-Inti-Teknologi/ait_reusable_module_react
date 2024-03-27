import { twMerge } from "tailwind-merge";
import { ContentBodyProps } from "./ContentBody.types";

export function ContentBody({ className, ...props }: ContentBodyProps) {

  return (
    <div className={twMerge("space-y-6 py-6", className)} {...props} />
  );
}
