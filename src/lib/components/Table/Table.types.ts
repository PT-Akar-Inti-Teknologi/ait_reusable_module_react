import {
  ReactNode,
  Ref,
  TableHTMLAttributes
} from "react";

interface TableClassNames {
  container?: string | string[];
  table?: string | string[];
}

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  onUpdateParams?: (params: TableContextValueParams) => void;
  classNames?: TableClassNames;
  params?: TableContextValueParams;
}

export interface TableContextValueParams {
  [x: string]: any;
}

export interface TableContextValue {
  setInitParams: (params: TableContextValueParams) => void;
  updateParams: (params: TableContextValueParams) => void;
  params: TableContextValueParams;
}

export interface TableProviderProps {
  onUpdateParams: (params: TableContextValueParams) => void;
  forwardedRef: Ref<TableRef>;
  children: ReactNode;
  params?: TableContextValueParams;
}

export interface TableRef {
  updateParams: (params: TableContextValueParams) => void;
}
