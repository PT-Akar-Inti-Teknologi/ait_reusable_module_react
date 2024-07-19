import { createSelector } from "@reduxjs/toolkit";
import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useMemo } from "react";

import { pagingSizeMaster } from "~/components";
import { BaseResponse, Pagination, Response, ResponseList } from "~/models";

import { useUrlSearchParams } from "~/hooks";
import { getListCMSBanner, URL_EXAMPLE } from "./ExampleCMSBanner.service.ts";
import { ExampleCMSBannerModel, ExampleCMSBannerParams } from "./ExampleCMSBanner.types.ts";


const selectMall = createSelector(
    (state: AxiosResponse<BaseResponse<Pagination<any[]>>>) => state.data,
    (data: BaseResponse<Pagination<any[]>>) => data.response_output?.list
);

export function useGetExample() {

    const [searchParams] = useUrlSearchParams<keyof ExampleCMSBannerParams>({page: '1', size: '10'});

    const sort = useMemo(
        () => ['asc', 'desc'].find((_) => _ === searchParams.sort),
        [searchParams.sort]
    );
    const order = useMemo(
        () => ['title', 'description', 'created_at', 'updated_at'].find((_) => _ === searchParams.order),
        [searchParams.order]
    );
    const pageSize = useMemo(
        () => pagingSizeMaster.find((_) => _ === searchParams.size) ?? '10',
        [searchParams.size]
    );

    const params: ExampleCMSBannerParams = {
        search: searchParams.search,
        page: Math.max(+(searchParams.page ?? '1') - 1, 0).toString(),
        sort: !order || !sort ? undefined : `${order},${sort}`,
        size: pageSize
    };

    return useQuery<
        AxiosResponse<BaseResponse<Pagination<ExampleCMSBannerModel[]>>>,
        AxiosError<BaseResponse<Response<any>>>,
        ResponseList<ExampleCMSBannerModel[]> | undefined
    >({
        queryKey: [URL_EXAMPLE, params],
        queryFn: (_) => getListCMSBanner(params, _.signal),
        select: selectMall
    });
}
