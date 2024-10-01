'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { RiArrowDownWideLine } from "react-icons/ri";
import Image from 'next/image';


const Navbar = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('Eng');

    const handleLanguageChange = (language, flagUrl) => {
        setSelectedLanguage(language);
    };

    const handelClickcolor = (color) => {
        setchangechColor(color);
    };

    return (
        <div className='w-[100%] background-image'>
            <div className='w-[1200px] h-[145px] flex mx-[auto] my-0 justify-between items-center'>
                <div className='flex gap-[26px]'>
                    <Link href={"/"}><img className='w-[99px] h-[82px]' src="/navimg.svg" alt="" /></Link>
                    <h1 className='w-[136px] h-[84px] text-[28px] leading-[28px] font-[600] text-white'>
                        HI TECH ORIENT MEDICAL
                    </h1>
                </div>
                <div className='flex gap-[20px] items-center'>
                    <ul className="flex gap-[30px]">
                        <li className='text-[#FFFFFF] text-[16px] leading-[24px] font-[400] hover:text-gray-300'>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='text-[#FFFFFF] text-[16px] leading-[24px] font-[4000] hover:text-gray-300'>
                            <Link href="/catalog">Catalog</Link>
                        </li>
                        <li className="relative group text-[#FFFFFF] text-[16px] leading-[24px] font-[400] hover:text-gray-300">
                            <Link href="">About us</Link>
                            <ul className="absolute left-0 hidden group-hover:block shadow-lg px-[10px] py-[10px] z-[2] w-[160px] backgroun-li rounded-[15px]">
                                <li className="text-[white] py-[4px] rounded-[12px] hover:bg-[#8a8a8c] px-[10px] "><Link href="/company">Company</Link></li>
                                <li className="text-[white] py-[4px] rounded-[12px] hover:bg-[#8a8a8c] px-[10px] "><Link href="">Achievements</Link></li>
                                <li className="text-[white] py-[4px] rounded-[12px] hover:bg-[#8a8a8c] px-[10px] "><Link href="">Team</Link></li>
                                <li className="text-[white] py-[4px] rounded-[12px] hover:bg-[#8a8a8c] px-[10px] "><Link href="">Gallery</Link></li>
                            </ul>
                        </li>
                        <li className='text-[#FFFFFF] text-[16px] leading-[24px] font-[400] hover:text-gray-300'>
                            <Link href="/news">News</Link>
                        </li>
                        <li className='text-[#FFFFFF] text-[16px] leading-[24px] font-[400] hover:text-gray-300'>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li className='text-[#FFFFFF] text-[16px] leading-[24px] font-[400] hover:text-gray-300'>
                            <Link href="/contact">Contacts</Link>
                        </li>
                    </ul>
                    <ul className='w-[60px] z-[4]'>
                        <li className="relative group text-white font-[400] text-[16px]">
                            <div className='flex items-center gap-[10px] hover:text-gray-300'>
                                <Image src={selectedLanguage === 'Eng' ? "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png" : selectedLanguage === 'Uz' ? "https://tfi.uz/photos/1/photos/flag-1024x512.jpg" : "https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg"} alt="Selected Flag" className="w-[30px] h-[30px] rounded-full my-[5px]" />
                                <span>{selectedLanguage}</span>
                                <RiArrowDownWideLine />
                            </div>
                            <ul className="absolute left-0 mt-[1px] hidden group-hover:block bg-white shadow-lg p-2 w-[100px] backgroun-li rounded-[12px]">
                                <li className="py-1 flex items-center text-white font-[500] text-[16px]" onClick={() => handleLanguageChange('Uz', "https://tfi.uz/photos/1/photos/flag-1024x512.jpg")}>
                                    <Image src="https://tfi.uz/photos/1/photos/flag-1024x512.jpg" alt="Uz Flag" className="w-[30px] h-[30px] rounded-full my-[5px]" />
                                    <Link className="ml-[10px]" href="">Uz</Link>
                                </li>
                                <li className="py-1 flex items-center text-white font-[500] text-[16px]" onClick={() => handleLanguageChange('Ru', "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png")}>
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png" alt="Eng Flag" className="w-[30px] h-[30px] rounded-full my-[5px]" />
                                    <Link className="ml-[10px]" href="">Ru</Link>
                                </li>
                                <li className="py-1 flex items-center text-white font-[500] text-[16px]" onClick={() => handleLanguageChange('Eng', "https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg")}>
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Flag_of_the_United_States_%28Pantone%29.svg" alt="Ru Flag" className="w-[30px] h-[30px] rounded-full my-[5px]" />
                                    <Link className="ml-[10px]" href="">Eng</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
