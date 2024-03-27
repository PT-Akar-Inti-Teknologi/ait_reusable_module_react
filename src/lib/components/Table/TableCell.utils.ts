import {
  DisplayLabelOptions,
  GetParamKey,
  Sort
} from "./TableCell.types";

interface GetRollingSortParams<P extends Record<string, any>> {
  paramKey?: string;
  params: P;
  order?: string;
}

export function getRollingSort<P extends Record<string, any>>({
  paramKey,
  params,
  order
}: GetRollingSortParams<P>) {

  const param = getParamKey(paramKey);
  if (params?.[param.order] !== order) {
    return {
      [param.sort]: Sort.ASC,
      [param.order]: order
    };
  }
  const rollingSort = [
    {
      value: Sort.DESC,
      key: Sort.ASC
    },
    {
      value: undefined,
      key: Sort.DESC
    },
    {
      value: Sort.ASC,
      key: undefined
    },
  ].find((_) => _.key === params?.[param.sort]);

  if (!!rollingSort) {
    return {
      [param.order]: !rollingSort.value ? undefined : order,
      [param.sort]: rollingSort.value
    };
  }
}

export function getParamKey(key?: string) {
  return [
    'page',
    'limit',
    'sort',
    'order'
  ].reduce((stack, item) => {
    const value = !key ? item : `${key}.${item}`;
    return { ...stack, [item]: value };
  }, {} as GetParamKey);
}

export function displayValue<T>(value?: T, options?: DisplayLabelOptions<T>) {

  const {
    renderValue = (_: any) => _,
    placeholder = '-',
    validate = (_: any) => !!_
  } = options || {};
  if (validate(value)) {
    const label = renderValue(value!);
    return Array.isArray(label) ? label.join(', ') : label;
  }
  return placeholder;
}
