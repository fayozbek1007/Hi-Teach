import React from 'react';
import { MdPlace } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import Button from '@/components/button/button';
import Image from 'next/image';

const Contactinfo = () => {
    return (
        <div>
            <div className='flex gap-[30px] mt-[20px]'>
                <div className='flex gap-[20px] w-[50%] bg-[#0000000a] p-[20px] rounded-[20px]'>
                    <div className='w-[70%]'>
                        <div className='flex gap-[10px] mt-[20px]'>
                            <MdPlace className='w-[30px]' />
                            <div>
                                <h1 className='font-[300] text-[20px] text-[#00000093]'>Address</h1>
                                <p className='font-[400] text-[16px]'>
                                    Tashkent city,Sergile district,
                                    MFY Kumarik, street pos.Gagarin, building26-2
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-[10px] mt-[20px]'>
                            <MdEmail className='w-[30px]' />
                            <div>
                                <h1 className='font-[300] text-[20px] text-[#00000093]'>Email</h1>
                                <p className='font-[500] text-[16px]'>hi_tech_oreint_medical@mail.ru</p>
                            </div>
                        </div>
                        <div className='flex gap-[10px] mt-[20px]'>
                            <IoIosPhonePortrait />
                            <div>
                                <h1 className='font-[300] text-[20px] text-[#00000093]'>Phone number</h1>
                                <p className='font-[700] text-[24px]' >+998 (99) 313 25 22</p>
                                <p className='font-[700] text-[24px]' >+998 (97) 131 07 89</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className='font-[600] text-[20px]'>
                                Contact us
                            </h1>
                            <div className='mt-[20px] flex gap-[20px] items-center'>
                                <Image className='w-[30px] h-[30px]' src="https://cdn.pixabay.com/photo/2020/10/17/13/21/telegram-5662082_1280.png" alt="Tech" />
                                <Image className='w-[40px] h-[40px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZgGo1dFTnwof_9D4nCtubqVgOVhLm8iBZmQ&s" alt="Hi" />
                            </div>
                        </div>
                        <div className='mt-[10px]'>
                            <h1 className='font-[600] text-[20px]'>We are in social networks</h1>
                            <div className='flex gap-[10px] mt-[15px]'>
                                <Image className='w-[40px] h-[40px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7Zzq8Nfnm9bZM7G3TMvK5H3_bBYOjEGuXg&s" alt="Hi" />
                                <Image className='w-[40px] h-[40px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC0ouaIaXYSPCpVxkRhdvCVAkECK4rOvh_YQ&s" alt="Tech" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' w-[50%] bg-[#0000000a] p-[20px] rounded-[20px]'>
                    <h1 className='text-[26px] font-[700] ml-[20px]'>APPLICATION</h1>
                    <div className='mt-[20px] ml-[10px]'>
                        <input type="text" placeholder='Name' className='text-[17px] font-[300] bg-[#00000001] px-[20px] outline-none w-[80%] border-b-[2px] border-b-[#00000052] pb-[5px]' />
                        <input type="text" placeholder='Number' className='text-[17px] font-[300] bg-[#00000001] px-[20px] outline-none w-[80%] mt-[25px]  border-b-[2px] border-b-[#00000052] pb-[5px]' />
                        <input type="text" placeholder='Text' className='text-[17px] font-[300] bg-[#00000001] px-[20px] outline-none w-[80%] mt-[25px]  border-b-[2px] border-b-[#00000052] pb-[5px]' />
                        <div className='mt-[25px]'>
                            <Button>Send</Button>
                        </div>
                    </div>
                </div>
            </div>
            <iframe
                className='w-full rounded-[20px] border-[1px] border-[#00000031] mt-[20px]'
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d749.9202283718834!2d69.255847!3d41.250508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b278f47926f%3A0x58c5ded3abff2147!2sHi-tech%20Orient%20Medical!5e0!3m2!1sen!2sus!4v1725888685920!5m2!1sen!2sus"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>

    );
}

export default Contactinfo;
