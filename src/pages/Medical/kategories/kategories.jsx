import React, { useEffect, useState } from 'react';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://admin.ht-med.uz/api/v1/category-image-list/');
                if (!response.ok) {
                    throw new Error(`HTTP xatolik: ${response.status}`);
                }
                const data = await response.json();

                setCategories(data);
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

    console.log('Categories:', categories);

    return (
        <div className='flex gap-[20px] mt-[20px]'>
            {categories?.results?.length > 0 ? (
                categories?.results?.map((item) => {
                    return (
                        <div key={item.id} className="w-[160px] h-[128px] flex flex-col items-center justify-center mx-auto rounded-[14px] bg-[#0000000e] hover:border-[#00000044] border-[2px] shadow-md transition-[3s]">
                            <img className="w-[50px] h-[50px]" src={item.image} alt={item.name || 'Category'} />
                            <div className='w-[150px] items-center mt-[10px]'>
                                <p className="font-[500] text-[16px] leading-[24px] text-[#000000] text-center">
                                    {item.name || 'No name'}
                                </p>
                            </div>
                        </div>
                    )
                }
                )
            ) : (
                <p>No categories found.</p>
            )}
        </div>
    );
};

export default Categories;
