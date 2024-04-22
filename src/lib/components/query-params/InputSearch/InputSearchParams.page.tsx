import {
  useRef
} from "react";

import {
  InputSearch,
  InputSearchProps
} from "../../InputSearch";
import {
  useUrlSearchParams
} from "../../../hooks";

export function InputSearchParams({
  className,
  ...props
}: Readonly<InputSearchProps>) {

  const [searchParams, setSearchParams] = useUrlSearchParams<'search' | 'page'>();
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleSearch = (value: string) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setSearchParams({
        search: value,
        page: undefined
      });
    }, 300);
  };

  return (
    <InputSearch
      defaultValue={searchParams.search}
      onChangeText={handleSearch}
      {...props}
    />
  );
}
