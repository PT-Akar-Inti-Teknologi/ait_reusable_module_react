import { useForm } from 'react-hook-form';
import { VersionPayload } from '../MobileApp.types';
import { postVersion } from '../MobileApp.service';
import { useNavigate } from 'react-router-dom';

const platformMaster = [
  {
    label: 'All',
    value: 'ALL',
  },
  {
    label: 'Android',
    value: 'ANDROID',
  },
  {
    label: 'IOS',
    value: 'IOS',
  },
];

export function useMobileAppFormHook() {
  const navigate = useNavigate()
  const form = useForm();
  const tes = form.watch('version_number');
  // console.log("🚀 ~ useMobileAppFormHook ~ tes:", tes)

  const handleSubmit = form.handleSubmit(
    (payload: any) => {
      console.log('🚀 ~ handleSubmit CREATE ~ payload:', payload);
      handleAddVersion(payload);
    },
    (error) => {
      console.log('🚀 ~ handleSubmit CREATE ~ error:', error);
    }
  );

  const handleSubmitEdit = form.handleSubmit(
    (payload: any) => {
      console.log('🚀 ~ handleSubmit EDIT ~ payload:', payload);
    },
    (error) => {
      console.log('🚀 ~ handleSubmit EDIT ~ error:', error);
    }
  );

  // Function to fetch data
  const handleAddVersion = async (data: any) => {
    const payload: VersionPayload = {
      appVersions: [
        {
          id: null,
          version: data.version_number,
          platform: data.platform.value,
          type: data.type,
        },
      ],
    };
    try {
      const response = await postVersion(payload);
      console.log(response);
      if (response.status == 200) {
        console.log()
        navigate('/mobile-app-version')
      }
    } catch (err) {
      console.log(err);
    } finally {
      console.log();
    }
  };

  return {
    action: { handleSubmit, handleSubmitEdit },
    platformMaster,
    form,
  };
}
