'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa'; 
import Image from 'next/image';

const BlogPages = () => {
    const [blog, setBlog] = useState([]); 

    useEffect(() => {
        axios.get('https://admin.ht-med.uz/api/v1/blog-list/?page=1')
            .then((respblog) => {
                console.log('API info', respblog.data);
                setBlog(respblog.data.results); 
            })
            .catch((error) => {
                console.log('Error info ', error);
            });
    }, []);

    return (
        <div className='w-full bg-[#E5E7EB] pb-5'>
            <div className='w-[1200px] mx-auto'>
                <div className='ml-8'>
                    <h1 className='font-[600] text-[55px]'>Blog</h1>
                </div>
                <div>
                    {blog.map((bloges) => (
                        <div key={bloges.id} className='bg-[#ffffff54] my-4 rounded-[30px] p-5 shadow flex gap-10 w-full'>
                            <Image 
                                width={300} 
                                height={200}  
                                className='rounded-[12px]' 
                                src={bloges.image_url} 
                                alt={bloges.title} 
                            />
                            <div>
                                <div>
                                    <h2 className='text-xl font-bold'>{bloges.slug}</h2>
                                    <p className='text-gray-600'>{bloges.description}</p>
                                </div>
                                <div className='flex mt-5 items-center justify-between'>
                                    <p>{bloges.created_at}</p>
                                    <div className='flex gap-2 items-center'>
                                        <FaArrowAltCircleRight />
                                        Read more
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPages;
