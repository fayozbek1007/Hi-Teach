import { ourserveis } from '@/JS/work';
import React from 'react';

const OurServies = () => {
    return (
        <div className='flex justify-between'>
            {
                ourserveis.map((item, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                backgroundImage: `url(${item.bgimgx})`,
                                width: '265px',
                                height: '263px',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                position: 'relative', 
                                overflow: 'hidden' 
                            }}
                            className='w-[265px] h-[263px] rounded-[40px] px-[24px] py-[25px] text-white transition-transform duration-300 transform hover:scale-105 hover:rotate-2 hover:translate-y-[-2px]'
                        >
                            <div className='absolute inset-0 bg-black opacity-40 rounded-[40px]' />

                            <h1 className='relative font-[600] text-[19px]'>
                                {item.name}
                            </h1>
                            <p className='relative text-[14px] mt-[10px]'>
                                {item.desc}
                            </p>
                        </div>


                    );
                })
            }
        </div>
    );
}

export default OurServies;
