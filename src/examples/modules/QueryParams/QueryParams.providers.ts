import { useQuery } from "@tanstack/react-query";
import { getExample, URL_EXAMPLE } from "./QueryParams.service";
import { useUrlSearchParams } from "../../../lib/hooks";
import { AxiosResponse } from "axios";
import { BaseResponse, Pagination } from "../../models/api.model";
import { createSelector } from "@reduxjs/toolkit";


const selectMall = createSelector(
  (state: AxiosResponse<BaseResponse<Pagination<any[]>>>) => state.data,
  (data: BaseResponse<Pagination<any[]>>) => data.response_output?.list
);
export function useGetExample() {

  const [urlParams] = useUrlSearchParams();

  return useQuery({
    // keepPreviousData: true,
    queryKey: [URL_EXAMPLE, urlParams],
    queryFn: (_) => getExample(urlParams, _.signal),
    select: selectMall
  });
}
