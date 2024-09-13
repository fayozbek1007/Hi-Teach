'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { citymenu } from './api/cety';

const CompanyMapCity = () => {
    const [mapcity, Setmapcity] = useState([]);
    const [selectedCity, setSelectedCity] = useState(citymenu[0]); 

    useEffect(() => {
        axios.get('https://admin.ht-med.uz/api/v1/statistic-list/?state=qoraqalpogiston')
            .then((response) => {
                console.log('To‘liq API javobi:', response.data);
                Setmapcity(response.data.results);
                console.log('Natijalar:', response.data.results);
            })
            .catch((error) => {
                console.error('APIdan maʼlumot olishda xatolik:', error);
            });
    }, []);

    const handleCityClick = (id, name) => {
        setSelectedCity({ id, name });
    };

    return (
        <div className='mx-[auto] my-0 w-[1200px] mt-[40px]'>
            <div>
                <h2 className='font-[600] text-[28px]'>
                    Карта всего оборудования, установленного нами на территории Республики Узбекистан
                </h2>
            </div>
            <div>
                <div className='mt-[40px] flex justify-between'>
                    {
                        mapcity.map((item) => (
                            <Link href={''} key={item.id}>
                                <div className='w-[215px] h-[240px] bg-[#00000008] mt-[20px] rounded-[20px] py-[20px] items-center'>
                                    <div className='mx-[auto] my-0 w-[80px]' >
                                        <img className='w-[80px] h-[80px]' src={item.image} alt={item.name} />
                                    </div>
                                    <div className='text-center'>
                                        <p className='font-[700] text-[50px]'>
                                            {item.id}
                                        </p>
                                        <h3 className='text-[15px] font-[400]'>
                                            {item.name}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='mt-[40px]'>
                    <img src="/respublik.svg" alt="" />
                </div>
                <div>
                    {
                        citymenu.map((item) => (
                            <ul key={item.id}>
                                <li
                                    className={`text-[16px] font-[500] w-[340px] bg-[#00000009] px-[20px] py-[8px] mt-[15px] rounded-[15px] items-center hover:bg-[#3232e6] hover:text-[white] transition duration-300 ${selectedCity?.id === item.id ? 'bg-[#3232e6] text-[white]' : ''}`}
                                    onClick={() => handleCityClick(item.id, item.name)} 
                                >
                                    {item.name}
                                </li>
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div className='mt-[-150px] z-[3]'>
                {selectedCity && (
                    <div className='w-[300px] h-[150px]'>
                        <p className='font-[600] text-[45px] ml-[20px]'>{selectedCity.id}</p>
                        <p className='font-[400] text-[16px] text-[#0000008f]'>Общее количество проданного оборудования {selectedCity.name}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CompanyMapCity;
