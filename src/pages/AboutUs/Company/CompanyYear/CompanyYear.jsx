'use client';

import React, { useState } from 'react';
import { yearmenu } from './api'; // yearmenu API dan kelishi kerak
import Image from 'next/image';

const CompanyYear = () => {
    const [selectedYear, setSelectedYear] = useState(yearmenu[0]);

    const handleYearClick = (year) => {
        setSelectedYear(year);
    };

    return (
        <div className='w-[1400px] h-[800px] rounded-[50px] mx-auto my-0 mt-[50px] bg-[#045698]'>
            <div className='w-[1200px] pt-[50px] mx-auto my-0'>
                <h1 className='text-white font-[600] text-[54px]'>Чего мы достигли?</h1>
            </div>
            <div className='flex gap-[30px] mt-[20px] w-[1200px] mx-auto my-0'>
                <div className='w-[18%] border-r-[2px] border-white'>
                    {yearmenu.map((item) => (
                        <button
                            key={item.id}
                            className={`text-[40px] font-[700] w-[200px] px-[20px] py-[2px] mt-[35px] rounded-[40px] transition duration-300 border-white border-1 ${selectedYear.id === item.id ? 'bg-[#045698] text-white' : 'bg-[#00000009] text-black'}`}
                            onClick={() => handleYearClick(item)}
                        >
                            {item.year}
                        </button>
                    ))}
                </div>

                <div className='w-[40%] h-[550px] p-[20px] bg-white rounded-[15px] shadow-md'>
                    {selectedYear && (
                        <>
                            <Image src={selectedYear.img} alt={selectedYear.year} width={440} height={250} className='object-cover rounded-[10px]' />
                            <p className='mt-[20px] text-[17px] text-[#333]'>{selectedYear.description}</p>
                        </>
                    )}
                </div>

                <div className='w-[28%] text-white'>
                    {selectedYear && (
                        <div className='w-[200px]'>
                            <p className='text-[230px] font-[700]'>{selectedYear.year}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CompanyYear;
