import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import notify from "~/utils/toast.ts";
import {
  useGetDetailCMSBanner,
  useSaveCMSBanner,
} from "../ExampleCMSBanner.providers.ts";

export function useCMSBannerFormHook() {
  const bannerMutation = useSaveCMSBanner();
  const detailBanner = useGetDetailCMSBanner();
  const navigate = useNavigate();
  const form = useForm();

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
        navigate(-1);
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

  return {
    bannerMutation,
    detailBanner,
    form,
    action: {
      handleSubmit,
    },
  };
}
