import Medicalmenu from '@/pages/Medical/Medicalmenu/Medicalmenu';
import React from 'react';
import { FaAlignLeft } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

const Menu = () => {
    return (
        <div className='mt-[50px] w-[1200px] mx-[auto] my-0'>
            <div className='flex justify-between'>
                <div className='bg-[#003EA5] w-[137px] h-[52px] items-center flex gap-[5px] px-[20px] rounded-[108px]'>
                    <FaAlignLeft className='text-[white] w-[30px] h-[25px]' />
                    <p className='font-[500] text-[18px] text-[white]'>Katalog</p>
                </div>
                <div className='flex'>
                    <input placeholder='Search' className='pl-[30px] focus:outline-none w-[940px] h-[51px] border-[1.5px] border-[#00000049] mr-[-45px] rounded-[108px] text-gray-400' type="text" />
                    <div className='z-[2]'>
                        <p className='w-[110px] h-[52px] bg-[black] px-[36px] py-[9px] rounded-[108px]'><IoSearchOutline className='text-[white] w-[30px] h-[30px]' /></p>
                    </div>
                </div>
            </div>
            <div>
                <Medicalmenu />
            </div>
        </div>
    );
}

export default Menu;
