import Catalogmenu from '@/pages/catalogpages/catalogmenu/catalogmenu';
import React from 'react';
import Radeyalog1 from '../../pages/catalogpages/radeeolog/radeyalog';
import Catalogfooter from '@/pages/catalogpages/catalogfooter/catalogfooter';


const Page = () => {
    return (
        <div className='w-[1200px] mx-[auto] my-0'>
            <h1 className='font-[600] text-[28px] leading-[42px]'>
                Категории товаров
            </h1>

            <div>
                <div className='flex'>
                    <Catalogmenu />
                    <Radeyalog1 />
                </div>
                <Catalogfooter />   
            </div>

        </div>
    );
}

export default Page;
