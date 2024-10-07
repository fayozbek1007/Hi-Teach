import { benifst } from '@/JS/kategories';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Benifits = () => {
    return (
        <div className="flex">
            {benifst.map((benif) => {
                return (
                    <div
                        key={benif.id}
                        className="w-[220px] h-[270px] flex flex-col items-center justify-center mx-auto rounded-[14px] bg-[#0000000e] border-[1px] border-transparent hover:border-[2.5px] hover:border-[#00000063] transition-all duration-3000"
                    >
                        <Link href={"/"}>
                            <Image src={benif.img} alt="" className="block mx-auto w-[100px] h-[90px]" width={100} height={100} />
                            <div className="mt-[20px] text-center">
                                <h3 className="font-[600] text-[18px] w-[180px]">
                                    {benif.name}
                                </h3>
                                <p className="mt-[8px] text-[15px] font-[400]">
                                    {benif.desription}
                                </p>
                            </div>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Benifits;
