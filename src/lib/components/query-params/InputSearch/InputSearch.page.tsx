import {
  useRef
} from "react";

import {
  InputSearch as GenericInputSearch,
  InputSearchProps
} from "../../InputSearch";
import {
  useUrlSearchParams
} from "../../../hooks";

export function InputSearch({
  className,
  ...props
}: Readonly<InputSearchProps>) {

  const [searchParams, setSearchParams] = useUrlSearchParams<'search' | 'page'>();
  const timeoutRef = useRef<number>();

  const handleSearch = (value: string) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setSearchParams({ search: value, page: '1' });
    }, 400);
  };

  return (
    <GenericInputSearch
      defaultValue={searchParams.search}
      onChangeText={handleSearch}
      key={!searchParams.search ? "0" : "1"}
      {...props}
    />
  );
}
