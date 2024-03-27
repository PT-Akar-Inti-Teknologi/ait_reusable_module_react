import { SVGProps } from "react";

export function SortAscIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="5"
      fill="none"
      viewBox="0 0 10 5"
      {...props}
    >
      <path
        fill="#D0D5DD"
        d="M4.717 4.717L.683.683A.4.4 0 01.966 0h8.068a.4.4 0 01.283.683L5.283 4.717a.4.4 0 01-.566 0z"
      ></path>
    </svg>
  );
}
