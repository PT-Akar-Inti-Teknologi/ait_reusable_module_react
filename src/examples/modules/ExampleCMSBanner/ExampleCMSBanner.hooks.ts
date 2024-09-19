import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import notify from "~/utils/toast.ts";
import { useGetExample } from "./ExampleCMSBanner.providers.ts";
import { deleteCMSBanner, getDetailCMSBanner, reorderIndexCMSBanner } from "./ExampleCMSBanner.service.ts";
import { ExampleCMSBannerModel, reorderCMSBannerPayload } from "./ExampleCMSBanner.types.ts";

export function useExampleCMSBannerHook() {
    const [draft, setDraft] = useState<ExampleCMSBannerModel[]>([]);
    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id } = useParams();
    const [detail, setDetail] = useState<{ [key: string]: any }>({});

    const exampleCMSBanner = useGetExample();


    // Function to fetch data
    const fetchData = async () => {
        try {
            const response = await getDetailCMSBanner(id || "1")
            if (response.data.response_output?.detail) {
                setDetail(response.data.response_output.detail);
            }
        } catch (err) {
            console.log(err)
        } finally {
            console.log();
        }
    };

    useEffect(() => {
        fetchData();
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

    const handleReOrderDraft = (data: ExampleCMSBannerModel[]) => {
        const draft = data.map((_) => ({ ..._, id: _.id }));
        setDraft(draft);
        const result = generateReorderIndex(data);
        handleReorderIndex(result);
    };

    function generateReorderIndex(data: ExampleCMSBannerModel[]): reorderCMSBannerPayload[] {
        return data.map((item, index) => {
            return {
                id: item.id,
                index: index.toString()
            };
        });
    }

    // function reorder index banner
    const handleReorderIndex = async (data: reorderCMSBannerPayload[]) => {
        try {
            const response = await reorderIndexCMSBanner(data)
            if (response.status === 200) {
                notify('Data berhasil diurutkan', 'success');
                refetch();
            }
        } catch (err) {
            notify('Data gagal diurutkan', 'error');
        }
    }

    // function delete data
    const handleDelete = async () => {
        if (!deleteId) return;

        setIsDeleting(true);
        setIsModalOpen(false);
        try {
            const response = await deleteCMSBanner(deleteId);
            if (response.status === 200) {
                notify('Data berhasil dihapus', 'success');
                refetch();
            }
        } catch (err) {
            notify('Data gagal dihapus', 'error');
        } finally {
            setIsDeleting(false);
            setDeleteId(null);
        }
    };

    return {
        exampleCMSBanner,
        action: {
            setDraft,
            setIsDeleting,
            setDeleteId,
            setIsModalOpen,
            refetch,
            handleReorderIndex,
            handleReOrderDraft,
            handleDelete
        },
        state: {
            draft,
            wasChanged,
            isDeleting,
            isModalOpen,
            detail
        },
    };
}
