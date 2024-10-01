'use client'

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowAltCircleRight } from "react-icons/fa";
import Image from 'next/image';

const NewsPaga = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        axios.get('https://admin.ht-med.uz/api/v1/news-list/?page=1')
            .then((response) => {
                console.log('API response:', response.data);
                setNews(response.data.results);
            })
            .catch((error) => {
                console.error('Error fetching data from API:', error);
            });
    }, []);

    return (
        <div className='w-[100%] bg-[#E5E7EB] pb-[20px]'>
            <div className='w-[1200px] mx-[auto] my-0'>
                <div className='ml-[30px]'>
                    <h1 className='font-[600] text-[55px]'>News</h1>
                </div>
                <div>
                    {news.map((item) => (
                        <div key={item.id} className='bg-[#ffffff54]  my-4 rounded-[30px] p-[20px] shadow flex gap-[40px] w-[100%]'>
                            <Image className='w-[300px] h-[280px] rounded-[12px]' src={item.image_url} alt={item.title} />
                            <div>

                                <div>
                                    <h2 className='text-xl font-bold'>{item.slug}</h2>
                                    <p className='text-gray-600'>{item.description}</p>
                                </div>
                                <div className='flex mt-[20px] items-center justify-between'>
                                    <p>{item.created_at}</p>
                                    <div className='flex gap-[10px] items-center'>
                                        <FaArrowAltCircleRight />
                                        Red more
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewsPaga;
