import { PagingParams } from "../../Paging";
import { useUrlSearchParams } from "../../../hooks";
import { useEffect } from "react";

export function usePagingParamsHook() {

  const [searchParams, setSearchParams] = useUrlSearchParams<'page' | 'size'>();

  useEffect(
    () => {
      const defaultparams = {};
      if (!searchParams.page) {
        Object.assign(defaultparams, { page: 1 });
      }
      if (!searchParams.size) {
        Object.assign(defaultparams, { size: 1 });
      }
    },
    []
  );

  const handleChangePage = (data: PagingParams) => {
    setSearchParams(data as any);
  };

  const params = {
    size: !searchParams.size ? undefined : +searchParams.size,
    page: !searchParams.page ? undefined : +searchParams.page
  };

  return {
    handleChangePage,
    params
  };
}
