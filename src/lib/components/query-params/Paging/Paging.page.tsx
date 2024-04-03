import { Paging as GenericPaging } from "../../Paging";
import { usePagingHook } from "./Paging.hooks";
import { PagingProps } from "./Paging.types";

function Paging(props: Readonly<PagingProps>) {

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

Paging.defaultProps = {
  total: 0
} as PagingProps;

export { Paging }
