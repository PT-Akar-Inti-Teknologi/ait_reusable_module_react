import { RegisterOptions } from "react-hook-form";

import { hasArray, hasObject } from "~/utils";

const defaultErrorMessage = 'Field cannot be empty'

export function defaultRule({ required, ...rule }: RegisterOptions<any, string> = {}, isMulti?: boolean) {
  if (required === true) {
    if (isMulti) {
      Object.assign(rule, { validate: (_: any) => hasArray(_) || defaultErrorMessage });
    } else {
      Object.assign(rule, { validate: (_: any) => hasObject(_) || defaultErrorMessage });
    }
  }
  return rule;
}
