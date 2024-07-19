import { useEffect, useState } from "react";
import { useGetExample } from "./ExampleCMSBanner.providers.ts";
import { ExampleCMSBannerModel } from "./ExampleCMSBanner.types.ts";

export function useExampleCMSBannerHook() {
    const [draft, setDraft] = useState<ExampleCMSBannerModel[]>([]);

    const exampleCMSBanner = useGetExample();

    useEffect(() => {
        if (exampleCMSBanner.isSuccess) {
            setDraft(exampleCMSBanner.data?.content!);
        }
    }, [exampleCMSBanner.dataUpdatedAt, exampleCMSBanner.isSuccess]);

    const wasChanged = exampleCMSBanner.data?.content?.some(
        (_, __) => draft.findIndex((__) => __.id === _.id) !== __
    );

    // make a refetch function
    const refetch = () => {
        exampleCMSBanner.refetch();
    };

    return {
        exampleCMSBanner,
        action: {
            setDraft,
            refetch,
        },
        state: {
            draft,
            wasChanged,
        },
    };
}
