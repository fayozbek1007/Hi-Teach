'use client';

import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Radeyalog1 = () => {
    const [radeol, setRadeol] = useState([]);

    useEffect(() => {
        axios.get('https://admin.ht-med.uz/api/v1/product-list/?limit=9&search=&parent=&categories__slug=')
            .then((response) => {
                console.log('API malumotlari:', response.data);
                setRadeol(response.data.results);
                console.log('Natijalar:', response.data.results);
            })
            .catch((error) => {
                console.error('API malumotlari yuq:', error);
            });
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
            {radeol.map((item) => (
                <Link key={item.id} href={''}>
                    <div className="bg-white p-4 rounded-lg shadow-md border-[1px] border-[#00000047] w-[240px] h-[350px] hover:border-[#00000095] hover:border-[2px] transition duration-400">
                        <Image width={700} height={40} className="object-cover rounded-t-lg" src={item.poster_url} alt={item.name} />
                        <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                        <p className="text-gray-600 mt-[20px]">{item.status}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Radeyalog1;
