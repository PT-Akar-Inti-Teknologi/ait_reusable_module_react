export type BaseResponse<T> = {
  response_schema?: {
    response_code?: string
    response_message?: Translation
  }
  response_output?: T
}

export type Translation = {
  en?: string
  id?: string
}

export type PaginateModel = {
  page?: number
  total?: number
  size?: number
  rows_per_page?: number
  checked?: number
}

export type Pagination<T> = {
  list?: ResponseList<T>
}

export type ResponseList<T> = {
  content?: T
  pagination?: PaginateModel
}

export type Response<T> = {
  detail?: T
}

export type ResponseFieldError = {
  errors: {
    field?: string
    message?: Translation
  }[]
}

export type QueryModel = {
  page?: string | number
  limit?: string | number
  size?: string | number
  search?: string
  is_active?: string | boolean
  role_ids?: string | string[]
  order?: string
  sort?: string
  start_date?: string
  end_date?: string
  action?: string
  statuses?: string[]
  reward_type?: string
}
