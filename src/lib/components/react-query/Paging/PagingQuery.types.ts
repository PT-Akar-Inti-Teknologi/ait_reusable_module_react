import { UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { PagingParamsProps } from "~/components/query-params";

import { BaseResponse, Response, ResponseList } from "~/models";

export interface PagingProps<T> extends PagingParamsProps {
  query?: UseQueryResult<ResponseList<T[]> | undefined, AxiosError<BaseResponse<Response<any>>>>
}
