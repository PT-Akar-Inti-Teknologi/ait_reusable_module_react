import { HTMLAttributes } from "react";

export interface PagingParams {
  total: number
  size: number;
  page: number;
}

export interface PagingProps extends HTMLAttributes<HTMLDivElement> {
  onChangePage: (data: PagingParams) => void;
  loading?: boolean;
  total: number; // total item
  size: number; // per page
  page: number; // current page
}
