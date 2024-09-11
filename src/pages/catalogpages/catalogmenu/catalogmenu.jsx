'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPlus } from "react-icons/fa";
import { RxDividerHorizontal } from "react-icons/rx";

const Catalogmenu = () => {
    const [leftCatalog, setLeftCatalog] = useState([]);
    const [expandedCatalogId, setExpandedCatalogId] = useState(null);

    useEffect(() => {
        axios.get('https://admin.ht-med.uz/api/v1/category-list/')
            .then((response) => {
                console.log('To‘liq API javobi:', response.data);
                setLeftCatalog(response.data.results);
                console.log('Natijalar:', response.data.results);
            })
            .catch((error) => {
                console.error('APIdan maʼlumot olishda xatolik:', error);
            });
    }, []);

    const toggleCatalog = (id) => {
        setExpandedCatalogId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div>
            <div>
                {
                    leftCatalog.map((catalog) => {
                        const isExpanded = expandedCatalogId === catalog.id;

                        return (
                            <div key={catalog.id} className='flex flex-col bg-[#00000008] rounded-[18px] px-[20px] py-[12px] w-[400px] mt-[20px]'>
                                <div
                                    className='flex items-center justify-between cursor-pointer'
                                    onClick={() => toggleCatalog(catalog.id)}
                                >
                                    <div className='flex items-center gap-[20px]'>
                                        <img className='w-[40px] h-[40px]' src={catalog.image} alt={catalog.name} />
                                        <h2 className='font-[400] text-[16px]'>{catalog.name}</h2>
                                    </div>
                                    {isExpanded ? (
                                        <RxDividerHorizontal className='text-[#000000a1]' />
                                    ) : (
                                        <FaPlus className='text-[#000000a1]' />
                                    )}
                                </div>
                                {isExpanded && (
                                    <div className='overflow-hidden transition-all duration-300 ease-in-out mt-[10px]'>
                                        <div className='flex flex-col'>
                                            {catalog.child && catalog.child.map((childern) => (
                                                <div
                                                    key={childern.id}
                                                    className='p-[10px] 
                                                    text-[14px] font-[400]
                                                    hover:text-red-600 hover:text-[15px] transition-all duration-300 ease-in-out hover:font-[600] ml-[20px] h-[30px] mt-[10px]'
                                                >
                                                    {childern.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Catalogmenu;


// https://admin.ht-med.uz/api/v1/product-list/?limit=200&search=&parent=&categories__slug=

// https://admin.ht-med.uz/api/v1/product-list/?limit=9&search=&parent=&categories__slug=  1

// 2 https://admin.ht-med.uz/api/v1/product-list/?limit=9&search=&parent=ultratovush-diagnostikasi&categories__slug=

// 3  https://admin.ht-med.uz/api/v1/product-list/?limit=9&search=&parent=operatsionnye-oborudovanie&categories__slug=

// 4  