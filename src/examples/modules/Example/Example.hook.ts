import { useGetExample } from "./Example.providers";

export function useExampleHook() {

  const example = useGetExample();

  return { example }
}
