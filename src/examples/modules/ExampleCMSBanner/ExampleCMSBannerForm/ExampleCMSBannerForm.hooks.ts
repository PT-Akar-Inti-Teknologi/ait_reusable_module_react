import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import notify from "~/utils/toast.ts";
import {
  useGetDetailCMSBanner,
  useSaveCMSBanner,
} from "../ExampleCMSBanner.providers.ts";
import { useState } from "react";

export function useCMSBannerFormHook() {
  const bannerMutation = useSaveCMSBanner();
  const detailBanner = useGetDetailCMSBanner();
  const navigate = useNavigate();
  const form = useForm();
  const [isModalDirtyForm, setIsModalDirtyForm] = useState(false);

  const handleSubmit = form.handleSubmit(
    async (payload) => {
      const isEdit = !!payload.id;
      try {
        const payloadFormData = new FormData();
        if (payload.id) {
          payloadFormData.append("id", payload.id);
        }

        payloadFormData.append("is_active", payload.is_active);
        payloadFormData.append("file", payload.file);
        payloadFormData.append("title", payload.title);
        payloadFormData.append("description", payload.description);
        payloadFormData.append("deeplink", payload.deeplink);
        payloadFormData.append("index", payload.index);

        await bannerMutation.mutateAsync(payloadFormData);
        if (isEdit) {
          notify("Data berhasil diedit", "success");
        } else {
          notify("Data berhasil diupload", "success");
        }
        handleNavigateList();
      } catch (error) {
        if (isEdit) {
          notify("Data gagal diedit", "error");
        } else {
          notify("Data gagal diupload", "error");
        }
      }
    },
    (error) => {
      console.log("🚀 ~ handleSubmit CREATE ~ error:", error);
    }
  );

  const handleCancel = () => {
    const dirtyFields = form.control._formState?.dirtyFields;
    const hasDirtyFields = Object.values(dirtyFields).some(value => value === true);
    
    if (hasDirtyFields) {
      setIsModalDirtyForm(true)
    } else {
      handleNavigateList();
    }
  };

  const handleNavigateList = () => {
    navigate(-1);
  }

  return {
    bannerMutation,
    detailBanner,
    form,
    isModalDirtyForm,
    action: {
      handleSubmit,
      handleCancel,
      setIsModalDirtyForm,
      handleNavigateList
    },
  };
}
