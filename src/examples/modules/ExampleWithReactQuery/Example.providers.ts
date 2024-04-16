import { useQuery } from "@tanstack/react-query";
import { createSelector } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";

import { BaseResponse, Pagination, Response, ResponseList } from "~/models";

import { getExample, URL_EXAMPLE } from "./Example.service";
import { useUrlSearchParams } from "../../../lib/hooks";
import { ExampleModel, ExampleParams } from "./Example.types";


const selectMall = createSelector(
  (state: AxiosResponse<BaseResponse<Pagination<any[]>>>) => state.data,
  (data: BaseResponse<Pagination<any[]>>) => data.response_output?.list
);
export function useGetExample() {

  const [searchParams] = useUrlSearchParams<keyof ExampleParams>({ page: '1', size: '10' });

  const params: ExampleParams = {
    search: searchParams.search,
    sort: searchParams.sort,
    order: searchParams.order,
    page: (+searchParams.page! - 1).toString(),
    size: searchParams.size
  };
  console.log("🚀 ~ useGetExample ~ params: ExampleParams.searchParams:", searchParams)

  return useQuery<
    AxiosResponse<BaseResponse<Pagination<ExampleModel[]>>>,
    AxiosError<BaseResponse<Response<any>>>,
    ResponseList<ExampleModel[]> | undefined
  >({
    queryKey: [URL_EXAMPLE, params],
    queryFn: (_) => getExample(params, _.signal),
    select: selectMall
  });
}
