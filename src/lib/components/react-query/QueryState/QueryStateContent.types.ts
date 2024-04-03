import { UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { HTMLAttributes } from "react"
import { BaseResponse, Response } from "~/models";

export interface QueryStateContentProps<T> extends HTMLAttributes<HTMLDivElement> {
  description?: string;
  title?: string;
  query?: UseQueryResult<T | undefined, AxiosError<BaseResponse<Response<any>>>>;
}
