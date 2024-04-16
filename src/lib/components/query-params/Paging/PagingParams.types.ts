import { PagingProps as GenericPagingProps } from "~/components/Paging";

export interface PagingParamsProps extends Readonly<Omit<GenericPagingProps, 'onChangePage' | 'page' | 'limit'>> {
}
