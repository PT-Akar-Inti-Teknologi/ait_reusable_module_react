import { useQuery } from "@tanstack/react-query";
import { createSelector } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { useMemo } from "react";

import { BaseResponse, Pagination, Response, ResponseList } from "~/models";
import { pagingSizeMaster } from "~/components";

import { getExampleDraggable, URL_EXAMPLE } from "./ExampleDraggable.service";
import { useUrlSearchParams } from "../../../lib/hooks";
import { ExampleDraggableModel, ExampleDraggableParams } from "./ExampleDraggable.types";


const selectMall = createSelector(
  (state: AxiosResponse<BaseResponse<Pagination<any[]>>>) => state.data,
  (data: BaseResponse<Pagination<any[]>>) => data.response_output?.list
);
export function useGetExample() {
  
  const [searchParams] = useUrlSearchParams<keyof ExampleDraggableParams>({ page: '1', size: '10' });

  const sort = useMemo(
    () => ['asc', 'desc'].find((_) => _ === searchParams.sort),
    [searchParams.sort]
  );
  const order = useMemo(
    () => ['first_name', 'last_name', 'username', 'email'].find((_) => _ === searchParams.order),
    [searchParams.order]
  );
  const pageSize = useMemo(
    () => pagingSizeMaster.find((_) => _ === searchParams.size) ?? '10',
    [searchParams.size]
  );

  const params: ExampleDraggableParams = {
    search: searchParams.search,
    page: Math.max(+(searchParams.page ?? '1') - 1, 0).toString(),
    sort: !order || !sort ? undefined : `${order},${sort}`,
    size: pageSize
  };

  return useQuery<
    AxiosResponse<BaseResponse<Pagination<ExampleDraggableModel[]>>>,
    AxiosError<BaseResponse<Response<any>>>,
    ResponseList<ExampleDraggableModel[]> | undefined
  >({
    queryKey: [URL_EXAMPLE, params],
    queryFn: (_) => getExampleDraggable(params, _.signal),
    select: selectMall
  });
}
