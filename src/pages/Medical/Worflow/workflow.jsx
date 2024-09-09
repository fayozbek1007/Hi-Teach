import { workers } from '@/JS/work';
import React from 'react';

const Workflow = () => {
    return (
        <div className='grid grid-cols-4 mt-[20px] w-[1200px] items-center'>

            {
                workers.map((item,index) => {
                    return (
                        <div
                        key={index}
                            style={{
                                backgroundImage: `url(${item.bgimg})`,
                                width: '250px',
                                height: '302px',
                                backgroundRepeat: 'no-repeat',
                            }}
                            className='text-center pt-[25px] mt-[20px] w-[206px] h-[312px] px-[16px] pl-[-10px]'
                        >
                            <h1 className='font-[900] ml-[-10px] text-[64px]'>{item.num}</h1>
                            <p className='font-[400] w-[200px] text-[15px] px-[10px] text-[black]'>
                               {item.descrition}
                            </p>
                        </div>
                    )
                })
            }


        </div>
    );
}

export default Workflow;
