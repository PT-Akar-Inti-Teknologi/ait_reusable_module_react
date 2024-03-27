import { twMerge } from "tailwind-merge";
import { forwardRef, Ref } from "react";

import { TableProps, TableRef } from "./Table.types";
import { Theme } from "./Table.theme";
import { TableProvider } from "./Table.context";

function _Table(
  {
    onUpdateParams,
    classNames,
    className,
    params,
    ...props
  }: Readonly<TableProps>,
  ref: Ref<TableRef>
) {

  return (
    <TableProvider forwardedRef={ref} {...{ onUpdateParams, params }}>
      <div className={twMerge(Theme.container, classNames?.container)}>
        <table className={twMerge(Theme.table, classNames?.table, className)} {...props} />
      </div>
    </TableProvider>
  );
}

export const Table = forwardRef(_Table);
