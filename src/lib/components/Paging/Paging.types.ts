import { HTMLAttributes } from "react";

export interface PagingParams {
  limit: number;
  page: number;
}

export interface PagingProps extends HTMLAttributes<HTMLDivElement> {
  onChangePage: (data: PagingParams) => void;
  loading?: boolean;
  total: number;
  limit: number;
  page: number;
}
