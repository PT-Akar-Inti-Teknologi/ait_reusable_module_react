import axios from "axios";

import { BaseResponse, Pagination } from "../../models/api.model";
import { ExampleModel, ExampleParams } from "./Example.types";

export const URL_EXAMPLE = '/'

export function getExample(params: ExampleParams, signal?: AbortSignal) {
  return axios.get<BaseResponse<Pagination<ExampleModel[]>>>(URL_EXAMPLE, { params, signal });
}
