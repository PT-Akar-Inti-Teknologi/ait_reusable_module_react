import {
  useUrlSearchParams
} from "../../../hooks";
import {
  Table,
  TableProps
} from "../../Table";

export function TableParams({
  children,
  ...props
}: Readonly<TableProps>) {

  const [searchParams, setSearchParams] = useUrlSearchParams();
  const params = { page: 1, size: 10, ...searchParams };

  return (
    <Table
      onUpdateParams={setSearchParams}
      params={params}
      {...props}
    >
      {children}
    </Table>
  );
}
