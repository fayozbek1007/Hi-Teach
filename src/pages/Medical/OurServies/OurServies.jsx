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
                                width: '250px',
                                height: '302px',
                                backgroundRepeat: 'no-repeat',
                            }}
                            className='w-[285px] h-[283px] rounded-[40px] bg-[#00000039] px-[24px] py-[25px] text-white hover:border-[#0000006c] hover:border-[1px] hover:bg-white hover:text-black transition-[3s] duration-300 transform hover:scale-105 hover:rotate-2 hover:translate-y-[-2px]'
                        >
                            <h1 className='font-[600] text-[19px]'>
                                {item.name}
                            </h1>
                            <p className='mt-[10px]'>
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
