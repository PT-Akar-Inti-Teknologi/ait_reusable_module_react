import { useGetExample } from "./QueryParams.providers";

export function useQueryParamsHook() {
  const example = useGetExample();

  return { example }
}
