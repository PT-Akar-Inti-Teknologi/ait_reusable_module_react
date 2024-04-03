import { UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { HTMLAttributes, ReactNode } from "react";

import { BaseResponse, Response, ResponseList } from "~/models";

export type ResponseQueryResult<T = ResponseList<any[]>> = UseQueryResult<T | undefined, AxiosError<BaseResponse<Response<any>>>>;

export interface QueryStateProviderProps<T> {
  children?: ReactNode;
  query?: UseQueryResult<ResponseList<T[]> | T | undefined, AxiosError<BaseResponse<Response<any>>>>;
}

export interface QueryStateProps<T> extends HTMLAttributes<HTMLDivElement> {
  hasData: (data?: ResponseList<T[]> | T) => boolean;
  query?: UseQueryResult<ResponseList<T[]> | T | undefined, AxiosError<BaseResponse<Response<any>>>>;
}
