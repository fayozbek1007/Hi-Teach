import React from 'react';

const Button = ({ children }) => {
    return (
        <div className='font-[500] text-[18px] py-[10px] rounded-[108px] text-[white] w-[182px] h-[50px] text-center bg-[#0B51BE]'>
            {children}
        </div>
    );
}

export default Button;
