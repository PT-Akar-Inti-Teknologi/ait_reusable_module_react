import { SVGProps } from "react";
import { twMerge } from "tailwind-merge";

export function ThemeToggleDarkIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="theme-toggle-dark-icon"
      className={twMerge("w-5 h-5", className)}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  );
}
