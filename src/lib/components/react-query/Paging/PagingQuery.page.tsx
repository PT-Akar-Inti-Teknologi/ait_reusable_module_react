import { Paging } from "~/components/query-params";

import { useQueryStateContext } from "../QueryState/QueryState.context";

export function PagingQuery() {

  const {
    isFetching,
    isLoading,
    data
  } = useQueryStateContext();

  return (
    <Paging
      loading={isFetching || isLoading}
      total={data?.pagination?.total}
    />
  );
}
