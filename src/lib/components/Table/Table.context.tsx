import {
  createContext,
  useContext,
  useEffect,
  useImperativeHandle,
  useState
} from "react";

import {
  TableContextValue,
  TableContextValueParams,
  TableProviderProps
} from "./Table.types";

const initParams: TableContextValueParams = {};
const initValue: TableContextValue = {
  setInitParams: () => { },
  updateParams: () => { },
  params: initParams
}
const TableContext = createContext(initValue);

function TableProvider(props: Readonly<TableProviderProps>) {

  const [params, setParams] = useState<TableContextValueParams>(initParams);

  // const debounceInitParams = useRef<number>();

  useEffect(() => {
    if (props.params !== undefined) {
      setParams(props.params);
    }
  }, [JSON.stringify(props.params)]);

  const setInitParams = (_: TableContextValueParams) => {
    // clearTimeout(debounceInitParams.current);
    // Object.assign(params, newParams);
    // debounceInitParams.current = setTimeout(() => {
    //   setParams({ ...params });
    // }, 250);
  };

  const updateParams = (newParams: TableContextValueParams) => {
    Object.assign(params, newParams);
    props.onUpdateParams(params);
    setParams({ ...params });
  };

  useImperativeHandle(props.forwardedRef, () => ({
    setInitParams,
    updateParams
  }), []);

  const value: TableContextValue = {
    setInitParams,
    updateParams,
    params
  };

  return (
    <TableContext.Provider {...{ value }}>
      {props.children}
    </TableContext.Provider>
  );
}

TableProvider.defaultProps = {
  onUpdateParams: (_) => { }
} as TableProviderProps;

export { TableProvider }

export function useTableContext() {
  const context = useContext(TableContext);
  return context;
}
