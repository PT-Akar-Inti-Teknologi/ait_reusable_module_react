import { useForm } from 'react-hook-form';
import { VersionPayload } from '../MobileApp.types';
import { getDetail, postVersion } from '../MobileApp.service';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

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
  const { id } = useParams();
  const navigate = useNavigate()
  const form = useForm();

  // Function to fetch data
  const fetchData = async () => {

    try {
      const response = await getDetail(id ?? '1')
      if (response.data.response_output?.detail?.type) {
        const detailData = response.data.response_output?.detail
        const result = platformMaster.find(platform => platform.value === detailData.platform);
        form.setValue('platform', result)
        form.setValue('version_number', detailData.version)
        form.setValue('type', detailData.type)
      }
    } catch (err) {
      console.log(err)
    } finally {
      console.log()
    }
  };

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

    // useEffect to call the API whenever params change
    useEffect(() => {
      if(id){
        fetchData();
      }
    }, []);

  return {
    action: { handleSubmit, handleSubmitEdit },
    platformMaster,
    form,
  };
}
