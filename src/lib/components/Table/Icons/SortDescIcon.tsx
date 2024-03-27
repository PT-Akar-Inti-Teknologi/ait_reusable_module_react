import { SVGProps } from "react";

export function SortDescIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4.717.283L.683 4.317A.4.4 0 00.966 5h8.068a.4.4 0 00.283-.683L5.283.283a.4.4 0 00-.566 0z"
      ></path>
    </svg>
  );
}
