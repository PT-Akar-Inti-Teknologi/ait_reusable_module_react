import { twMerge } from "tailwind-merge";
import { HtmlHTMLAttributes } from "react";

export function Wrapper({ className, ...props }: HtmlHTMLAttributes<HTMLDivElement>) {

  return (
    <div className={twMerge("max-w-[1200px] mx-auto my-[24px]", className)} {...props} />
  );
}
