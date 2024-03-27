import { useRef } from "react";

import { TableContextValueParams } from "../../Table";
import { useUrlSearchParams } from "../../../hooks";

export function useTableHook() {

  const [searchParams, setSearchParams] = useUrlSearchParams();
  const debounceUpdate = useRef<number>();

  const handleUpdateParams = (data: TableContextValueParams) => {
    clearTimeout(debounceUpdate.current);
    debounceUpdate.current = setTimeout(() => {
    }, 250);
    setSearchParams(data);
  };

  return {
    handleUpdateParams,
    searchParams
  }
}
