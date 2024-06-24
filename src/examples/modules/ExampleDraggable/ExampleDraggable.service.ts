import axios from "axios";

import { BaseResponse, Pagination } from "~/models";

import { ExampleDraggableModel, ExampleDraggableParams } from "./ExampleDraggable.types";

export const URL_EXAMPLE = 'https://ait-experiment.sandbait.work/api/user/all';

export function getExampleDraggable(params: ExampleDraggableParams, signal?: AbortSignal) {
  return axios.get<BaseResponse<Pagination<ExampleDraggableModel[]>>>(URL_EXAMPLE, { params, signal });
}
