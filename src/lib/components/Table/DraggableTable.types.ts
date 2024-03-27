import { SVGProps } from "react";
import { TableProps } from "./Table.types";

export interface DraggableTableProps extends TableProps {
}

export interface HandleDragRowProps extends SVGProps<SVGSVGElement> {
  identity: number | string
}
