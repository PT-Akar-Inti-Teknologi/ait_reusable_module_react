import axios from "axios";

import { BaseResponse, Pagination } from "~/models";

import { VersionModel, VersionParams } from "./MobileApp.types";

export const URL_EXAMPLE = 'https://ait-experiment.sandbait.work/api';
//https://ait-experiment.sandbait.work/api/app-version/all?page&size=10&search

export function getAllVersion(params: VersionParams, signal?: AbortSignal) {
  return axios.get<BaseResponse<Pagination<VersionModel[]>>>(`${URL_EXAMPLE}/app-version/all?`, { params, signal });
}
