import { Paging as GenericPaging, PagingProps } from "../../Paging";
import { usePagingHook } from "./Paging.hooks";

export function Paging(props: Readonly<Omit<PagingProps, 'onChangePage' | 'page' | 'limit'>>) {

  const state = usePagingHook();

  return (
    <GenericPaging
      {...props}
      onChangePage={state.handleChangePage}
      limit={state.params.limit}
      page={state.params.page}
    />
  );
}
