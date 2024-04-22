import { ReactNode } from "react";

import { UseQueryFieldsParams } from "~/hooks";

export interface HookFormProviderProps<T> extends UseQueryFieldsParams<T> {
  children?: ReactNode;
  disables?: string[];
  enables?: string[];
}

export interface HookFormContextValue {
  disables?: string[];
  enables?: string[];
}
