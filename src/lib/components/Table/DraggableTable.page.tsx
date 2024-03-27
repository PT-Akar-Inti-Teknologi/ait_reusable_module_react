import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import {
  restrictToVerticalAxis
} from "@dnd-kit/modifiers";
import {
  sortableKeyboardCoordinates,
  useSortable
} from "@dnd-kit/sortable";

import {
  DraggableTableProps,
  HandleDragRowProps
} from "./DraggableTable.types";
import {
  Table
} from "./Table.page";
import {
  MoveIcon
} from "./Icons/MoveIcon";

export function DraggableTable(props: DraggableTableProps) {

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  return (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis]}
      sensors={sensors}
    >
      <Table {...props} />
    </DndContext>
  );
}

export function HandleDragRow({ identity, ...props }: HandleDragRowProps) {

  const {
    isDragging,
    attributes,
    listeners,
  } = useSortable({ id: identity.toString() });

  return (
    <MoveIcon
      className={`m-auto outline-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
      {...attributes}
      {...listeners}
      {...props}
    />
  );
}
