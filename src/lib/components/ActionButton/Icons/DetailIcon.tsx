import { SVGProps } from "react";
import { twMerge } from "tailwind-merge";

export function DetailIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="16"
      fill="none"
      viewBox="0 0 18 16"
      className={twMerge("text-primary", className)}
      {...props}
    >
      <g clipPath="url(#clip0_3222_1390)">
        <path
          fill="currentColor"
          stroke="currentColor"
          d="M3.321 3.885h0C4.732 2.575 6.638 1.5 9 1.5c2.363 0 4.269 1.074 5.678 2.385h0c1.404 1.302 2.344 2.865 2.785 3.923h0a.494.494 0 010 .384h0c-.44 1.057-1.38 2.618-2.785 3.923h0C13.268 13.425 11.363 14.5 9 14.5s-4.269-1.074-5.678-2.385h0C1.916 10.813.977 9.25.54 8.193v-.001a.494.494 0 010-.384h0c.438-1.058 1.377-2.62 2.781-3.923zm14.604 4.5a.994.994 0 000-.77L15.019 3.52C13.547 2.15 11.525 1 8.999 1 6.476 1 4.454 2.15 2.982 3.519 1.52 4.875.541 6.5.078 7.616a.994.994 0 000 .768c.463 1.116 1.44 2.741 2.903 4.097C4.453 13.85 6.475 15 9 15s4.547-1.15 6.019-2.519c1.462-1.36 2.44-2.981 2.906-4.097zM9 13A5.001 5.001 0 009 3a5.001 5.001 0 000 10zM7 8.5a2.502 2.502 0 002.457-2.958 2.5 2.5 0 11-2.915 2.916c.149.028.302.042.458.042z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3222_1390">
          <path fill="#fff" d="M0 0H18V16H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
