import { useGetDetailCMSBanner } from "./ExampleCMSBanner.providers";

export function useExampleCMSBannerDetailHook() {

  const banner = useGetDetailCMSBanner();

  return {
    banner
  };
}
