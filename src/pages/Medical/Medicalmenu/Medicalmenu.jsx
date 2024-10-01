import React from 'react';
import Button from '../../../components/button/button';
import { FaArrowAltCircleRight } from "react-icons/fa";
import Kategories from '../kategories/kategories';
import Benifits from '../benifits/benifits';
import Ourinter from '../Ourinter/Ourinter';
import Workflow from '../Worflow/workflow';
import OurServies from '../OurServies/OurServies';
import Feedback from '../Feedback/Feedback';
import Contactinfo from '../Contact/Contactinfo';
import Image from 'next/image';

const Medicalmenu = () => {
    return (
        <div>
            <div className='flex justify-between mt-[40px]'>
                <div className='w-[614px] mt-[30px]'>
                    <h1 className='text-[42px] font-[700] leading-[54.6px]'>
                        Medical equipment from the best manufacturers
                    </h1>
                    <p className='text-[14px] font-[400] leading-[24px] text-[#8C8C8C] mt-[20px]'>
                        ET400 is a multifunctional universal obstetric table with a mechanical-hydraulic drive, specially designed for safe positioning of the patient during gynecological and obstetric operations, examinations and childbirth in gynecological departments, women&apos;s consultations, maternity hospitals.
                    </p>
                    <div className="mt-[40px]">
                        <Button>
                            More
                        </Button>
                    </div>
                </div>
                <div>
                    <Image className='w-[701px] h-[412px]' src="/medical.svg" alt="Medical equipment" width={701} height={412} />
                </div>
            </div>
            <div className='mt-[30px] flex justify-between'>
                <div className='flex w-[591px] h-[295px] px-[25px] py-[15px] rounded-[40px] bg-[#87B7FF]'>
                    <div className='w-[312px] mt-[30px]'>
                        <h1 className='text-[24px] font-[700] leading-[31.2px]'>
                            Ultrasound device
                            VINNO E20
                        </h1>
                        <p className='text-[14px] font-[400] leading-[24px] text-[#8C8C8C] mt-[20px]'>
                            Accurate scanning of any track can be achieved with high-quality QuartZ. Multiple curved tomography trajectories are more suitable for the patient&apos;s dental arch.
                        </p>
                        <div className="mt-[20px] flex items-center gap-[10px]">
                            <FaArrowAltCircleRight className='w-[30px] h-[30px]' />
                            <p className='text-[15px] font-[400] text-[#8C8C8C]'>Go to</p>
                        </div>
                    </div>
                    <div>
                        <Image className='w-[217.47px] h-[295px]' src="/medik1.svg" alt="Ultrasound device" width={217.47} height={295} />
                    </div>
                </div>
                <div className='flex w-[591px] h-[295px] px-[25px] py-[15px] rounded-[40px] bg-[#BDFF00]'>
                    <div className='w-[312px] mt-[30px]'>
                        <h1 className='text-[24px] font-[700] leading-[31.2px]'>
                            SMART 3D-X. Dental 3D X-ray
                        </h1>
                        <p className='text-[14px] font-[400] leading-[24px] text-[#8C8C8C] mt-[20px]'>
                            Accurate scanning of any track can be achieved with high-quality QuartZ. Multiple curved tomography trajectories are more suitable for the patient&apos;s dental arch.
                        </p>
                        <div className="mt-[20px] flex items-center gap-[10px]">
                            <FaArrowAltCircleRight className='w-[30px] h-[30px]' />
                            <p className='text-[15px] font-[400] text-[#8C8C8C]'>Go to</p>
                        </div>
                    </div>
                    <div>
                        <Image className='w-[217.47px] h-[295px]' src="/medik2.svg" alt="Dental 3D X-ray" width={217.47} height={295} />
                    </div>
                </div>
            </div>
            <div>
                <h1 className='font-[700] text-[32px] leading-[48px] text-[#2B2A29]'>
                    Product categories
                </h1>
                <div>
                    <Kategories />
                </div>
            </div>
            <div>
                <div className='flex items-center gap-[15px]'>
                    <h1 className='font-[700] w-[680px] text-[32px] leading-[48px] text-[#2B2A29]'>
                        Benefits of working with us
                    </h1>
                    <p className='border-[1.5px] border-[#0000008f] w-[100%] h-[1px] mb-[-15px]'></p>
                </div>
                <div className='mt-[40px]'>
                    <Benifits />
                </div>
            </div>
            <div className='mt-[30px]'>
                <div className='flex items-center gap-[15px]'>
                    <h1 className='font-[700] text-[32px] leading-[48px] text-[#2B2A29]'>
                        Workflow
                    </h1>
                    <p className='border-[1.5px] border-[#0000008f] w-[100%] h-[1px] mb-[-15px]'></p>
                </div>
                <Workflow />
            </div>
            <div className='mt-[30px]'>
                <div className='flex items-center gap-[15px]'>
                    <h1 className='w-[220px] font-[700] text-[32px] leading-[48px] text-[#2B2A29]'>
                        Our Services
                    </h1>
                    <p className='border-[1.5px] border-[#0000008f] w-[100%] h-[1px] mb-[-15px]'></p>
                </div>
                <div className='py-[15px] px-[15px]'>
                    <OurServies />
                </div>
            </div>
            <div>
                <div className='flex items-center gap-[15px]'>
                    <h1 className='w-[600px] font-[700] text-[32px] leading-[48px] text-[#2B2A29]'>
                        Our International partners
                    </h1>
                    <p className='border-[1.5px] border-[#0000008f] w-[90%] h-[1px] mb-[-15px]'></p>
                </div>
                <div className='py-[15px] px-[15px]'>
                    <Ourinter />
                </div>
            </div>
            <div className='mt-[30px]'>
                <div className='flex items-center gap-[15px]'>
                    <h1 className='w-[400px] font-[700] text-[32px] leading-[48px] text-[#2B2A29]'>
                        Feedbacks of clients
                    </h1>
                    <p className='border-[1.5px] border-[#0000008f] w-[90%] h-[1px] mb-[-15px]'></p>
                </div>
                <div className='py-[15px] px-[15px]'>
                    <Feedback />
                </div>
            </div>
            <div className='mt-[30px]'>
                <div className='flex items-center gap-[15px]'>
                    <h1 className='w-[400px] font-[700] text-[32px] leading-[48px] text-[#2B2A29]'>
                        Contact information     
                    </h1>
                    <p className='border-[1.5px] border-[#0000008f] w-[90%] h-[1px] mb-[-15px]'></p>
                </div>
                <div className='py-[15px] px-[15px]'>
                    <Contactinfo />
                </div>
            </div>
        </div>
    );
}

export default Medicalmenu;
