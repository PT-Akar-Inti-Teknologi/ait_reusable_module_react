import { useQuery } from "@tanstack/react-query";
import { createSelector } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

import { getExample, URL_EXAMPLE } from "./Example.service";
import { useUrlSearchParams } from "../../../lib/hooks";
import { BaseResponse, Pagination } from "../../models/api.model";
import { ExampleParams } from "./Example.types";


const selectMall = createSelector(
  (state: AxiosResponse<BaseResponse<Pagination<any[]>>>) => state.data,
  (data: BaseResponse<Pagination<any[]>>) => data.response_output?.list
);
export function useGetExample() {

  const [searchParams] = useUrlSearchParams();

  const params: ExampleParams = {
    searchBy: searchParams.search,
    sortBy: searchParams.sort,
    sortField: searchParams.order,
    pageNumber: searchParams.page,
    pageSize: searchParams.limit
  };

  return useQuery({
    queryKey: [URL_EXAMPLE, params],
    queryFn: (_) => getExample(params, _.signal),
    select: selectMall
  });
}
