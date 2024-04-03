import { PagingProps as GenericPagingProps } from "~/components/Paging";

export interface PagingProps extends Readonly<Omit<GenericPagingProps, 'onChangePage' | 'page' | 'limit'>> {
}
