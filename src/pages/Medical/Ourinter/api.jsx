// src/components/Api.jsx
import React, { useEffect, useState } from 'react';
import Ourinter from './Ourinter'; // Import Ourinter component

const Api = () => {
    const [partners, setPartners] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPartners = async () => {
            try {
                const response = await fetch('https://admin.ht-med.uz/api/v1/partner-image-list');
                if (!response.ok) {
                    throw new Error(`HTTP xatolik: ${response.status}`);
                }
                const data = await response.json();
                console.log('Kelayotgan API ma\'lumotlari:', data);

                setPartners(data.results || []); // Assuming the API response contains a 'results' array
            } catch (error) {
                console.error('APIdan maʼlumot olishda xatolik:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPartners();
    }, []);

    if (loading) {
        return <p>Yuklanmoqda...</p>;
    }

    return <Ourinter partners={partners} />;
};

export default Api;
