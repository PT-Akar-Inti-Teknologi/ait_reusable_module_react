import axios from "axios"
import { BaseResponse, Pagination } from "../../models/api.model";

export const URL_EXAMPLE = '/'

export function getExample(params: any, signal?: AbortSignal) {
  return axios.get<BaseResponse<Pagination<any[]>>>(URL_EXAMPLE, { params, signal });
}
