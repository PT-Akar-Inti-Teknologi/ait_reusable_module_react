import { SVGProps } from "react";
import { twMerge } from "tailwind-merge";

export function CaretIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      className={twMerge("stroke-gray-500", className)}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3.333 7.5L10 14.167 16.667 7.5"
      ></path>
    </svg>
  );
}
