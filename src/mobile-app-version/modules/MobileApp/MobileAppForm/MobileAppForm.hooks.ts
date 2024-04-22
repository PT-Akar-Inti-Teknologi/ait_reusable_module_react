import { useForm } from "react-hook-form";

const platformMaster = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Android',
    value: 'android',
  },
  {
    label: 'IOS',
    value: 'ios',
  }
];

export function useMobileAppFormHook() {

  const form = useForm();
  const tes = form.watch('version_number');
  // console.log("🚀 ~ useMobileAppFormHook ~ tes:", tes)

  const handleSubmit = form.handleSubmit((payload: any) => {
    console.log("🚀 ~ handleSubmit ~ payload:", payload)
  }, (error) => {
    console.log("🚀 ~ handleSubmit ~ error:", error)

  });

  return {
    action: { handleSubmit },
    platformMaster,
    form
  };
}
