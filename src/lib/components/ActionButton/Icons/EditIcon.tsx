import { SVGProps } from "react";

export function EditIcon(props: SVGProps<SVGSVGElement>) {
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
        fill="#FEBB34"
        stroke="#FEBB34"
        strokeWidth="0.834"
        d="M17.427 3.86h0a1.668 1.668 0 010 2.36L16.145 7.5l-3.646-3.646 1.16-1.16h.003l.122-.122a1.668 1.668 0 012.36 0l1.283 1.286zM11.172 5.18l3.647 3.647-7.308 7.304h0c-.289.289-.648.501-1.042.619h-.001l-3.916 1.152s0 0 0 0a.365.365 0 01-.452-.456l1.152-3.918v-.001c.118-.394.33-.754.619-1.042h0l7.301-7.305z"
      ></path>
    </svg>
  );
}
