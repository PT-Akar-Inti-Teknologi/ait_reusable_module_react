import {
  BaseResponse,
  Pagination,
  Response
} from "ait-reusable-component-react/models";
import axios from "axios";
import {
  ExampleCMSBannerModel,
  ExampleCMSBannerParams,
  reorderCMSBannerPayload,
} from "./ExampleCMSBanner.types";

export const URL_EXAMPLE = 'https://ait-experiment.sandbait.work/api';
export const URL_BANNER = 'https://ait-experiment.sandbait.work/api/banner';
export const URL_ALL_BANNER = `${URL_BANNER}/all`;
export const URL_DOWNLOAD_BANNER = `${URL_BANNER}/download`;
export const URL_DOWNLOAD_THUMBNAIL_BANNER = `${URL_BANNER}/download-thumbnail`;
export const URL_ORDER_BANNER = `${URL_BANNER}/order`;

export function getListCMSBanner(params: ExampleCMSBannerParams, signal?: AbortSignal) {
  return axios.get<BaseResponse<Pagination<ExampleCMSBannerModel[]>>>(URL_ALL_BANNER, { params, signal });
}

export function downloadCMSBanner(params: ExampleCMSBannerParams, signal?: AbortSignal) {
  return axios.get<BaseResponse<Pagination<ExampleCMSBannerModel[]>>>(URL_DOWNLOAD_BANNER, { params, signal });
}

export function downloadCMSBannerThumbnail(params: ExampleCMSBannerParams, signal?: AbortSignal) {
  return axios.get<BaseResponse<Pagination<ExampleCMSBannerModel[]>>>(URL_DOWNLOAD_THUMBNAIL_BANNER, { params, signal });
}

export const uploadCMSBanner = (payload?: FormData) => {
  return axios.post<BaseResponse<Response<ExampleCMSBannerModel>>>(URL_BANNER, payload)
}

export const updateCMSBanner = (payload?: FormData) => {
  return axios.put<BaseResponse<Response<ExampleCMSBannerModel>>>(URL_BANNER, payload)
}

export function saveCMSBanner(payload?: FormData) {
  const isEdit = !!payload?.get("id");
  return isEdit ? updateCMSBanner(payload) : uploadCMSBanner(payload);
}

export const deleteCMSBanner = (id?: string) => {
  return axios.delete<BaseResponse<Response<string>>>(`${URL_BANNER}?id=${id}`)
}

export function getDetailCMSBanner(id?: string, signal?: AbortSignal) {
  return axios.get<BaseResponse<Response<ExampleCMSBannerModel>>>(`${URL_BANNER}/${id}`, { signal });
}

export function reorderIndexCMSBanner(payload?: reorderCMSBannerPayload[]) {
  return axios.put<BaseResponse<Response<ExampleCMSBannerModel>>>(URL_ORDER_BANNER, payload);
}
