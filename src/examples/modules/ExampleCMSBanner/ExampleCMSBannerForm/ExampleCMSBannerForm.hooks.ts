import { useEffect } from "react";
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import notify from "~/utils/toast.ts";
import { getDetailCMSBanner, updateCMSBanner, uploadCMSBanner } from '../ExampleCMSBanner.service';
import { updateCMSBannerPayload, uploadCMSBannerPayload } from "../ExampleCMSBanner.types.ts";

export function useCMSBannerFormHook() {
    const {id} = useParams();
    const navigate = useNavigate();
    const form = useForm();

    const fetchData = async () => {
        try {
            const response = await getDetailCMSBanner(id ?? '1');
            if (response.data.response_output?.detail) {
                const detailData = response.data.response_output?.detail;
                form.setValue('title', detailData.title);
                form.setValue('description', detailData.description);
                form.setValue('deeplink', detailData.deeplink);
                form.setValue('index', detailData.index);
                form.setValue('cropped_file', detailData.image_file);
            }
        } catch (err) {
            console.log(err);
        } finally {
            console.log();
        }
    };

    const handleSubmit = form.handleSubmit(
        (payload) => {
            console.log('🚀 ~ handleSubmit CREATE ~ payload:', payload);
            handleAddBanner(payload);
        },
        (error) => {
            console.log('🚀 ~ handleSubmit CREATE ~ error:', error);
        }
    );

    const handleSubmitEdit = form.handleSubmit(
        (payload) => {
            console.log('🚀 ~ handleSubmit EDIT ~ payload:', payload);
            if (id) {
                handleUpdateBanner(payload);
            }
        },
        (error) => {
            console.log('🚀 ~ handleSubmit EDIT ~ error:', error);
        }
    );

    // Function to fetch data
    const handleAddBanner = async (data: FieldValues) => {
        const payload: uploadCMSBannerPayload = {
            file: data.cropped_file,
            title: data.title,
            description: data.description,
            deeplink: data.deeplink,
            index: data.index,
            is_active: data.status === 'active',
        };
        try {
            const response = await uploadCMSBanner(payload);
            if (response.status == 200) {
                notify('Data berhasil diupload', 'success');
                navigate('/example-cms-banner');
            }
        } catch (err) {
            notify('Data gagal diupload', 'error');
        }
    };

    // Function to fetch data
    const handleUpdateBanner = async (data: FieldValues) => {
        const payload: updateCMSBannerPayload = {
            id: id as string,
            file: data.file.length > 0 ? data.cropped_file : null,
            title: data.title,
            description: data.description,
            deeplink: data.deeplink,
            index: data.index,
        };
        try {
            const response = await updateCMSBanner(payload);
            if (response.status == 200) {
                notify('Data berhasil diedit', 'success')
                navigate('/example-cms-banner');
            }
        } catch (err) {
            notify('Data gagal diedit', 'error')
        }
    };

    useEffect(() => {
        if (id) {
            fetchData();
        }
    }, []);

    return {
        action: {handleSubmit, handleSubmitEdit},
        form,
    };
}

