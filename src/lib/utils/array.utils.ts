export function hasArray(arr: any): arr is any[] {
  return Array.isArray(arr) && arr.length > 0;
}

export function safeArray<T>(arr?: T[]): T[] {
  return hasArray(arr) ? arr : [];
}
