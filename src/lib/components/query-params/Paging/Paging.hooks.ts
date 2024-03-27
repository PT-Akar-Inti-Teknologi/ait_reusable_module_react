import { PagingParams } from "../../Paging";
import { useUrlSearchParams } from "../../../hooks";
import { useEffect } from "react";

export function usePagingHook() {

  const [searchParams, setSearchParams] = useUrlSearchParams<'page' | 'limit'>();

  useEffect(
    () => {
      const defaultparams = {};
      if (!searchParams.page) {
        Object.assign(defaultparams, { page: 1 });
      }
      if (!searchParams.limit) {
        Object.assign(defaultparams, { limit: 1 });
      }
    },
    []
  );

  const handleChangePage = (data: PagingParams) => {
    setSearchParams(data as any);
  };

  const params = {
    limit: !searchParams.limit ? undefined : +searchParams.limit,
    page: !searchParams.page ? undefined : +searchParams.page
  };

  return {
    handleChangePage,
    params
  };
}
