import { SVGProps } from "react";

export function DeleteIcon(props: SVGProps<SVGSVGElement>) {
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
        fill="#FF5454"
        stroke="#FF5454"
        strokeWidth="0.049"
        d="M12.728 3.011l.007.013H16.5a.476.476 0 01.476.476v1a.476.476 0 01-.476.476h-13a.476.476 0 01-.476-.476v-1a.476.476 0 01.476-.476h3.765l.007-.013.294-.584h0a.717.717 0 01.646-.403h3.572a.725.725 0 01.65.403h0l.294.584zM4.457 17.543a1.476 1.476 0 01-.433-1.043V6.024h11.952V16.5a1.476 1.476 0 01-1.476 1.476h-9c-.391 0-.767-.156-1.043-.433zm8.172-9.414a.524.524 0 00-.153.371v7a.524.524 0 101.048 0v-7a.524.524 0 00-.895-.37zm-3 0a.524.524 0 00-.153.371v7a.524.524 0 101.048 0v-7a.524.524 0 00-.895-.37zm-3 0a.524.524 0 00-.153.371v7a.524.524 0 101.048 0v-7a.524.524 0 00-.895-.37z"
      ></path>
    </svg>
  );
}
