import { toast } from 'react-toastify';

const notify = (val: string, type: 'success' | 'error') => {
    if (type === 'success') {
        toast.success(val, {
            position: "top-center"
        });
    } else {
        toast.error(val, {
            position: "top-center"
        });
    }
};

export default notify;