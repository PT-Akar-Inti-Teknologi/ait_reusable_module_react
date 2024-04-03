import { Fragment } from "react";

import { safeArray } from "~/utils";
import { Table, TableBody, TableHead, TableRow } from "~/components/Table";
import { useUrlSearchParams } from "~/hooks";

import { useQueryStateContext } from "../QueryState/QueryState.context";
import { TableQueryProps } from "./TableQuery.types";

export function TableQuery<T>({
  keyExtractor,
  renderItem,
  children,
  ...props
}: Readonly<TableQueryProps<T>>) {

  const [_, setSearchParams] = useUrlSearchParams();
  const { data } = useQueryStateContext();

  const {
    page,
    size
  } = data?.pagination || {};

  const renderTableItem = (item: any, index: number) => {
    return (
      <Fragment key={keyExtractor?.(item, index)}>
        {renderItem(item, index)}
      </Fragment>
    );
  };

  return (
    <Table
      onUpdateParams={setSearchParams}
      params={{ page, limit: size }}
      {...props}
    >
      <TableHead>
        <TableRow>
          {children}
        </TableRow>
      </TableHead>
      <TableBody>
        {safeArray(data?.content).map(renderTableItem)}
      </TableBody>
    </Table>
  );
}
