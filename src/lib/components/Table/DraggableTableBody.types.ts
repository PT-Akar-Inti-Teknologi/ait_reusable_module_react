import { ReactNode } from "react";
import { TableBodyProps } from "./TableBody.types";

export interface DraggableTableBodyProps<T> extends TableBodyProps {
  keyExtractor: (item: T, index?: number) => number | string;
  renderItem: (data: RenderTableRowParams<T>) => ReactNode;
  onReorder: (data: T[]) => void;
  data: T[];
}

export interface RenderTableRowParams<T> {
  item: T;
  index?: number;
  key?: number | string
}
