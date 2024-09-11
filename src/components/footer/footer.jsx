import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='footer-img mt-[10px]'>
            <div className='w-[1200px] h-[585px] mx-[auto] my-0 pt-[68px] flex gap-[40px] justify-between'>
                <div>
                    <Link href={"/"}>
                        <div className='flex gap-[26px] w-[30%]'>
                            <img className='w-[99px] h-[82px]' src="/navimg.svg" alt="" />
                            <h1 className='w-[136px] h-[84px] text-[28px] leading-[28px] font-[600] text-white'>
                                HI TECH ORIENT MEDICAL
                            </h1>
                        </div>
                    </Link>
                    <p className='w-[269px] h-[48px] text-gray-400 mt-[30px]'>
                        The company's goal is to  provied thepopulation with high-quality medical equipment and create a healthy future.
                    </p>
                    <div className='mt-[80px] gap-[20px] flex items-center'>
                        <img className='w-[40px] h-[40px]' src="/call.svg" alt="call" />
                        <div>
                            <p className='text-[15px] text-gray-400'>Служба поддержки</p>
                            <p className='font-[600] text-[20px] text-gray-300'>+998 (97) 131 07 89</p>
                        </div>
                    </div>
                    <p className='font-[400] text-[15px] text-gray-400 mt-[200px]'>
                        Copyright © 2023 Tashkilot nomi | Barcha huquqlar himoyalangan
                    </p>
                </div>
                <div className='flex w-[58%] justify-between '>
                    <div className='w-[20%]'>
                        <h1 className='text-[20px] font-[500] leading-[30px] text-[#FFFFFF]'>
                            Футер меню
                        </h1>
                        <ul className='mt-[30px]'>
                            <li className='text-gray-300 font-[400] hover:text-gray-50 text-[16px]  mt-[10px]'>Главная</li>
                            <li className='text-gray-300 font-[400] hover:text-gray-50   text-[16px] mt-[10px]'>Каталог продукции</li>
                            <li className='text-gray-300 font-[400] hover:text-gray-50   text-[16px] mt-[10px]'>O нас</li>
                            <li className='text-gray-300 font-[400]  hover:text-gray-50  text-[16px] mt-[10px]'>Новости</li>
                            <li className='text-gray-300 font-[400] hover:text-gray-50   text-[16px] mt-[10px]'>Контакты</li>
                            <li className='text-gray-300 font-[400] hover:text-gray-50   text-[16px] mt-[10px]'>Сотрудничество</li>
                        </ul>
                    </div>
                    <div className='w-[20%]'>
                        <h1 className='text-[20px] font-[500] leading-[30px] text-[#FFFFFF]'>
                            Полезные ссылки
                        </h1>
                        <ul className='mt-[30px]'>
                            <li className='text-gray-300 font-[400] hover:text-gray-50 text-[16px] mt-[10px]'>Условия и положения</li>
                            <li className='text-gray-300 font-[400] hover:text-gray-50 text-[16px] mt-[10px]'>Оговорка</li>
                            <li className='text-gray-300 font-[400] hover:text-gray-50 text-[16px] mt-[10px]'>Поддержка</li>
                        </ul>
                    </div>
                    <div className='w-[20%]'>
                        <h1 className='text-[20px] font-[500] leading-[30px] text-[#FFFFFF]'>
                            Полезные новости
                        </h1>
                        <ul className='mt-[30px]'>
                            <li className='text-gray-300 font-[400] hover:text-gray-50  text-[16px] mt-[10px]'>Подпишитесь на наши социальные сети что быть в курсе всех новостей</li>
                        </ul>
                        <div className='mt-[50px]'>
                            <div className='overflow-hidden w-[87.68px] h-[87.68px] bg-[#4F9E2F] px-[33px] py-[27px] custom-clip mb-[-40px]'>
                                <img src="/facebook.svg" alt="" className='w-[30px] h-[30px]' />
                            </div>
                            <div className='flex w-[200px] ml-[-48px] gap-[10px]'>
                                <div className='overflow-hidden w-[87.68px] h-[87.68px] bg-[#4F9E2F] px-[33px] py-[27px] custom-clip'>
                                    <img src="/insta.svg" className='w-[30px] h-[30px]' alt="" />
                                </div>
                                <div className='overflow-hidden w-[87.68px] h-[87.68px] bg-[#4F9E2F] px-[33px] py-[27px] custom-clip'>
                                    <img src="/telegram.svg" alt="" className='w-[30px] h-[30px]' />
                                </div>
                            </div>
                            <div className='overflow-hidden w-[87.68px] h-[87.68px] bg-[#4F9E2F] px-[33px] py-[27px] custom-clip mt-[-40px]'>
                                <img src="/youtebe.svg" alt="" className='w-[30px] h-[30px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
