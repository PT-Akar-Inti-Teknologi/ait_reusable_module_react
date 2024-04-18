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
    page: (+(searchParams.page ?? '1') - 1).toString(),
    sort: !searchParams.order || !searchParams.sort ? undefined : `${searchParams.order},${searchParams.sort}`,
    size: searchParams.size
  };

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
