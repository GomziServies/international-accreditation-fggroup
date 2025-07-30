import Swal from 'sweetalert2';
import { publicAxiosInstance } from '../config/api';
import toast from 'react-hot-toast';

export const handleUnexpectedError = () => {
    try {
        if (!publicAxiosInstance) { }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Unexpected Error',
            text: error.message || 'report this issue'
        });
    }
};

export const sendInquiry = async (full_name, email, phone, institute_name, country_code ,country) => {
    try {
        if (!full_name || !email || !phone || !institute_name || !country || !country_code) {
            throw new Error('All fields are required');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        email = String(email).toLowerCase().trim();

        if (!emailRegex.test(email)) {
            throw new Error('Invalid Email');
        }

        const payload = {
            full_name,
            email,
            phone,
            institute_name,
            country,
            country_code
        };

        const response = await publicAxiosInstance.post(`/create-inquiry`, payload);

        const resStatus = response?.data?.response?.toLowerCase();

        if (resStatus === 'conflict') {
            throw new Error(response?.data?.message || 'Conflict: Duplicate entry');
        }

        if (resStatus !== 'success' && resStatus !== 'ok') {
            throw new Error(response?.data?.message || 'Something went wrong!');
        }

        document.querySelectorAll('[id^=txt_iptna]').forEach(input => input.value = '');

    } catch (error) {
        if (error?.response?.data?.message) {
            throw new Error(error.response.data.message);
        }
        console.error('sendInquiry error:', error);
        throw new Error(error.message || 'Unexpected error occurred');
    }
};


