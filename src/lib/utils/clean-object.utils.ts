
export function cleanObject<T extends object>(obj?: T): T {
  return Object.entries(obj as any).reduce((stack, [key, value]) => {
    if (!!value) {
      return { ...stack, [key]: value };
    }
    return stack;
  }, {} as any);
}
