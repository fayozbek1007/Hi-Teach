import React from 'react';
import { MdCloudDownload } from "react-icons/md";

const Catalogfooter = () => {
    return (
        <div className='background-image-catalog rounded-[20px] px-[20px] py-[20px] flex justify-between items-center'>
            <h1 className='font-[700] text-[32px] text-[white] ml-[20px]'>
                Загрузить полный каталог
            </h1>
            <button className='mr-[20px]'>
                <MdCloudDownload className='w-[50px] h-[50px] text-[white]' />
            </button>
        </div>
    );
}

export default Catalogfooter;
