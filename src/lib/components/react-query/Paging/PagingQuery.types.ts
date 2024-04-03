import { UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { PagingProps as ParamsPagingProps } from "~/components/query-params";
import { BaseResponse, Response, ResponseList } from "~/models";

export interface PagingProps<T> extends ParamsPagingProps {
  query?: UseQueryResult<ResponseList<T[]> | undefined, AxiosError<BaseResponse<Response<any>>>>
}
