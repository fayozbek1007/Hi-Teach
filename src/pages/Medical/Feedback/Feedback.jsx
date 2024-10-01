import React, { useEffect, useState } from 'react';
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import Image from 'next/image';

const Feedback = () => {
    const [feedback, setFeedback] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchTema = async () => {
            try {
                const resp = await fetch('https://admin.ht-med.uz/api/v1/comment-list/');
                const data = await resp.json();
                setFeedback(data);
            } catch (error) {
                console.log("API'dan ma'lumot kelmadi", error);
            }
        };
        fetchTema();
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % feedback?.results?.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + feedback?.results?.length) % feedback?.results?.length);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 4000);
        return () => clearInterval(interval);
    }, [handleNext, feedback]); 

    return (
        <div className='flex flex-col items-center mt-[20px]'>
            {feedback?.results?.length > 0 ? (
                feedback.results.map((item, index) => {
                    const isActive = index === currentIndex;
                    return (
                        <div
                            key={index}
                            className={`w-[874px] transition-all duration-300 bg-[#00000009] ${isActive ? 'h-[276px] rounded-t-[60px]' : 'h-[100px]'} px-[60px] py-[20px] my-[10px] ${isActive ? 'opacity-100' : 'opacity-50'}`}
                            style={{ display: isActive ? 'block' : 'none' }}
                        >
                            <div className='flex gap-[30px] items-center'>
                                <Image className='rounded-full' src={item.image} alt={item.full_name} width={100} height={100} />
                                <div>
                                    <p className='font-[500] text-[16px]'>{item.full_name}</p>
                                    <p className='font-[400] text-[14px]'>{item.position}</p>
                                </div>
                            </div>
                            <div>
                                <p className='mt-[5px] text-[16px] font-[400]'>{item.comment}</p>
                            </div>
                        </div>
                    );
                })
            ) : (
                <p>No categories found.</p>
            )}

            <div className='flex gap-[10px] mt-[20px]'>
                <button onClick={handlePrev} className='p-[10px] bg-gray-200 rounded-full'>
                    <FaAnglesLeft />
                </button>
                <button onClick={handleNext} className='p-[10px] bg-gray-200 rounded-full'>
                    <FaAnglesRight />
                </button>
            </div>
        </div>
    );
};

export default Feedback;
