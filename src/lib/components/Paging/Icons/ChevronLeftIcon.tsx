import { SVGProps } from "react";

export function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M6.582 9.294a1.029 1.029 0 000 1.415l5.774 5.998c.376.39.986.39 1.362 0a1.029 1.029 0 000-1.415L8.624 10l5.091-5.292a1.029 1.029 0 000-1.415.939.939 0 00-1.362 0L6.579 9.29l.003.003z"
      ></path>
    </svg>
  );
}
