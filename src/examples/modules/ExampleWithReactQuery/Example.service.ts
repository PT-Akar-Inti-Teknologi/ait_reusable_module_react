import axios from "axios";

import { BaseResponse, Pagination } from "~/models";

import { ExampleModel, ExampleParams } from "./Example.types";

export const URL_EXAMPLE = 'https://ait-experiment.sandbait.work/api/user/all';

export function getExample(params: ExampleParams, signal?: AbortSignal) {
  return axios.get<BaseResponse<Pagination<ExampleModel[]>>>(URL_EXAMPLE, { params, signal });
}
