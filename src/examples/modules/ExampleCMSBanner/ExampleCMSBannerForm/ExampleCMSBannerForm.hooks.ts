import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import notify from "~/utils/toast.ts";
import { useGetDetailCMSBanner, useSaveCMSBanner } from "../ExampleCMSBanner.providers.ts";

export function useCMSBannerFormHook() {

    const bannerMutation = useSaveCMSBanner();
    const detailBanner = useGetDetailCMSBanner();
    const navigate = useNavigate();
    const form = useForm();

    const handleSubmit = form.handleSubmit(
        async (payload) => {
            const isEdit = !!payload.id;
            try {

                await bannerMutation.mutateAsync({
                    ...payload,
                    file: typeof payload.file === 'string' ? undefined : payload.file
                });
                if (isEdit) {
                    notify('Data berhasil diedit', 'success');
                } else {
                    notify('Data berhasil diupload', 'success');
                }
                navigate(-1);

            } catch (error) {
                if (isEdit) {
                    notify('Data gagal diupload', 'error');
                } else {
                    notify('Data gagal diedit', 'error');
                }
            }
        },
        (error) => {
            console.log('🚀 ~ handleSubmit CREATE ~ error:', error);
        }
    );

    return {
        bannerMutation,
        detailBanner,
        form,
        action: {
            handleSubmit
        },
    };
}

