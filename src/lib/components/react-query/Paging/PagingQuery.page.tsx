import { PagingParams } from "~/components/query-params";

import { useQueryStateContext } from "../QueryState/QueryState.context";

export function PagingQuery() {

  const {
    isFetching,
    isLoading,
    data
  } = useQueryStateContext();

  return (
    <PagingParams
      loading={isFetching || isLoading}
      total={data?.pagination?.total}
    />
  );
}
