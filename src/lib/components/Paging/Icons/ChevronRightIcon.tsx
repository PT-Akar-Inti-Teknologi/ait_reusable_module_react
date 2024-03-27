import { SVGProps } from "react";

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
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
        fill="currentColor"
        d="M13.418 10.706a1.029 1.029 0 000-1.415L7.644 3.293a.939.939 0 00-1.362 0 1.029 1.029 0 000 1.415L11.376 10l-5.091 5.292a1.029 1.029 0 000 1.415c.376.39.986.39 1.362 0l5.774-5.998-.003-.003z"
      ></path>
    </svg>
  );
}
