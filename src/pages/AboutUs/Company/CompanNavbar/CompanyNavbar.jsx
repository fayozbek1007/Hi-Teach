import React from 'react';

const CompanyNavbar = () => {
    return (
        <div>
            <div className='background-img-aboutus clear-startw-[100%] mt-[20px]'>
            </div>
            <div className='w-[1200px] mx-[auto] my-0'>
                <div>
                    <h1 className='text-[48px] font-[700] leading-[72px] text-[#2b2a29]'>
                        Наша компания является одной из самых надежных компаний в Узбекистане.
                    </h1>
                    <p className='text-[18px] font-[400] leading-[42px] text-[#8c8c8c] mb-[22px]'>
                        HI-TECH ORIENT MEDICAL works directly with manufacturers, which allows us to reduce prices and shorten delivery times.
                        All equipment we supply has registration certificates, certificates of conformity and sanitary and epidemiological conclusions.
                        All equipment comes with a 1 to 2 year warranty (depending on the equipment).
                        Based on your requirements, we are ready to equip any medical institution and private medical center from scratch.
                        Service engineers and managers undergo annual certification and training at manufacturers' factories.
                        Our company’s employees will help you choose equipment based on your wishes and requirements. By contacting us, you will receive high-quality, modern and affordable equipment.
                    </p>
                </div>
                <div className='flex justify-between items-center w-[1050px] mx-[auto] my-0 mt-[30px]'>
                    <div className='w-[319px] h-[193px] px-[25px] py-[20px] text-center bg-[#292929] text-[white] rounded-[40px]'>
                        <h1 className='font-[700] text-[70px] '>1.5</h1>
                        <p className='gont-[400] text-[16px]'>
                            Годовой оборот составляет миллион долларов США.
                        </p>
                    </div>
                    <div className='w-[319px] h-[193px] px-[25px] py-[20px] text-center bg-[#292929] text-[white] rounded-[40px]'>
                        <h1 className='font-[700] text-[70px] '>500</h1>
                        <p className='gont-[400] text-[16px]'>
                            Квадратные метры складских помещений
                        </p>
                    </div>
                    <div className='w-[319px] h-[193px] px-[25px] py-[20px] text-center bg-[#292929] text-[white] rounded-[40px]'>
                        <h1 className='font-[700] text-[70px] '>250</h1>
                        <p className='gont-[400] text-[16px]'>
                            Площадь выставочного зала, метр квадратный
                        </p>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default CompanyNavbar;
