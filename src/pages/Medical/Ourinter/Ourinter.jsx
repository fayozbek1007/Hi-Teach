import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Ourinter = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://admin.ht-med.uz/api/v1/partner-image-list/');
                if (!response.ok) {
                    throw new Error(`HTTP xatolik: ${response.status}`);
                }
                const data = await response.json();
                console.log('Kelayotgan API ma\'lumotlari:', data);

                setCategories(data.results || []);
            } catch (error) {
                console.error('APIdan maʼlumot olishda xatolik:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return <p>Yuklanmoqda...</p>;
    }

    return (
        <div className='flex flex-wrap  gap-[20px] mt-[20px] mx-[auto] my-0 justify-evenly  w-[1200px]'>
            {categories.length > 0 ? (
                categories.map((item) => (
                    <Link key={item.id} href={"/"}>
                        <div
                            className="w-[282.4px] h-[159.4px] items-center justify-center mx-auto rounded-[14px] bg-[#00000006] hover:border-[#00000044] hover:border-[3px] shadow-md transition-all duration-200"
                        >
                            <Image
                                className="w-[262.4px] h-[149.4px] mx-[auto] my-0"
                                src={item.image}
                                alt={item.name || 'Category'}
                            />
                        </div>
                    </Link>
                ))
            ) : (
                <p>No categories found.</p>
            )}
        </div>
    );
};

export default Ourinter;
