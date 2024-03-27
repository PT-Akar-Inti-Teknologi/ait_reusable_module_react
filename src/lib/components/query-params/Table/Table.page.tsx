import {
  useUrlSearchParams
} from "../../../hooks";
import {
  Table as GenericTable,
  TableProps
} from "../../Table";

export function Table({
  children,
  ...props
}: Readonly<TableProps>) {

  const [searchParams, setSearchParams] = useUrlSearchParams();
  const params = { page: 1, limit: 10, ...searchParams };

  return (
    <GenericTable
      onUpdateParams={setSearchParams}
      params={params}
      {...props}
    >
      {children}
    </GenericTable>
  );
}
