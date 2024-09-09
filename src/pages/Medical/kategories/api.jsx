// // src/components/FetchCategories.jsx
// import React, { useEffect, useState } from 'react';
// import Categories from './Categories';

// const FetchCategories = () => {
//     const [categories, setCategories] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchCategories = async () => {
//             try {
//                 const response = await fetch('https://admin.ht-med.uz/api/v1/category-image-list/');
//                 if (!response.ok) {
//                     throw new Error(`HTTP xatolik: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 console.log('Kelayotgan API ma\'lumotlari:', data);
                
//                 // Data bo'yicha qayta ishlash
//                 setCategories(data.results || []);
//             } catch (error) {
//                 console.error('APIdan maʼlumot olishda xatolik:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchCategories();
//     }, []);

//     return <Categories categories={categories} loading={loading} />;
// };

// export default FetchCategories;
