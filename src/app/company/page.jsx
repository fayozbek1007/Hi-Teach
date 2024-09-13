import CompanyNavbar from '@/pages/AboutUs/Company/CompanNavbar/CompanyNavbar';
import CompanyMapCity from '@/pages/AboutUs/Company/CompanyMapCity/CompanyMapCity';
import CompanyYear from '@/pages/AboutUs/Company/CompanyYear/CompanyYear';
import Benifits from '@/pages/Medical/benifits/benifits';
import React from 'react';

const Page = () => {
    return (
        <div>
            <div className='w-[1200px] mx-[auto] my-0 mt-[30px]'>
                <h1 className='font-[500] text-[32px]'>About Us</h1>
            </div>
            <div>
                <CompanyNavbar />
                <CompanyMapCity />
                <CompanyYear />
                <div className='w-[1200px] mx-[auto] my-0 mt-[50px]'>
                    <h1 className='font-[500] text-[34px] mb-[20px]'>
                        Преимущества работы с нами
                    </h1>
                    <Benifits />
                </div>
            </div>
        </div>
    );
}

export default Page;
