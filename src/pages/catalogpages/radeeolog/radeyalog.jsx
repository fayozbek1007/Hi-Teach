'use client';

import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

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
                <Link href={''}>
                    <div key={item.id} className="bg-white p-4 rounded-lg shadow-md border-[1px] border-[#00000047] w-[240px] h-[350px] hover:border-[#00000095] hover:border-[2px] transition duration-400">
                        <img className="w-full h-40 object-cover rounded-t-lg" src={item.poster_url} alt={item.name} />
                        <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                        <p className="text-gray-600 mt-[20px]">{item.status}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Radeyalog1;
