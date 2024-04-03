import { ReactNode } from "react";

import { TableProps } from "~/components/Table";

export interface TableQueryProps<T> extends TableProps {
  keyExtractor?: (item: T, index: number) => string | number;
  renderItem: (item: T, index: number) => ReactNode;
}
