import { SVGProps } from "react";

export function EyeClose(props: SVGProps<SVGSVGElement>) {
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
        d="M8.137 4.413A7.183 7.183 0 0110 4.167c3.131 0 5.47 2.033 6.86 3.7a3.3 3.3 0 010 4.267c-.16.192-.332.388-.517.586m-5.926-5.185a2.502 2.502 0 012.048 2.048M2.5 2.5l15 15m-7.917-5.035a2.503 2.503 0 01-1.94-1.632M3.623 7.315c-.172.186-.334.37-.484.55a3.3 3.3 0 000 4.269c1.39 1.666 3.729 3.7 6.86 3.7.668 0 1.3-.093 1.895-.255"
      ></path>
    </svg>
  );
}
