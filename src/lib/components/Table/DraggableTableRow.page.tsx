import { useSortable } from "@dnd-kit/sortable";
import { twMerge } from "tailwind-merge";
import { CSS } from "@dnd-kit/utilities";

import { DraggableTableRowProps } from "./DraggableTableRow.types";
import { TableRow } from "./TableRow.page";
import { Theme } from "./DraggableTableRow.theme";

export function DraggableTableRow({
  identity,
  ...props
}: DraggableTableRowProps) {

  const {
    isDragging,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: identity.toString() });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <TableRow
      className={twMerge(Theme.container, isDragging && Theme.containerDragging)}
      style={style}
      ref={setNodeRef}
      {...props}
    />
  );
}
