import axios from "axios";

import { BaseResponse, Pagination, Response } from "~/models";

import {
    ExampleCMSBannerModel,
    ExampleCMSBannerParams, reorderCMSBannerPayload, updateCMSBannerPayload,
    uploadCMSBannerPayload,
} from "./ExampleCMSBanner.types";

export const URL_EXAMPLE = 'https://ait-experiment.sandbait.work/api';

export function getListCMSBanner(params: ExampleCMSBannerParams, signal?: AbortSignal) {
    return axios.get<BaseResponse<Pagination<ExampleCMSBannerModel[]>>>(`${URL_EXAMPLE}/banner/all`, {params, signal});
}

export function downloadCMSBanner(params: ExampleCMSBannerParams, signal?: AbortSignal) {
    return axios.get<BaseResponse<Pagination<ExampleCMSBannerModel[]>>>(`${URL_EXAMPLE}/banner/download`, {params, signal});
}

export function downloadCMSBannerThumbnail(params: ExampleCMSBannerParams, signal?: AbortSignal) {
    return axios.get<BaseResponse<Pagination<ExampleCMSBannerModel[]>>>(`${URL_EXAMPLE}/banner/download-thumbnail`, {params, signal});
}

export const uploadCMSBanner = (payload?: uploadCMSBannerPayload) => {
  return axios.post<BaseResponse<Response<ExampleCMSBannerModel>>>(`${URL_EXAMPLE}/banner`,payload,{headers: {'Content-Type': 'multipart/form-data'}})
}

export const updateCMSBanner = (payload?: updateCMSBannerPayload) => {
  return axios.put<BaseResponse<Response<ExampleCMSBannerModel>>>(`${URL_EXAMPLE}/banner`,payload)
}

export const deleteCMSBanner = (id?: string) => {
  return axios.delete<BaseResponse<Response<string>>>(`${URL_EXAMPLE}/banner?id=${id}`)
}

export function getDetailCMSBanner(id?: string) {
    return axios.get<BaseResponse<Response<ExampleCMSBannerModel>>>(`${URL_EXAMPLE}/banner/${id}`);
}

export function reorderIndexCMSBanner(payload?: reorderCMSBannerPayload[]) {
    return axios.put<BaseResponse<Response<ExampleCMSBannerModel>>>(`${URL_EXAMPLE}/banner/order`, payload);
}
