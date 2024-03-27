import { SVGProps } from "react";

export function EyeOpen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        stroke="#667085"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 4.167c-3.131 0-5.47 2.033-6.86 3.7a3.3 3.3 0 000 4.267c1.39 1.666 3.729 3.7 6.86 3.7 3.131 0 5.47-2.034 6.86-3.7a3.3 3.3 0 000-4.268c-1.39-1.666-3.729-3.7-6.86-3.7z"
      ></path>
      <path
        stroke="#667085"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
      ></path>
    </svg>
  );
}
