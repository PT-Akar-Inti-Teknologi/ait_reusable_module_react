import axios from "axios";

import { BaseResponse, Pagination, Response } from "~/models";

import { VersionDetailParam, VersionModel, VersionParams, VersionPayload } from "./MobileApp.types";

export const URL_EXAMPLE = 'https://ait-experiment.sandbait.work/api';
//https://ait-experiment.sandbait.work/api/app-version/all?page&size=10&search

export function getAllVersion(params: VersionParams, signal?: AbortSignal) {
  return axios.get<BaseResponse<Pagination<VersionModel[]>>>(`${URL_EXAMPLE}/app-version/all?`, { params, signal });
}

export function getVersionDetail(params: VersionDetailParam, signal?: AbortSignal) {
  return axios.get<BaseResponse<Response<VersionModel>>>(`${URL_EXAMPLE}/app-version/detail?`, { params, signal });
}

export function getDetail(id: string) {
  return axios.get<BaseResponse<Response<VersionModel>>>(`${URL_EXAMPLE}/app-version/${id}`);
}

export const postVersion = (payload?: VersionPayload) => {
  return axios.post<BaseResponse<Response<VersionModel>>>(`${URL_EXAMPLE}/app-version/save`,payload)
}

export const deleteVersion = (id?: string) => {
  return axios.delete<BaseResponse<Response<string>>>(`${URL_EXAMPLE}/app-version/delete?ids=${id}`)
}