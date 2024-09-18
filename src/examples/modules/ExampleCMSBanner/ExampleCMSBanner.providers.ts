import { createSelector } from "@reduxjs/toolkit";
import { useMutation, useQuery } from "@tanstack/react-query";
import { pagingSizeMaster } from "ait-reusable-component-react";
import { useUrlSearchParams } from "ait-reusable-component-react/hooks";
import { BaseResponse, Pagination, Response, ResponseList } from "ait-reusable-component-react/models";
import { AxiosError, AxiosResponse } from "axios";
import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getDetailCMSBanner, getListCMSBanner, saveCMSBanner, URL_BANNER, URL_EXAMPLE } from "./ExampleCMSBanner.service.ts";
import { ExampleCMSBannerModel, ExampleCMSBannerParams } from "./ExampleCMSBanner.types.ts";


const selectMall = createSelector(
    (state: AxiosResponse<BaseResponse<Pagination<any[]>>>) => state.data,
    (data: BaseResponse<Pagination<any[]>>) => data.response_output?.list
);

export function useGetExample() {

    const [searchParams] = useUrlSearchParams<keyof ExampleCMSBannerParams>({ page: '1', size: '10' });

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

const selectBannerDetail = createSelector(
    (state: AxiosResponse<BaseResponse<Response<ExampleCMSBannerModel>>>) => state.data,
    (data: BaseResponse<Response<ExampleCMSBannerModel>>) => {
        const { detail } = data.response_output ?? {};
        return {
            ...detail,
            file: detail?.image_file
        } as ExampleCMSBannerModel;
    }
);
export function useGetDetailCMSBanner() {

    const params = useParams<{ id: string }>();

    return useQuery<
        AxiosResponse<BaseResponse<Response<ExampleCMSBannerModel>>>,
        // AxiosError<BaseResponse<Response<any>>>,
        any,
        ExampleCMSBannerModel | undefined
    >({
        queryKey: [URL_BANNER, params.id],
        queryFn: (_) => getDetailCMSBanner(params.id, _.signal),
        select: selectBannerDetail,
        enabled: !!params.id
    });
}

export function useSaveCMSBanner(): any {

    return useMutation({
        mutationKey: [URL_BANNER],
        mutationFn: saveCMSBanner
    });
}
