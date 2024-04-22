import { Paging, PagingParams } from "~/components/Paging";
import { useUrlSearchParams } from "~/hooks";
import { useQueryStateContext } from "../QueryState/QueryState.context";

export function PagingQuery() {

  const [searchParams, setSearchParams] = useUrlSearchParams<keyof PagingParams>();

  const {
    isFetching,
    isLoading,
    data
  } = useQueryStateContext();

  const handleChangePage = (value: PagingParams) => {
    setSearchParams({
      page: value.page.toString(),
      size: value.size.toString()
    });
  };

  return (
    <Paging
      onChangePage={handleChangePage}
      loading={isFetching || isLoading}
      total={data?.pagination?.total}
      size={data?.pagination?.size}
      page={+(searchParams.page ?? 1)}
    />
  );
}
