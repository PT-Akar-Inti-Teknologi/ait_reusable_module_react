import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

import { cleanObject } from "../utils";

export function useUrlSearchParams<T extends string>(
  initParams?: { [key in T]?: string }
): [
    { [key in T]?: string },
    (props: { [key in T]?: string }) => void
  ] {

  const [searchParams, setSearchParams] = useSearchParams(initParams as any);

  const params: { [key in T]?: string } = useMemo(
    () => {
      const _params: any = {};
      searchParams.forEach((value, key) => {
        _params[key] = value;
      });
      return _params;
    },
    [searchParams.toString()]
  );

  const updateSearchParams = (newParams: any) => {
    const mergedParams = cleanObject({ ...params, ...newParams });
    setSearchParams(mergedParams);
  };

  return [params, updateSearchParams];
}
