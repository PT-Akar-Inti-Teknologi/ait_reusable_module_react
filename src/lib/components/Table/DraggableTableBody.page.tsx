import {
  DragEndEvent,
  useDndMonitor
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy
} from "@dnd-kit/sortable";
import {
  createElement,
  isValidElement
} from "react";

import {
  DraggableTableBodyProps
} from "./DraggableTableBody.types";
import {
  TableBody
} from "./TableBody.page";

function DraggableTableBody<T>({
  keyExtractor = (_: any) => _?.id,
  renderItem,
  children,
  onReorder = (_) => { },
  data = [],
  ...props
}: DraggableTableBodyProps<T>) {

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      const oldIndex = data.findIndex((_, __) => keyExtractor(_, __) === active.id);
      const newIndex = data.findIndex((_, __) => keyExtractor(_, __) === over?.id);
      const payload = arrayMove(data, oldIndex, newIndex);
      onReorder(payload);
    }
  };

  useDndMonitor({
    onDragEnd: handleDragEnd
  });

  const renderDataItem = (item: T, index: number) => {
    const key = keyExtractor(item, index);
    const element = renderItem({ item, index, key });
    if (isValidElement(element)) {
      return createElement(element.type, { ...element.props, key });
    }
    return null;
  };

  return (
    <TableBody className="bg-opacity-10 bg-primary-600" {...props}>
      <SortableContext
        strategy={verticalListSortingStrategy}
        items={data.map(keyExtractor)}
      >
        {data.map(renderDataItem)}
      </SortableContext>
    </TableBody>
  );
}

export { DraggableTableBody };
