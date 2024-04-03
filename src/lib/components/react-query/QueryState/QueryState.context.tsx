import { createContext, useContext } from "react";


import { QueryStateProviderProps, ResponseQueryResult } from "./QueryState.types";
import { ResponseList } from "~/models";

const QueryStateContext = createContext({} as ResponseQueryResult<any>);

export function QueryStateProvider<T>(props: Readonly<QueryStateProviderProps<T>>) {

  return (
    <QueryStateContext.Provider value={props.query!}>
      {props.children}
    </QueryStateContext.Provider>
  );
}

export function useQueryStateContext<T = ResponseList<any[]>>(): ResponseQueryResult<T> {

  const context = useContext(QueryStateContext);

  return context;
}
