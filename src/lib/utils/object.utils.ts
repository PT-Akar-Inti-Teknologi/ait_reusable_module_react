
export function isObject(obj: any): obj is object {
  return !Array.isArray(obj) && obj === Object(obj);
}

export function hasObject(obj: any): obj is object {
  return isObject(obj) && Object.keys(obj).length > 0;
}

export function hasObjectValues(obj: any): obj is object {
  return isObject(obj) && Object.values(obj).filter((_) => !!_).length > 0;
}

export function cleanObject<T extends object>(obj?: T): T {
  return Object.entries(obj as any).reduce((stack, [key, value]) => {
    if (!!value) {
      return { ...stack, [key]: value };
    }
    return stack;
  }, {} as any);
}
