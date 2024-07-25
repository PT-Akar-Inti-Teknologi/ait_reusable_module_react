import {
  createElement,
  useEffect
} from "react";
import {
  twMerge
} from "tailwind-merge";

import {
  Divider
} from "../Divider/Divider.page";
import {
  SortAscIcon,
  SortDescIcon
} from "./Icons";
import {
  useTableContext
} from "./Table.context";
import {
  Theme
} from "./TableCell.theme";
import {
  Sort,
  TableCellChildrenProps,
  TableCellProps
} from "./TableCell.types";
import {
  displayValue,
  getParamKey,
  getRollingSort
} from "./TableCell.utils";

export function TableCell<T>({
  renderValue,
  validate,
  parentelement,
  placeholder,
  orderPrefix,
  classNames,
  className,
  children,
  action,
  index,
  order,
  value,
  ...props
}: TableCellProps<T>) {

  const {
    params,
    updateParams,
    setInitParams
  } = useTableContext();

  const param = getParamKey(orderPrefix);
  const withSort = !!order;
  const isHead = parentelement === 'thead';
  const element = isHead ? 'th' : 'td';

  const activeSort = params?.[param.order] === order;
  const isInactiveDesc = !!params[param.sort] && params[param.sort] !== Sort.DESC;
  const isInactiveAsc = !!params[param.sort] && params[param.sort] !== Sort.ASC;
  const isInactiveAll = isInactiveDesc && isInactiveAsc;
  const invisibleDesc = activeSort && !isInactiveAll && isInactiveDesc && 'invisible';
  const invisibleAsc = activeSort && !isInactiveAll && isInactiveAsc && 'invisible';

  useEffect(() => {
    if (isHead && withSort) {
      const paramsKey = Object.keys(params);
      const storeParams = {};
      if (!paramsKey.includes(param.sort)) {
        Object.assign(storeParams, { [param.sort]: undefined });
      }
      if (!paramsKey.includes(param.order)) {
        Object.assign(storeParams, { [param.order]: undefined });
      }
      if (Object.keys(storeParams).length > 0) {
        setInitParams(storeParams);
      }
    }
  }, []);

  const handleToggleSort = () => {
    const rollingSort = getRollingSort({
      paramKey: orderPrefix,
      params,
      order
    });
    updateParams(rollingSort);
  };

  return createElement(element, {
    ...props,
    onClick: withSort ? handleToggleSort : undefined,
    className: twMerge(
      'relative',
      isHead ? Theme.th : Theme.tr,
      isHead && 'whitespace-nowrap',
      withSort && 'cursor-pointer',
      ['number', 'boolean'].includes(typeof index) && Theme.index,
      action && Theme.action,
      classNames?.cell,
      className
    )
  }, (
    <>
      {(action) && (
        <Divider
          variant="solid"
          orientation="vertical"
          className={twMerge(Theme.actionDivider, classNames?.actionDivider)}
        />
      )}
      <TableCellChildren
        displayLabeloptions={{ renderValue, validate, placeholder }}
        {...{
          classNames,
          children,
          isHead,
          action,
          index,
          value
        }}
      >
        {children}
      </TableCellChildren>
      {(withSort) && (
        <span className="space-y-0.5 inline-block px-2">
          <SortDescIcon className={twMerge(classNames?.icon, classNames?.descIcon, invisibleDesc)} />
          <SortAscIcon className={twMerge(classNames?.icon, classNames?.ascIcon, invisibleAsc)} />
        </span>
      )}
    </>
  ));
}

function TableCellChildren<T>({
  displayLabeloptions,
  classNames,
  children,
  isHead,
  action,
  index,
  value,
}: Readonly<TableCellChildrenProps<T>>) {

  const { params } = useTableContext();

  if (isHead) {
    if (index === true) {
      return <>No</>;
    }
    if (action === true) {
      return <>Action</>
    }
  }
  if (action === true) {
    return (
      <div className={twMerge(Theme.actionWrapper, classNames?.actionWrapper)}>
        {children}
      </div>
    );
  }
  if (typeof (index) === 'number' && params.size !== undefined && params.page !== undefined) {
    return <>{(+params.size * Math.max(+params.page - 1, 0)) + (index + 1)}</>
  }
  if (!children) {
    return <>{displayValue(value, displayLabeloptions)}</>;
  }
  return <>{children}</>;
}
