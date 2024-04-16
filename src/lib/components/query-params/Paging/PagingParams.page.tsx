import { Paging } from "../../Paging";
import { usePagingParamsHook } from "./PagingParams.hooks";
import { PagingParamsProps } from "./PagingParams.types";

function PagingParams(props: Readonly<PagingParamsProps>) {

  const state = usePagingParamsHook();

  return (
    <Paging
      {...props}
      onChangePage={state.handleChangePage}
      size={state.params.size}
      page={state.params.page}
    />
  );
}

PagingParams.defaultProps = {
  total: 0
} as PagingParamsProps;

export { PagingParams }
